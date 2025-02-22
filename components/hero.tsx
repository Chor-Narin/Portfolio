"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-[80%] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-8 relative z-10"
          >
            <h2 className="text-2xl font-semibold text-primary">Hello, I'm</h2>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-tight">Your Name</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              Computer Science Student at Institute of Technology of Cambodia, passionate about creating innovative
              solutions.
            </p>
            <div className="flex space-x-4">
              <Button className="text-lg px-6 py-3 h-auto bg-primary hover:bg-primary/90">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative overflow-hidden rounded-full border-8 border-white dark:border-gray-800 shadow-2xl">
              <Image
                src="/chor_narin.jpg?height=600&width=600"
                alt="Your Profile"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-3xl" />
            <motion.div
              className="absolute top-0 -right-4 w-20 h-20 bg-yellow-400 rounded-full"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 -left-4 w-12 h-12 bg-primary rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Background decorative shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
      </div>
    </section>
  )
}

