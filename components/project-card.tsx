import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Globe } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  liveLink?: string
  githubLink: string
  tags: string[]
}

export function ProjectCard({ title, description, image, liveLink, githubLink, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-black/40 backdrop-blur-md border-gray-800 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        <Button variant="default" size="sm" className="flex-1" asChild>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <Globe className="mr-2 h-4 w-4" />
            Live
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
