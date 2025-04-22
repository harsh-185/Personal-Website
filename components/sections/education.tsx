"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="education" ref={ref} className="section relative">
      {/* Background elements */}
      <div className="absolute -z-10 top-1/3 right-1/4 h-[250px] w-[250px] rounded-full blur-[150px] bg-teal/10"></div>
      <div className="absolute -z-10 bottom-1/3 left-1/4 h-[250px] w-[250px] rounded-full blur-[150px] bg-pink/10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center neon-text">Education</h2>

          <Card className="glass overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Pennsylvania State University
                    </CardTitle>
                    <CardDescription>State College, PA</CardDescription>
                  </div>
                  <CardDescription className="text-right">August 2022 – May 2026</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-16">
              <p className="font-medium">BS in Computer Science and BS in Mathematics</p>
              <p className="text-muted-foreground mb-4">GPA: 3.8/4.0</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-md bg-gradient-to-r from-orange-400 to-pink-500">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                      Awards
                    </span>
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>President Walker Award</li>
                    <li>President Sparks Award</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    Relevant Coursework
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Data Structures & Algorithms</li>
                        <li>Machine Learning</li>
                        <li>Artificial Intelligence</li>
                        <li>Database Systems</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Linear Algebra</li>
                        <li>Discrete Mathematics</li>
                        <li>Calculus & Analysis</li>
                        <li>Probability & Statistics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
