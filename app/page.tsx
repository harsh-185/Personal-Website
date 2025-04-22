import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
