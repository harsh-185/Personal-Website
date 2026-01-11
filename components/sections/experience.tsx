"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "GenAI Technical Advisor Intern",
    company: "Scale AI",
    location: "San Francisco, CA",
    period: "Jun 2025 – Present",
    description: [
      "Prompt-engineered frontier LLMs; wrote 150+ tests (reasoning, tool-use, safety, retrieval); fixes cut jailbreaks/hallucinations by 20–30%.",
      "Systematically tested LLM tool-calling strategies; rewrote instructions and examples, improving model's adherence to complex instructions by 12% and decreasing tool errors by 10%.",
    ],
    skills: ["LLMs", "Prompt Engineering", "AI Safety", "Tool-Use Testing"],
  },
  {
    title: "Software Engineer",
    company: "SIGNUM",
    location: "State College, PA",
    period: "Aug 2025 – Present",
    description: [
      "Designed and developed a React Native app; Migrated backend services on AWS increasing the security and efficiency by 20%.",
      "Engineered and launched geofencing and wearable event processing features, increasing caregiver response time to critical events by 25% and contributing to enhanced patient safety and well-being.",
    ],
    skills: ["React Native", "AWS", "Geofencing", "Wearables"],
  },
  {
    title: "Research Intern",
    company: "College of Information Science and Technology",
    location: "State College, PA",
    period: "April 2024 – Present",
    description: [
      "Publishing a research paper as the lead author on the bias by LLM's on 20+ stereotypical subjects by Llama 2 7B using graphs.",
      "Developed Python scripts and Jupyter notebooks to automate data collection, leveraging Flask API to retrieve model responses from various LLM models on Hugging face",
    ],
    skills: ["Python", "Jupyter", "Flask", "LLMs", "Llama 2"],
  },
  {
    title: "Chief Technical Officer",
    company: "Marble",
    location: "State College, PA",
    period: "Sep 2023 – Feb 2025",
    description: [
      "Launched an AI-driven mental-health platform; led a Next.js/React/TypeScript web MVP with Node.js APIs and Flask microservices integrating AWS, Firebase, OpenAI, and ElevenLabs.",
      "Shipped MVP in under 4 weeks (team of 4), achieved 50+ downloads in week 1, incorporated feedback from 300+ user interviews, and secured $7.5K in awards.",
    ],
    skills: ["Node.js", "Next.js", "React", "TypeScript", "Flask", "AWS", "Firebase", "OpenAI"],
  },
  {
    title: "Software Engineering Intern",
    company: "Penn State College of Medicine",
    location: "State College, PA",
    period: "May 2024 – Aug 2024",
    description: [
      "Developed a cross-platform React Native clinical-support app with Firebase synchronization and role-based access; coordinated 20+ beta tests and shipped on time.",
      "Collaborated in an agile team of 5; delivered reusable UI components and analytics aligned with clinician workflows.",
    ],
    skills: ["React Native", "Firebase", "Agile", "UI Components"],
  },
  {
    title: "Software Engineering Intern",
    company: "World Hope",
    location: "State College, PA",
    period: "Jan 2024 – Apr 2024",
    description: [
      "Architected a Python RAG backend with MongoDB enabling fast retrieval and AI Q&A for caseworkers; designed for 1,000+ field users serving 100,000+ beneficiaries.",
    ],
    skills: ["Python", "RAG", "MongoDB", "LangChain", "AI"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" ref={ref} className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience</h2>
            <p className="text-muted-foreground max-w-xl">
              My professional journey across AI, software engineering, and research.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-4 md:gap-8 ${
                    index % 2 === 0 ? "" : "md:direction-rtl"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-[5px] md:-translate-x-1.5 ring-4 ring-background" />

                  {/* Date - alternating sides on desktop */}
                  <div className={`hidden md:flex items-start ${index % 2 === 0 ? "justify-end pr-8" : "order-2 pl-8"}`}>
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-8" : "order-1 md:pr-8 md:text-right"}`}>
                    <Card className="glass border-border/50 card-hover">
                      <CardContent className="p-6">
                        <span className="text-sm text-muted-foreground font-medium md:hidden mb-2 block">
                          {exp.period}
                        </span>
                        <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary text-sm font-medium mb-1">{exp.company}</p>
                        <p className="text-muted-foreground text-sm mb-4">{exp.location}</p>
                        
                        <ul className={`space-y-2 mb-4 ${index % 2 !== 0 ? "md:text-left" : ""}`}>
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                              • {item}
                            </li>
                          ))}
                        </ul>
                        
                        <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? "md:justify-start" : ""}`}>
                          {exp.skills.map((skill, i) => (
                            <span key={i} className="badge-minimal">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
