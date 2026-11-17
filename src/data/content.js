export const content = {
  name: "Cornelius Adrian Putra",
  headline: "Mahasiswa Sistem Informasi & Software Engineering",
  interests: ["Machine Learning", "AI", "Web Development", "Data Analyst"],
  summary:
    "Mahasiswa tingkat akhir Sistem Informasi di Universitas Esa Unggul yang menjalani program 2+2 bersama Nanjing Xiaozhuang University (jurusan Software Engineering), dengan IPK 3,83 dan minat di Machine Learning, AI, Web Development, dan Data Analyst. Terbiasa mengerjakan proyek kuliah secara mandiri, cepat belajar hal baru, dan mencari kesempatan magang untuk berkontribusi sekaligus berkembang.",
  contact: {
    city: "Tangerang",
    email: "andrianandrian761@gmail.com",
    phone: null,
    linkedin: null,
    github: null,
  },
  education: [
    {
      school: "Universitas Esa Unggul",
      place: "Jakarta",
      degree: "S1 Sistem Informasi (Fakultas Ilmu Komputer)",
      period: "Semester 1–4",
      note: "Angkatan 2023",
    },
    {
      school: "Nanjing Xiaozhuang University",
      place: "Nanjing, Tiongkok",
      degree: "Software Engineering",
      period: "Semester 5–8",
      note: "Bagian dari program 2+2",
    },
  ],
  gpa: "3,83 / 4,00 (semester 1–6)",
  relevantCourses: ["Interaksi Manusia dan Komputer (HCI)"],
  projects: [
    {
      title: "Sistem Admin dengan Autentikasi RBAC",
      kind: "Proyek kuliah",
      year: 2025,
      description: "Membangun sistem admin sederhana dengan autentikasi dan pengaturan hak akses berbasis peran (Role-Based Access Control).",
      tools: ["Laravel", "MySQL"],
      role: "Mengerjakan sendiri",
      links: [],
      badge: null,
    },
    {
      title: "Task Manager dengan 9 Design Pattern",
      kind: "Proyek kuliah",
      year: 2025,
      description:
        "Membangun aplikasi task manager dengan Spring Boot yang menerapkan 9 design pattern: Facade, Factory, Singleton, Decorator, Observer, State, Strategy, Command, dan Builder.",
      tools: ["Java", "Spring Boot", "MySQL"],
      role: "Mengerjakan sendiri",
      links: [],
      badge: null,
    },
    {
      title: "Monitoring Ketinggian Air Berbasis IoT (MQTT & AES)",
      kind: "Proyek kuliah",
      year: 2025,
      description:
        "Merancang sistem monitoring ketinggian air dengan dua ESP32 (publisher–subscriber), sensor ultrasonik HC-SR04, enkripsi AES-128 (mode CBC), dan MQTT melalui HiveMQ Cloud dengan TLS. Hasil ditampilkan di layar OLED dan LED indikator.",
      tools: ["ESP32 (Arduino C++)", "HiveMQ Cloud", "Wokwi"],
      role: "Mengerjakan sendiri",
      links: [
        {
          label: "Demo Wokwi: Publisher",
          url: "https://wokwi.com/projects/436697444852109313",
        },
        {
          label: "Demo Wokwi: Subscriber",
          url: "https://wokwi.com/projects/436697488285185025",
        },
      ],
      badge: "Simulasi Wokwi",
    },
  ],
  skills: {
    technical: ["Java (Spring Boot)", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    tools: ["Figma", "VS Code", "Google Colab", "Microsoft Office"],
    soft: ["Mandiri", "Komunikasi", "Manajemen waktu", "Cepat belajar"],
    languages: [
      { name: "Indonesia", level: "Bahasa ibu" },
      { name: "Inggris", level: "Beginner" },
      { name: "Mandarin", level: "Beginner" },
    ],
  },
  cvFile: "cv/CV-Cornelius-Adrian-Putra.pdf",
};
