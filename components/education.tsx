"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Education</h2>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle>Institute of Technology of Cambodia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science</p>
              <p className="text-gray-500 dark:text-gray-400">Expected Graduation: [Year]</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

