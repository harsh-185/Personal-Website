"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Award, ImageIcon } from "lucide-react"

const projects = [
  {
    title: "Nebula",
    description:
      "Achieved an accuracy of 94% and 80% for CNN models detecting brain tumors and Alzheimer's. Utilized 300+ DICOM files(CT Scans) to develop an algorithm for a 3D model of the brain. Rewarded with 1st place amongst 300 people in the category for usage of Generative AI.",
    icon: Brain,
    color: "from-cyan-500 to-blue-500",
    skills: ["Flask", "HTML", "CSS", "JavaScript", "CNN", "VTK", "NumPy", "TensorFlow"],
    date: "October 2023",
  },
  {
    title: "CNN Models for Image Classification",
    description:
      "Developed 4 image classification CNN models to identify and differentiate between vehicles, animals, flowers, fruits and vegetables with accuracy ranging from 85% to 95%",
    icon: ImageIcon,
    color: "from-purple-500 to-pink-500",
    skills: ["NumPy", "TensorFlow", "Matplotlib", "CNN"],
    date: "July 2023",
  },
  {
    title: "Signease",
    description:
      "Collaborated with a team of five to design and create a real-time ASL Translator app with an accuracy of 87%, delivering third-place success in a competitive Hack PSU event.",
    icon: Award,
    color: "from-teal-400 to-emerald-500",
    skills: ["NumPy", "Matplotlib", "NPM", "TensorFlow", "Random Forest"],
    date: "March 2023",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" ref={ref} className="section relative">
      {/* Background elements */}
      <div className="absolute -z-10 top-1/3 left-1/4 h-[250px] w-[250px] rounded-full blur-[150px] bg-pink/10"></div>
      <div className="absolute -z-10 bottom-1/3 right-1/4 h-[250px] w-[250px] rounded-full blur-[150px] bg-teal/10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="glass h-full flex flex-col overflow-hidden animated-border">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-md bg-gradient-to-r ${project.color}`}>
                        <project.icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle>{project.title}</CardTitle>
                    </div>
                    <CardDescription>{project.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="badge-glow"
                          style={{ animationDelay: `${i * 0.05}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
