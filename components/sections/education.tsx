"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="education" ref={ref} className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Education</h2>
            <p className="text-muted-foreground max-w-xl">
              Academic foundation in computer science and mathematics.
            </p>
          </div>

          <Card className="glass border-border/50 max-w-2xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Pennsylvania State University</h3>
                      <p className="text-muted-foreground">State College, PA</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      Aug 2022 – May 2026
                    </span>
                  </div>
                  
                  <p className="font-medium mb-1">B.S. in Computer Science; B.S. in Computational Mathematics</p>
                  <p className="text-primary font-medium mb-6">GPA: 3.8/4.0</p>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="h-4 w-4 text-primary" />
                        <h4 className="font-medium">Awards</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="badge-minimal">President Walker Award</span>
                        <span className="badge-minimal">President Sparks Award</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures & Algorithms",
                          "Machine Learning",
                          "Artificial Intelligence",
                          "Database Systems",
                          "Linear Algebra",
                          "Discrete Mathematics",
                          "Probability & Statistics",
                        ].map((course) => (
                          <span key={course} className="badge-minimal">
                            {course}
                          </span>
                        ))}
                      </div>
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
