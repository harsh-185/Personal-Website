"use client"

import { Button } from "./ui/button"
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -z-10 inset-0 bg-pattern opacity-30"></div>
      <div className="absolute -z-10 top-0 left-1/4 h-[200px] w-[200px] rounded-full blur-[150px] bg-purple/10"></div>
      <div className="absolute -z-10 bottom-0 right-1/4 h-[200px] w-[200px] rounded-full blur-[150px] bg-cyan/10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Harsh Maheshwari. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors">
              <a href="https://github.com/harsh-185" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors">
              <a
                href="https://www.linkedin.com/in/hmaheshwari18/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors">
              <a href="mailto:hjm5556@psu.edu" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-colors">
              <a href="tel:+18142807099" aria-label="Phone">
                <Phone className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary to-purple hover:opacity-90 transition-opacity"
            onClick={() => window.open("/Harsh_Maheshwari_Resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </footer>
  )
}
