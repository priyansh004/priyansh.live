"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Smartphone, Database, Palette, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  technologies: string[]
}

const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    description: "Modern, responsive web applications with cutting-edge technologies.",
    icon: <Globe className="h-6 w-6 text-blue-400" />,
    technologies: ["React", "Next.js", "Vue", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <Smartphone className="h-6 w-6 text-blue-400" />,
    technologies: ["React Native", "Flutter", "Kotlin", "Swift", "Expo", "Firebase"],
  },
  {
    id: "backend",
    title: "Backend Systems",
    description: "Scalable, secure backend services and APIs for your applications.",
    icon: <Database className="h-6 w-6 text-blue-400" />,
    technologies: ["Node.js", "Python", "GraphQL", "REST", "MongoDB", "PostgreSQL"],
  },
  {
    id: "design",
    title: "UI/UX Design",
    description: "User-centered design that balances aesthetics with functionality.",
    icon: <Palette className="h-6 w-6 text-blue-400" />,
    technologies: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Testing", "Design Systems"],
  },
]

export function ServiceCards() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {services.map((service) => (
        <Card
          key={service.id}
          className={`relative overflow-hidden bg-blue-950/20 backdrop-blur-sm border border-blue-500/20 transition-all duration-300 ${
            hoveredId === service.id ? "border-blue-400/50 shadow-lg shadow-blue-500/10" : ""
          }`}
          onMouseEnter={() => setHoveredId(service.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-lg bg-blue-900/50 border border-blue-500/30">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-blue-100/80 mb-4">{service.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {hoveredId === service.id && (
              <motion.div
                className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
