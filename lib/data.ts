export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  github: string;
  demo: string;
  featured: boolean;
  gradient: string;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  type: "education" | "achievement";
  badge?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "VitalRead",
    subtitle: "AI Blood Report Analysis System",
    description:
      "An AI-powered full-stack blood report analysis platform providing clear, educational insights from laboratory reports using multimodal AI and OCR.",
    features: [
      "Multi-format PDF, JPG, PNG upload with OCR extraction",
      "Gemini multimodal AI for parameter identification and analysis",
      "Programmatic validation to verify reference ranges",
      "JWT-based authentication and protected routes",
      "Responsive React dashboard for result visualization",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Tesseract.js", "JWT"],
    github: "https://github.com/RashminiSachina",
    demo: "#",
    featured: true,
    gradient: "from-teal-400/20 to-cyan-400/20",
  },
  {
    id: 2,
    title: "Moto Care",
    subtitle: "Vehicle Service Management System",
    description:
      "A full-stack vehicle service management system supporting 4 distinct user roles with role-specific functionality, secure JWT authentication, and admin dashboards.",
    features: [
      "4 user roles with role-based authorization",
      "Admin dashboard for centralized management",
      "Booking and service management workflows",
      "RESTful API with Express.js backend",
      "Collaborative Git-based development",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/RashminiSachina",
    demo: "#",
    featured: false,
    gradient: "from-blue-400/20 to-indigo-400/20",
  },
  {
    id: 3,
    title: "Smart Student Support",
    subtitle: "Health & Career Support System",
    description:
      "A full-stack student support platform with 5 user roles, rule-based sentiment analysis, real-time chat, and integrated career guidance features.",
    features: [
      "5 user roles with protected routing",
      "Rule-based sentiment analysis for student wellbeing",
      "Real-time chat between students and support staff",
      "Career support and guidance module",
      "Unified full-stack MERN platform",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/RashminiSachina",
    demo: "#",
    featured: false,
    gradient: "from-purple-400/20 to-pink-400/20",
  },
  {
    id: 4,
    title: "Smart Campus Hub",
    subtitle: "Smart Campus Operations System",
    description:
      "A centralized campus operations platform with QR code-based booking verification, facility scheduling, and maintenance integration built on Spring Boot.",
    features: [
      "QR code generation for booking confirmation",
      "Facility reservation scheduling workflows",
      "Maintenance request integration",
      "Spring Boot backend with React frontend",
      "Scalable modular architecture",
    ],
    stack: ["Spring Boot", "React.js", "MongoDB"],
    github: "https://github.com/RashminiSachina",
    demo: "#",
    featured: false,
    gradient: "from-orange-400/20 to-amber-400/20",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 88 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Vite", level: 78 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 82 },
      { name: "Spring Boot", level: 68 },
      { name: "RESTful APIs", level: 85 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 72 },
      { name: "Mongoose", level: 78 },
      { name: "SQL", level: 72 },
    ],
  },
  {
    category: "AI & OCR",
    icon: "🤖",
    skills: [
      { name: "Gemini AI", level: 75 },
      { name: "Tesseract.js", level: 72 },
      { name: "PDF Parsing", level: 70 },
      { name: "API Integration", level: 80 },
    ],
  },
  {
    category: "Security",
    icon: "🔐",
    skills: [
      { name: "JWT Auth", level: 82 },
      { name: "RBAC", level: 78 },
      { name: "Protected Routes", level: 80 },
      { name: "Java (OOP)", level: 74 },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 80 },
      { name: "npm / npm", level: 82 },
    ],
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2024 – Present",
    title: "BSc (Hons) in Information Technology",
    institution: "SLIIT, Malabe, Sri Lanka",
    description:
      "Specializing in Information Technology with a CGPA of 3.2. Expected graduation in 2027. Coursework: OOP, Web Dev, DBMS, Data Structures, Software Engineering.",
    type: "education",
    badge: "CGPA 3.2",
  },
  {
    year: "2022",
    title: "G.C.E. Advanced Level – Physical Science",
    institution: "B/Dharmapala Maha Vidyalaya, Bandarawela",
    description:
      "Completed Advanced Level studies in the Physical Science stream.",
    type: "education",
    badge: "A/L",
  },
  {
    year: "2017",
    title: "G.C.E. Ordinary Level",
    institution: "B/Keppetipola Maha Vidyalaya",
    description:
      "Completed Ordinary Level studies showcasing strong academic performance.",
    type: "education",
    badge: "O/L",
  },
];
