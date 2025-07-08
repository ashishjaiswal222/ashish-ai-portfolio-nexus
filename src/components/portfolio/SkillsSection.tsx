import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      color: "text-neon-cyan",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 75 }
      ]
    },
    {
      title: "Frontend Technologies", 
      color: "text-neon-purple",
      skills: [
        { name: "React", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Material UI", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      color: "text-neon-green",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      color: "text-neon-pink",
      skills: [
        { name: "System Design", level: 70 },
        { name: "Data Structures", level: 80 },
        { name: "Algorithms", level: 75 },
        { name: "IoT Development", level: 75 }
      ]
    }
  ];

  const certifications = [
    "Agile with Atlassian (Coursera) 2024",
    "Generative AI (Google) 2024", 
    "Complete Full Stack Web Development (Udemy) 2024",
    "Robotics and IoT (Kaizen Technologies) 2023"
  ];

  return (
    <section className="py-20 cyber-grid">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient-cyber mb-4">
            TECHNICAL SKILLS
          </h2>
          <div className="w-32 h-1 bg-gradient-cyber mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="cyber-border p-6 h-full">
                <h3 className={`font-orbitron text-xl font-bold ${category.color} mb-6`}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-cyber rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="cyber-border p-8">
            <h3 className="font-orbitron text-2xl font-bold text-secondary mb-6 text-center">
              CERTIFICATIONS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded border border-primary/30 hover:border-primary transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-accent rounded-full animate-neon-pulse"></div>
                  <span className="text-foreground/80">{cert}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;