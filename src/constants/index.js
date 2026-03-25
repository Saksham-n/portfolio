export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Enterprise GRC Simulation',
    desc: 'A full-cycle Governance, Risk, and Compliance (GRC) implementation simulating risk identification, security policies, and third-party vendor management.',
    subdesc: 'Applies industry frameworks (ISO 27001, NIST CSF, DPDP Act) utilizing a 5x5 Risk Matrix, Vendor Due Diligence, and Data Privacy Compliance mappings.',
    href: 'https://github.com/Saksham-n/GRC-Implementation-Simulation-ISO-27001-NIST-',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [],
  },
  {
    title: 'Security Compliance Auditor',
    desc: 'A lightweight Java-based security automation tool that audits server configuration files and checks them against predefined security baselines.',
    subdesc: 'Detects misconfigurations like unencrypted data and weak passwords. Generates a compliance score aligned with ISO 27001 Annex A controls.',
    href: 'https://github.com/Saksham-n/Security-Configuration-Compliance-Auditor-Java-',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [],
  },
  {
    title: 'AI-Powered Document Analyzer',
    desc: 'An asynchronous document processing backend using FastAPI and Celery. It integrates Google Gemini AI to extract structured insights including summaries, key topics, and sentiment from large documents.',
    subdesc: 'Built a clean modular architecture using Pydantic BaseSettings, implemented a Redis-based task queue, and developed REST APIs for document submission and result retrieval.',
    href: 'https://github.com/Saksham-n',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'FastAPI',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Redis',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Gemini',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Brain Tumor Detection System',
    desc: 'A medical image classification system developed to detect brain tumors from MRI scans using deep learning. Investigated five neural network architectures including CNN, DNN, LSTM, and Inception.',
    subdesc: 'Built a unified training and evaluation pipeline with consistent preprocessing, evaluated models using precision/recall/F1-score, and documented findings in a research-style comparative study.',
    href: 'https://github.com/Saksham-n',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'TensorFlow',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Deep Learning',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Python',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'CNN',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'VIT Bhopal',
    pos: 'B.Tech in Computer Science Engineering',
    duration: '2023 - 2027',
    title: "Currently pursuing a bachelor's degree with a CGPA of 8.61/10.0. Engaging in deep learning research projects and building scalable backend systems.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Class 12 (CBSE)',
    pos: 'High School',
    duration: '2023',
    title: "Completed high school with a score of 76.4%. Focused on mathematics and science, setting the foundation for engineering and software development.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Class 10 (ICSE)',
    pos: 'Secondary School',
    duration: '2021',
    title: "Completed secondary education with an excellent score of 93%. Developed early interest in programming and logical reasoning.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
