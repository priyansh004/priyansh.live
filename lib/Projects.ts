import { Project } from "@/app/projects/[id]/page";

// Example project data
export const projectsData: Project[] = [
    
    {
        id: 1,
        title: "EquipLog - Mobile App",
        description:
            "EquipLog is a specialized mobile application developed for Gtek Corp Pvt. Ltd., designed to read, process, and visualize data from FAT16-based data logger devices used in the chemical and pharmaceutical industries. The app uses the libaums library (based on JNode) to interface with USB devices, display file contents (JSON and PDF), and sync data with GtekCloud. It processes uploaded data locally using WatermelonDB and provides intuitive visualizations, tabular views, and insights to users.",
        shortDescription: "A React Native + Kotlin-based mobile app to visualize and sync data from FAT16-based USB data loggers.",
        images: [
            "/images/equiplog/home-screen.png",
            "/images/equiplog/device-data.png",
            "/images/equiplog/graphs.png",
            "/images/equiplog/pdf-preview.png"
        ],
        tags: ["React Native", "Android", "Kotlin", "libaums", "SQLite", "FAT16", "WatermelonDB", "D3.js"],
        category: "Mobile Application",
        features: [
            "USB OTG access for FAT16 file systems using libaums (Kotlin-based)",
            "Device file parsing: reads JSON + PDF report files",
            "Local storage and processing using WatermelonDB (SQLite)",
            "Graphical data visualization for device records",
            "Display of device metadata and tabular record view",
            "Cloud sync integration with GtekCloud backend",
            "Offline-first design with local caching",
            "Responsive UI using React Native and custom styling"
        ],
        challenges:
            "Handling FAT16 file system compatibility on Android using libaums, integrating native Kotlin code with React Native modules, processing device data reliably offline, and building a smooth UI with performance-optimized SQLite queries for large datasets.",
        technologies: {
            frontend: ["React Native", "TypeScript", "CSS Modules"],
            backend: ["Native Modules (Kotlin)", "libaums", "JNode Concepts"],
            others: ["WatermelonDB", "SQLite", "PDF Viewer", "USB OTG"]
        },
    },
    {
        id: 2,
        title: "MyTrueTrader - Web Dashboard",
        description:
            "MyTrueTrader is a comprehensive brokerage management platform that allows brokers, leaders, and admins to manage orders, transactions, client data, and team assignments efficiently. Built with React, Node.js, and Tailwind CSS, it supports full authentication (JWT-based), role management, and secure online payments via PhonePe API. It also features automated email notifications via EmailJS, a robust MySQL database, Firebase integration, and is hosted on AWS EC2 with Elastic IP, monthly DB backups, and enhanced security.",
        shortDescription: "A full-stack brokerage dashboard with payments, multi-role login, AWS hosting, and automation.",
        images: [
            "/images/mytruetrader/dashboard.png",
            "/images/mytruetrader/payment-screen.png",
            "/images/mytruetrader/login-role-based.png",
            "/images/mytruetrader/email-notifications.png"
        ],
        liveLink: "https://mytruetrader.example.com",
        githubLink: "https://github.com/priyansh1712/mytruetrader",
        tags: ["React", "Node.js", "Tailwind", "MySQL", "Firebase", "JWT", "PhonePe API", "EmailJS", "AWS"],
        category: "Web Application",
        features: [
            "Role-based authentication system (Admin, Broker, Leader)",
            "JWT token authentication and protected routes",
            "PhonePe API integration for secure online transactions",
            "Dynamic order and transaction tracking dashboard",
            "Leader-to-broker mapping and hierarchical management",
            "Email notifications and password management via EmailJS",
            "Primary MySQL database with secondary Firebase sync for external apps",
            "Fully hosted on AWS EC2 with Elastic IP and secure SSH access",
            "Monthly automated MySQL database backups",
            "Responsive UI with TailwindCSS and component libraries",
            "Version-controlled with GitHub and deployed using CI/CD practices"
        ],
        challenges:
            "Implementing multi-role login securely with JWT, integrating real-time payments through PhonePe API, managing backup and hosting configurations on AWS, and synchronizing Firebase with MySQL for external app access while ensuring data consistency and performance.",
        technologies: {
            frontend: ["React.js", "TailwindCSS", "Component Libraries (e.g., ShadCN, DaisyUI)"],
            backend: ["Node.js", "Express.js", "JWT", "EmailJS", "MySQL", "Firebase (secondary sync)"],
            deployment: ["AWS EC2", "Elastic IP", "MySQL Dump Backups", "GitHub", "VS Code", "Postman"],
            others: ["PhonePe API", "EmailJS", "Secure Auth Flows", "Cloud Backup Scripts"]
        },

    },
    {
        id: 3,
        title: "DL wifi – React Native App",
        description:
            "A React Native mobile application designed to interface with an ESP32-based data logger. The app communicates with the ESP32 microcontroller over APIs to configure logging parameters, set the cloud endpoint, and retrieve real-time sensor data such as CO₂ levels, temperature, and humidity. Ideal for IoT use cases in environmental monitoring, this app provides a clean UI to manage the logger, view live data streams, and adjust cloud upload settings. It ensures robust and responsive performance for managing remote or embedded sensors.",
        shortDescription:
            "A React Native app for configuring ESP32 data loggers, retrieving real-time sensor data, and managing cloud endpoints.",
        images: [
            "/images/esp32logger/dashboard.png",
            "/images/esp32logger/sensor-data.png",
            "/images/esp32logger/settings.png",
            "/images/esp32logger/cloud-config.png"
        ],
        liveLink: "https://github.com/priyansh1712/esp32-logger-app", // placeholder for live link
        githubLink: "https://github.com/priyansh1712/esp32-logger-app",
        tags: ["React Native", "ESP32", "IoT", "Microcontroller", "Sensor Data", "CO2", "Temperature", "Humidity"],
        category: "Mobile Application",
        features: [
            "API integration with ESP32 for data communication",
            "Real-time sensor monitoring (CO₂, temperature, humidity)",
            "Set and update cloud endpoints from mobile UI",
            "Automatic connection and session handling with the device",
            "Live graph view of sensor data",
            "Offline data caching and fallback handling",
            "User-friendly UI built with React Native components",
            "Secure configuration flow with validation for endpoints",
            "Custom data refresh intervals and sensor calibration options"
        ],
        challenges:
            "Managing real-time data transfer between ESP32 and mobile without packet loss, optimizing API communication, and maintaining connection stability over local networks or BLE (if applicable). Ensuring cross-platform compatibility and smooth graph rendering on low-end devices was also critical.",
        technologies: {
            frontend: ["React Native", "TypeScript", "React Navigation"],
            backend: ["ESP32 REST APIs"],
        },

    },

    {
        id: 4,
        title: "Saffair – Web app",
        description:
            "Saffair is a dynamic and interactive platform where users can write blogs, publish news, comment on posts, and participate in events. Built with React, Tailwind CSS, Node.js, and Firebase, it supports role-based modules for users, admins, and news editors. Firebase handles authentication, storage, and real-time updates. Users can earn points for engagement (blogging, commenting, attending events) which can be redeemed or tracked. Admins can moderate content, manage users, and schedule or host events through a custom admin dashboard.",
        shortDescription: "A blog, news, and event platform with role-based modules, Firebase auth, and point-based engagement.",
        images: [
            "https://res.cloudinary.com/dn856fb5e/image/upload/v1747136543/saffair1_bkmax9.png",
            "/images/saffair/blog-editor.png",
            "/images/saffair/event-list.png",
            "/images/saffair/admin-panel.png"
        ],
        liveLink: "https://saffair.example.com",
        githubLink: "https://github.com/priyansh1712/saffair",
        tags: ["React", "Node.js", "Firebase", "Tailwind CSS", "Blogging", "News", "Events"],
        category: "Web Platform",
        features: [
            "User authentication with Firebase Auth (Email/Google)",
            "Role-based modules for Users, Admins, and News Contributors",
            "Create, publish, and edit blog posts or news articles",
            "Commenting system for all posts",
            "Points and reward system for user engagement",
            "Event registration and participation tracker",
            "Admin dashboard to approve users and moderate content",
            "Responsive UI with Tailwind CSS and real-time Firebase data sync",
            "Media uploads and storage using Firebase Storage",
            "Notification system for blog approvals, event reminders, and user actions"
        ],
        challenges:
            "Building a real-time content system with Firebase while ensuring performance and security across different roles (admin, news editor, users). Designing a scalable points system and managing user state efficiently with Firebase’s Firestore and Authentication modules.",
        technologies: {
            frontend: ["React.js", "TailwindCSS", "React Router"],
            backend: ["Node.js", "Firebase Cloud Functions", "Firebase Firestore"],
            deployment: ["Firebase Hosting", "GitHub", "VS Code", "Postman"],
            others: ["Firebase Auth", "Firebase Storage", "Role-based Access", "Event Management"]
        },

    },
    {
        id: 5,
        title: "MartBox - ECommerce",
        description:
            "MartBox is a full-featured eCommerce platform built with Node.js, React, MongoDB, and SCSS. It offers a seamless online shopping experience with features like product listings, secure checkout, order tracking, and an intuitive admin dashboard for managing inventory, users, and orders. Designed for performance and scalability, MartBox delivers a smooth and responsive experience across devices.",
        shortDescription: "A complete eCommerce platform with admin dashboard, cart, and secure checkout.",
        images: [
            "https://res.cloudinary.com/dn856fb5e/image/upload/v1747136542/martbox1_dhe8gv.png",
            "https://res.cloudinary.com/dn856fb5e/image/upload/v1747136869/martbox3_mojihv.png",
            "https://res.cloudinary.com/dn856fb5e/image/upload/v1747137047/martbox4_qi05d2.png"
        ],
        liveLink: "https://martbox.example.com",
        githubLink: "https://github.com/yourusername/martbox-ecommerce",
        tags: ["React", "Node.js", "MongoDB", "SCSS", "Redux", "Full Stack"],
        category: "Web Application",
        features: [
            "User registration and authentication (JWT-based)",
            "Product browsing and dynamic search",
            "Shopping cart with quantity adjustments",
            "Secure checkout with order confirmation",
            "Order history and tracking for users",
            "Admin panel to manage products, users, and orders",
            "Responsive and mobile-friendly design",
            "SCSS-based modern UI"
        ],
        challenges:
            "Managing secure authentication and authorization across user and admin roles, optimizing MongoDB queries for large product databases, and ensuring smooth state management in the shopping cart across sessions.",
        technologies: {
            frontend: ["React.js", "SCSS", "Axios", "React Router"],
            backend: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
        },

    },
    {
        id: 6,
        title: "ClassManager",
        description:
            "ClassManager is a full-featured classroom management platform built as an alternative to Google Classroom. It enables teachers and students to seamlessly interact, manage assignments, track progress, and communicate within a secure and intuitive web application.",
        shortDescription: "Google Classroom alternative built with Next.js, SCSS, and MongoDB.",
        images: [
            "https://res.cloudinary.com/dn856fb5e/image/upload/v1747136542/classmanger1_dlvu5w.jpg",
            "/images/classmanager/classroom.png",
            "/images/classmanager/assignment.png"
        ],
        githubLink: "https://github.com/yourusername/classmanager",
        tags: ["Next.js", "MongoDB", "SCSS", "Classroom", "Full Stack"],
        category: "Web Application",
        features: [
            "Create and manage virtual classrooms",
            "Post and submit assignments",
            "Track student progress and grades",
            "Role-based access (admin, teacher, student)",
            "Class discussion and announcements",
            "Responsive UI for desktop and mobile",
            "Dark mode support",
            "Authentication with JWT"
        ],
        technologies: {
            frontend: ["Next.js", "React", "SCSS", "Framer Motion", "ShadCN UI"],
            backend: ["Next.js", "", "MongoDB", "Mongoose", "JWT Auth"],
        },

    }
];