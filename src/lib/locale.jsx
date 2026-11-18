import { createContext, useContext, useEffect, useState } from "react";

const LocaleContext = createContext(null);
const STORAGE_KEY = "cornelius-portfolio-language";

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

export function LocaleProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

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

  const toggleLanguage = () => setLanguage((current) => (current === "id" ? "en" : "id"));

  return <LocaleContext.Provider value={{ language, toggleLanguage }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const locale = useContext(LocaleContext);
  if (!locale) throw new Error("useLocale must be used inside LocaleProvider");
  return locale;
}
