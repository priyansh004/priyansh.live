"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface TechItem {
  name: string
  icon: string
  category: string
  proficiency: number
}
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiShadcnui,SiThreedotjs, SiRedux, SiExpress,SiVite, SiSocketdotio, SiFramer, SiReactrouter, SiExpo, SiFlutter, SiKotlin, SiAndroid, SiFirebase, SiMongodb, SiPostgresql, SiGraphql, SiMysql, SiPrisma, SiTrpc, SiAmazonwebservices, SiGooglecloud, SiPostman, SiVercel, SiFigma } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const techItems = [
  // Frontend
  { name: 'React', icon: <FaReact  size={32} />, category: 'frontend', proficiency: 95, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs size={32}  />, category: 'frontend', proficiency: 90, color: '#000000' },
  { name: 'TypeScript', icon: <SiTypescript  size={32} />, category: 'frontend', proficiency: 90, color: '#007ACC' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss  size={32} />, category: 'frontend', proficiency: 95, color: '#06B6D4' },
  { name: 'Three.js', icon: <SiThreedotjs size={32}  />, category: 'frontend', proficiency: 85, color: '#000000' },
  { name: 'Redux', icon: <SiRedux size={32} />, category: 'frontend', proficiency: 90, color: '#764ABC' },
  { name: 'Vite', icon: <SiVite size={32}  />, category: 'frontend', proficiency: 90, color: '#646CFF' },
  { name: 'Socket.io', icon: <SiSocketdotio  size={32} />, category: 'frontend', proficiency: 90, color: '#010002' },
  { name: 'Framer Motion', icon: <SiFramer size={32}  />, category: 'frontend', proficiency: 85, color: '#0081F1' },
  { name: 'Shad-cn', icon: <SiShadcnui size={32}  />, category: 'frontend', proficiency: 85, color: '#0081F1' },

  // Mobile
  { name: 'React Native', icon: <FaReact  size={32} />, category: 'mobile', proficiency: 90, color: '#e661fb' },
  { name: 'Expo', icon: <SiExpo  size={32} />, category: 'mobile', proficiency: 80, color: '#000000' },
  { name: 'Flutter', icon: <SiFlutter size={32}  />, category: 'mobile', proficiency: 80, color: '#02569B' },
  { name: 'Kotlin', icon: <SiKotlin size={32}  />, category: 'mobile', proficiency: 85, color: '#7F52FF' },
  { name: 'Android SDK', icon: <SiAndroid size={32}  />, category: 'mobile', proficiency: 85, color: '#3DDC84' },

  // Backend
  { name: 'Node.js', icon: <FaNodeJs size={32}  />, category: 'backend', proficiency: 95, color: '#68A063' },
  { name: 'Express', icon: <SiExpress  size={32} />, category: 'backend', proficiency: 90, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb size={32}  />, category: 'backend', proficiency: 90, color: '#47A248' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={32}  />, category: 'backend', proficiency: 85, color: '#336791' },
  { name: 'GraphQL', icon: <SiGraphql  size={32} />, category: 'backend', proficiency: 85, color: '#E10098' },
  { name: 'Firebase', icon: <SiFirebase size={32}  />, category: 'backend', proficiency: 90, color: '#FFCA28' },
  { name: 'MySQL', icon: <SiMysql size={32}  />, category: 'backend', proficiency: 90, color: '#4479A1' },
  { name: 'Prisma', icon: <SiPrisma  size={32} />, category: 'backend', proficiency: 90, color: '#2D3748' },
  { name: 'tRPC', icon: <SiTrpc  size={32} />, category: 'backend', proficiency: 80, color: '#0 size={32} 00000' },

  // Tools
  { name: 'Git', icon: <FaGitAlt size={32} />, category: 'tools', proficiency: 95, color: '#F05032' },
  { name: 'Docker', icon: <FaDocker  size={32} />, category: 'tools', proficiency: 85, color: '#2496ED' },
  { name: 'AWS', icon: <SiAmazonwebservices size={32}  />, category: 'tools', proficiency: 80, color: '#FF9900' },
  { name: 'Figma', icon: <SiFigma size={32}  />, category: 'tools', proficiency: 85, color: '#F24E1E' },
  { name: 'Google Cloud', icon: <SiGooglecloud size={32}  />, category: 'tools', proficiency: 85, color: '#4285F4' },
  { name: 'VS Code', icon: <VscVscode size={32} />, category: 'tools', proficiency: 85, color: '#007ACC' },
  { name: 'Postman', icon: <SiPostman size={32}  />, category: 'tools', proficiency: 85, color: '#FF6C37' },
  { name: 'Vercel', icon: <SiVercel size={32}  />, category: 'tools', proficiency: 85, color: '#000000' },
];

export default techItems;


export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const categories = [
    { id: "frontend", name: "Webiste" },
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
                 
                  {tech.icon}
                </div>
                <h3 className="text-center font-medium text-white">{tech.name}</h3>
               
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
