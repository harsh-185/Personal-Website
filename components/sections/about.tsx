"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a <span className="text-foreground font-medium">Computer Science and Computational Mathematics</span> student at
              Pennsylvania State University with a passion for software engineering, machine learning, and research.
              Currently maintaining a <span className="text-primary font-medium">3.8/4.0 GPA</span>.
            </p>
            <p>
              My experience spans from developing AI-driven platforms to conducting
              research on bias in large language models. I've worked with diverse technologies including React
              Native, AWS, Flask, and various machine learning frameworks.
            </p>
            <p>
              As a former <span className="text-foreground font-medium">CTO at Marble</span>, I led
              development teams using Agile methodologies and shipped products that make a positive
              impact. Currently, I'm working on frontier AI safety at Scale AI and building healthcare solutions at SIGNUM.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
