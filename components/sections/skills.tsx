"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Languages",
    color: "from-cyan-500 to-blue-500",
    skills: [
      "Java",
      "Python",
      "MySQL",
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "Dart",
      "Kotlin",
      "C",
      "C++",
      "R",
      "Racket",
      "Bash",
      "Verilog",
    ],
  },
  {
    name: "Frameworks & Libraries",
    color: "from-purple-500 to-pink-500",
    skills: ["React", "Next.js", "Node.js", "Flask", "Django", "Flutter", "TensorFlow", "NumPy", "Pandas"],
  },
  {
    name: "Tools & Technologies",
    color: "from-teal-400 to-emerald-500",
    skills: ["Git", "AWS", "Firebase", "MongoDB", "Microsoft Azure", "Linux", "CNN", "NLP", "REST API"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="skills" ref={ref} className="section relative">
      {/* Background elements */}
      <div className="absolute -z-10 top-1/4 right-0 h-[300px] w-[300px] rounded-full blur-[150px] bg-purple/10"></div>
      <div className="absolute -z-10 bottom-1/4 left-0 h-[300px] w-[300px] rounded-full blur-[150px] bg-cyan/10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">Skills</h2>

          <Card className="glass overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-10">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3
                      className={`text-xl font-medium mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          className={`text-sm py-1.5 px-3 badge-glow bg-gradient-to-r ${category.color} border-0 text-white`}
                          style={{
                            animationDelay: `${i * 0.05}s`,
                            transition: "all 0.3s ease",
                          }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
