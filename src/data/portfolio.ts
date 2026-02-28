export const personalInfo = {
  name: "SANJAI L",
  role: "Software Engineering Student",
  subtitle: "Backend & Full-Stack Developer",
  location: "India",
  email: "sanjaioff@gmail.com",
  github: "https://github.com/Sanjai-Quest",
  linkedin: "https://www.linkedin.com/in/sanjai-l-508a112b2/",
  roles: ["Backend Developer", "API Architect", "Full-Stack Builder", "Hackathon Winner"],
};

export const aboutText = `I am a Software Engineering student with a strong interest in backend development, full-stack systems, and AI-enabled applications. I focus on building practical, API-driven solutions that are clean, scalable, and grounded in real-world use cases.

My learning approach is hands-on — I prefer designing systems, integrating services, and understanding how production systems behave rather than just theoretical concepts. I actively work on projects, internships, and hackathons that push me to solve real problems using modern backend technologies, web frameworks, and AI tools.`;

export const stats = [
  { label: "Hackathon Wins", value: 2 },
  { label: "Major Projects", value: 3 },
  { label: "Internship", value: 1 },
  { label: "Certifications", value: 5, suffix: "+" },
];

export const internship = {
  role: "AI Intern",
  company: "Retech",
  type: "Remote",
  duration: "Jan 2025 – Present",
  paid: false,
  bullets: [
    "Worked on AI-enabled backend systems, focusing on API integration and backend logic (not model training)",
    "Built and integrated API-driven services that consumed AI-generated outputs for application features",
    "Designed REST APIs with structured request/response flows and authentication handling",
    "Improved application performance by optimizing backend workflows, caching responses, and batching requests",
    "Collaborated with engineers to debug issues, test features, and document backend services",
    "Gained real exposure to how AI is integrated into production systems",
  ],
};

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  size: "large" | "medium" | "small";
}

export const projects: Project[] = [
  {
    title: "DevSecWatch",
    description: "Security Automation Platform",
    techStack: ["Java", "Spring Boot", "RabbitMQ", "FastAPI", "Docker", "React"],
    highlights: [
      "Asynchronous backend system to scan GitHub repos for OWASP vulnerability patterns",
      "RabbitMQ for background jobs — multiple scans run concurrently",
      "Real-time React dashboard using WebSockets to track scan progress",
      "AI-based remediation suggestions for human-readable guidance",
    ],
    size: "large",
  },
  {
    title: "PlanWizz",
    description: "Academic Scheduling Platform",
    techStack: ["React", "Node.js", "PostgreSQL", "Azure"],
    highlights: [
      "REST APIs for clash-free academic timetables based on constraints",
      "Handles 200+ concurrent requests during schedule generation",
      "Deployed on Azure with ~99.5% uptime with real user traffic",
    ],
    size: "medium",
  },
  {
    title: "AI Career Guidance",
    description: "Hackathon Project — Multi-role AI Platform",
    techStack: ["Python", "FastAPI", "PostgreSQL", "ML"],
    highlights: [
      "Multi-role platform supporting students and recruiters",
      "Skill assessments, adaptive career roadmaps, and job matching",
      "12,000+ web-scraped certificates for skill verification",
    ],
    size: "medium",
  },
];

export interface Hackathon {
  name: string;
  prize: string;
  icon: string;
  description: string;
}

export const hackathons: Hackathon[] = [
  {
    name: "EcoQuest Hackathon (2025)",
    prize: "1st Prize Winner",
    icon: "🥇",
    description: "Developed and presented an affordable smart handband solution with integrated emergency safety buttons; recognized for innovation and rapid first response capability.",
  },
  {
    name: "Drestein No Code Rush Hackathon (2025)",
    prize: "2nd Prize Winner",
    icon: "🏆",
    description: "Built an AI-powered career guidance platform; recognized for system design, idea clarity, and practical problem-solving",
  },
  {
    name: "VIT Chennai Hackathons (x2)",
    prize: "Participant",
    icon: "🚀",
    description: "Explored RAG and Blockchain under time constraints; rapid prototyping, teamwork, and technical presentations",
  },
];

export const certifications = [
  "Google IT Support Professional Certificate",
  "JPMorgan Chase Software Engineering Simulation (Forage)",
  "IBM Front-End Development with React",
  "IBM Introduction to Machine Learning",
  "Microsoft Azure Fundamentals (AZ-900)",
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { category: "Languages", skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { category: "Backend", skills: ["Spring Boot", "FastAPI", "Node.js", "REST APIs", "JWT", "RabbitMQ"] },
  { category: "Frontend", skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "WebSockets"] },
  { category: "Infra", skills: ["PostgreSQL", "Docker", "Azure", "Git", "CI/CD"] },
];

export const allSkills = [
  "Java", "Python", "JavaScript", "TypeScript", "SQL",
  "Spring Boot", "FastAPI", "Node.js", "REST APIs", "JWT",
  "RabbitMQ", "React", "Tailwind CSS", "Docker", "Azure",
  "Git", "PostgreSQL", "WebSockets", "CI/CD", "HTML5",
];

export const whyHireMe = `I bring a practical engineering mindset rather than just academic knowledge. I have hands-on experience building API-driven systems, asynchronous backend services, and AI-enabled features that are designed to work in real-world conditions.

Through my internship and projects, I've worked on production-style backends, handled integrations, optimized performance, and collaborated with technical teams to deliver usable features. I understand how systems behave beyond demos — from request flows and background processing to deployment and reliability.

I'm quick to learn, comfortable taking ownership of tasks, and adapt easily to new tools and requirements. Having participated in multiple hackathons and real projects, I can work under deadlines, break down problems, and deliver solutions that balance correctness, performance, and maintainability.

If you're looking for an intern who can contribute early, grow fast, and think like an engineer — I'm ready to step in and add value.`;

export const techColors: Record<string, string> = {
  Java: "191 100% 50%",
  Python: "210 100% 56%",
  JavaScript: "48 96% 53%",
  TypeScript: "211 60% 48%",
  SQL: "280 60% 55%",
  "Spring Boot": "120 60% 45%",
  FastAPI: "160 84% 39%",
  "Node.js": "120 50% 45%",
  "REST APIs": "191 100% 50%",
  JWT: "38 92% 50%",
  RabbitMQ: "25 100% 55%",
  React: "191 90% 55%",
  "Tailwind CSS": "191 100% 50%",
  Docker: "210 80% 50%",
  Azure: "210 100% 50%",
  Git: "15 80% 55%",
  PostgreSQL: "210 60% 48%",
  WebSockets: "263 84% 58%",
  "CI/CD": "160 84% 39%",
  HTML5: "15 80% 55%",
  CSS3: "210 80% 50%",
  ML: "263 84% 58%",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Contact", href: "#contact" },
];
