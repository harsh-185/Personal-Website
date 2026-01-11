"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Award, Zap, Github, ExternalLink, Youtube } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Zenny.ai",
    description:
      "Predictive execution co-pilot for Slack/Teams that connects to Jira, Slack, OKR platforms, and wikis to detect misalignment and risks early. Created a working MVP within 1 month. Impact: earlier blocker detection; managers save approximately 4 hours/week on status updates.",
    icon: Zap,
    skills: ["AWS", "Python", "LangChain", "Vector DB", "Airweave API"],
    date: "2024 – Present",
    link: "https://youtu.be/f4X6736zvsg",
    linkType: "youtube",
  },
  {
    title: "Nebula",
    description:
      "Built tumor and Alzheimer's classifiers on 300+ DICOM CTs with 3D visualization via VTK; achieved accuracies up to 94% and 80%. Won 1st place in Generative AI category at HackPSU.",
    icon: Brain,
    skills: ["Flask", "HTML/CSS/JS", "CNN", "VTK", "NumPy", "TensorFlow"],
    date: "Oct 2023",
    link: "https://github.com/Medify-2-0/HackPSU_Fall2023",
    linkType: "github",
  },
  {
    title: "Signease",
    description:
      "Collaborated with a team of five to design and create a real-time ASL Translator app with an accuracy of 87%, delivering third-place success in a competitive Hack PSU event.",
    icon: Award,
    skills: ["NumPy", "Matplotlib", "TensorFlow", "Random Forest", "Computer Vision"],
    date: "March 2023",
    link: "https://github.com/Team-Mustangs/Spring-Hack-PSU",
    linkType: "github",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="projects" ref={ref} className="section relative">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of projects I've built, from AI-powered tools to award-winning hackathon submissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="glass h-full flex flex-col card-hover border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                        <project.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-sm">{project.date}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="badge-minimal"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <Button asChild variant="outline" size="sm" className="gap-2 w-full">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.linkType === "youtube" ? (
                            <>
                              <Youtube className="h-4 w-4" />
                              Watch Demo
                            </>
                          ) : (
                            <>
                              <Github className="h-4 w-4" />
                              View Source
                            </>
                          )}
                        </Link>
                      </Button>
                    )}
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
