export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "lumen-books",
    title: "Lumen Books",
    category: "Business Software / Accounting",
    year: "2024",
    shortDescription: "A robust offline-first business accounting platform.",
    overview: "Comprehensive business management application for accounting, billing, and ledger management with cloud synchronization.",
    problem: "Small businesses struggle with disjointed, cloud-dependent billing tools that fail offline.",
    solution: "A unified, offline-first app for sales, purchases, and ledgers that syncs automatically when online.",
    technologies: ["React", "TypeScript", "Node.js", "SQL"],
    keyFeatures: [
      "Billing and Invoice Generation",
      "Sales and Purchase Tracking",
      "Customer Management and Ledger",
      "Payment Tracking",
      "Offline-first Functionality",
      "Cloud/Backend Synchronization"
    ],
    githubUrl: "https://github.com/shreydarshan",
    image: "/images/projects/lumen-books.png",
    featured: true,
  },
  {
    id: "anda-vyapar",
    title: "Anda Vyapar",
    category: "Business Software / Billing",
    year: "2023",
    shortDescription: "A practical full-stack billing and ledger management system.",
    overview: "A business management application tailored for high-volume order management, rapid invoice generation, and ledger tracking.",
    problem: "Traditional wholesale businesses need fast invoice generation and offline ledger management.",
    solution: "A high-performance billing system featuring thermal printing support and reliable local-first data management.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    keyFeatures: [
      "Order Management",
      "Rapid Invoice Generation",
      "Customer Ledger and Payment Tracking",
      "Thermal and A4 Printing Support",
      "Offline-first Workflow"
    ],
    githubUrl: "https://github.com/shreydarshan/Anda-Vyapar",
    image: "/images/projects/anda-vyapar.png",
    featured: true,
  },
  {
    id: "swarm-traffic",
    title: "Swarm Traffic Signal Simulation",
    category: "AI / ML / Simulation",
    year: "2023",
    shortDescription: "An AI-powered traffic simulation utilizing swarm intelligence.",
    overview: "A dynamic simulation that adjusts traffic signals based on real-time vehicle density to minimize congestion.",
    problem: "Static traffic light timers cause inefficiencies and dangerous delays for emergency vehicles.",
    solution: "An adaptive AI model using swarm intelligence to optimize signal timings and establish green waves.",
    technologies: ["Python", "Machine Learning", "Simulation Algorithms"],
    keyFeatures: [
      "Swarm Intelligence Implementation",
      "Adaptive Traffic Signal Control",
      "Traffic Simulation Environment",
      "Emergency Vehicle Priority",
      "Green-wave Concept Implementation"
    ],
    githubUrl: "https://github.com/shreydarshan/swarm-traffic-signal-simulation",
    image: "/images/projects/swarm-traffic.jpg",
    featured: true,
  }
];

export const skills = {
  programming: ["Python", "C", "SQL"],
  aiml: ["Machine Learning", "Data Analysis", "AI Applications", "NLP Concepts"],
  development: ["HTML", "CSS", "JavaScript", "React"],
  databasesTools: ["Git", "GitHub", "Supabase", "Oracle RDBMS", "VS Code", "Jupyter", "Google Colab"]
};

export const education = {
  institution: "Manipal University Jaipur",
  degree: "B.Tech Computer Science & Engineering",
  specialization: "Artificial Intelligence & Machine Learning",
  year: "Expected 2026"
};

export const certifications = [
  "Red Hat Certified",
  "NPTEL Certifications",
  "Oracle RDBMS",
  "Coursera"
];

export const socialLinks = {
  github: "https://github.com/shreydarshan",
  linkedin: "https://www.linkedin.com/in/shrey-darshan-69431732a",
  portfolio: "https://shreydarshan.github.io/portfolio/"
};

export const personalInfo = {
  name: "Shrey Darshan",
  role: "AI/ML Student · Software Developer · Builder",
  about: "I am a B.Tech Computer Science & Engineering student specializing in Artificial Intelligence & Machine Learning, interested in building practical software and intelligent systems. My work combines programming, data, machine learning and software development to solve real-world problems.",
  email: "shreydarshan1@gmail.com"
};
