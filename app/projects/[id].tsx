"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Github,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
    Calendar,
    Clock,
    Code,
    User,
    BookOpen
} from "lucide-react"

// Enhanced project data with more details for the dynamic page
const projectsData = [
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

export default function ProjectDetails() {
    const params = useParams()
    const router = useRouter()
    const projectId = Number(params?.id)

    const [currentProject, setCurrentProject] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulating data fetch with a slight delay
        const timer = setTimeout(() => {
            const project = projectsData.find(p => p.id === projectId)
            setCurrentProject(project)
            setIsLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [projectId])

    const nextImage = () => {
        if (currentProject) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1
            )
        }
    }

    const prevImage = () => {
        if (currentProject) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? currentProject.images.length - 1 : prevIndex - 1
            )
        }
    }

    const goBack = () => {
        router.back()
    }

    // Loading state
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black">
                <div className="space-y-4 text-center">
                    <div className="w-16 h-16 border-t-2 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
                    <p className="text-blue-400 text-lg">Loading project details...</p>
                </div>
            </div>
        )
    }

    // 404 state
    if (!currentProject) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-blue-950">
                <Card className="max-w-md p-8 bg-black/40 backdrop-blur-md border border-white/10 text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-zinc-400 mb-6">The project you're looking for doesn't exist or has been removed.</p>
                    <Button onClick={goBack} variant="default" className="bg-blue-600 hover:bg-blue-700">
                        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Projects
                    </Button>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Back button */}
                <Button
                    onClick={goBack}
                    variant="ghost"
                    className="mb-8 text-blue-400 hover:text-blue-300 hover:bg-white/5"
                >
                    <ChevronLeft className="mr-2 h-5 w-5" /> Back to Projects
                </Button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Project Header */}
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{currentProject.title}</h1>
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {currentProject.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-blue-900/40 text-blue-300 border border-blue-500/20">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                        <p className="text-zinc-300 max-w-3xl mx-auto text-lg">{currentProject.description}</p>
                    </div>

                    {/* Image Carousel */}
                    <Card className="overflow-hidden mb-12 bg-black/40 backdrop-blur-md border border-white/10">
                        <div className="relative aspect-video">
                            <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
                                <Button
                                    onClick={prevImage}
                                    variant="ghost"
                                    size="icon"
                                    className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>
                                <Button
                                    onClick={nextImage}
                                    variant="ghost"
                                    size="icon"
                                    className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </Button>
                            </div>

                            {/* Images */}
                            <div className="h-full relative">
                                {currentProject.images.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: currentImageIndex === index ? 1 : 0,
                                            zIndex: currentImageIndex === index ? 1 : 0
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${currentProject.title} screenshot ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            priority={index === 0}
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Image indicators */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                                {currentProject.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`h-2 rounded-full transition-all ${currentImageIndex === index
                                                ? "w-8 bg-blue-500"
                                                : "w-2 bg-white/50 hover:bg-white/70"
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <Card className="p-6 bg-black/40 backdrop-blur-md border border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                                <p className="text-zinc-300 mb-6">{currentProject.description}</p>

                                <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                                <ul className="space-y-2 mb-6">
                                    {currentProject.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mt-0.5 mr-3">
                                                <span className="text-blue-400 text-sm font-bold">{index + 1}</span>
                                            </div>
                                            <span className="text-zinc-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-xl font-bold text-white mb-3">Challenges & Solutions</h3>
                                <p className="text-zinc-300">{currentProject.challenges}</p>
                            </Card>

                            <Card className="p-6 bg-black/40 backdrop-blur-md border border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>

                                <div className="space-y-4">
                                    {currentProject.technologies.frontend && (
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">Frontend</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {currentProject.technologies.frontend.map((tech) => (
                                                    <Badge key={tech} className="bg-gradient-to-r from-blue-900 to-blue-800 text-blue-100">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {currentProject.technologies.backend && (
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">Backend</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {currentProject.technologies.backend.map((tech) => (
                                                    <Badge key={tech} className="bg-gradient-to-r from-purple-900 to-purple-800 text-purple-100">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {currentProject.technologies.deployment && (
                                        <div>
                                            <h3 className="text-lg font-medium text-white mb-2">Deployment</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {currentProject.technologies.deployment.map((tech) => (
                                                    <Badge key={tech} className="bg-gradient-to-r from-emerald-900 to-emerald-800 text-emerald-100">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Card>

                            {currentProject.testimonial && (
                                <Card className="p-6 bg-black/40 backdrop-blur-md border border-white/10">
                                    <h2 className="text-2xl font-bold text-white mb-4">Testimonial</h2>
                                    <div className="relative">
                                        <div className="absolute -top-2 -left-2 text-blue-500 opacity-30">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M11.9999 9.00001C11.9999 4.58173 8.41823 1 3.99995 1V3C7.31366 3 9.99995 5.68629 9.99995 9.00001H7.99995C6.89538 9.00001 5.99995 9.89544 5.99995 11V15C5.99995 16.1046 6.89538 17 7.99995 17H11.9999C13.1045 17 13.9999 16.1046 13.9999 15V11C13.9999 9.89544 13.1045 9.00001 11.9999 9.00001Z" />
                                                <path d="M23.9999 9.00001C23.9999 4.58173 20.4182 1 15.9999 1V3C19.3137 3 21.9999 5.68629 21.9999 9.00001H19.9999C18.8954 9.00001 17.9999 9.89544 17.9999 11V15C17.9999 16.1046 18.8954 17 19.9999 17H23.9999C25.1045 17 25.9999 16.1046 25.9999 15V11C25.9999 9.89544 25.1045 9.00001 23.9999 9.00001Z" />
                                            </svg>
                                        </div>
                                        <blockquote className="pl-8 pr-2 py-2 italic text-zinc-300">
                                            "{currentProject.testimonial.text}"
                                        </blockquote>
                                        <footer className="pl-8 text-blue-400 font-medium">
                                            — {currentProject.testimonial.author}
                                        </footer>
                                    </div>
                                </Card>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <Card className="p-6 bg-black/40 backdrop-blur-md border border-white/10">
                                <h2 className="text-xl font-bold text-white mb-4">Project Details</h2>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Calendar className="h-5 w-5 text-blue-400 mr-3" />
                                        <div>
                                            <p className="text-sm text-zinc-400">Completion Date</p>
                                            <p className="text-zinc-200">{currentProject.completionDate}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <Clock className="h-5 w-5 text-blue-400 mr-3" />
                                        <div>
                                            <p className="text-sm text-zinc-400">Project Duration</p>
                                            <p className="text-zinc-200">{currentProject.duration}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <Code className="h-5 w-5 text-blue-400 mr-3" />
                                        <div>
                                            <p className="text-sm text-zinc-400">Category</p>
                                            <p className="text-zinc-200 capitalize">{currentProject.category}</p>
                                        </div>
                                    </div>

                                    {currentProject.client && (
                                        <div className="flex items-center">
                                            <User className="h-5 w-5 text-blue-400 mr-3" />
                                            <div>
                                                <p className="text-sm text-zinc-400">Client</p>
                                                <p className="text-zinc-200">{currentProject.client}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Card>

                            <Card className="p-6 bg-black/40 backdrop-blur-md border border-white/10">
                                <h2 className="text-xl font-bold text-white mb-4">Project Links</h2>

                                <div className="space-y-3">
                                    <Button
                                        variant="default"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
                                        asChild
                                    >
                                        <a href={currentProject.liveLink} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            View Live Project
                                        </a>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="w-full border-white/20 text-white hover:bg-white/10 flex items-center justify-center"
                                        asChild
                                    >
                                        <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            View Source Code
                                        </a>
                                    </Button>
                                </div>
                            </Card>

                            <Card className="p-6 bg-black/40 backdrop-blur-md border border-white/10">
                                <h2 className="text-xl font-bold text-white mb-4">Documentation</h2>
                                <div className="space-y-3">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-blue-400 hover:text-blue-300 hover:bg-white/5"
                                        asChild
                                    >
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <BookOpen className="mr-2 h-4 w-4" />
                                            Project Documentation
                                        </a>
                                    </Button>

                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-blue-400 hover:text-blue-300 hover:bg-white/5"
                                        asChild
                                    >
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <Code className="mr-2 h-4 w-4" />
                                            API Reference
                                        </a>
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Related Projects */}
                    <div className="mt-16">
                        <h2 className="text-3xl font-bold text-white mb-8">Related Projects</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projectsData
                                .filter(p => p.id !== currentProject.id && p.category === currentProject.category)
                                .slice(0, 3)
                                .map((project) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="group"
                                    >
                                        <Card className="overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                                            <div className="relative aspect-video overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                                    <div className="w-full">
                                                        <div className="flex flex-wrap gap-2 mb-3">
                                                            {project.tags.slice(0, 3).map((tag) => (
                                                                <Badge key={tag} variant="secondary" className="bg-black/60 text-white text-xs">
                                                                    {tag}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <Button
                                                                variant="outline"
                                                                size="sm"
                                                                className="flex-1 bg-black/60 border-white/20 text-white hover:bg-white/10"
                                                                asChild
                                                            >
                                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                                    <Github className="mr-2 h-4 w-4" />
                                                                    Code
                                                                </a>
                                                            </Button>
                                                            <Button
                                                                variant="default"
                                                                size="sm"
                                                                className="flex-1 bg-white text-black hover:bg-zinc-200"
                                                                asChild
                                                            >
                                                                <a href={`/projects/${project.id}`}>
                                                                    <ChevronRight className="mr-2 h-4 w-4" />
                                                                    View
                                                                </a>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Image
                                                    src={project.images[0] || "/placeholder.svg"}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="p-5 space-y-3">
                                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-zinc-400 line-clamp-2">{project.shortDescription}</p>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-blue-400 hover:text-blue-300 hover:bg-white/5 p-0 -ml-2"
                                                    asChild
                                                >
                                                    <a href={`/projects/${project.id}`}>
                                                        View Details <ChevronRight className="ml-1 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                        </div>

                        {/* View All Projects Button */}
                        <div className="flex justify-center mt-10">
                            <Button
                                onClick={goBack}
                                variant="outline"
                                className="border-white/20 text-white hover:bg-white/10 px-8"
                            >
                                View All Projects
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}