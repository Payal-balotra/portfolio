import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Layout,
  Database,
  Lock
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "MERN & Fullstack",
      icon: Database,
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      title: "API & Security",
      icon: Lock,
      skills: [
        { name: "RESTful API", level: 90 },
        { name: "API Integration", level: 90 },
        { name: "OAuth", level: 85 },
        { name: "JWT Auth", level: 85 }
      ]
    },
    {
      title: "Gen AI & Engineering",
      icon: Brain,
      skills: [
        { name: "Prompt Engineering", level: 90 },
        { name: "AI Integration", level: 85 },
        { name: "ChatGPT/LLMs", level: 95 },
        { name: "Cursor/Copilot", level: 90 }
      ]
    },
    {
      title: "UI/UX & Design",
      icon: Layout,
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Responsive Design", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-darker relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of technical skills, focusing on modern web development, AI integration, and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-dark/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <category.icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.1),
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="inline-flex gap-8 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🚀</span>
              <span className="text-sm font-medium text-gray-300">Fast Learner</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🤖</span>
              <span className="text-sm font-medium text-gray-300">AI Adaptive</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">💡</span>
              <span className="text-sm font-medium text-gray-300">Creative</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 