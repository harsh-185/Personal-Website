"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contact" ref={ref} className="section relative">
      {/* Background elements */}
      <div className="absolute -z-10 top-1/3 right-0 h-[300px] w-[300px] rounded-full blur-[150px] bg-purple/10"></div>
      <div className="absolute -z-10 bottom-1/3 left-0 h-[300px] w-[300px] rounded-full blur-[150px] bg-cyan/10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">Contact Me</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="border-border/50 focus-visible:ring-cyan-500" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="border-border/50 focus-visible:ring-cyan-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      className="border-border/50 focus-visible:ring-cyan-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="glass overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a
                        href="mailto:hjm5556@psu.edu"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hjm5556@psu.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a href="tel:+18142807099" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (814) 280-7099
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/hmaheshwari18/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/hmaheshwari18
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <a
                        href="https://github.com/harsh-185"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/harsh-185
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
