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
import './AIIntegration.css';

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
    <section id="ai-integration" className="ai-integration">
      <div className="container">
        <motion.div
          ref={ref}
          className={`section-header ${inView ? 'visible' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">AI-Powered Development</h2>
          <p className="section-subtitle">
            Embracing the future of development with AI tools and intelligent automation
          </p>
        </motion.div>

        <div className="ai-content">
          <motion.div 
            className="ai-intro"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3>The Future of Development</h3>
            <p>
              I believe in leveraging AI tools to enhance productivity and code quality. 
              By integrating ChatGPT, Cursor, and GitHub Copilot into my workflow, 
              I can deliver better solutions faster while maintaining high standards.
            </p>
            <p>
              These AI tools help me stay current with modern development practices, 
              solve complex problems more efficiently, and focus on creative solutions 
              rather than repetitive tasks.
            </p>
            
            <div className="ai-stats">
              <div className="stat">
                <span className="stat-number">40-60%</span>
                <span className="stat-label">Faster Development</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">AI Tool Proficiency</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Quality Maintained</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="ai-tools"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3>AI Tools I Use</h3>
            <div className="tools-grid">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="tool-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="tool-header">
                    <div className="tool-icon">
                      <tool.icon size={32} />
                    </div>
                    <div className="tool-info">
                      <h4>{tool.title}</h4>
                      <span className="usage">{tool.usage}</span>
                    </div>
                  </div>
                  
                  <p className="tool-description">{tool.description}</p>
                  
                  <div className="tool-benefits">
                    <h5>Key Benefits:</h5>
                    <ul>
                      {tool.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex}>
                          <CheckCircle size={16} />
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
          className="ai-benefits"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Why AI Integration Matters</h3>
          <div className="benefits-grid">
            {aiBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="benefit-icon">
                  <benefit.icon size={32} />
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="ai-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h3>Ready to Build the Future?</h3>
          <p>
            I combine traditional development skills with cutting-edge AI tools to deliver 
            exceptional results. Let's create something amazing together!
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
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