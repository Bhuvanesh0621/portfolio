export interface ProjectDetail {
  number: string;
  name: string;
  category: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  demoVideoUrl?: string;
  metrics?: { label: string; value: string }[];
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  department?: string;
  board?: string;
  duration: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  course: string;
  level: string;
  score: string;
  description: string;
  certificateUrl?: string;
  rollNo?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: 'Bhuvanesh Kumar.M',
    shortName: 'BHUVANESH.',
    heroGreeting: "HEY, I'M",
    title: 'SOFTWARE DEVELOPER & AI ENTHUSIAST.',
    supportingDescription:
      'Building intelligent solutions and meaningful digital experiences through technology and creativity.',
    introParagraph:
      'I am a B.Tech Information Technology student at Sri Muthukumaran Institute of Technology with an interest in software development, programming and emerging technologies. I have a foundation in programming, database management and web technologies. Through academic and personal projects, I enjoy exploring technical concepts and building practical applications. I believe in continuous learning, problem-solving and developing solutions that create meaningful impact.',
    email: 'bhuvaneshkumar299@gmail.com',
    phone: '+91 9941135545',
    displayPhone: '+91 99411 35545',
    whatsapp: 'https://wa.me/919941135545?text=Hi%20Bhuvanesh%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!',
    github: 'https://github.com/Bhuvanesh0621',
    linkedin: 'https://www.linkedin.com/in/bhuvaneshkumar0621',
    resumeUrl: '/bhuvanesh-kumar-resume.pdf',
  },

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'GitHub', href: '#github' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ],

  services: [
    {
      number: '01',
      name: 'Web Application Development',
      description:
        'Building responsive and interactive web applications using modern web technologies, with a focus on functionality, usability and clean implementation.',
    },
    {
      number: '02',
      name: 'AI-Powered Applications',
      description:
        'Exploring artificial intelligence and integrating intelligent capabilities into practical applications to solve real-world problems.',
    },
    {
      number: '03',
      name: 'Database & Backend Development',
      description:
        'Working with database management, application logic and backend integration to develop structured and functional software solutions.',
    },
    {
      number: '04',
      name: 'UI/UX & Responsive Design',
      description:
        'Creating clean, user-friendly interfaces with modern layouts, intuitive navigation and responsive designs across devices.',
    },
    {
      number: '05',
      name: 'Software Development & Version Control',
      description:
        'Developing maintainable applications, managing project code using Git and GitHub, and exploring modern development and deployment workflows.',
    },
  ],

  skillCategories: [
    {
      title: 'Programming Languages',
      skills: ['C', 'Python', 'JavaScript'],
    },
    {
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'AI & Emerging Tech',
      skills: ['Computer Vision', 'Deep Learning', 'Machine Learning', 'Gemini AI API', 'LLM Integration'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Vite', 'Node.js', 'VS Code'],
    },
  ] as SkillCategory[],

  projects: [
    {
      number: '01',
      name: 'SmartPark.AI',
      category: 'AI-Based Smart Parking Management System',
      tagline: 'Enterprise Smart Parking with Edge Computing & AI Vision',
      overview:
        'A comprehensive full-stack intelligent parking management system designed to eliminate urban parking congestion, automate slot allocations, and streamline entry-exit flows.',
      problem:
        'Traditional parking systems rely on manual ticketing and static barriers, leading to severe gate bottlenecks, increased carbon emissions from circling vehicles, and inefficient space utilization.',
      solution:
        'Engineered an edge-deployed system featuring real-time interactive multi-level slot mapping, automated closest-slot assignments, AI conversational parking assistant, OCR license plate verification, and seamless digital payments.',
      features: [
        'Real-time multi-floor 3D slot allocation & status telemetry',
        'Gemini AI conversational parking assistant for voice & text queries',
        'Tesseract.js OCR automatic number plate recognition',
        'Integrated Razorpay digital payment processing & automated ticketing',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Express.js', 'Gemini AI', 'Tesseract.js', 'Razorpay', 'Cloudflare Pages'],
      githubUrl: 'https://github.com/Bhuvanesh0621/ai-smart-parking',
      liveUrl: 'https://smartpark-ai.pages.dev',
      metrics: [
        { label: 'Voice AI Latency', value: '< 850ms' },
        { label: 'OCR Accuracy', value: '92%+' },
        { label: 'Telemetry', value: 'Live 3-Floor Mapping' },
      ],
      images: {
        col1Top: '/projects/smartpark-slots.jpg',
        col1Bottom: '/projects/smartpark-booking.jpg',
        col2: '/projects/smartpark-dashboard.jpg',
      },
    },
    {
      number: '02',
      name: 'BillBrain',
      category: 'AI-Driven Payment & Subscription Intelligence',
      tagline: 'Automated Invoice & Subscription Tracking Ecosystem',
      overview:
        'An intelligent recurring payment and subscription intelligence platform designed to monitor utility bills, credit dues, EMIs, and auto-debits with proactive insights.',
      problem:
        'Consumers and small businesses lose money to hidden subscription renewals, fragmented payment calendars, and unexpected auto-debit overdraft charges across multiple services.',
      solution:
        'Built a centralized dashboard featuring AI document parsing for utility bills, automated recurring expense categorization, predictive cash flow calendars, and instant payment reminder alerts.',
      features: [
        'Automated bill and invoice data extraction via OCR & AI parsing',
        'Interactive financial analytics dashboard with timeline forecasting',
        'Multi-subscription categorization and ghost-spend elimination',
        'Automated reminder notifications for upcoming EMIs and renewals',
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Node.js', 'OCR', 'Chart.js', 'Vite'],
      githubUrl: 'https://github.com/Bhuvanesh0621/billbrain',
      liveUrl: 'https://github.com/Bhuvanesh0621/billbrain',
      metrics: [
        { label: 'Trend Forecasting', value: 'Predictive Models' },
        { label: 'Voice Logging', value: 'Tamil & Tanglish' },
        { label: 'Document AI', value: 'OCR Parsing' },
      ],
      images: {
        col1Top: '/projects/billbrain-predictions.jpg',
        col1Bottom: '/projects/billbrain-add-expense.jpg',
        col2: '/projects/billbrain-dashboard.jpg',
      },
    },
    {
      number: '03',
      name: 'EBPL Data Science Pipeline',
      category: 'Data Science & Predictive Analytics Engine',
      tagline: 'End-to-End Exploratory Analytics & Predictive Modeling',
      overview:
        'A modular data science and predictive analytics pipeline engineered in Python to clean, process, and statistically model multivariate datasets for actionable business intelligence.',
      problem:
        'Raw industrial and business datasets frequently contain non-standard formats, missing values, outliers, and complex collinear relationships that invalidate traditional heuristic predictions.',
      solution:
        'Constructed an automated ETL and machine learning pipeline incorporating feature engineering, correlation matrices, outlier filtration, and regression modeling to forecast core operational trends.',
      features: [
        'Automated exploratory data analysis (EDA) and distribution modeling',
        'Data cleaning, missing-value imputation, and z-score outlier removal',
        'Multi-variable statistical correlation and feature importance ranking',
        'Predictive regression modeling with cross-validated evaluation metrics',
      ],
      techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Jupyter'],
      githubUrl: 'https://github.com/Bhuvanesh0621/EBPL',
      liveUrl: 'https://github.com/Bhuvanesh0621/EBPL',
      metrics: [
        { label: 'Data Cleaning', value: 'Automated ETL' },
        { label: 'Modeling', value: 'Predictive Regression' },
        { label: 'Tooling', value: 'Python & Pandas' },
      ],
      images: {
        col1Top: '/projects/ebpl-pipeline.jpg',
        col1Bottom: '/projects/ebpl-tech.jpg',
        col2: '/projects/ebpl-dashboard.jpg',
      },
    },
  ] as ProjectDetail[],

  education: [
    {
      institution: 'Sri Muthukumaran Institute of Technology',
      degree: 'Bachelor of Technology (B.Tech)',
      department: 'Information Technology',
      duration: '2023 – 2027',
      details: 'Focusing on Software Engineering, Data Structures, Algorithms, Database Management, and Artificial Intelligence.',
    },
    {
      institution: 'Sivanthi Matriculation Higher Secondary School',
      degree: 'Higher Secondary Education',
      board: 'State Board',
      duration: '2023',
      details: 'Completed with strong academic foundations in Mathematics, Physics, Chemistry, and Biology disciplines.',
    },
  ] as EducationItem[],

  certifications: [
    {
      title: 'NPTEL Online Certification',
      issuer: 'Ministry of Education, Government of India & IIT Kharagpur',
      course: 'Programming in Java',
      level: 'ELITE',
      score: '64%',
      rollNo: 'NPTEL25CS110S353902820',
      certificateUrl: '/certificates/nptel-programming-in-java-certificate.pdf',
      description:
        'Successfully completed the comprehensive 12-week NPTEL examination on Object-Oriented Programming, Core Java syntax, multi-threading, data collections, and exception handling with an ELITE certification tier issued by IIT Kharagpur and Ministry of Education, Govt. of India.',
    },
  ] as CertificationItem[],
};
