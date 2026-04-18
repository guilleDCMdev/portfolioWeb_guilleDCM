// Datos del CV - Personaliza estos datos con tu información de LinkedIn
export const cvData = {
  personal: {
    name: "Guillermo de Carlos Muñoz",
    title: "Backend & Cloud Engineer | AWS, Data, Automatización e IA",
    email: "decarlosguille@gmail.com", // Actualiza con tu email
    phone: "+34 608 25 92 65",
    location: "Madrid, Comunidad de Madrid, España",
    linkedin:
      "https://www.linkedin.com/in/guillermo-de-carlos-mu%C3%B1oz-a68592270/",
    github: "https://github.com/guilleDCMdev",
    website: "https://tu-website.com",
    summary:
      "Soy desarrollador Backend con enfoque en arquitectura Cloud sobre AWS, ingeniería de datos y automatización de procesos. Diseño e implemento APIs y servicios escalables con JavaScript/TypeScript, Python y Java, integrando soluciones orientadas a rendimiento, mantenibilidad y observabilidad. Me especializo en construir pipelines y flujos de datos apoyados en servicios como AWS Lambda y S3, y en aplicar IA/ML para extraer valor de la información y optimizar procesos de negocio. Mi objetivo es combinar backend robusto, cloud y datos para entregar productos fiables, eficientes y listos para crecer.",
  },
  experience: [
    {
      company: "Inconcert",
      position: "Ingeniero de proyectos",
      location: "Madrid, Comunidad de Madrid, España",
      startDate: "Septiembre 2025",
      endDate: "Presente",
      description:
        "Desarrollo de proyectos como Ingeniero de Proyectos Junior. Trabajo con tecnologías modernas en un entorno híbrido.",
      achievements: [
        "Desarrollo de soluciones backend escalables",
        "Asterisk",
        "Telefonía",
        "Trabajo con API y Amazon Web Services (AWS)",
        "Colaboración en proyectos de desarrollo de software e IA",
      ],
    },
    {
      company: "WUNDER",
      position: "Programador Junior",
      location: "Logroño, La Rioja, España",
      startDate: "Junio 2024",
      endDate: "Agosto 2025",
      description:
        "Desarrollo de aplicaciones y APIs. Trabajo con tecnologías backend y frontend en jornada parcial.",
      achievements: [
        "Desarrollo de APIs y servicios backend",
        "Trabajo con API",
        "Desarrollo web backend con Git",
        "React",
      ],
    },
    {
      company: "WUNDER",
      position: "Programador Junior (Contrato de prácticas)",
      location: "Logroño, La Rioja, España",
      startDate: "Marzo 2024",
      endDate: "Junio 2024",
      description:
        "Prácticas profesionales enfocadas en desarrollo web backend.",
      achievements: [
        "Aprendizaje de desarrollo web backend",
        "Uso de Git para control de versiones",
        "Desarrollo de habilidades técnicas fundamentales",
      ],
    },
  ],
  education: [
    {
      institution: "IES Comercio",
      degree: "Curso de Especialización Inteligencia Artificial y Big Data",
      field: "Inteligencia Artificial y Big Data",
      startDate: "2024",
      endDate: "2025",
      description:
        "Especialización en áreas como aprendizaje automático, analítica de datos y toma de decisiones basadas en datos. Tecnologías: Scikit-learn, Neo4j y otras herramientas de Big Data.",
    },
    {
      institution: "IES Comercio",
      degree: "Desarrollo de Aplicaciones Multiplataforma",
      field: "Desarrollo de Aplicaciones",
      startDate: "2022",
      endDate: "2024",
      description:
        "Formación en desarrollo de aplicaciones multiplataforma. Tecnologías: Android Studio, .NET Core y otras herramientas de desarrollo.",
    },
  ],
  skills: [
    {
      category: "Lenguajes de Programación",
      items: [
        "JavaScript",
        "TypeScript",
        "PHP",
        "Python",
        "Java",
        "Node.js",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      category: "Frameworks y Librerías",
      items: ["React", "Flutter", ".NET Core", "Scikit-learn"],
    },
    {
      category: "Cloud y Big Data",
      items: [
        "Amazon Web Services (AWS)",
        "AWS S3",
        "AWS Lambda",
        "Neo4j",
        "Big Data",
      ],
    },
    {
      category: "Herramientas y Tecnologías",
      items: [
        "Git",
        "Linux",
        "API de Postman",
        "Android Studio",
        "Desarrollo de API",
        "Telefonía IP",
        "Asterisk",
      ],
    },
    {
      category: "Áreas de Especialización",
      items: [
        "Backend Development",
        "Inteligencia Artificial",
        "Machine Learning",
        "Análisis de Datos",
        "Desarrollo Multiplataforma",
      ],
    },
  ],
  projects: [
    {
      name: "lifeos",
      description: "Sistema personal de gestión financiera, hábitos e IA",
      technologies: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "n8n",
        "Ollama",
        "pgAdmin",
      ],
      github: "https://github.com/guilleDCMdev/lifeos",
      demo: "",
      image: "",
    },
    {
      name: "Motorcycle Accident Risk Analysis & Severity Prediction",
      description:
        "Análisis geoespacial y predicción de severidad de accidentes de tráfico usando Machine Learning sobre 500.000 registros reales de EE.UU.",
      technologies: [
        "Python",
        "Machine Learning",
        "Geospatial Analysis",
        "Data Visualization",
      ],
      github: "https://github.com/guilleDCMdev/motorcycle-accident-analysis",
      demo: "",
      image: "",
    },
    {
      name: "sky-map",
      description: "Mapa global de vuelos en tiempo real.",
      technologies: [
        "Python",
        "requests",
        "Apache Kafka",
        "Zookeeper",
        "ClickHouse",
        "MergeTree",
        "ReplacingMergeTree",
        "FastAPI",
        "WebSockets",
        "React",
        "Vite",
        "Globe.gl",
        "Docker Compose",
        "Kafdrop",
      ],
      github: "https://github.com/guilleDCMdev/sky-map/tree/main",
      demo: "",
      image: "",
    },
    {
      name: "polymarket-bot",
      description:
        "Bot para Polymarket, un mercado de predicciones descentralizado.",
      technologies: ["Python", "Polymarket", "API"],
      github: "https://github.com/guilleDCMdev/polymarket-bot",
      demo: "",
      image: "",
    },
    {
      name: "TFG MotoConnect",
      description:
        "MotoConnect es una aplicación móvil desarrollada en Flutter que tiene como objetivo unir a la comunidad motera a través de la organización de eventos, chats y rutas recomendadas según el tipo de moto de cada usuario.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "JavaScript",
        "Google Cloud",
        "API Maps",
        "JSON",
        "Node.js",
        "Express",
      ],
      github:
        "https://github.com/MotoConnect-guilleDCM/TFG-Final-GuillermoDeCarlosMu-oz",
      demo: "",
      image: "",
    },
    {
      name: "Pokemon Team Builder IA",
      description:
        "Pokemon Team Builder IA es una aplicación desarrollada en Python que tiene como objetivo ayudar a los usuarios a crear equipos de Pokémon utilizando inteligencia artificial.",
      technologies: ["Python", "AI", "Pandas", "Scikit-learn"],
      github: "https://github.com/guilleDCMdev/Pokemon-Team-Buil-IA",
      demo: "",
      image: "",
    },
    {
      name: "Progamacion de IA",
      description:
        "Diferentes proyectos y recursos de programación de IA realizados en el curso de especialización en IA y Big Data.",
      technologies: ["Python", "AI"],
      github: "https://github.com/guilleDCMdev/PIA",
      demo: "",
      image: "",
    },
    {
      name: "SparkTesting",
      description:
        "Práctica de testing de Spark realizada en el curso de especialización en IA y Big Data.",
      technologies: ["Python", "Spark"],
      github:
        "https://github.com/guilleDCMdev/practica_spark_guillermoDeCarlosMunoz",
      demo: "",
      image: "",
    },
    {
      name: "Api for Juniors",
      description: "Api para juniors, siempre viva el open source",
      technologies: ["JavaScript", "Node.js", "Express"],
      github: "https://github.com/guilleDCMdev/apiForJuniors",
      demo: "",
      image: "",
    },

    {
      name: "Avatar Generator",
      description:
        "Generador de avatares personalizados, solo para practicar y divertirme",
      technologies: ["JavaScript", "HTML", "CSS", "React", "Tailwind CSS"],
      github: "https://github.com/guilleDCMdev/avatar-app",
      demo: "",
      image: "",
    },
  ],
  languages: [
    { language: "Español", level: "Nativo" },
    { language: "Inglés", level: "Avanzado" },
  ],
  certifications: [
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "Marzo 2025",
      credential:
        "https://www.credly.com/badges/83360eed-b985-4eee-9d93-caf10f773127/public_url",
    },
    {
      name: "React",
      issuer: "OpenWebinars",
      date: "Octubre 2024",
      credential: "Certificación en React.js y TypeScript",
    },
    {
      name: "JavaScript",
      issuer: "OpenWebinars",
      date: "Octubre 2024",
      credential: "Certificación en JavaScript",
    },
    {
      name: "Java",
      issuer: "OpenWebinars",
      date: "Mayo 2024",
      credential: "Certificación en Java",
    },
  ],
};
