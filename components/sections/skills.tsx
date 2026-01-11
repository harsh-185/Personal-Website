"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    name: "Languages",
    skills: [
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "C/C++",
      "Kotlin",
      "Dart",
      "R",
      "SQL",
      "HTML/CSS",
      "Bash",
      "Verilog",
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "React Native", "Next.js", "Node.js", "Flask", "TensorFlow", "Pandas", "NumPy"],
  },
  {
    name: "Tools & Technologies",
    skills: ["MongoDB", "Firebase", "AWS", "Azure", "Git", "Linux"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="skills" ref={ref} className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Skills</h2>
            <p className="text-muted-foreground max-w-xl">
              Technologies and tools I work with regularly.
            </p>
          </div>

          <div className="space-y-10 max-w-3xl">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-medium mb-4 text-primary">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.03 }}
                      className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

