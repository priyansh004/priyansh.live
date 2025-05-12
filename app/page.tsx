import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SolarSystemBackground } from "@/components/solar-system-background"
import { ProjectShowcase } from "@/components/project-showcase"
import { TechStack } from "@/components/tech-stack"
import { ContactSection } from "@/components/contact-section"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Interactive Space Background */}
      <SolarSystemBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[90vh] flex items-center">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Avatar className="h-32 w-32 mx-auto border-4 border-white/10 shadow-glow">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                <AvatarFallback className="bg-gradient-to-br from-gray-900 to-black text-2xl">JD</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Priyansh Chauhan
              <span className="block text-2xl md:text-3xl mt-2 text-zinc-400">Software Developer & Designer</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              I create elegant digital experiences that solve real problems. Specializing in web and mobile development
              with a focus on user experience.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 transition-colors" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 transition-colors"
                asChild
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" asChild className="text-white/70 hover:text-white hover:bg-white/10">
            <a href="#about">
              <ChevronDown className="h-8 w-8" />
              <span className="sr-only">Scroll Down</span>
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="bg-black/40 backdrop-blur-md border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
                    <div className="space-y-4 text-zinc-300">
                      <p>
                        With over 5 years of experience in software development, I've worked on projects ranging from
                        small business websites to complex enterprise applications.
                      </p>
                      <p>
                        My passion for clean code and intuitive design drives me to create solutions that not only work
                        flawlessly but are also a joy to use.
                      </p>
                      <p>
                        When I'm not coding, you can find me exploring space photography, playing chess, or hiking in
                        the mountains.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="bg-black/40 backdrop-blur-md border-white/10">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">Services</h3>
                    <ul className="space-y-4">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            {service.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-medium text-white">{service.title}</h4>
                            <p className="text-zinc-400">{service.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">My Skills</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
              Technologies and tools I work with
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm bg-black/40 backdrop-blur-md border-white/10 text-white"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            <TechStack />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Featured Projects</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">A selection of my recent work</p>
            <ProjectShowcase />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Get In Touch</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto text-center mb-12">
              Interested in working together? Let's discuss your project.
            </p>
            <ContactSection />
          </div>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Web Development",
    description: "Responsive websites and web applications built with modern technologies.",
    icon: <span className="text-blue-400">🌐</span>,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <span className="text-blue-400">📱</span>,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces with a focus on user experience.",
    icon: <span className="text-blue-400">🎨</span>,
  },
  {
    title: "Custom Solutions",
    description: "Tailored software solutions to address your specific business needs.",
    icon: <span className="text-blue-400">⚙️</span>,
  },
]

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "Kotlin",
  "Swift",
  "HTML/CSS",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Docker",
  "Git",
  "Figma",
  "UI/UX Design",
]
