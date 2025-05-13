export const projectsData = [
    {
      id: 1,
      title: "Cosmic Explorer",
      description: "A space visualization app built with Three.js and React that allows users to explore the solar system and beyond in an interactive 3D environment. Features include planet information, space missions timeline, and a star map with constellations.",
      shortDescription: "A space visualization app built with Three.js and React",
      images: [
        "https://res.cloudinary.com/demo/image/upload/v1612345678/cosmic-explorer-1.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/cosmic-explorer-2.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/cosmic-explorer-3.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/cosmic-explorer-4.jpg"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      tags: ["React", "Three.js", "WebGL", "JavaScript", "Framer Motion"],
      category: "web",
      completionDate: "June 2024",
      duration: "3 months",
      client: "Self-initiated",
      features: [
        "Interactive 3D solar system model with accurate orbital mechanics",
        "Educational information about celestial bodies with high-resolution imagery",
        "Timeline of past and future space missions with detailed descriptions",
        "Night sky viewer with constellation identification",
        "Mobile-responsive design for on-the-go exploration"
      ],
      challenges: "Optimizing the 3D rendering performance across different devices while maintaining visual fidelity was the biggest challenge. I implemented level-of-detail systems and texture streaming to ensure smooth performance on lower-end devices.",
      technologies: {
        frontend: ["React", "Three.js", "WebGL", "Framer Motion", "TailwindCSS"],
        backend: ["Node.js", "Express"],
        deployment: ["Vercel", "AWS S3 for asset storage"]
      },
      testimonial: {
        text: "Cosmic Explorer changed the way I teach astronomy to my students. The interactive visualizations make complex concepts much easier to understand.",
        author: "Dr. Sarah Johnson, Professor of Astronomy"
      }
    },
    {
      id: 2,
      title: "Orbit Mobile App",
      description: "Cross-platform mobile application for task management with offline capabilities, smart prioritization, and team collaboration features. The app uses a unique orbital visualization system to represent task urgency and importance.",
      shortDescription: "Cross-platform mobile application for task management with offline capabilities",
      images: [
        "https://res.cloudinary.com/demo/image/upload/v1612345678/orbit-app-1.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/orbit-app-2.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/orbit-app-3.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/orbit-app-4.jpg"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      tags: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      category: "mobile",
      completionDate: "March 2024",
      duration: "4 months",
      client: "TaskForce Inc.",
      features: [
        "Intuitive orbital task visualization system based on urgency and importance",
        "Full offline functionality with seamless sync when connection is restored",
        "Team collaboration with real-time updates and notifications",
        "Smart task prioritization using machine learning algorithms",
        "Cross-platform availability (iOS and Android) with consistent experience"
      ],
      challenges: "Building a truly offline-first experience required careful state management and conflict resolution strategies. I implemented a custom state reconciliation algorithm based on CRDTs (Conflict-free Replicated Data Types) to ensure data consistency.",
      technologies: {
        frontend: ["React Native", "Redux", "TypeScript", "Expo"],
        backend: ["Firebase", "Cloud Functions", "Firestore"],
        deployment: ["App Store", "Google Play Store"]
      },
      testimonial: {
        text: "Orbit has transformed our team's productivity. The intuitive design and reliable offline capabilities make it perfect for our field teams.",
        author: "Michael Chen, Product Manager at TaskForce Inc."
      }
    },
    {
      id: 3,
      title: "Stellar CMS",
      description: "Headless content management system with GraphQL API and multi-language support designed for high-performance content delivery. The system includes a powerful editor with custom blocks, asset management, and a robust permissions system.",
      shortDescription: "Headless content management system with GraphQL API and multi-language support",
      images: [
        "https://res.cloudinary.com/demo/image/upload/v1612345678/stellar-cms-1.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/stellar-cms-2.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/stellar-cms-3.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/stellar-cms-4.jpg"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      tags: ["Node.js", "GraphQL", "MongoDB", "React", "Docker"],
      category: "backend",
      completionDate: "October 2023",
      duration: "6 months",
      client: "ContentStars Ltd.",
      features: [
        "Powerful GraphQL API with comprehensive query capabilities",
        "Multi-language content management with versioning",
        "Custom content blocks editor with drag-and-drop interface",
        "Fine-grained permission system with role-based access control",
        "Docker-based deployment for easy scaling"
      ],
      challenges: "Designing a flexible content model that could handle diverse content types while maintaining query performance was complex. I implemented a hybrid storage approach with MongoDB for content and Redis for caching frequently accessed data.",
      technologies: {
        frontend: ["React", "Apollo Client", "Draft.js", "Chakra UI"],
        backend: ["Node.js", "GraphQL", "MongoDB", "Redis", "TypeScript"],
        deployment: ["Docker", "Kubernetes", "Digital Ocean"]
      },
      testimonial: {
        text: "Stellar CMS has revolutionized our content workflow. The GraphQL API is a joy to work with, and the multilingual capabilities perfectly suit our global audience.",
        author: "Emma Williams, CTO at ContentStars Ltd."
      }
    },
    {
      id: 4,
      title: "Galaxy Portfolio",
      description: "A responsive portfolio template for creative professionals featuring smooth animations, dark mode, and customizable sections. The template is optimized for performance and accessibility, ensuring an excellent experience for all users.",
      shortDescription: "A responsive portfolio template for creative professionals",
      images: [
        "https://res.cloudinary.com/demo/image/upload/v1612345678/galaxy-portfolio-1.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/galaxy-portfolio-2.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/galaxy-portfolio-3.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/galaxy-portfolio-4.jpg"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "web",
      completionDate: "January 2024",
      duration: "2 months",
      client: "Creative Market",
      features: [
        "Smooth page transitions and scroll animations",
        "Automatic dark/light mode based on user preference with toggle option",
        "Customizable sections for projects, testimonials, and services",
        "Integrated contact form with email notifications",
        "Optimized for accessibility with perfect Lighthouse scores"
      ],
      challenges: "Creating smooth animations that work well across devices without impacting performance required careful optimization. I used Intersection Observer and requestAnimationFrame to ensure animations only run when needed and are properly throttled.",
      technologies: {
        frontend: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        deployment: ["Vercel", "Netlify"]
      },
      testimonial: {
        text: "The Galaxy Portfolio template helped me launch my freelance career with a stunning online presence. My clients are always impressed by the smooth animations and clean design.",
        author: "Alex Rivera, Freelance Designer"
      }
    },
    {
      id: 5,
      title: "Nebula E-Commerce",
      description: "Full-featured e-commerce platform with payment processing, inventory management, and an advanced admin dashboard. The platform includes features like product recommendations, customer reviews, and detailed analytics.",
      shortDescription: "Full-featured e-commerce platform with payment processing and admin dashboard",
      images: [
        "https://res.cloudinary.com/demo/image/upload/v1612345678/nebula-ecommerce-1.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/nebula-ecommerce-2.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/nebula-ecommerce-3.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/nebula-ecommerce-4.jpg"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      category: "web",
      completionDate: "August 2023",
      duration: "5 months",
      client: "SpaceCommerce Inc.",
      features: [
        "Secure payment processing with multiple payment options",
        "Real-time inventory management system",
        "Advanced product filtering and search capabilities",
        "Customer accounts with order history and saved items",
        "Comprehensive admin dashboard with sales analytics"
      ],
      challenges: "Implementing a secure and seamless checkout process while maintaining performance was challenging. I used optimistic UI updates combined with robust error handling to create a fast yet reliable experience.",
      technologies: {
        frontend: ["React", "Redux", "Styled Components", "Framer Motion"],
        backend: ["Node.js", "Express", "MongoDB", "Redis", "Stripe API"],
        deployment: ["AWS", "Docker", "GitHub Actions"]
      },
      testimonial: {
        text: "Nebula E-Commerce platform increased our conversion rate by 35% in the first month. The admin dashboard gives us insights we never had before.",
        author: "Jennifer Lopez, CEO of SpaceCommerce Inc."
      }
    },
    {
      id: 6,
      title: "Pulsar Analytics",
      description: "Data visualization dashboard with real-time analytics and custom reports designed for businesses to gain insights from their operational data. The platform includes interactive charts, automated report generation, and data export capabilities.",
      shortDescription: "Data visualization dashboard with real-time analytics and custom reports",
      images: [
        "https://res.cloudinary.com/demo/image/upload/v1612345678/pulsar-analytics-1.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/pulsar-analytics-2.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/pulsar-analytics-3.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1612345678/pulsar-analytics-4.jpg"
      ],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      tags: ["Vue.js", "D3.js", "Python", "PostgreSQL", "FastAPI"],
      category: "web",
      completionDate: "May 2023",
      duration: "4 months",
      client: "DataInsight Corporation",
      features: [
        "Interactive and customizable data visualizations using D3.js",
        "Real-time data processing with websocket connections",
        "Automated report generation and scheduling",
        "Data export in multiple formats (CSV, Excel, PDF)",
        "User-defined alerts and notifications based on data thresholds"
      ],
      challenges: "Handling large datasets while maintaining responsive visualizations required implementing efficient data processing pipelines. I used a combination of server-side aggregation and client-side data transformation to optimize performance.",
      technologies: {
        frontend: ["Vue.js", "D3.js", "Vuetify", "Chart.js"],
        backend: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery"],
        deployment: ["Google Cloud Platform", "Kubernetes"]
      },
      testimonial: {
        text: "Pulsar Analytics has become an essential tool for our decision-making process. The real-time insights have helped us identify opportunities we would have otherwise missed.",
        author: "Robert Kim, CIO at DataInsight Corporation"
      }
    }
  ]