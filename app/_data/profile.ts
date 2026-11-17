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
  // Remove this line if the number isn't on WhatsApp — the button disappears with it.
  whatsappHref: "https://wa.me/94757444331",
  emailSubject: "Hello Kalana",
  linkedin: "https://www.linkedin.com/in/kalana-aluvihare-b234612a1",
  github: "https://github.com/kalana797",
  githubHandle: "kalana797",
  cvHref: "/Kalana_Aluvihare_Full_Stack_Software_Engineer_CV.pdf",
} as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "5+", label: "Years building production software" },
  { value: "25+", label: "Client & product projects" },
  { value: "LK · SG", label: "Clients in Sri Lanka & Singapore" },
  { value: "1st", label: "Class Honours, BSc Computer Science" },
] as const;

export const about = [
  "I’m a full-stack software engineer with 5+ years of professional experience building and maintaining web applications, enterprise systems, websites and mobile apps. My work spans backend development with PHP and Laravel, frontends in React, Next.js, Vue and TypeScript, and mobile apps in Flutter.",
  "I design REST APIs, work with relational databases, and integrate payment gateways, real-time messaging, third-party services and ERPs — Microsoft Navision, Business Central and Oracle NetSuite. I’ve contributed to projects for local and Singapore-based clients, working with cross-functional teams to deliver software that solves real business problems.",
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
  "E-commerce & online payments",
  "Manufacturing & ERP integration",
  "Learning platforms",
  "Field service & delivery",
  "Warehouse & inventory",
  "Public sector & non-profit",
  "Memberships & bookings",
  "Administration portals",
] as const;

export const skillGroups = [
  {
    title: "Backend",
    items: [
      "PHP",
      "Laravel 8 → 13",
      "Sanctum",
      "Fortify",
      "Socialite",
      "Queues & Horizon",
      "Spatie Permission",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Inertia.js",
      "Vue 3 + Vuex",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
      "PWA",
      "i18n",
    ],
  },
  {
    title: "Mobile",
    items: [
      "Flutter",
      "Dart",
      "Provider & get_it",
      "Offline-first (sqflite)",
      "Barcode / QR scanning",
      "GPS tracking & maps",
      "Firebase (FCM, Crashlytics)",
      "REST APIs for mobile",
    ],
  },
  {
    title: "Data & Architecture",
    items: [
      "MySQL",
      "Stored procedures",
      "SQLite",
      "Multi-tenancy",
      "Headless CMS",
      "Service / repository layers",
      "OpenAPI docs",
    ],
  },
  {
    title: "Payments",
    items: [
      "2C2P",
      "PayHere",
      "Koko (BNPL)",
      "MPGS",
      "Paycorp",
      "Sampath Bank IPG",
      "PAYable",
      "Bank-slip verification",
    ],
  },
  {
    title: "Real-time & Integrations",
    items: [
      "Laravel Reverb",
      "Pusher / Echo",
      "Jitsi Meet",
      "OpenAI API",
      "Google Maps API",
      "Mapbox / OneMap",
      "Leaflet",
      "SMS gateways",
      "reCAPTCHA",
    ],
  },
  {
    title: "Enterprise Systems",
    items: [
      "Microsoft Navision",
      "Dynamics 365 Business Central",
      "BC OData v4 API pages",
      "Oracle NetSuite (SuiteTalk REST)",
      "Scheduled ERP sync & reconciliation",
    ],
  },
  {
    title: "Testing, Tools & AI",
    items: [
      "Pest",
      "Playwright",
      "GitHub Actions",
      "Jenkins",
      "Git / GitHub",
      "Jira",
      "Scrum / Agile",
      "Claude AI",
    ],
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
    domains: [
      "B2B e-commerce",
      "Warehouse & inventory",
      "Delivery management",
      "Learning platforms",
      "Administration portals",
    ],
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

// ---------------------------------------------------------------------------
// Client & product work (the "Work" section)
// ---------------------------------------------------------------------------

export type WorkCategory =
  | "singapore"
  | "ecommerce"
  | "business"
  | "mobile"
  | "education"
  | "public"
  | "cms";

export const workCategories: { id: WorkCategory; label: string }[] = [
  { id: "singapore", label: "Singapore clients" },
  { id: "business", label: "Business systems & ERP" },
  { id: "ecommerce", label: "E-commerce & payments" },
  { id: "mobile", label: "Mobile apps & APIs" },
  { id: "education", label: "Learning platforms" },
  { id: "public", label: "Public sector & non-profit" },
  { id: "cms", label: "Websites & CMS" },
];

export type CaseStudy = {
  title: string;
  client: string;
  region?: string;
  period: string;
  status?: string;
  href?: string;
  parts: string[];
  summary: string;
  highlights: string[];
  tech: string[];
  categories: WorkCategory[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "DoDo — B2B Wholesale Ordering Portal",
    client: "DoDo · Food manufacturer",
    region: "Singapore",
    period: "2023 — 2026",
    parts: ["Vue 3 storefront (PWA)", "Laravel REST API", "Admin portal"],
    summary:
      "A wholesale ordering portal for a Singapore food brand’s trade customers — customer-specific pricing, delivery-date ordering and online payment, with orders flowing straight into Microsoft Navision. Delivered through 30+ staged UAT and live releases.",
    highlights: [
      "Two-way Navision sync: prices, stock, credit limits and invoices in; sales orders and cash receipts out",
      "Scheduled sync jobs and 2C2P payment reconciliation, with admin alerts for unpaid or unsynced orders",
      "Cut-off times, holidays and delivery days enforced, with live stock and credit checks at checkout",
      "Storefront in English, Chinese, Malay and Tamil, with outstanding invoices and product requests",
    ],
    tech: [
      "Vue 3",
      "Vuex",
      "vue-i18n",
      "Laravel 10",
      "Sanctum",
      "Navision",
      "2C2P",
      "Bootstrap 5",
      "Jenkins",
    ],
    categories: ["singapore", "ecommerce", "business"],
  },
  {
    title: "EduCore — Multi-tenant LMS",
    client: "Learning platform product",
    period: "2026",
    status: "In development",
    parts: ["Laravel + Inertia monolith", "React admin & learner apps", "PWA"],
    summary:
      "A multi-tenant learning management system for schools, universities and corporate training — courses, assessments, live classes and analytics in one platform, with a separate database per tenant.",
    highlights: [
      "Database-per-tenant isolation with SAML SSO, passkeys and two-factor auth",
      "Assessment engine with question banks, Moodle XML / GIFT / Aiken import and AI-assisted proctoring",
      "Live classes on Jitsi with breakout rooms; real-time updates over Laravel Reverb",
      "SCORM, H5P and LTI content, gradebooks, and PDF transcripts with QR verification",
      "OpenAI-powered quiz generation, plagiarism checks and dropout-risk insights",
    ],
    tech: [
      "Laravel 13",
      "React 19",
      "Inertia 3",
      "TypeScript",
      "Tailwind 4",
      "Multi-tenancy",
      "Reverb",
      "Horizon",
      "Playwright",
    ],
    categories: ["education"],
  },
  {
    title: "DoDo — Delivery Management & Driver App",
    client: "DoDo · Food manufacturer",
    region: "Singapore",
    period: "2023 — 2025",
    parts: ["Flutter driver app", "Laravel delivery portal", "Live tracking dashboard"],
    summary:
      "Last-mile delivery for van-sales and logistics routes: planners assign and sequence orders, drivers load and deliver from an offline-first Flutter app, and customers receive an e-invoice signed at the door.",
    highlights: [
      "Offline-first Flutter app with barcode/QR load checks and signature + photo proof of delivery",
      "Background GPS tracking, a live map dashboard and planned-vs-actual routes",
      "FCM push notifications and voice-message chat between dispatchers and drivers",
      "Weekday route planning with delivery, mileage and driver-performance reports",
      "Re-platformed onto Oracle NetSuite (SuiteTalk REST, OAuth 1.0) for a second deployment",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Provider",
      "sqflite",
      "Firebase FCM",
      "Laravel 8",
      "Mapbox",
      "OneMap",
      "NetSuite",
    ],
    categories: ["singapore", "business", "mobile"],
  },
  {
    title: "Four Star — Sales Orders on Business Central",
    client: "Four Star · Sales & promoter teams",
    region: "Singapore",
    period: "2022 — 2024",
    parts: ["Laravel sales portal", "Business Central API integration"],
    summary:
      "A portal where salespeople and promoters create customer sales orders directly in Microsoft Dynamics 365 Business Central — capturing deposits and customer e-signatures on the spot.",
    highlights: [
      "Business Central 17 integration over OData v4 API pages — master data in, sales orders out",
      "Customer e-signatures and attachments uploaded to BC; order PDFs and confirmation emails generated by BC",
      "Live item availability, customer-specific items, GST and deposit calculations",
      "Collect-payment flow that posts prepayment invoices, plus a 5-minute master-data sync",
    ],
    tech: [
      "Laravel 8",
      "Business Central 17",
      "OData v4",
      "Sanctum",
      "DataTables",
      "Bootstrap 5",
    ],
    categories: ["singapore", "business"],
  },
  {
    title: "Sense.lk — Headless E-commerce Rebuild",
    client: "Computer & IT retailer",
    period: "2024 — 2026",
    href: "https://sense.lk",
    parts: ["Next.js storefront", "Laravel REST API", "React admin"],
    summary:
      "A ground-up rebuild of a computer and IT store: a decoupled Next.js storefront on a Laravel API, replacing a legacy Laravel / WooCommerce platform — including migrating customers, orders and catalogue data from the old site.",
    highlights: [
      "Versioned REST API with faceted filters, ETag caching and typo-tolerant search",
      "PC Builder with compatibility checks, prebuilt bundles and PDF quotations",
      "Branch-level stock, store pickup and reservations, plus a nightly ERP stock sync",
      "PayHere, Koko BNPL, MPGS and Paycorp card gateways, and bank-slip verification",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Laravel 12",
      "Inertia 2",
      "Sanctum",
      "Tailwind 4",
      "PayHere",
    ],
    categories: ["ecommerce"],
  },
  {
    title: "ALFT — Production Tracking with Business Central",
    client: "Printing & lamination manufacturer",
    period: "2024 — 2026",
    parts: ["Laravel admin portal", "REST API for shop-floor app", "Scheduled BC sync"],
    summary:
      "Shop-floor production tracking integrated with Microsoft Dynamics 365 Business Central. Machine operators log material and ink use, output and machine status against BC production orders.",
    highlights: [
      "Two-way Business Central sync — production orders, routings and items in; consumption and output journals out",
      "Queue-backed retries for failed BC postings, re-posted automatically by a scheduled job",
      "Sanctum REST API for the operator app: shifts, machine status and output entry",
      "Expected vs actual material usage, machine stop reasons and performance dashboards",
    ],
    tech: [
      "Laravel 10",
      "Business Central API",
      "Sanctum",
      "Spatie Permission",
      "Chart.js",
      "Bootstrap 5",
      "MySQL",
    ],
    categories: ["business", "mobile"],
  },
  {
    title: "DoDo — Warehouse Picking Portal",
    client: "DoDo · Food manufacturer",
    region: "Singapore",
    period: "2022 — 2026",
    parts: ["Laravel admin portal", "REST API for the picking app"],
    summary:
      "Warehouse order picking for the same client: Navision sales orders are pulled in, grouped into batches and released as picking and packing lists, then handed off to the delivery system.",
    highlights: [
      "Navision sync of sales orders, items, customers and salespeople, with order release back to NAV",
      "Batch and template planning, with picking and packing reports built on MySQL stored procedures",
      "Mobile API for pickers: picked quantities, packet scanning and repacking",
      "Automatic hand-off of packed orders to the delivery portal; upgraded from Laravel 7 to 10",
    ],
    tech: ["Laravel 10", "Sanctum", "Navision", "MySQL stored procedures", "Leaflet", "Bootstrap"],
    categories: ["singapore", "business", "mobile"],
  },
  {
    title: "Core Mart — E-commerce & CMS Platform",
    client: "In-house product · Win Beauty Supply",
    period: "2026",
    href: "https://winbeautysupply.com",
    parts: ["Blade storefront", "React + TypeScript admin", "Built-in CMS"],
    summary:
      "A reusable e-commerce platform with a built-in headless-style CMS, deployed for a beauty-supply retailer — a fast, SEO-friendly storefront backed by a modern React admin.",
    highlights: [
      "Product variants, attributes, specification templates and bulk CSV import",
      "PayHere checkout, signed pay links, bank-slip verification and payment reminders",
      "Shipping zones and rates, low-stock alerts and OTP-verified guest order tracking",
      "CMS with custom content types, media library and drag-and-drop menu builder",
    ],
    tech: [
      "Laravel 12",
      "React 19",
      "Inertia 2",
      "TypeScript",
      "Tailwind 4",
      "Fortify 2FA",
      "PayHere",
      "Pest",
      "GitHub Actions",
    ],
    categories: ["ecommerce", "cms"],
  },
  {
    title: "Talk to WIN — Crisis Support Portal",
    client: "Women In Need · Non-profit",
    period: "2024 — 2025",
    parts: ["Public portal", "Counsellor dashboard"],
    summary:
      "A support portal for a Sri Lankan non-profit working against gender-based violence. People complete a short screening and connect with a counsellor by video, audio or live chat.",
    highlights: [
      "Embedded Jitsi video and audio rooms created for each accepted request",
      "Real-time client–counsellor chat over Pusher and Laravel Echo",
      "Admin-managed screening questionnaire in English, Sinhala and Tamil",
      "Counsellor management, session ratings and Excel reporting",
    ],
    tech: [
      "Laravel 10",
      "Pusher / Echo",
      "Jitsi Meet API",
      "Spatie Permission",
      "Bootstrap 5",
      "MySQL",
    ],
    categories: ["public"],
  },
  {
    title: "Coconut Cultivation Board — Website & Farmer Portal",
    client: "Government board",
    period: "2021 — 2026",
    href: "https://coconutsrilanka.lk",
    parts: ["Trilingual public website", "Farmer portal", "Admin CMS"],
    summary:
      "The public website and farmer self-service portal for Sri Lanka’s Coconut Cultivation Board — a long-running system maintained and extended since 2021.",
    highlights: [
      "Farmer registration and land registration with district → GN division lookups",
      "Online subsidy, loan-scheme and training applications routed to regional offices",
      "Holiday villa bookings with availability checks and SMS notifications",
      "Published coconut prices and Leaflet maps of nurseries and offices, in Sinhala, Tamil and English",
    ],
    tech: ["Laravel 8", "MySQL", "Leaflet", "SMS gateway", "DomPDF / mPDF", "Bootstrap", "jQuery"],
    categories: ["public", "cms"],
  },
  {
    title: "ASP Rubber — Field Service Job Dispatch",
    client: "Field service operations",
    period: "2022 — 2026",
    parts: ["Admin portal", "REST API for the Job Collect app"],
    summary:
      "An admin portal and mobile backend for dispatching field-service jobs. Admins schedule jobs and assign technicians; technicians accept and update jobs from the mobile app.",
    highlights: [
      "REST API powering the technician mobile app",
      "Firebase Cloud Messaging push notifications for new and updated jobs",
      "Multi-technician assignment with a job status workflow",
      "Invoice capture with image uploads and Excel reports by technician, status and date",
    ],
    tech: ["Laravel 8", "Sanctum", "Firebase FCM", "DataTables", "Excel export", "Bootstrap 5"],
    categories: ["business", "mobile"],
  },
  {
    title: "Moors — Club Membership & Reservations",
    client: "Sports club",
    period: "2021 — 2026",
    parts: ["Public website", "Member portal", "Admin panel"],
    summary:
      "Website and member portal for a sports club — memberships, subscriptions, court reservations and online payments in one system.",
    highlights: [
      "Member portal with subscriptions and payment history",
      "Court and facility reservations with an approval workflow",
      "PAYable card payments, bank-slip uploads and SMS notifications",
      "Events, office bearers and CMS-managed content",
    ],
    tech: ["Laravel 8", "PAYable IPG", "SMS gateway", "reCAPTCHA", "Bootstrap 5", "MySQL"],
    categories: ["business", "cms"],
  },
  {
    title: "Kavum Kokis — Online Store",
    client: "Sri Lankan food brand",
    period: "2023 — 2026",
    href: "https://kavumkokis.com",
    parts: ["Storefront", "Admin panel", "Page-builder CMS"],
    summary:
      "An online store for a Sri Lankan food brand, built on an in-house Laravel CMS and extended with full e-commerce.",
    highlights: [
      "Sampath Bank card payments with LKR and USD pricing",
      "Delivery zones, promotions, coupons and product reviews",
      "Inventory with history and minimum order limits",
      "Component-based page builder with role and permission history",
    ],
    tech: ["Laravel 10", "Sampath Bank IPG", "DomPDF", "Spatie Permission", "Bootstrap 5", "MySQL"],
    categories: ["ecommerce", "cms"],
  },
  {
    title: "Amro Foods — Spice Store & B2B Site",
    client: "Spice brand & exporter",
    period: "2023 — 2026",
    href: "https://amrofoods.com",
    parts: ["Storefront", "B2B website", "Admin CMS"],
    summary:
      "E-commerce and B2B website for a Sri Lankan spice brand — a retail shop alongside pages for export markets, bulk supply and private-label manufacturing.",
    highlights: [
      "Multi-currency pricing with the Sampath Bank payment gateway",
      "Promotions with scheduled deactivation, coupons and guest checkout",
      "Order PDFs and transactional emails",
      "Page-builder CMS with blog, services and inquiry forms",
    ],
    tech: ["Laravel 10", "Sampath Bank IPG", "DomPDF", "Vite", "Bootstrap 5", "MySQL"],
    categories: ["ecommerce", "cms"],
  },
  {
    title: "Sri Lanka–USA Business Council — Website & CMS",
    client: "Business council",
    period: "2026",
    parts: ["Public website", "React + TypeScript admin"],
    summary:
      "Website and admin CMS for the Sri Lanka–USA Business Council, including an online membership application and review workflow.",
    highlights: [
      "Inertia + React admin with rich-text editing and a media library",
      "Member directory, news and events, and photo galleries",
      "Online membership applications with an admin review queue",
    ],
    tech: ["Laravel 12", "React 19", "Inertia 2", "TypeScript", "Tailwind 4", "Alpine.js"],
    categories: ["cms"],
  },
  {
    title: "Lummera — Services Website & CMS",
    client: "Commercial cleaning company",
    period: "2026",
    status: "In progress",
    parts: ["Public website", "React + TypeScript admin"],
    summary:
      "A website and CMS for a commercial cleaning company, with a page for each sector served and quote requests flowing into an admin inbox.",
    highlights: [
      "Custom content types, menu builder and media library",
      "Quote and estimate forms with rate limiting",
      "Sitemap generated automatically from published services",
    ],
    tech: ["Laravel 12", "React 19", "Inertia 2", "TypeScript", "Tailwind 4", "Fortify"],
    categories: ["cms"],
  },
];

// ---------------------------------------------------------------------------
// Personal & academic projects
// ---------------------------------------------------------------------------

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
      "A self-hosted, Jira-style project management platform for software teams — from backlog and sprint planning through delivery, handover and reporting.",
    features: [
      "Kanban boards with WIP limits",
      "Backlog, sprints & story points",
      "Epics, subtasks & dependencies",
      "Comments with @mentions & time logs",
      "Retrospectives & Definition of Done",
      "Reports with CSV export",
      "Role-based access (Admin, PM, QA, Dev)",
      "Scheduled alerts & weekly reports",
    ],
    tech: [
      "Laravel 13",
      "React 19",
      "TypeScript",
      "Inertia.js",
      "Tailwind CSS",
      "MySQL",
      "Pest",
      "Playwright",
    ],
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

// Client work not already featured in the Work section.
export const professionalWork: PortfolioGroup[] = [
  {
    title: "Web Applications",
    company: "GUI Solutions Lanka",
    items: [
      { name: "eArchitect Studio" },
      { name: "VCE Physics LMS" },
      { name: "Policrome delivery admin portal" },
      { name: "Zero Plastic admin portal" },
    ],
  },
  {
    title: "Mobile Applications",
    company: "GUI Solutions Lanka",
    items: [
      { name: "DoDo Picki App" },
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
