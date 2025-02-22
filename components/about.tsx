"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const traits = ["Innovative", "Detail-oriented", "Problem Solver", "Team Player", "Quick Learner"]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-[80%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-none shadow-xl">
              <CardContent className="p-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I am a passionate Computer Science student at the Institute of Technology of Cambodia. My journey in
                  the world of technology has been driven by curiosity and a desire to create innovative solutions. I
                  specialize in [Your Specializations], and I'm always eager to learn and apply new technologies to
                  solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {traits.map((trait, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square relative overflow-hidden rounded-2xl shadow-xl">
              <img src="/chornarin.jpg?height=400&width=400" alt="About Me" className="object-cover w-full h-full" />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

