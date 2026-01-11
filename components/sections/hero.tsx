"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="section min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-40" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.p
              className="text-muted-foreground text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Harsh{" "}
              <span className="gradient-text">Maheshwari</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Software Engineer & Researcher
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground/80 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Computer Science & Computational Mathematics student at Penn State.
              Building intelligent systems and pushing the boundaries of AI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="primary-glow bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() =>
                  window.open("/Harsh_Maheshwari_Resume.pdf", "_blank")
                }
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#experience">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
