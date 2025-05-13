"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { projectsData as projects } from "@/lib/Projects"

interface Project {
  id: number
  title: string
  description: string
  shortDescription: string
  image: string
  images?: string[]
  liveLink?: string
  githubLink?: string
  tags: string[]
  category: "web" | "mobile" | "backend" | "design",
  story?: string
}



export function ProjectShowcase() {
  const [filter, setFilter] = useState<string>("all")
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="space-y-8 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Explore my portfolio of web, mobile, and backend projects. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Projects Grid */}
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
                        {project.githubLink && <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-black/60 border-white/20 text-white hover:bg-white/10"
                          asChild
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>}
                        {project.liveLink && <Button
                          variant="default"
                          size="sm"
                          className="flex-1 bg-white text-black hover:bg-zinc-200"
                          asChild
                        >
                          <Link href={project.liveLink}>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live
                          </Link>
                        </Button>
}
                      </div>
                    </div>
                  </div>
                  <Image
  src={project.images[0] || "/placeholder.svg"}
  alt={project.title}
  fill
  className="w-full h-auto object-cover aspect-video transition-transform duration-700 group-hover:scale-110"
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
                    <Link href={`/projects/${project.id}`}>
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}