"use client"

import { Badge } from "@/components/ui/badge"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce",
      description: "A Vue.js-based project designed to provide users with a seamless shopping experience, allowing them to browse and purchase products effortlessly..",
      technologies: ["Typescript", "Node.js", "MongoDB"],
      github: "https://github.com/ChanSuvannet/e-commerce",
      live: "https://project1.com",
    },
    {
      title: "POS System ",
      description: "A system that had two roles. Cashier and Admin. Cashier can only sell products and Admin can do everything within the system.",
      technologies: ["Nestjs", "Typescript", "PostgreSQL", "JsReportOnline"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
    },
    {
      title: "Database Sharding ",
      description: "A project that was designed to split the database into multiple databases to improve the performance of the system.",
      technologies: ["Javascript", "MongoDB", "Node.js"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
    },
    // Add more projects as needed
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

