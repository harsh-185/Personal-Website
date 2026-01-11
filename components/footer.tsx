"use client"

import { Button } from "./ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Harsh Maheshwari
          </p>
          
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <a href="https://github.com/harsh-185" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <a
                href="https://www.linkedin.com/in/hmaheshwari18/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <a href="mailto:hjm5556@psu.edu" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
