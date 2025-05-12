"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BookConsultationProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function BookConsultation({ variant = "outline", size = "default", className }: BookConsultationProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [step, setStep] = useState<number>(1)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleSubmit = () => {
    // Here you would integrate with Google Calendar API
    // For now, we'll just simulate a successful booking
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
      // Reset form
      setStep(1)
      setDate(undefined)
      setTimeSlot("")
      setName("")
      setEmail("")
    }, 3000)
  }

  const timeSlots = [
    "9:00 AM - 9:30 AM",
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "1:00 PM - 1:30 PM",
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className} onClick={() => setIsOpen(true)}>
          <Calendar className="mr-2 h-4 w-4" />
          Book a Consultation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-blue-950/90 backdrop-blur-xl border border-blue-500/30">
        <DialogHeader>
          <DialogTitle className="text-white">Book a Free Consultation</DialogTitle>
          <DialogDescription className="text-blue-100/70">
            Schedule a 30-minute call to discuss your project needs.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-blue-900/50 mx-auto flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Booking Confirmed!</h3>
            <p className="text-blue-100/70">You'll receive a confirmation email with the meeting details shortly.</p>
          </div>
        ) : (
          <>
            {step === 1 && (
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-blue-100">
                    Select a Date
                  </Label>
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-blue-500/30 bg-blue-900/20"
                    disabled={(date) => {
                      // Disable weekends and past dates
                      return date < new Date() || date.getDay() === 0 || date.getDay() === 6
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-blue-100">
                    Select a Time Slot
                  </Label>
                  <Select value={timeSlot} onValueChange={setTimeSlot}>
                    <SelectTrigger className="w-full bg-blue-900/20 border-blue-500/30 text-blue-100">
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent className="bg-blue-950 border-blue-500/30">
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot} className="text-blue-100">
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-none"
                  disabled={!date || !timeSlot}
                  onClick={() => setStep(2)}
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-blue-100">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-blue-900/20 border-blue-500/30 text-blue-100"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-100">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-blue-900/20 border-blue-500/30 text-blue-100"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-blue-500/30 text-blue-100 hover:bg-blue-900/50 hover:text-blue-100"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-none"
                    disabled={!name || !email}
                    onClick={handleSubmit}
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
