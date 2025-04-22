"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="section min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 bg-pattern"></div>
      <div className="absolute -z-10 top-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full blur-[120px] bg-purple/20"></div>
      <div className="absolute -z-10 bottom-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full blur-[120px] bg-cyan/20"></div>
      <div className="absolute -z-10 top-[30%] left-[20%] h-[200px] w-[200px] rounded-full blur-[100px] bg-pink/10"></div>
      <div className="absolute -z-10 bottom-[20%] right-[15%] h-[250px] w-[250px] rounded-full blur-[100px] bg-teal/10"></div>

      <div className="container mx-auto px-4">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              className="mb-6 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="p-1 animated-border inline-block">
                <div className="bg-background px-4 py-1 rounded">
                  <span className="text-sm font-medium">
                    Software Engineer & Researcher
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 neon-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Harsh <span className="neon-purple">Maheshwari</span>
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl mb-6 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Computer Science & Mathematics Student
            </motion.h2>
            <motion.p
              className="text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="neon-cyan">Software Engineer</span> •{" "}
              <span className="neon-pink">Machine Learning Enthusiast</span> •{" "}
              <span className="text-orange-500">Researcher</span>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="glow bg-gradient-to-r from-primary to-purple"
                onClick={() =>
                  window.open("/Harsh_Maheshwari_Resume.pdf", "_blank")
                }
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button asChild variant="outline" size="lg" className="glow">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
