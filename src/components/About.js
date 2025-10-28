import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Target, Users } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Specialized in React, JavaScript, and modern web technologies"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Experienced with ChatGPT, Cursor, and AI-powered development tools"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Currently mastering Data Structures & Algorithms for enhanced skills"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication skills and ability to work in agile environments"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          className={`section-header ${inView ? 'visible' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate frontend developer with a love for creating exceptional user experiences
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3>Passionate Frontend Developer</h3>
            <p>
            I am a dedicated frontend developer with a strong foundation in HTML, CSS, JavaScript, and React. I hold a BCA degree and have hands-on MERN stack experience. 
              My journey in web development has been driven by a passion for creating beautiful, functional, 
              and user-centric applications.
            </p>
            <p>
            I have hands-on experience with the MERN stack for full-stack development, and I frequently deploy projects using Netlify and Vercel.
            </p>
            <p>
              Currently, I'm expanding my expertise by studying Data Structures and Algorithms to enhance 
              my problem-solving capabilities and become a more well-rounded developer. This knowledge 
              helps me write more efficient code and tackle complex challenges with confidence.
            </p>
            <p>
              I'm also deeply interested in AI integration and modern development tools. I actively use 
              ChatGPT and Cursor to streamline my development process, improve code quality, and stay 
              ahead of industry trends.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="feature-icon">
                    <feature.icon size={32} />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Ready to Build Something Amazing?</h3>
          <p>
            I'm always excited to take on new challenges and collaborate on innovative projects. 
            Let's work together to bring your ideas to life!
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 