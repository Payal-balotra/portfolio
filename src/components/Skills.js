import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Palette, 
  Smartphone, 
  Zap,
  Brain,
  GitBranch,
  Globe
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 70 }
      ]
    },
    {
      title: "AI & Tools",
      icon: Brain,
      skills: [
        { name: "ChatGPT", level: 95 },
        { name: "Cursor", level: 90 },
        { name: "GitHub Copilot", level: 80 },
        { name: "AI Integration", level: 85 }
      ]
    },
    {
      title: "Problem Solving",
      icon: Zap,
      skills: [
        { name: "Data Structures", level: 75 },
        { name: "Algorithms", level: 70 },
        { name: "System Design", level: 60 },
        { name: "Debugging", level: 85 }
      ]
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "npm/yarn", level: 85 },
        { name: "Webpack", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          className={`section-header ${inView ? 'visible' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive set of technical skills and tools I use to create exceptional web experiences
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  <category.icon size={32} />
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.6 
                    }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="skills-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="cta-content">
            <h3>Always Learning & Growing</h3>
            <p>
              I'm constantly expanding my skill set and staying updated with the latest technologies. 
              Currently focused on mastering advanced React patterns, AI integration, and system design.
            </p>
            <div className="learning-focus">
              <div className="focus-item">
                <span className="focus-icon">🚀</span>
                <span>Advanced React Patterns</span>
              </div>
              <div className="focus-item">
                <span className="focus-icon">🤖</span>
                <span>AI-Powered Development</span>
              </div>
              <div className="focus-item">
                <span className="focus-icon">⚡</span>
                <span>Performance Optimization</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 