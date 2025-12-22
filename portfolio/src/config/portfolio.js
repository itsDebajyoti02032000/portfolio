// Portfolio Configuration - Edit this file to update your portfolio content

export const personalInfo = {
  name: "Debajyoti Das",
  profession: "AI & Software Engineer",
  location: "India",
  totalExperience: "2+ Years",
  bio: "I'm a passionate AI & Software Engineer who loves building intelligent systems and robust backend solutions. My journey in tech started with curiosity about how machines can learn and create, leading me to dive deep into Generative AI, Large Language Models, and modern backend architectures. When I'm not coding, you'll find me exploring the latest AI research or contributing to open-source projects.",
  email: "debajyoti02032000@gmail.com",
  phone: "7001921285",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/itsDebajyoti02032000/",
  profileImage: "/assets/profile_dp.jpg",
};

export const projects = [
  {
    id: 1,
    title: "Clinical Trial Document Automation Platform (UsefulBI)",
    description: "Built a RAG-based GenAI system for clinical trial document generation (ICF & PLPS) using OpenSearch, LLM orchestration, and AWS SQS, supporting 100+ concurrent users and reducing document creation time by up to 90%.",
    image: "/assets/icf_plps.png",
    techStack: ["Python", "FastAPI", "AWS SQS", "Anthrophic Claude","Titan", "Opensearch","In Context Learning","RAG"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Report Generator (UsefulBI)",
    description: "Built a GenAI-powered report generation service using FastAPI that analyzes PostgreSQL databases to automatically generate business insights.Deployed on AWS EC2 with secure credential management and REST-based APIs, enabling on-demand, scalable data analysis",
    image: "/assets/Context_sql.png",
    techStack: ["FastAPI", "Docker", "PostgreSQL", "Generative AI", "EC2"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Multi-User AI Chatbot",
    description: " Developed an end-to-end LLM-powered Chatbot using LangGraph, LangChain, and Google Gemini with multi-agent orchestration.Implemented multi-threaded chat persistence to create, switch, and resume conversation threads without authentication overhead",
    image: "/assets/deb_gpt.png",
    techStack: ["Langgraph", "Langchain", "Gemini", "streamlit"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "YouTube Video Q&A Browser Extension",
    description: "Built a browser extension that enables real-time question answering over YouTube videos by opening an AI chat panel alongside the video.",
    image: "/assets/utube.png",
    techStack: ["Gemini", "Generative AI", "LangChain"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Webpage Q&A AI Chatbot Browser Extension",
    description: "Built a browser extension that enables contextual question answering for any webpage, launching an AI chat panel directly on the site.",
    image: "/assets/webpage.png",
    techStack: ["Gemini", "Generative AI", "LangChain"],
    link: "#",
    github: "#",
  },
  // {
  //   id: 6,
  //   title: "Real-time Data Processing System",
  //   description: "Streaming data processing system with real-time analytics and visualization dashboards.",
  //   image: "/assets/project-6.jpg",
  //   techStack: ["Python", "Kafka", "FastAPI", "React", "WebSockets"],
  //   link: "#",
  //   github: "#",
  // },
];

export const skills = {
  programming: [
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚙️" },
  ],
  backend: [
    { name: "FastAPI", icon: "⚡" },
  ],
  dataAI: [
    { name: "Machine Learning", icon: "🤖" },
    { name: "Deep Learning", icon: "🧠" },
    { name: "NLP", icon: "💬" },
    { name: "Generative AI", icon: "✨" },
  ],
  tools: [
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📦" },
    { name: "Cursor", icon: "✏️" },
    { name: "VS Code", icon: "💻" },
  ],
};

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    institution: "National Institute of Technology Kurukshetra",
    location: "Haryana, India",
    period: "Oct. 2021 – July 2024",
    cgpa: "CGPA 8.7",
  },
  {
    id: 2,
    degree: "Bachelor of Science (B.Sc.) in Mathematics (Honours)",
    institution: "Jadavpur University",
    location: "West Bengal, India",
    period: "July 2018 – Aug 2021",
    cgpa: null,
  },
];

export const experience = [
  {
    id: 1,
    position: "Software Engineer I",
    company: "UsefulBI Corporation",
    location: "Bangalore, India, Onsite",
    period: "February 2024 – Present",
  },
];

export const emailConfig = {
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key",
};

