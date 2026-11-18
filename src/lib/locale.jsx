import { createContext, useContext, useEffect, useRef, useState } from "react";
import glitchSound from "@/assets/Language Switch Glitch.mp3";
import { capturePixelMosaic, playPixelWave } from "@/lib/pixel-wave";

const LocaleContext = createContext(null);
const STORAGE_KEY = "cornelius-portfolio-language";
const SOUND_STORAGE_KEY = "cornelius-portfolio-sound";

export const messages = {
  id: {
    nav: {
      label: "Navigasi utama",
      about: "Tentang",
      education: "Pendidikan",
      projects: "Proyek",
      skills: "Keahlian",
      contact: "Kontak",
    },
    hero: {
      interests: "Ketertarikan:",
      portraitAlt: "Foto formal Cornelius Adrian Putra",
      touchHint: "SENTUH FOTO",
    },
    sections: {
      about: "Tentang",
      education: "Pendidikan",
      projects: "Proyek",
      skills: "Keahlian",
      contact: "Kontak",
    },
    education: { gpa: "IPK" },
    skills: { technical: "Teknis", tools: "Tools", soft: "Soft skills", languages: "Bahasa" },
    contact: { phone: "Telepon", profile: "Lihat profil" },
    footer: { backToTop: "Kembali ke atas ↑" },
    switchLanguage: "Ubah bahasa ke Inggris",
    languageCode: "EN",
    sound: { on: "SUARA ON", off: "SUARA OFF", enable: "Nyalakan suara latar", disable: "Matikan suara latar" },
    documentTitle: "Cornelius Adrian Putra – Portofolio Sistem Informasi dan Software Engineering",
    documentDescription: "Portofolio Cornelius Adrian Putra, mahasiswa Sistem Informasi dan Software Engineering yang mencari kesempatan magang.",
  },
  en: {
    nav: {
      label: "Main navigation",
      about: "About",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      interests: "Interests:",
      portraitAlt: "Formal portrait of Cornelius Adrian Putra",
      touchHint: "TOUCH PHOTO",
    },
    sections: {
      about: "About",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    education: { gpa: "GPA" },
    skills: { technical: "Technical", tools: "Tools", soft: "Soft skills", languages: "Languages" },
    contact: { phone: "Phone", profile: "View profile" },
    footer: { backToTop: "Back to top ↑" },
    switchLanguage: "Switch language to Indonesian",
    languageCode: "ID",
    sound: { on: "SOUND ON", off: "SOUND OFF", enable: "Turn background sound on", disable: "Turn background sound off" },
    documentTitle: "Cornelius Adrian Putra – Information Systems and Software Engineering Portfolio",
    documentDescription: "Cornelius Adrian Putra's portfolio. Information Systems and Software Engineering student seeking an internship.",
  },
};

function getInitialLanguage() {
  try {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return savedLanguage === "en" ? "en" : "id";
  } catch {
    return "id";
  }
}

function getInitialSoundPreference() {
  try {
    return window.localStorage.getItem(SOUND_STORAGE_KEY) !== "off";
  } catch {
    return true;
  }
}

export function LocaleProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(getInitialSoundPreference);
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const shouldStartAudioRef = useRef(isSoundEnabled);
  const languageRef = useRef(language);
  const transitionRef = useRef(false);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = messages[language].documentTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", messages[language].documentDescription);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", messages[language].documentTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", messages[language].documentDescription);
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Language switching still works when browser storage is unavailable.
    }
  }, [language]);

  useEffect(() => {
    const audio = new Audio(glitchSound);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";
    audioRef.current = audio;

    if (shouldStartAudioRef.current) audio.play().catch(() => setIsSoundEnabled(false));

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(SOUND_STORAGE_KEY, isSoundEnabled ? "on" : "off");
    } catch {
      // The sound toggle still works when browser storage is unavailable.
    }
  }, [isSoundEnabled]);

  const toggleBackgroundSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setIsSoundEnabled(true)).catch(() => setIsSoundEnabled(false));
    } else {
      audio.pause();
      setIsSoundEnabled(false);
    }
  };

  const toggleLanguage = async () => {
    if (transitionRef.current) return;

    const nextLanguage = languageRef.current === "id" ? "en" : "id";
    const canvas = canvasRef.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      languageRef.current = nextLanguage;
      setLanguage(nextLanguage);
      return;
    }

    transitionRef.current = true;
    setIsTransitioning(true);
    let languageApplied = false;
    try {
      const oldPage = await capturePixelMosaic(canvas);
      canvas.hidden = false;
      await playPixelWave(canvas, oldPage, "cover");

      languageRef.current = nextLanguage;
      setLanguage(nextLanguage);
      languageApplied = true;
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

      const newPage = await capturePixelMosaic(canvas);
      await playPixelWave(canvas, newPage, "reveal");
    } catch {
      if (!languageApplied) {
        languageRef.current = nextLanguage;
        setLanguage(nextLanguage);
      }
    } finally {
      const context = canvas.getContext("2d");
      context?.clearRect(0, 0, canvas.width, canvas.height);
      canvas.hidden = true;
      transitionRef.current = false;
      setIsTransitioning(false);
    }
  };

  return (
    <LocaleContext.Provider value={{ language, toggleLanguage, isTransitioning, isSoundEnabled, toggleBackgroundSound }}>
      {children}
      <canvas ref={canvasRef} aria-hidden="true" className="pixel-wave-canvas" data-html2canvas-ignore="true" hidden />
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const locale = useContext(LocaleContext);
  if (!locale) throw new Error("useLocale must be used inside LocaleProvider");
  return locale;
}
