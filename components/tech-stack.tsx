"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface TechItem {
  name: string
  icon: string
  category: string
  proficiency: number
}

const techItems: TechItem[] = [
  // Frontend
  { name: "React", icon: "/placeholder.svg?height=48&width=48", category: "frontend", proficiency: 95 },
  { name: "Next.js", icon: "/placeholder.svg?height=48&width=48", category: "frontend", proficiency: 90 },
  { name: "TypeScript", icon: "/placeholder.svg?height=48&width=48", category: "frontend", proficiency: 90 },
  { name: "Tailwind CSS", icon: "/placeholder.svg?height=48&width=48", category: "frontend", proficiency: 95 },
  { name: "Three.js", icon: "/placeholder.svg?height=48&width=48", category: "frontend", proficiency: 85 },
  { name: "Redux", icon: "/placeholder.svg?height=48&width=48", category: "frontend", proficiency: 90 },

  // Mobile
  { name: "React Native", icon: "/placeholder.svg?height=48&width=48", category: "mobile", proficiency: 90 },
  { name: "Flutter", icon: "/placeholder.svg?height=48&width=48", category: "mobile", proficiency: 80 },
  { name: "Kotlin", icon: "/placeholder.svg?height=48&width=48", category: "mobile", proficiency: 85 },
  { name: "Swift", icon: "/placeholder.svg?height=48&width=48", category: "mobile", proficiency: 75 },

  // Backend
  { name: "Node.js", icon: "/placeholder.svg?height=48&width=48", category: "backend", proficiency: 95 },
  { name: "Express", icon: "/placeholder.svg?height=48&width=48", category: "backend", proficiency: 90 },
  { name: "MongoDB", icon: "/placeholder.svg?height=48&width=48", category: "backend", proficiency: 90 },
  { name: "PostgreSQL", icon: "/placeholder.svg?height=48&width=48", category: "backend", proficiency: 85 },
  { name: "GraphQL", icon: "/placeholder.svg?height=48&width=48", category: "backend", proficiency: 85 },
  { name: "Firebase", icon: "/placeholder.svg?height=48&width=48", category: "backend", proficiency: 90 },

  // Tools
  { name: "Git", icon: "/placeholder.svg?height=48&width=48", category: "tools", proficiency: 95 },
  { name: "Docker", icon: "/placeholder.svg?height=48&width=48", category: "tools", proficiency: 85 },
  { name: "AWS", icon: "/placeholder.svg?height=48&width=48", category: "tools", proficiency: 80 },
  { name: "Figma", icon: "/placeholder.svg?height=48&width=48", category: "tools", proficiency: 85 },
]

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "mobile", name: "Mobile" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
  ]

  const filteredTech = techItems.filter((item) => item.category === activeCategory)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.id ? "bg-white text-black" : "bg-black/40 text-white hover:bg-white/10"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredTech.map((tech) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div
              className={`relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-300 ${
                hoveredTech === tech.name ? "border-blue-400/50 shadow-lg shadow-blue-500/10" : ""
              }`}
            >
              <div className="absolute bottom-0 left-0 h-1 bg-blue-500" style={{ width: `${tech.proficiency}%` }}></div>
              <div className="p-6 flex flex-col items-center justify-center">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    className="max-w-full max-h-full"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=48&width=48"
                    }}
                  />
                </div>
                <h3 className="text-center font-medium text-white">{tech.name}</h3>
                <div
                  className={`mt-2 text-blue-400 text-sm transition-opacity duration-300 ${
                    hoveredTech === tech.name ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {tech.proficiency}% Proficiency
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
