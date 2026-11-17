// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Keshan Kalana Aluvihare",
  shortName: "Kalana Aluvihare",
  initials: "KA",
  role: "Full-Stack Software Engineer",
  location: "Sri Lanka",
  email: "kalana797@gmail.com",
  phone: "+94 757 444 331",
  phoneHref: "tel:+94757444331",
  linkedin: "https://www.linkedin.com/in/kalana-aluvihare-b234612a1",
  github: "https://github.com/kalana797",
  githubHandle: "kalana797",
  cvHref: "/Kalana_Aluvihare_Full_Stack_Software_Engineer_CV.pdf",
} as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "5+", label: "Years building production software" },
  { value: "18", label: "Client web, mobile & website projects" },
  { value: "LK · SG", label: "Clients in Sri Lanka & Singapore" },
  { value: "1st", label: "Class Honours, BSc Computer Science" },
] as const;

export const about = [
  "I’m a full-stack software engineer with 5+ years of professional experience building and maintaining web applications, enterprise systems, websites and mobile apps. My work spans backend development with PHP and Laravel, frontends in React, Vue and TypeScript, and mobile apps in Flutter.",
  "I design REST APIs, work with relational databases, and integrate third-party services, payment gateways and Microsoft Navision / Business Central. I’ve contributed to projects for local and Singapore-based clients, working with cross-functional teams to deliver software that solves real business problems.",
  "I also use AI-assisted development workflows with Claude AI — with a strong focus on reviewing, testing and validating generated code before it ships.",
] as const;

export const strengths = [
  "Problem Solving",
  "Troubleshooting & Debugging",
  "Team Collaboration",
  "Adaptability",
  "Continuous Learning",
] as const;

export const domains = [
  "B2B e-commerce",
  "Warehouse & inventory",
  "Delivery management",
  "Learning platforms",
  "Administration portals",
] as const;

export const skillGroups = [
  { title: "Backend", items: ["PHP", "Laravel", "Laravel Sanctum"] },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "jQuery",
      "Tailwind CSS",
    ],
  },
  { title: "Mobile", items: ["Flutter", "Dart"] },
  { title: "Databases", items: ["MySQL", "SQLite"] },
  {
    title: "APIs & Integrations",
    items: [
      "RESTful APIs",
      "Third-party APIs",
      "Payment gateways",
      "Google Maps API",
    ],
  },
  {
    title: "Enterprise Systems",
    items: ["Microsoft Navision", "Dynamics 365 Business Central"],
  },
  { title: "Tools & Practices", items: ["Git", "GitHub", "Jira", "Scrum / Agile"] },
  {
    title: "AI-Assisted Development",
    items: ["Claude AI", "Prompt-assisted coding", "Code review & validation"],
  },
] as const;

export type Job = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
  domains?: readonly string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    role: "Software Engineer",
    company: "GUI Solutions Lanka (Pvt) Ltd",
    period: "Aug 2021 — Present",
    current: true,
    highlights: [
      "Develop and maintain full-stack web applications and business systems using PHP, Laravel, MySQL and modern frontend technologies.",
      "Build frontend features and user interfaces with React.js, Vue.js, JavaScript and TypeScript.",
      "Design, develop and integrate RESTful APIs that power web and mobile application workflows.",
      "Integrate with Microsoft Navision and Business Central, as well as third-party services and payment gateway APIs.",
      "Contribute to Flutter mobile apps supporting delivery, sales, job collection and other business operations.",
      "Collaborate with teams on local and Singapore-based projects — troubleshooting, maintaining and improving existing applications.",
    ],
    domains,
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "React.js",
      "Vue.js",
      "TypeScript",
      "Flutter",
      "REST APIs",
      "Business Central",
    ],
  },
  {
    role: "Trainee Web Developer",
    company: "Univosoft Solutions (Pvt) Ltd",
    period: "Oct 2020 — Apr 2021",
    highlights: [
      "Contributed to the development and maintenance of local websites and web systems using Laravel, MySQL, jQuery, HTML and CSS.",
    ],
    stack: ["Laravel", "MySQL", "jQuery", "HTML", "CSS"],
  },
];

export type Project = {
  title: string;
  kind: string;
  status?: string;
  description: string;
  features?: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Project Management System",
    kind: "Personal Project",
    status: "In progress",
    description:
      "A Jira-style project management platform for planning and tracking work across teams, with project and task management at its core.",
    features: [
      "Kanban boards",
      "Role-based access control",
      "Comments & subtasks",
      "Time tracking",
      "Notifications",
      "Dashboards & reporting",
    ],
    tech: ["Laravel 13", "React 19", "TypeScript", "Inertia.js", "Tailwind CSS", "MySQL"],
  },
  {
    title: "AI-Powered Cryptocurrency Auto Trading System",
    kind: "Academic Project",
    description:
      "An AI-assisted crypto trading system with risk assessment, an administration web app and a Flutter mobile app. Integrates Binance APIs for trade execution with configurable stop-loss and take-profit controls.",
    features: [
      "ML-based risk assessment",
      "Binance trade execution",
      "Stop-loss / take-profit",
      "Admin web app",
      "Flutter mobile app",
    ],
    tech: ["Python", "Machine Learning", "Laravel", "Flutter", "Binance API"],
  },
  {
    title: "Online Motor Bike & Three-Wheel Rental System",
    kind: "HNDIT Final Project",
    description:
      "An online vehicle rental platform built as the final project for the Higher National Diploma in Information Technology.",
    tech: ["Laravel", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Library Management System",
    kind: "Diploma Final Project",
    description:
      "A desktop library management system built as the final project for the Diploma in Information Technology.",
    tech: ["C#", "MySQL"],
  },
];

export type PortfolioGroup = {
  title: string;
  company: string;
  items: { name: string; href?: string }[];
};

export const professionalWork: PortfolioGroup[] = [
  {
    title: "Web Applications",
    company: "GUI Solutions Lanka",
    items: [
      { name: "Coconut Sri Lanka" },
      { name: "eArchitect Studio" },
      { name: "VCE Physics LMS" },
      { name: "DoDo Picki system" },
      { name: "DoDo delivery system" },
      { name: "DoDo customer & admin portals" },
      { name: "Policrome delivery admin portal" },
      { name: "ASP Rubber admin portal" },
      { name: "Zero Plastic admin portal" },
      { name: "FourStar sales admin portal" },
    ],
  },
  {
    title: "Mobile Applications",
    company: "GUI Solutions Lanka",
    items: [
      { name: "DoDo Picki App" },
      { name: "DoDo Delivery App" },
      { name: "Policrome Delivery App" },
      { name: "ASP Rubber Job Collect App" },
      { name: "Moose Clothing Sales App" },
      { name: "Zero Plastic Mobile App" },
    ],
  },
  {
    title: "Websites",
    company: "Univosoft Solutions",
    items: [
      { name: "niphm.lk", href: "https://niphm.lk" },
      { name: "sobaaa.lk", href: "https://sobaaa.lk" },
    ],
  },
];

export const education = [
  {
    degree: "BSc (Hons) Computer Science (Software Engineering)",
    honours: "First Class Honours",
    institution: "University of Wolverhampton, UK / CINEC Campus (Pvt) Ltd",
    period: "2025 — 2026",
  },
  {
    degree: "Higher National Diploma in Information Technology (HNDIT)",
    institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    period: "2018 — 2020",
    note: "Final project: Online Motor Bike & Three-Wheel Rental System",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "ESOFT Metro Campus, Sri Lanka",
    period: "2017 — 2018",
    note: "Final project: Library Management System",
  },
] as const;
