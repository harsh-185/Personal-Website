"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const contactLinks = [
  {
    name: "Email",
    value: "hjm5556@psu.edu",
    href: "mailto:hjm5556@psu.edu",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/hmaheshwari18",
    href: "https://www.linkedin.com/in/hmaheshwari18/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "github.com/harsh-185",
    href: "https://github.com/harsh-185",
    icon: Github,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contact" ref={ref} className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-12">
            I'm always open to discussing new opportunities, interesting projects, or just having a conversation about technology and AI.
          </p>

          <div className="space-y-4 mb-12">
            {contactLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between p-4 rounded-lg glass border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">{link.name}</p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href="mailto:hjm5556@psu.edu">
              <Mail className="mr-2 h-5 w-5" />
              Send me an email
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
