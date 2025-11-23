export const curriculumData = {
  personalInfo: {
    name: "Jainer Ivan Gallego",
    title: "Desarrollador de Software",
    phone: "+57 314 664 2706",
    email: "jainermendoza558@gmail.com",
    linkedin: "www.linkedin.com/in/jainer-mendoza-615589396",
    github: "github.com/jainei27",
    location: "Caicedonia, Valle del Cauca, Colombia",
    about: "Desarrollador de software con experiencia en la creación de aplicaciones web modernas, construcción de interfaces eficientes y desarrollo de sistemas completos bajo arquitectura cliente-servidor. He participado activamente en proyectos académicos destacados y formo parte del equipo de desarrollo del Sistema de Gestión Académica para el Colegio Rafael Pombo. Apasionado por el desarrollo frontend con React y Vue.js, y el backend con Node.js y Django."
  },
  
  skills: {
    programming: [
      { name: "HTML5", level: 50 },
      { name: "CSS3", level: 65 },
      { name: "JavaScript", level: 40 },
      { name: "Python", level: 70 },
    ],
    frontend: [
      "HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Vite",
      "SCSS"
    ],
    backend: [
      "Node.js", "Express", "Django", "Django REST Framework", "REST APIs", 
      "API Integration", "CRUD Operations"
    ],
    databases: [
      "MySQL", "MongoDB", "Firebase", "Database Design"
    ],
    tools: [
      "Git", "GitHub", "VS Code", "Figma", "Docker", 
      "Postman", "Jira", "Webpack", "UML Diagrams"
    ],
    methodologies: [ 
      "Clean Code", "Testing", "API Design", "REST Architecture"
    ]
  },
  
  languages: [
    { name: "Español", level: "Nativo", dots: 5 },
    { name: "Inglés", level: "Intermedio (B1)", dots: 3 }
  ],
  
  experience: [
    {
      date: "2025 – Presente",
      position: "Desarrollador Full Stack",
      company: "Proyectos Académicos - Universidad del Valle",
      responsibilities: [
        "Desarrollo de aplicaciones web completas utilizando React + Vite y Django REST Framework.",
        "Implementación de arquitecturas cliente-servidor con APIs REST y autenticación JWT.",
        "Diseño de interfaces de usuario tipo dashboard con componentes reutilizables.",
        "Modelado de bases de datos relacionales en MySQL y documentación con diagramas UML.",
        "Colaboración en equipos utilizando metodologías ágiles y control de versiones con Git."
      ]
    },
    {
      date: "2025 – 2026", 
      position: "Desarrollador Frontend & Backend",
      company: "Proyecto Sistema de Gestión - Colegio Rafael Pombo",
      responsibilities: [
        "Desarrollo de componentes React con Vite para interfaz de usuario moderna.",
        "Integración con backend Django REST Framework y consumo de APIs REST.",
        "Implementación de autenticación basada en roles y rutas protegidas.",
        "Diseño de base de datos MySQL y operaciones CRUD para módulos académicos.",
        "Documentación técnica con diagramas UML y requisitos funcionales."
      ]
    }
  ],
  
  education: [
    {
      icon: "graduation-cap",
      title: "Tecnólogo en Desarrollo de Software",
      institution: "Universidad del Valle - Sede Caicedonia",
      date: "2023 – 2026",
      description: "Formación especializada en desarrollo de software, bases de datos, programación orientada a objetos y metodologías ágiles. Participación activa en proyectos destacados como el Sistema de Gestión Académica para el Colegio Rafael Pombo.",
      skills: ["Desarrollo Web", "Bases de Datos", "Programación", "Metodologías Ágiles"],
      certificateUrl: "#" // Sin certificado aún
    },
    {
      icon: "chart-bar",
      title: "Acelerador de Carrera con Power BI + IA",
      institution: "Daxus LATAM",
      date: "Noviembre 2025",
      description: "Certificación especializada en análisis de datos con Microsoft Power BI, visualización de datos, creación de dashboards interactivos y aplicación de herramientas de IA para análisis empresarial.",
      skills: ["Power BI", "Análisis de Datos", "Dashboards", "IA", "Visualización"],
      certificateUrl: "/images/certificados/power-bi-certificado.jpeg"
    },
    {
      icon: "palette",
      title: "Diseño Gráfico en Corel Draw",
      institution: "Secretaría de Educación y Cultura de Caicedonia - Nodos Creative Group",
      date: "Septiembre - Octubre 2022",
      description: "Curso especializado en diseño gráfico utilizando Corel Draw. Enfoque en principios de diseño, composición visual, manejo de color y creación de piezas gráficas para entornos educativos y culturales.",
      skills: ["Corel Draw", "Diseño Gráfico", "Composición", "Color", "Vectorización"],
      certificateUrl: "/images/certificados/Diseño-grafico.jpeg" // ← Cambiado al nombre correcto
    }
  ],
  
  projects: [
    {
      icon: "school",
      title: "Sistema de Gestión Académica - Colegio Rafael Pombo",
      description: "Sistema web completo para la gestión académica del Colegio Rafael Pombo en Tuluá. Desarrollado con arquitectura moderna, incluye módulos para estudiantes, calificaciones, horarios y reportes. Implementa autenticación JWT, dashboard administrativo y generación de reportes en PDF/Excel.",
      technologies: ["React", "Vite", "Django REST Framework", "MySQL", "JWT", "Figma", "UML"],
      github: "https://github.com/Karatsuyu/Proyecto-PetroGas-Oficial.git",
      demo: "https://www.figma.com/file/TU_ID_DEL_PROYECTO/..."
    },
    {
      icon: "database",
      title: "Sistema de Gestión Integral - Proyecto Universitario",
      description: "Aplicación web full-stack desarrollada como proyecto académico. Frontend en React + Vite con diseño tipo dashboard, backend en Django REST Framework con APIs REST. Incluye autenticación por roles, operaciones CRUD completas, base de datos MySQL y documentación con diagramas UML.",
      technologies: ["React", "Vite", "Django", "Django REST", "MySQL", "JavaScript", "CSS3", "UML"],
      github: "https://github.com/Karatsuyu/Proyecto-PetroGas-Oficial.git",
      demo: "https://www.figma.com/file/TU_ID_DEL_PROYECTO/..."
    },
    {
      icon: "laptop-code",
      title: "Portafolio Personal Profesional", 
      description: "Sitio web personal desarrollado con React, diseñado con enfoque en experiencia de usuario moderna. Incluye animaciones CSS, diseño completamente responsivo, formulario de contacto funcional con EmailJS y optimización de rendimiento.",
      technologies: ["React", "CSS3", "JavaScript", "EmailJS", "Responsive Design"],
      github: "https://github.com/jainei27",
      demo: "#"
    }
  ]
};

export const navigationItems = [
  { id: "inicio", label: "Inicio", icon: "home" },
  { id: "experiencia", label: "Experiencia", icon: "briefcase" },
  { id: "educacion", label: "Certificaciones", icon: "certificate" },
  { id: "habilidades", label: "Habilidades Técnicas", icon: "code" },
  { id: "proyectos", label: "Proyectos", icon: "project-diagram" },
  { id: "contacto", label: "Contacto", icon: "envelope" }
];