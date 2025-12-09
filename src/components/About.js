import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Target, Users } from 'lucide-react';

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
    <section id="about" className="py-24 bg-darker/50 text-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A passionate frontend developer with a love for creating exceptional user experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white">Passionate Frontend Developer</h3>
            <p className="text-gray-400 leading-relaxed">
              I am a dedicated frontend developer with a strong foundation in HTML, CSS, JavaScript, and React. I hold a BCA degree and have hands-on MERN stack experience.
              My journey in web development has been driven by a passion for creating beautiful, functional,
              and user-centric applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I have hands-on experience with the MERN stack for full-stack development, and I frequently deploy projects using Netlify and Vercel.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently, I'm expanding my expertise by studying Data Structures and Algorithms to enhance
              my problem-solving capabilities and become a more well-rounded developer. This knowledge
              helps me write more efficient code and tackle complex challenges with confidence.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm also deeply interested in AI integration and modern development tools. I actively use
              ChatGPT and Cursor to streamline my development process, improve code quality, and stay
              ahead of industry trends.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="block text-3xl font-bold text-primary mb-1">2+</span>
                <span className="text-sm text-gray-400">Years Experience</span>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="block text-3xl font-bold text-primary mb-1">10+</span>
                <span className="text-sm text-gray-400">Projects Completed</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-dark border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            I'm always excited to take on new challenges and collaborate on innovative projects.
            Let's work together to bring your ideas to life!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
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