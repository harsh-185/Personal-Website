"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Penn State College of Medicine",
    location: "State College, PA",
    period: "May 2024 – Present",
    color: "from-cyan-500 to-blue-500",
    description: [
      'Directed the development of a cross-platform mobile application for managing pediatric and adult heart disease, built with React Native and JavaScript, leveraging Firebase for real-time data synchronization and streamlining patient record access for 500+ users.",art disease, built with React Native and JavaScript, leveraging Firebase for real-time data synchronization and streamlining patient record access for 500+ users.',
      "Collaborated in an agile team of 5, successfully delivering the app to the university by the deadline.",
      "Conducted extensive beta testing with 20+ users to ensure the app's functionality and user experience.",
    ],
    skills: ["React Native", "JavaScript", "Firebase", "Agile"],
  },
  {
    title: "Research Intern",
    company: "College of Information Science and Technology",
    location: "State College, PA",
    period: "April 2024 – Present",
    color: "from-purple-500 to-pink-500",
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
    period: "September 2023 – Present",
    color: "from-pink-500 to-orange-500",
    description: [
      "Led the development and launch of an AI-driven mental health platform, managing technical teams with Agile and Scrum methodologies, and achieved 50+ downloads in the first week on the App Store.",
      "Secured $7,500 in awards and engaged with over 300 potential users to tailor product features.",
      "Spearheaded a website using Node.js, Next.js, React, and TypeScript, leading a team of 4 members, delivering the MVP in under one month",
      "Built REST API endpoints using Flask to connect with AWS, Firebase, OpenAI and Eleven Labs calls for data retrieval, enabling generative AI–powered insights and AI-powered voice calling in real time.",
    ],
    skills: ["Node.js", "Next.js", "React", "TypeScript", "Flask", "AWS", "Firebase", "OpenAI"],
  },
  {
    title: "Software Engineering Intern",
    company: "World Hope",
    location: "State College, PA",
    period: "January 2024 – April 2024",
    color: "from-teal-400 to-emerald-500",
    description: [
      "Delivered the application to be launched to over 1,000 social workers in supporting 100,000+ child abuse victims.",
      "Architected and deployed a Python-based RAG (Retrieval-Augmented Generation) backend, leveraging MongoDB for rapid data retrieval and seamless AI query execution—scaling to support 1,000+ social workers.",
    ],
    skills: ["Python", "RAG", "MongoDB", "AI"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" ref={ref} className="section relative">
      {/* Background elements */}
      <div className="absolute -z-10 top-1/4 left-0 h-[300px] w-[300px] rounded-full blur-[150px] bg-cyan/10"></div>
      <div className="absolute -z-10 bottom-1/4 right-0 h-[300px] w-[300px] rounded-full blur-[150px] bg-purple/10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass overflow-hidden">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${exp.color}`}></div>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.title}
                        </CardTitle>
                        <CardDescription>
                          {exp.company} | {exp.location}
                        </CardDescription>
                      </div>
                      <CardDescription className="text-right">{exp.period}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
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
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
