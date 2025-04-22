"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="section relative">
      {/* Background elements */}
      <div className="absolute -z-10 top-1/4 right-1/4 h-[300px] w-[300px] rounded-full blur-[150px] bg-purple/10"></div>
      <div className="absolute -z-10 bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full blur-[150px] bg-cyan/10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">About Me</h2>

          <Card className="glass overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4">
                <p>
                  I'm a <span className="font-medium text-cyan-500">Computer Science and Mathematics student</span> at
                  Pennsylvania State University with a passion for software engineering, machine learning, and research.
                  Currently maintaining a <span className="font-medium text-purple-500">3.8/4.0 GPA</span>, I'm
                  dedicated to applying my technical skills to solve real-world problems.
                </p>
                <p>
                  My experience spans from developing{" "}
                  <span className="font-medium text-pink-500">AI-driven mental health platforms</span> to conducting
                  research on bias in large language models. I've worked with diverse technologies including React
                  Native, Firebase, Flask, and various machine learning frameworks.
                </p>
                <p>
                  As a <span className="font-medium text-teal-500">Chief Technical Officer</span> at Marble, I've led
                  development teams using Agile methodologies and delivered successful products that make a positive
                  impact. I'm particularly interested in the intersection of technology and healthcare, where I've
                  contributed to applications that support medical professionals and patients.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
