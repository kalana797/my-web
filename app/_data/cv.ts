// Content for the printable CV at /cv (and the PDF generated from it).
// Contact details, education and strengths come from profile.ts.

export const cv = {
  headline: "Full-Stack Software Engineer",
  tagline: "Laravel · React · Next.js · Vue · Flutter · ERP Integrations",

  summary:
    "Full-stack software engineer with 5+ years of experience building and maintaining production web, mobile and enterprise systems for clients in Singapore and Sri Lanka. Works across Laravel back ends and REST APIs, React (Inertia), Next.js and Vue front ends, and Flutter mobile apps — and specialises in connecting them to ERPs (Microsoft Navision, Dynamics 365 Business Central, Oracle NetSuite) and payment gateways. Experienced in B2B e-commerce, warehouse picking and last-mile delivery, manufacturing, education and public-sector projects. Uses AI-assisted development with Claude AI, with a focus on reviewing, testing and validating generated code.",

  achievements: [
    "Developed two-way Microsoft Navision integrations for a Singapore food manufacturer’s B2B ordering, warehouse picking and delivery platforms — scheduled sync of prices, stock, credit limits, orders, invoices and cash receipts.",
    "Delivered a Dynamics 365 Business Central 17 sales-order portal over OData v4 API pages, letting a Singapore client’s sales and promoter teams create orders with deposits and customer e-signatures directly in BC.",
    "Contributed to an offline-first Flutter delivery app with barcode scanning, signature and photo proof of delivery, background GPS tracking and push notifications — later re-platformed onto Oracle NetSuite.",
    "Shipped 30+ staged UAT and live releases of a Vue 3 + Laravel B2B ordering portal with 2C2P payments and a four-language storefront (2024–2026).",
  ],

  skills: [
    {
      label: "Backend",
      value:
        "PHP, Laravel (8 → 13), REST APIs, Sanctum, Fortify, queues & Horizon, scheduled jobs, Reverb",
    },
    {
      label: "Frontend",
      value:
        "React, Next.js, Inertia.js, Vue 3 (Vuex, vue-i18n), TypeScript, JavaScript, Tailwind CSS, Bootstrap",
    },
    {
      label: "Mobile",
      value:
        "Flutter, Dart, Provider, offline-first storage (sqflite), barcode / QR scanning, GPS & maps, Firebase (FCM, Crashlytics)",
    },
    {
      label: "ERP & Enterprise",
      value:
        "Microsoft Navision, Dynamics 365 Business Central (OData v4), Oracle NetSuite (SuiteTalk REST)",
    },
    {
      label: "Payments",
      value: "2C2P, PayHere, Koko, MPGS, Paycorp, Sampath Bank IPG, PAYable, bank-slip verification",
    },
    {
      label: "Integrations",
      value:
        "Google Maps, Mapbox, OneMap, Leaflet, Jitsi Meet, Pusher / Echo, SMS gateways, OpenAI API, reCAPTCHA",
    },
    {
      label: "Data & Architecture",
      value:
        "MySQL (incl. stored procedures), SQLite, multi-tenancy, headless CMS, service / repository layers",
    },
    {
      label: "Testing & Tools",
      value:
        "Pest, Playwright, Git / GitHub, GitHub Actions, Jenkins, Jira, Scrum / Agile, Claude AI",
    },
  ],

  experience: [
    {
      role: "Software Engineer",
      company: "GUI Solutions Lanka (Pvt) Ltd",
      period: "August 2021 – Present",
      bullets: [
        "Develop and maintain full-stack web applications and business systems with PHP, Laravel (8 → 13) and MySQL, and front ends in React (Inertia), Next.js, Vue 3 and TypeScript.",
        "Design and build REST APIs consumed by web storefronts and Flutter mobile apps for delivery, warehouse picking, shop-floor production and field service.",
        "Integrate ERPs — Microsoft Navision, Dynamics 365 Business Central (OData v4) and Oracle NetSuite (SuiteTalk REST) — with scheduled master-data sync, sales-order posting, payment reconciliation and retry queues for failed postings.",
        "Integrate payment gateways (2C2P, PayHere, Koko, MPGS, Paycorp, Sampath Bank IPG, PAYable), push notifications, maps, real-time chat and video calling.",
        "Work with cross-functional teams through UAT, change requests and staged releases, and maintain long-running systems — including framework upgrades and a WooCommerce-to-headless Next.js migration.",
      ],
    },
    {
      role: "Trainee Web Developer",
      company: "Univosoft Solutions (Pvt) Ltd",
      period: "October 2020 – April 2021",
      bullets: [
        "Built and maintained websites, including niphm.lk and sobaaa.lk, with Laravel, MySQL, jQuery, HTML and CSS.",
      ],
    },
  ],

  professionalProjects: [
    {
      name: "DoDo B2B Wholesale Ordering Portal",
      context: "Singapore",
      tech: "Vue 3, Vuex, vue-i18n, Laravel 10, Navision, 2C2P",
      description:
        "Trade-customer ordering with customer-specific pricing, delivery-date and cut-off rules, and live stock and credit checks against Navision; four-language PWA storefront; scheduled sync and 2C2P payment reconciliation.",
    },
    {
      name: "DoDo Warehouse Picking & Delivery Platform",
      context: "Singapore",
      tech: "Laravel, Flutter, Navision, Oracle NetSuite, Firebase, Mapbox",
      description:
        "Navision order batching with picking and packing reports; delivery portal with route planning, live driver tracking and signed e-invoices; offline-first Flutter driver app; NetSuite version for a second deployment.",
    },
    {
      name: "Four Star Sales Order Portal",
      context: "Singapore",
      tech: "Laravel 8, Business Central 17, OData v4",
      description:
        "Sales and promoter teams create orders with deposits and e-signatures directly in Business Central, with BC-generated PDFs, email confirmations and prepayment invoice collection.",
    },
    {
      name: "ALFT Production Tracking",
      context: "Manufacturing",
      tech: "Laravel 10, Business Central, Sanctum",
      description:
        "Shop-floor tracking for a printing and lamination manufacturer: two-way BC sync of production orders and consumption / output journals with a queue-backed retry, plus a REST API for the operator app.",
    },
    {
      name: "EduCore Multi-tenant LMS",
      context: "Education",
      tech: "Laravel 13, React 19, Inertia 3, TypeScript, Reverb, Horizon",
      description:
        "Database-per-tenant learning platform with SAML SSO, assessments and proctoring, live classes on Jitsi, SCORM / H5P / LTI content and OpenAI-powered features.",
    },
    {
      name: "Sense.lk Headless E-commerce",
      context: "Retail",
      tech: "Next.js 16, React 19, Laravel 12, TypeScript",
      description:
        "Decoupled storefront on a versioned REST API with a PC builder, branch-level stock, five payment methods and data migration from the legacy platform.",
    },
    {
      name: "Core Mart E-commerce & CMS (Win Beauty Supply)",
      context: "Retail",
      tech: "Laravel 12, React 19, Inertia, TypeScript, PayHere",
      description:
        "Reusable e-commerce platform with a built-in CMS, product variants, shipping zones, PayHere and bank-slip payments, two-factor auth and CI-run tests.",
    },
  ],

  otherWork:
    "Talk to WIN crisis-support portal (Jitsi, real-time chat) · Coconut Cultivation Board website & farmer portal · ASP Rubber field-service dispatch (FCM) · Moors club membership & reservations (PAYable) · Kavum Kokis and Amro Foods online stores (Sampath Bank IPG) · Sri Lanka–USA Business Council website · Lummera · Zero Plastic, Policrome, Moose Clothing, eArchitect Studio and VCE Physics LMS.",

  personalProjects: [
    {
      name: "Project Management System",
      context: "Personal Project",
      tech: "Laravel 13, React 19, TypeScript, Inertia.js, Tailwind CSS, MySQL",
      description:
        "Jira-style platform with Kanban boards (WIP limits), backlog and sprints, epics and dependencies, retrospectives, reports with CSV export and role-based access.",
    },
    {
      name: "AI-Powered Cryptocurrency Auto Trading System",
      context: "Academic Project",
      tech: "Python, ML, Laravel, Flutter, Binance API",
      description:
        "AI-assisted trading with risk assessment, an administration web app, a Flutter mobile app and configurable stop-loss / take-profit controls.",
    },
    {
      name: "Online Motor Bike & Three-Wheel Rental System (HNDIT) · Library Management System (Diploma)",
      context: "Final Projects",
      tech: "Laravel, JavaScript · C#, MySQL",
    },
  ],
};
