"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  liveLink: string
  githubLink: string
  tags: string[]
  category: "web" | "mobile" | "backend" | "design"
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cosmic Explorer",
    description: "A space visualization app built with Three.js and React",
    image: "/placeholder.svg?height=400&width=600",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    tags: ["React", "Three.js", "WebGL"],
    category: "web",
  },
  {
    id: 2,
    title: "Orbit Mobile App",
    description: "Cross-platform mobile application for task management with offline capabilities",
    image: "/placeholder.svg?height=400&width=600",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    tags: ["React Native", "Firebase", "Redux"],
    category: "mobile",
  },
  {
    id: 3,
    title: "Stellar CMS",
    description: "Headless content management system with GraphQL API and multi-language support",
    image: "/placeholder.svg?height=400&width=600",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    tags: ["Node.js", "GraphQL", "MongoDB"],
    category: "backend",
  },
  {
    id: 4,
    title: "Galaxy Portfolio",
    description: "A responsive portfolio template for creative professionals",
    image: "/placeholder.svg?height=400&width=600",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "web",
  },
  {
    id: 5,
    title: "Nebula E-Commerce",
    description: "Full-featured e-commerce platform with payment processing and admin dashboard",
    image: "/placeholder.svg?height=400&width=600",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
  },
  {
    id: 6,
    title: "Pulsar Analytics",
    description: "Data visualization dashboard with real-time analytics and custom reports",
    image: "/placeholder.svg?height=400&width=600",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    tags: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    category: "web",
  },
]

export function ProjectShowcase() {
  const [filter, setFilter] = useState<string>("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          className={
            filter === "all" ? "bg-white text-black hover:bg-zinc-200" : "border-white/20 text-white hover:bg-white/10"
          }
        >
          All Projects
        </Button>
        <Button
          variant={filter === "web" ? "default" : "outline"}
          onClick={() => setFilter("web")}
          className={
            filter === "web" ? "bg-white text-black hover:bg-zinc-200" : "border-white/20 text-white hover:bg-white/10"
          }
        >
          Web
        </Button>
        <Button
          variant={filter === "mobile" ? "default" : "outline"}
          onClick={() => setFilter("mobile")}
          className={
            filter === "mobile"
              ? "bg-white text-black hover:bg-zinc-200"
              : "border-white/20 text-white hover:bg-white/10"
          }
        >
          Mobile
        </Button>
        <Button
          variant={filter === "backend" ? "default" : "outline"}
          onClick={() => setFilter("backend")}
          className={
            filter === "backend"
              ? "bg-white text-black hover:bg-zinc-200"
              : "border-white/20 text-white hover:bg-white/10"
          }
        >
          Backend
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="group"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card className="overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="relative aspect-video overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 ${hoveredId === project.id ? "opacity-100" : ""}`}
                >
                  <div className="w-full">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
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
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 line-clamp-2">{project.description}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-blue-300 hover:bg-white/5 p-0 -ml-2"
                  asChild
                >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    View Details <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
