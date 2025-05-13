"use client"

import { Home, User, Code, Wrench, Send, FileText, Github, Mail, Linkedin, TwitterIcon, InstagramIcon, CodeIcon, SunMedium, LucideSignalMedium, Newspaper, Briefcase } from "lucide-react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import Image from "next/image"

export function PortfolioSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon" className="border-r border-white/10">
      <SidebarHeader className="flex items-center justify-center p-4">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full  blur-sm"></div>
          {/* <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-black border border-white/10">
            <span className="font-bold text-white text-xl">JD</span>
          </div> */}
    <Image src="/tlogo.png" alt="Logo" width={100} height={100} />
    </div>
      </SidebarHeader>
      <SidebarContent className="bg-black/60 backdrop-blur-md">
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-400">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Home" className="hover:bg-white/10 data-[active=true]:bg-white/10">
                  <Link href="/">
                    <Home className="text-blue-400" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="About" className="hover:bg-white/10 data-[active=true]:bg-white/10">
                  <Link href="#about">
                    <User className="text-blue-400" />
                    <span>About</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="About" className="hover:bg-white/10 data-[active=true]:bg-white/10">
                  <Link href="#experience">
                    <Briefcase className="text-blue-400" />
                    <span>Experiance</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Skills"
                  className="hover:bg-white/10 data-[active=true]:bg-white/10"
                >
                  <Link href="#skills">
                    <Wrench className="text-blue-400" />
                    <span>Skills</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Projects"
                  className="hover:bg-white/10 data-[active=true]:bg-white/10"
                >
                  <Link href="#projects">
                    <Code className="text-blue-400" />
                    <span>Projects</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Contact"
                  className="hover:bg-white/10 data-[active=true]:bg-white/10"
                >
                  <Link href="#contact">
                    <Send className="text-blue-400" />
                    <span>Contact</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="bg-white/10" />

        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-400">Connect</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Resume" className="hover:bg-white/10">
                  <a href="https://drive.google.com/file/d/1JWGrvfNxM-OsLgWDI49l-i3ePgjphTbB/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <FileText className="text-blue-400" />
                    <span>Resume</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Email" className="hover:bg-white/10">
                  <a href="mailto:priyansh.buildspace@gmail.com"
                  >
                    <Mail className="text-blue-400" />
                    <span>Email</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Twitter" className="hover:bg-white/10">
                  <a href="https://x.com/priyansh_0017" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className="text-blue-400" />
                    <span>Twitter</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="GitHub" className="hover:bg-white/10">
                  <a href="https://github.com/priyansh004" target="_blank" rel="noopener noreferrer">
                    <Github className="text-blue-400" />
                    <span>GitHub</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="LinkedIn" className="hover:bg-white/10">
                  <a href="https://www.linkedin.com/in/priyanshchauhan/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="insta" className="hover:bg-white/10">
                  <a href="https://www.instagram.com/priyansh.chauhan.17/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="text-blue-400" />
                    <span>Instagram</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="insta" className="hover:bg-white/10">
                  <a href="https://leetcode.com/u/priyansh_chauhan_17/" target="_blank" rel="noopener noreferrer">
                    <CodeIcon className="text-blue-400" />
                    <span>Leetcode</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="insta" className="hover:bg-white/10">
                  <a href="https://medium.com/@priyanshchauhan4416" target="_blank" rel="noopener noreferrer">
                    <Newspaper className="text-blue-400" />
                    <span>Medium</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-black/60 backdrop-blur-md p-4">
        <div className="text-xs text-center text-zinc-500">© {new Date().getFullYear()} PC buildspace</div>
      </SidebarFooter>
    </Sidebar>
  )
}
