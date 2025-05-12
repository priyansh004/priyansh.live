"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Mail, MapPin, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import CalEmbed from "@calcom/embed-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Send className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
              <p className="text-zinc-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-zinc-300">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-white text-black hover:bg-zinc-200">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>

      <div>
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full">
          <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Email</h4>
                <p className="text-zinc-400">priyansh.buildspace@gmail.com</p>
                <a
                  href="mailto:priyansh.buildspace@gmail.com"
                  className="text-blue-400 hover:text-blue-300 text-sm mt-1 inline-block"
                >
                  Send an email
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Phone</h4>
                <p className="text-zinc-400">+91 8347110736</p>
                <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300 text-sm mt-1 inline-block">
                  Give me a call
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Location</h4>
                <p className="text-zinc-400">India</p>
                <p className="text-zinc-400 text-sm mt-1">Available for remote work worldwide</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Availability</h4>
                <p className="text-zinc-400">Anytime</p>
                <a
                  href="https://cal.com/priyansh.buildspace/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm mt-1 inline-block"
                >
                  Schedule a meeting
                </a>
                {/* <CalEmbed
                  calLink="priyansh.buildspace/15min"
                  style={{ height: "600px", width: "100%" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
