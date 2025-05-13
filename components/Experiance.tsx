"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Calendar, Briefcase, Award, ArrowRight, ExternalLink } from "lucide-react"
import { useState } from "react"

// Experience Section Component
export default function ExperienceSection() {
    return (
        <section id="experience" className="relative z-10 py-20">
            <div className="container px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Professional Experience</h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
                        My journey as a developer across different roles and technologies
                    </p>

                    {/* Experience Timeline */}
                    <div className="space-y-8">
                        {/* Gtek Experience */}
                        <ExperienceCard
                            company="Gtek Corporation"
                            position="Software Developer Intern"
                            period="October 2024 – May 2025"
                            description="Focused on mobile app development using React Native and Kotlin, integrating advanced features while optimizing performance."
                            achievements={[
                                "Improved app performance by 30% through code optimization",
                                "Collaborated with cross-functional teams to deliver projects ahead of schedule",
                                "Implemented robust database solutions using MySQL"
                            ]}
                            technologies={["React Native", "Kotlin", "Android SDK", "MySQL", "Git"]}
                        />

                        {/* Agevole Experience */}
                        <ExperienceCard
                            company="Agevole Innovation"
                            position="MERN Stack Developer Intern"
                            period="May 2024 – September 2024"
                            description="Developed responsive web applications using the MERN stack with a focus on performance and user experience."
                            achievements={[
                                "Reduced page load time by 40% through efficient coding practices",
                                "Designed and implemented RESTful APIs with Node.js and Express",
                                "Deployed and maintained applications on AWS infrastructure"
                            ]}
                            technologies={["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "AWS"]}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

// Enhanced Service Showcase Component
export function EnhancedServiceShowcase() {
    const [activeTab, setActiveTab] = useState("web")

    return (
        <div className="mb-20">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button
                    variant={activeTab === "web" ? "default" : "outline"}
                    onClick={() => setActiveTab("web")}
                    className={activeTab === "web" ? "bg-white text-black" : "border-white/20 text-white hover:bg-white/10"}
                >
                    Web Development
                </Button>
                <Button
                    variant={activeTab === "mobile" ? "default" : "outline"}
                    onClick={() => setActiveTab("mobile")}
                    className={activeTab === "mobile" ? "bg-white text-black" : "border-white/20 text-white hover:bg-white/10"}
                >
                    Mobile Development
                </Button>
                <Button
                    variant={activeTab === "backend" ? "default" : "outline"}
                    onClick={() => setActiveTab("backend")}
                    className={activeTab === "backend" ? "bg-white text-black" : "border-white/20 text-white hover:bg-white/10"}
                >
                    Backend & API
                </Button>
                <Button
                    variant={activeTab === "tools" ? "default" : "outline"}
                    onClick={() => setActiveTab("tools")}
                    className={activeTab === "tools" ? "bg-white text-black" : "border-white/20 text-white hover:bg-white/10"}
                >
                    Tools & Automation
                </Button>
            </div>

            <div className="bg-black/40 backdrop-blur-md border-white/10 rounded-lg p-6">
                {activeTab === "web" && (
                    <ServiceDetail
                        title="Web Development Solutions"
                        description="From simple landing pages to complex web applications, I create modern, responsive, and fast web experiences that engage users and drive results."
                        features={[
                            "Responsive websites built with React, Next.js, and Tailwind CSS",
                            "Interactive UIs with smooth animations and transitions",
                            "Performance-optimized code for lightning-fast loading",
                            "SEO-friendly architecture for better visibility",
                            "Accessibility-focused development for all users"
                        ]}
                        technologies={["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML/CSS"]}
                    />
                )}

                {activeTab === "mobile" && (
                    <ServiceDetail
                        title="Mobile App Development"
                        description="Custom iOS and Android applications built for performance and user engagement, whether native or cross-platform."
                        features={[
                            "Cross-platform apps using React Native for iOS and Android",
                            "Native app development with Swift for iOS and Kotlin for Android",
                            "Offline functionality and data synchronization",
                            "Integration with device features (camera, GPS, notifications)",
                            "App Store and Google Play deployment assistance"
                        ]}
                        technologies={["React Native", "Swift", "Kotlin", "Expo", "Android SDK", "iOS SDK"]}
                    />
                )}

                {activeTab === "backend" && (
                    <ServiceDetail
                        title="Backend & API Development"
                        description="Robust server-side solutions that power your applications with secure, scalable, and efficient backends."
                        features={[
                            "RESTful and GraphQL API development",
                            "Database design and optimization (SQL and NoSQL)",
                            "Authentication and authorization systems",
                            "Real-time data processing with WebSockets",
                            "Cloud infrastructure setup and management"
                        ]}
                        technologies={["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "AWS", "Docker"]}
                    />
                )}

                {activeTab === "tools" && (
                    <ServiceDetail
                        title="Tools & Automation"
                        description="Custom solutions that streamline your business processes, save time, and reduce errors through automation."
                        features={[
                            "Custom CRM tools tailored to your business needs",
                            "Email notification systems and marketing automation",
                            "Admin dashboards and reporting tools",
                            "Workflow automation and task management systems",
                            "Data analysis and visualization tools"
                        ]}
                        technologies={["Next.js", "Node.js", "Python", "Docker", "AWS Lambda", "GitHub Actions"]}
                    />
                )}
            </div>
        </div>
    )
}

// Testimonials Component
export function TestimonialsSection() {
    return (
        <section id="testimonials" className="relative z-10 py-20">
            <div className="container px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Client Testimonials</h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
                        What clients say about working with me
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TestimonialCard
                            name="Sarah Johnson"
                            position="CEO, TechStart"
                            quote="Priyansh delivered our website redesign ahead of schedule and exceeded all expectations. His attention to detail and problem-solving skills are exceptional."
                            image="/placeholder.svg?height=64&width=64"
                        />
                        <TestimonialCard
                            name="Michael Chen"
                            position="Product Manager, InnovateX"
                            quote="The mobile app Priyansh built for us has received outstanding user feedback. His technical skills combined with design sensibility created an exceptional product."
                            image="/placeholder.svg?height=64&width=64"
                        />
                        <TestimonialCard
                            name="Emma Williams"
                            position="Marketing Director, GrowthHub"
                            quote="The custom CRM solution transformed our workflow. Priyansh took the time to understand our needs and delivered exactly what we needed and more."
                            image="/placeholder.svg?height=64&width=64"
                        />
                        <TestimonialCard
                            name="Alex Rodriguez"
                            position="CTO, DataStream"
                            quote="Priyansh's API implementation was flawless. The documentation was clear, and his communication throughout the project made the process smooth and efficient."
                            image="/placeholder.svg?height=64&width=64"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

// Work Process Section
export function WorkProcessSection() {
    return (
        <section id="process" className="relative z-10 py-20">
            <div className="container px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">My Development Process</h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
                        A structured approach to delivering exceptional results
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ProcessCard
                            step="1"
                            title="Discovery"
                            description="Understanding your needs, goals, and project requirements through in-depth consultation."
                        />
                        <ProcessCard
                            step="2"
                            title="Planning"
                            description="Creating a detailed roadmap with milestones, technologies, and deliverables."
                        />
                        <ProcessCard
                            step="3"
                            title="Development"
                            description="Building your solution with clean code, regular updates, and iterative feedback."
                        />
                        <ProcessCard
                            step="4"
                            title="Delivery & Support"
                            description="Thorough testing, deployment, and ongoing maintenance options to ensure success."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

// Projects Component
export function FeaturedProjectsSection() {
    return (
        <section className="relative z-10 py-20">
            <div className="container px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Featured Projects</h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
                        Recent work that showcases my skills and expertise
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ProjectCard
                            title="E-Commerce Platform"
                            description="A full-featured online store with product management, payment processing, and customer accounts."
                            technologies={["Next.js", "Stripe", "MongoDB", "AWS"]}
                            image="/placeholder.svg?height=300&width=600"
                        />
                        <ProjectCard
                            title="Fitness Tracking App"
                            description="Mobile application for tracking workouts, nutrition, and fitness goals with data visualization."
                            technologies={["React Native", "Firebase", "Node.js"]}
                            image="/placeholder.svg?height=300&width=600"
                        />
                        <ProjectCard
                            title="Real Estate Dashboard"
                            description="Administrative dashboard for property management with analytics and reporting features."
                            technologies={["React", "Chart.js", "Node.js", "PostgreSQL"]}
                            image="/placeholder.svg?height=300&width=600"
                        />
                        <ProjectCard
                            title="Community Forum"
                            description="Real-time discussion platform with user authentication and content moderation."
                            technologies={["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"]}
                            image="/placeholder.svg?height=300&width=600"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

// Helper Components
function ExperienceCard(props: any) {
    const { company, position, period, description, achievements, technologies } = props;
    return (
        <Card className="bg-black/40 backdrop-blur-md border-white/10 overflow-hidden">
            <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                        <Briefcase className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-2xl font-bold text-white">{company}</h3>
                            <div className="flex items-center text-zinc-400 mt-1 md:mt-0">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span>{period}</span>
                            </div>
                        </div>
                        <h4 className="text-lg font-medium text-blue-400 mb-3">{position}</h4>
                        <p className="text-zinc-300 mb-4">{description}</p>

                        <div className="mb-4">
                            <h5 className="text-white font-medium mb-2 flex items-center">
                                <Award className="w-4 h-4 mr-2 text-zinc-400" /> Key Achievements
                            </h5>
                            <ul className="space-y-2">
                                {achievements.map((achievement:any, index:any) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-zinc-300">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                            {technologies.map((tech:any, index:any) => (
                                <Badge key={index} className="bg-white/10 text-zinc-300 hover:bg-white/15">{tech}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function ServiceDetail(props:any) {
    const { title, description, features, technologies } =props
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-zinc-300">{description}</p>
            </div>

            <div>
                <h4 className="text-lg font-medium text-white mb-3">What I Offer:</h4>
                <ul className="space-y-2">
                    {features.map((feature:any, index:any) => (
                        <li key={index} className="flex items-start">
                            <ArrowRight className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-300">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-lg font-medium text-white mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech:any, index:any) => (
                        <Badge key={index} className="bg-white/10 text-zinc-300 hover:bg-white/15">{tech}</Badge>
                    ))}
                </div>
            </div>

            <Button className="bg-white text-black hover:bg-zinc-200 transition-colors">
                Learn More <ExternalLink className="ml-1 w-4 h-4" />
            </Button>
        </div>
    )
}

function TestimonialCard(props:any) {
    const { name, position, quote, image } =props
    return (
        <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-12 w-12 border border-white/10">
                        <AvatarImage src={image} alt={name} />
                        <AvatarFallback className="bg-gradient-to-br from-gray-900 to-black">
                            {name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h4 className="text-lg font-medium text-white">{name}</h4>
                        <p className="text-zinc-400">{position}</p>
                    </div>
                </div>
                <p className="text-zinc-300 italic">"{quote}"</p>
            </CardContent>
        </Card>
    )
}

function ProcessCard(props:any) {
    const { step, title, description }=props;
    return (
        <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-white text-black font-bold flex items-center justify-center mx-auto mb-4">
                    {step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-zinc-400">{description}</p>
            </CardContent>
        </Card>
    )
}

function ProjectCard(props:any) {
    const { title, description, technologies, image }= props;
    return (
        <Card className="bg-black/40 backdrop-blur-md border-white/10 overflow-hidden">
            <div className="h-48 relative overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-zinc-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech:any, index:any) => (
                        <Badge key={index} className="bg-white/10 text-zinc-300 hover:bg-white/15">{tech}</Badge>
                    ))}
                </div>
                <div className="flex items-center justify-between">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        View Details
                    </Button>
                    <Button variant="ghost" className="text-zinc-400 hover:text-white p-2">
                        <ExternalLink className="w-5 h-5" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

// Freelance Services Section
export function FreelanceServicesSection() {
    return (
        <section id="services" className="relative z-10 py-20">
            <div className="container px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Freelance Services</h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
                        Specialized solutions tailored to your business needs
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FreelanceServiceCard
                            title="Custom Web Solutions"
                            description="Tailored websites and web applications designed to meet your specific business requirements with a focus on performance and usability."
                            price="Starting at $1,000"
                            deliveryTime="2-4 weeks"
                            icon={<ArrowRight className="w-8 h-8 text-blue-400" />}
                        />
                        <FreelanceServiceCard
                            title="Mobile App Development"
                            description="Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences."
                            price="Starting at $2,500"
                            deliveryTime="4-8 weeks"
                            icon={<ArrowRight className="w-8 h-8 text-blue-400" />}
                        />
                        <FreelanceServiceCard
                            title="API Integration & Development"
                            description="Custom API development and third-party integrations to enhance your existing systems and applications."
                            price="Starting at $800"
                            deliveryTime="1-3 weeks"
                            icon={<ArrowRight className="w-8 h-8 text-blue-400" />}
                        />
                        <FreelanceServiceCard
                            title="E-commerce Solutions"
                            description="Full-featured online stores with product management, payment processing, and customer account features."
                            price="Starting at $1,800"
                            deliveryTime="3-6 weeks"
                            icon={<ArrowRight className="w-8 h-8 text-blue-400" />}
                        />
                        <FreelanceServiceCard
                            title="CRM & Management Tools"
                            description="Custom CRM solutions and management tools designed to streamline your business processes and improve efficiency."
                            price="Starting at $2,000"
                            deliveryTime="3-6 weeks"
                            icon={<ArrowRight className="w-8 h-8 text-blue-400" />}
                        />
                        <FreelanceServiceCard
                            title="Consultation & Strategy"
                            description="Technical consultation and strategy sessions to help you make informed decisions about your digital projects."
                            price="$100/hour"
                            deliveryTime="Flexible"
                            icon={<ArrowRight className="w-8 h-8 text-blue-400" />}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function FreelanceServiceCard(props:any) {
    const { title, description, price, deliveryTime, icon } =props;
    return (
        <Card className="bg-black/40 backdrop-blur-md border-white/10 h-full flex flex-col">
            <CardContent className="p-6 flex-grow flex flex-col">
                <div className="mb-4">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-zinc-400 mb-6 flex-grow">{description}</p>
                <div className="mt-auto space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Starting at</span>
                        <span className="text-white font-semibold">{price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-zinc-400">Delivery Time</span>
                        <span className="text-white font-semibold">{deliveryTime}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

// Skills Expertise Section with Progress Bars
export function SkillsExpertiseSection() {
    return (
        <section id="expertise" className="relative z-10 py-20">
            <div className="container px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Technical Expertise</h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
                        My proficiency levels across different technologies
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        <SkillProgressBar skill="Frontend Development" percentage={95} />
                        <SkillProgressBar skill="Mobile App Development" percentage={90} />
                        <SkillProgressBar skill="Backend Development" percentage={85} />
                        <SkillProgressBar skill="Database Management" percentage={80} />
                        <SkillProgressBar skill="UI/UX Design" percentage={75} />
                        <SkillProgressBar skill="DevOps & Deployment" percentage={70} />
                    </div>
                </div>
            </div>
        </section>
    )
}

function SkillProgressBar(props:any) {
    const { skill, percentage } =props;
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-medium text-white">{skill}</h4>
                <span className="text-zinc-400">{percentage}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}