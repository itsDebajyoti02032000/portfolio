// Portfolio Configuration - Edit this file to update your portfolio content

export const personalInfo = {
  name: "Debajyoti Das",
  profession: "AI & Software Engineer",
  location: "Bangalore, India",
  totalExperience: "2+ Years",
  bio: "I'm a passionate AI & Software Engineer who loves building intelligent systems and robust backend solutions. My journey in tech started with curiosity about how machines can learn and create, leading me to dive deep into Generative AI, Large Language Models, and modern backend architectures. When I'm not coding, you'll find me exploring the latest AI research or contributing to open-source projects.",
  email: "debajyoti02032000@gmail.com",
  phone: "7001921285",
  linkedin: "https://www.linkedin.com/in/debajyoti-das-82b791217/",
  github: "https://github.com/itsDebajyoti02032000/",
  profileImage: "/assets/profile_pic.png",
};

export const projects = [
  {
    id: 1,
    title: "AgentVerse – Multi-Agent Pharmaceutical Intelligence Platform",
    description: "Developed and productionized a multi-agent GenAI platform for domain-specific pharmaceutical assistance across HIV, Pharmacovigilance, Medical Literature, and Clinical Guidelines. Designed a custom RAG architecture using Claude Sonnet 4.5, Titan v2 Embeddings, and OpenSearch Hybrid Search with evaluation and observability pipelines.",
    image: "/assets/agent_verse.png",
    techStack: ["Python", "Claude Sonnet 4.5", "Titan v2", "OpenSearch", "AWS Bedrock", "RDS", "Multi-Agent", "RAG"],
    link: "#",
    github: "#",
    category: "org",
  },
  {
    id: 2,
    title: "Clinical Trial Document Automation Platform",
    description: "Built a RAG-based GenAI system for clinical trial document generation (ICF & PLPS) using OpenSearch, LLM orchestration, and AWS SQS, supporting 100+ concurrent users and reducing document creation time by up to 90%.",
    image: "/assets/icf_plps.png",
    techStack: ["Python", "FastAPI", "AWS SQS", "Anthrophic Claude", "Titan", "Opensearch", "In Context Learning", "RAG"],
    link: "#",
    github: "#",
    category: "org",
  },
  {
    id: 3,
    title: "Report Generator",
    description: "Built a GenAI-powered report generation service using FastAPI that analyzes PostgreSQL databases to automatically generate business insights. Deployed on AWS EC2 with secure credential management and REST-based APIs, enabling on-demand, scalable data analysis.",
    image: "/assets/Context_sql.png",
    techStack: ["FastAPI", "Docker", "PostgreSQL", "Generative AI", "EC2"],
    link: "#",
    github: "#",
    category: "org",
  },
  {
    id: 4,
    title: "Conversion Rate Optimization",
    description: "Built a classification model to predict trial users likely to convert to paid subscriptions using behavioral engagement features. Enabled targeted reminders, engagement nudges, and offers to improve trial-to-paid conversion rates.",
    image: "/assets/conversion_Rate_opt.png",
    techStack: ["Python", "Scikit-learn", "Machine Learning", "Classification", "Data Science"],
    link: "#",
    github: "#",
    category: "org",
  },
  {
    id: 5,
    title: "RecallAI – Memory-Augmented Web-Aware AI Assistant",
    description: "Built a production-grade Agentic AI assistant featuring persistent multi-layer memory (semantic, episodic, short-term), MCP-based tool orchestration, and real-time web search via SearXNG. Powered by Amazon Bedrock with a BYOK architecture — users connect their own credentials for zero developer inference cost. Deployed serverlessly on Cloudflare Pages & Workers with D1/KV persistence, all within free-tier constraints.",
    image: "/assets/recallAI.png",
    techStack: ["React", "TypeScript", "Cloudflare Workers", "Amazon Bedrock", "MCP", "Mem0", "SearXNG", "Agentic AI"],
    link: "https://recallai-5ru.pages.dev/",
    github: "https://github.com/itsDebajyoti02032000/recallAI",
    category: "personal",
  },
  {
    id: 6,
    title: "Multi-User AI Chatbot",
    description: "Developed an end-to-end LLM-powered Chatbot using LangGraph, LangChain, and Google Gemini with multi-agent orchestration. Implemented multi-threaded chat persistence to create, switch, and resume conversation threads without authentication overhead.",
    image: "/assets/multi_agent chat.png",
    techStack: ["Langgraph", "Langchain", "Gemini", "Streamlit"],
    link: "#",
    github: "#",
    category: "personal",
  },
];

export const skills = {
  programming: [
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚙️" },
    { name: "SQL", icon: "🗃️" },
  ],
  frameworks: [
    { name: "FastAPI", icon: "⚡" },
    { name: "LangChain", icon: "🔗" },
    { name: "LangGraph", icon: "🕸️" },
    { name: "CrewAI", icon: "🤝" },
    { name: "OpenAI SDK Agents", icon: "🧩" },
    { name: "AutoGen", icon: "🔁" },
    { name: "Pydantic AI", icon: "✅" },
    { name: "Agno", icon: "🎯" },
    { name: "Semantic Kernel", icon: "🧬" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Scikit-learn", icon: "📊" },
  ],
  dataAI: [
    { name: "Generative AI", icon: "✨" },
    { name: "Machine Learning", icon: "🤖" },
    { name: "NLP", icon: "💬" },
    { name: "Agentic AI", icon: "🧠" },
    { name: "RAG", icon: "📚" },
    { name: "MLOps", icon: "🔄" },
  ],
  cloud: [
    { name: "AWS Lambda", icon: "☁️" },
    { name: "AWS Bedrock", icon: "🧠" },
    { name: "S3", icon: "🪣" },
    { name: "SQS", icon: "📨" },
    { name: "EC2", icon: "🖥️" },
    { name: "ECR", icon: "📦" },
    { name: "RDS", icon: "🗄️" },
    { name: "OpenSearch", icon: "🔍" },
    { name: "API Gateway", icon: "🚪" },
    { name: "Secrets Manager", icon: "🔐" },
    { name: "Parameter Store", icon: "⚙️" },
    { name: "K8s", icon: "🚀" },
    { name: "CloudWatch", icon: "📈" },
    { name: "ALB", icon: "⚖️" },
    { name: "Docker", icon: "🐳" },
  ],
  tools: [
    { name: "Claude Code", icon: "🤖" },
    { name: "Git", icon: "📦" },
    { name: "VS Code", icon: "💻" },
    { name: "Jupyter", icon: "📓" },
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
  {
    id: 3,
    degree: "WBCHSE, 12th",
    institution: "Fatepur Srinath Institution",
    location: "West Bengal, India",
    period: "2018",
    cgpa: "Percentage: 91.60%",
  },
];

export const experience = [
  {
    id: 1,
    company: "UsefulBI Corporation",
    location: "Bengaluru, Karnataka, India",
    totalDuration: "2 yrs 7 mos",
    roles: [
      {
        position: "Software Engineer II",
        type: "Full-time",
        period: "Jun 2026 – Present",
        duration: "3 mos",
        mode: "Hybrid",
      },
      {
        position: "Software Engineer",
        type: "Full-time",
        period: "Jul 2024 – Jun 2026",
        duration: "2 yrs",
        mode: "On-site",
      },
      {
        position: "Software Engineer Intern",
        type: "Internship",
        period: "Feb 2024 – Jul 2024",
        duration: "6 mos",
        mode: "On-site",
        domain: "Gen AI",
      },
    ],
  },
  {
    id: 2,
    company: "iQueue 365",
    location: "",
    totalDuration: "9 mos",
    roles: [
      {
        position: "Intern",
        type: "Internship",
        period: "Jun 2022 – Feb 2023",
        duration: "9 mos",
        mode: "",
        domain: "Android Development",
      },
    ],
  },
];

export const awards = [
  {
    id: 1,
    title: "Shining Star Award",
    organization: "UsefulBI Corporation",
    date: "Q3 2025",
    description: "Recognized for exceptional dedication and outstanding contributions. Commitment, professionalism, and positive attitude that made a lasting impact on the team.",
    image: "/assets/shining_star_award.jpg",
  },
  {
    id: 2,
    title: "Star of the Month",
    organization: "UsefulBI Corporation",
    date: "March 2025",
    description: "Certificate of Achievement for outstanding contributions to UsefulBI. Exceptional dedication and commitment that drove the company's growth and served as an inspiration to colleagues.",
    certificate: "/assets/certificate_of_achievement.pdf",
  },
];

export const emailConfig = {
  serviceId: "service_klitzvt",
  templateId: "template_8vw0eob",
  publicKey: "KAowjqSKunt-9iYIJ",
};

