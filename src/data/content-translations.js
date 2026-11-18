import { content } from "@/data/content";

const contentEnglish = {
  ...content,
  headline: "Information Systems & Software Engineering Student",
  interests: ["Machine Learning", "AI", "Web Development", "Data Analytics"],
  summary:
    "Final-year Information Systems student at Esa Unggul University, participating in a 2+2 program with Nanjing Xiaozhuang University in Software Engineering. Earned a 3.83 GPA and interested in Machine Learning, AI, Web Development, and Data Analytics. Experienced in completing academic projects independently, quick to learn, and seeking an internship to contribute and grow.",
  education: [
    { ...content.education[0], place: "Jakarta", degree: "B.S. in Information Systems (Faculty of Computer Science)", period: "Semesters 1–4", note: "Class of 2023" },
    { ...content.education[1], place: "Nanjing, China", degree: "Software Engineering", period: "Semesters 5–8", note: "Part of the 2+2 program" },
  ],
  gpa: { score: "3.83", scale: "/ 4.00", period: "Semesters 1–6" },
  projects: [
    {
      ...content.projects[0],
      title: "RBAC Admin System",
      kind: "Course project",
      description: "Built a simple admin system with authentication and role-based access control (RBAC).",
      role: "Solo project",
    },
    {
      ...content.projects[1],
      title: "Task Manager with 9 Design Patterns",
      kind: "Course project",
      description:
        "Built a Spring Boot task manager applying nine design patterns: Facade, Factory, Singleton, Decorator, Observer, State, Strategy, Command, and Builder.",
      role: "Solo project",
    },
    {
      ...content.projects[2],
      title: "IoT Water Level Monitoring (MQTT & AES)",
      kind: "Course project",
      description:
        "Designed a water-level monitoring system using two ESP32 boards (publisher–subscriber), an HC-SR04 ultrasonic sensor, AES-128 encryption (CBC mode), and MQTT via HiveMQ Cloud with TLS. Readings appear on an OLED display with LED indicators.",
      role: "Solo project",
      badge: "Wokwi simulation",
    },
  ],
  skills: {
    ...content.skills,
    soft: ["Independent", "Communication", "Time management", "Quick learner"],
    languages: [
      { name: "Indonesian", level: "Native" },
      { name: "English", level: "Beginner" },
      { name: "Mandarin", level: "Beginner" },
    ],
  },
};

export const contentByLanguage = { id: content, en: contentEnglish };
