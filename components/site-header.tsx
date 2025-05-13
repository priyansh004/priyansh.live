"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { FileText, Github, Linkedin, TwitterIcon, X } from "lucide-react"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="md:hidden text-white hover:text-blue-400" />
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full blur-sm"></div>
              {/* <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image src="/tlogo.png" alt="Logo" fill className="object-contain" />
              </div> */}

            </div>
            <span className="hidden font-bold sm:inline-block text-white">Priyansh Chauhan</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="text-white hover:text-blue-400 hover:bg-white/10">
            <a href="https://x.com/priyansh_0017" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="mr-2 h-4 w-4" />
              Twitter
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="text-white hover:text-blue-400 hover:bg-white/10">
            <a href="https://github.com/priyansh004" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="text-white hover:text-blue-400 hover:bg-white/10">
            <a href="https://www.linkedin.com/in/priyanshchauhan/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="text-white hover:text-blue-400 hover:bg-white/10">
            <a href="https://drive.google.com/file/d/1JWGrvfNxM-OsLgWDI49l-i3ePgjphTbB/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button variant="default" size="sm" className="bg-white text-black hover:bg-zinc-200" asChild>
            <a
              href="mailto:priyansh.buildspace@gmail.com"
            >
              Contact Me
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
