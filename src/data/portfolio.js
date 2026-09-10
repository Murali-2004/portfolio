export const profile = {
  name: "Murali M",
  firstName: "Murali",
  role: "MERN Stack Developer",
  tagline:
    "Full-Stack Web Developer — React.js · Node.js · Express.js · MongoDB",
  location: "Ulundurpet, Tamil Nadu, India",
  phone: "+91 63747 89556",
  phoneHref: "+916374789556",
  email: "muralimurugan.m23@gmail.com",
  altEmail: "contact.griddezign@gmail.com",
  github: "https://github.com/Murali-2004",
  githubHandle: "Murali-2004",
  linkedin: "https://linkedin.com/in/murali-m-b250a03a9",
  linkedinHandle: "murali-m",
  resumeFile: "/Murali_M_MERN_Stack_Developer_Resume.pdf",
  resumeDownloadName: "Murali-M-MERN-Stack-Developer-Resume.pdf",
  // Web3Forms access key — safe to expose (client-side by design). Manage at https://web3forms.com
  web3formsKey: "a9ef6420-34bd-4592-97c7-50550e7e696c",
  available: true,
  summary:
    "Computer Science graduate and MERN Stack Developer with hands-on experience across 2 professional internships and 4 independently built full-stack web applications. Proficient in JavaScript (ES6+), React.js, Node.js, Express.js and MongoDB, with working knowledge of REST API design, JWT authentication, bcrypt password hashing, CORS and refresh-token security flows.",
  summaryTwo:
    "Comfortable across the full Software Development Life Cycle — requirement gathering, development, testing and deployment — with strong problem-solving ability, clean coding practices and a fast ramp-up on new technologies.",
};

// Drop the matching JPGs into /public/images — see public/images/README.md
export const photos = {
  formal: "/images/portrait-formal.jpg", // studio headshot, navy blazer
  casual: "/images/portrait-casual.jpg", // grey shirt, monument backdrop
  walking: "/images/photo-walking.jpg", // walking with camera
  river: "/images/photo-river.jpg", // leaning on the riverside railing
  standing: "/images/photo-standing.jpg", // standing by the railing with flag
};

export const stats = [
  { value: "4+", label: "Full-stack apps built" },
  { value: "2", label: "Developer internships" },
  { value: "7.99", label: "CGPA / 10" },
  { value: "10+", label: "Core technologies" },
];

export const highlights = [
  {
    title: "Full-Stack MERN",
    text: "End-to-end features from MongoDB schema design and Express REST APIs to responsive React interfaces.",
    icon: "layers",
  },
  {
    title: "Secure by default",
    text: "JWT auth, refresh-token rotation, bcrypt hashing and CORS configured the right way, not bolted on.",
    icon: "shield",
  },
  {
    title: "Clean, reusable UI",
    text: "Component-based architecture, React Hooks and pixel-perfect conversion of Figma designs.",
    icon: "sparkles",
  },
  {
    title: "SDLC fluent",
    text: "From requirement gathering through testing and deployment, following Agile practices.",
    icon: "workflow",
  },
];

export const skillGroups = [
  {
    name: "Languages",
    accent: "from-brand-purple to-brand-indigo",
    skills: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 72 },
      { name: "Java (Basic)", level: 45 },
    ],
  },
  {
    name: "Frontend Development",
    accent: "from-brand-indigo to-brand-blue",
    skills: [
      { name: "React.js", level: 88 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "Responsive Web Design", level: 85 },
      { name: "React Hooks & JSX", level: 86 },
      { name: "Reusable Components", level: 84 },
    ],
  },
  {
    name: "Backend Development",
    accent: "from-brand-blue to-brand-cyan",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 82 },
      { name: "REST API Design", level: 80 },
      { name: "CRUD Operations", level: 85 },
      { name: "API Integration", level: 80 },
    ],
  },
  {
    name: "Databases",
    accent: "from-brand-cyan to-brand-blue",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "Mongoose ODM", level: 78 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    name: "Authentication & Security",
    accent: "from-brand-pink to-brand-purple",
    skills: [
      { name: "JWT", level: 82 },
      { name: "Refresh Tokens", level: 76 },
      { name: "bcrypt", level: 80 },
      { name: "CORS", level: 78 },
      { name: "Secure Coding Practices", level: 75 },
    ],
  },
  {
    name: "Tools, Platforms & Practices",
    accent: "from-brand-purple to-brand-blue",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 82 },
      { name: "npm", level: 85 },
      { name: "SDLC & Agile", level: 78 },
      { name: "Debugging & Unit Testing", level: 76 },
    ],
  },
];

export const techBadges = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "REST APIs",
  "JWT",
  "bcrypt",
  "HTML5",
  "CSS3",
  "Python",
  "MySQL",
  "Git",
  "Postman",
];

export const experience = [
  {
    role: "Front-End Developer Intern",
    company: "Inetz Technologies",
    location: "Tamil Nadu, India",
    period: "Sep 2024 — Oct 2024",
    summary:
      "Built client-facing interfaces and translated design systems into production-ready React components.",
    points: [
      "Developed responsive UI components using HTML5, CSS3, JavaScript and React.js for client-facing web applications.",
      "Converted Figma design mockups into pixel-perfect, mobile-friendly interfaces in collaboration with the development team.",
      "Applied component-based architecture and React Hooks for efficient application state management.",
    ],
    stack: ["React.js", "HTML5", "CSS3", "JavaScript", "Figma"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "RE Tech Solutions",
    location: "Tamil Nadu, India",
    period: "May 2023 — Jun 2023",
    summary:
      "Shipped features across the stack and owned REST endpoints from design through integration.",
    points: [
      "Built frontend and backend features end-to-end using the MERN stack (React.js, Node.js, Express.js, MongoDB).",
      "Developed and tested REST API endpoints, then integrated them with the React.js frontend for dynamic data rendering.",
      "Contributed across the full SDLC, from requirement gathering through testing and deployment.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export const projects = [
  {
    slug: "job-board-app",
    title: "Job Board Application",
    type: "MERN Stack",
    tagline:
      "A full-stack job portal with posting, advanced filtering and resume uploads.",
    year: "2026",
    visual: "jobs",
    accent: "from-brand-purple via-brand-indigo to-brand-blue",
    repo: "https://github.com/Murali-2004/job-board-app",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "A job marketplace where recruiters post openings and candidates search, filter and apply. The backend exposes a clean REST API for job CRUD and protects recruiter-only routes with JWT authentication.",
    features: [
      "Job posting workflow with create, edit and delete for recruiters",
      "Advanced multi-field filtering across role, location and type",
      "Resume upload and storage tied to each application",
      "REST API endpoints for all job CRUD operations",
      "JWT-authenticated and role-guarded protected routes",
    ],
    highlights: [
      "Full CRUD REST API",
      "JWT-secured routes",
      "File upload handling",
    ],
  },
  {
    slug: "youtube-content-aggregator",
    title: "YouTube Content Aggregator",
    type: "MERN Stack",
    tagline:
      "Aggregates and ranks educational YouTube content with a custom quality score.",
    year: "2025",
    visual: "video",
    accent: "from-brand-pink via-brand-purple to-brand-indigo",
    repo: "https://github.com/Murali-2004/you",
    stack: ["React.js", "Node.js", "MongoDB", "YouTube API"],
    description:
      "A discovery platform that pulls educational videos from the YouTube Data API, scores them with a custom Content Quality Score algorithm and stores the results in MongoDB for fast, filterable browsing.",
    features: [
      "Custom Content Quality Score algorithm to rank videos by usefulness",
      "YouTube Data API integration for live content ingestion",
      "Persistent storage in MongoDB for fast repeat querying",
      "Dynamic content filtering across topics and score thresholds",
      "Clean React interface for browsing ranked results",
    ],
    highlights: [
      "Custom ranking algorithm",
      "Third-party API integration",
      "Data persistence layer",
    ],
  },
  {
    slug: "book-store",
    title: "Book Store Application",
    type: "React.js",
    tagline:
      "A fully responsive store with reusable components and centralised state.",
    year: "2025",
    visual: "books",
    accent: "from-brand-blue via-brand-cyan to-brand-indigo",
    repo: "https://github.com/Murali-2004/book-store",
    stack: [
      "React.js",
      "React Hooks",
      "State Management",
      "Component Architecture",
    ],
    description:
      "A front-end book store built to practise scalable component design. Book listings support full CRUD and the UI stays responsive from mobile to desktop, driven by a centralised state store.",
    features: [
      "Fully responsive layout across mobile, tablet and desktop",
      "Reusable component library for cards, forms and lists",
      "Centralised state management for the catalogue",
      "Full CRUD for book listings with an interactive UI",
      "User-friendly forms with inline validation feedback",
    ],
    highlights: [
      "Reusable component system",
      "Centralised state",
      "Responsive design",
    ],
  },
  {
    slug: "quiz-app",
    title: "Quiz Application",
    type: "React.js",
    tagline:
      "An interactive quiz with dynamic questions, scoring and instant feedback.",
    year: "2025",
    visual: "quiz",
    accent: "from-brand-indigo via-brand-purple to-brand-pink",
    repo: "https://github.com/Murali-2004/QuizApp",
    stack: [
      "React.js",
      "React Hooks",
      "Conditional Rendering",
      "State Management",
    ],
    description:
      "A timed quiz experience that renders questions dynamically, tracks the running score and gives immediate right/wrong feedback after each answer before showing a final results summary.",
    features: [
      "Dynamic question rendering from a data source",
      "Live score tracking through the quiz",
      "Instant per-question feedback on submission",
      "Conditional rendering for question, feedback and results states",
      "Clean Hooks-based state flow",
    ],
    highlights: [
      "Dynamic rendering",
      "Real-time scoring",
      "Hooks state machine",
    ],
  },
];

export const education = [
  {
    degree: "B.E., Computer Science & Engineering",
    school: "Sri Venkateswaraa College of Technology",
    period: "2021 — 2025",
    detail: "CGPA: 7.99 / 10",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    school: "Model Higher Secondary School",
    period: "Completed",
    detail: "HSC: 79%  ·  SSLC: 72.8%",
  },
];

export const certifications = [
  "Python Certification — Great Learning",
  "Internship Certificate — Inetz Technologies",
  "Internship Certificate — RE Tech Solutions",
  "International Conference Participation Certificate",
  "Microsoft Office Basics — Naan Mudhalvan",
];

export const softSkills = [
  "Quick Learner",
  "Problem-Solving",
  "Teamwork",
  "Communication",
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Tamil", level: "Native" },
];
