import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  MessageSquare,
  Code,
  Zap,
  Lightbulb,
  Rocket,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const AIIntegration = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const aiTools = [
    {
      icon: MessageSquare,
      title: "ChatGPT",
      description: "Leveraging AI for code generation, debugging, and problem-solving assistance",
      benefits: [
        "Code Review & Optimization",
        "Bug Fixing Assistance",
        "Algorithm Explanations",
        "Best Practices Guidance"
      ],
      usage: "95% proficiency"
    },
    {
      icon: Code,
      title: "Cursor",
      description: "AI-powered code editor for enhanced productivity and intelligent code completion",
      benefits: [
        "Intelligent Code Completion",
        "Real-time Suggestions",
        "Refactoring Assistance",
        "Documentation Generation"
      ],
      usage: "90% proficiency"
    },
    {
      icon: Brain,
      title: "Claude AI",
      description: "Advanced LLM assistant used for architecture reviews, API design, and edge-case reasoning",
      benefits: [
        "System design and architecture feedback",
        "Spec writing and refinement",
        "Safer code reasoning on tricky edge cases",
        "Rapid prototyping support"
      ],
      usage: "85% proficiency"
    },
    {
      icon: Brain,
      title: "GitHub Copilot",
      description: "AI pair programming tool for faster development and code quality",
      benefits: [
        "Pair Programming",
        "Code Generation",
        "Test Writing",
        "Documentation Help"
      ],
      usage: "80% proficiency"
    }
  ];

  const aiBenefits = [
    {
      icon: Zap,
      title: "Faster Development",
      description: "AI tools accelerate coding by 40-60% while maintaining quality"
    },
    {
      icon: Lightbulb,
      title: "Better Problem Solving",
      description: "AI assistance helps tackle complex algorithms and system design challenges"
    },
    {
      icon: Rocket,
      title: "Modern Workflow",
      description: "Staying ahead with cutting-edge AI-powered development practices"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "AI tools help stay updated with latest technologies and best practices"
    }
  ];

  return (
    <section id="ai-integration" className="py-24 bg-darker overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">AI-Powered Development</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Embracing the future of development with AI tools and intelligent automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">The Future of Development</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I believe in leveraging AI tools to enhance productivity and code quality.
              By integrating ChatGPT, Cursor, and GitHub Copilot into my workflow,
              I can deliver better solutions faster while maintaining high standards.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              These AI tools help me stay current with modern development practices,
              solve complex problems more efficiently, and focus on creative solutions
              rather than repetitive tasks.
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="block text-3xl font-bold text-primary mb-1">40-60%</span>
                <span className="text-sm text-gray-400">Faster Development</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="block text-3xl font-bold text-primary mb-1">95%</span>
                <span className="text-sm text-gray-400">AI Tool Proficiency</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="block text-3xl font-bold text-primary mb-1">100%</span>
                <span className="text-sm text-gray-400">Quality Maintained</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">AI Tools I Use</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-dark/50 p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      <tool.icon size={24} />
                    </div>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{tool.usage}</span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{tool.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{tool.description}</p>

                  <div className="border-t border-white/5 pt-4">
                    <h5 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h5>
                    <ul className="space-y-2">
                      {tool.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle size={14} className="text-secondary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Why AI Integration Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white mb-4">
                  <benefit.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build the Future?</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            I combine traditional development skills with cutting-edge AI tools to deliver
            exceptional results. Let's create something amazing together!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AIIntegration; 