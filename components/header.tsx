"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { Download, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "glass py-2 backdrop-blur-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="#home" className="text-xl font-bold neon-text relative">
          <span className="relative z-10">HM</span>
          <span className="absolute -inset-1 rounded-lg bg-primary/10 blur-sm -z-10"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                activeSection === item.href.substring(1) ? "text-primary" : ""
              }`}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button
            size="sm"
            className="hidden md:flex bg-gradient-to-r from-primary to-purple hover:opacity-90 transition-opacity"
            onClick={() => window.open("/Harsh_Maheshwari_Resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1) ? "text-primary" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              size="sm"
              className="w-full bg-gradient-to-r from-primary to-purple hover:opacity-90 transition-opacity"
              onClick={() => window.open("/Harsh_Maheshwari_Resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
