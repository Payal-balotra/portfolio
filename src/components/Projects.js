import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github
} from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 100,
      title: "SpendSense – Finance Analytics Platform",
      description: "A full-stack financial management system to securely track income and expenses with interactive analytics dashboards, time-based summaries, and export features.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Charts"],
      category: "featured",
      github: "https://github.com/Payal-balotra",
      live: "https://expense-tracker-7o1q.vercel.app/",
      features: [
        "Secure JWT authentication with protected routes",
        "Interactive analytics using MongoDB aggregations (Pie, Bar, Line)",
        "Time-based summaries (last 30/60 days)",
        "Income/Expense CRUD with category-wise tracking",
        "Receipt and profile image uploads",
        "Excel export for reports",
        "Responsive, modern UI"
      ]
    },
    {
      id: 101,
      title: "BlogSphere – Blogging Platform (React, Node.js, MongoDB)",
      description: "A full-stack blogging platform where users can create, view, and manage posts with clean routing and a reader-friendly UI.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Routing"],
      category: "featured",
      github: "https://github.com/Payal-balotra",
      live: "#",
      features: [
        "Create, read, and manage blog posts",
        "Organized routing and clean UI",
        "Responsive design for great reading experience",
        "Deployed-ready MERN structure"
      ]
    },
    {
      id: 6,
      title: "QuickNotes – Clipboard Notes Manager (React, Node.js, MongoDB)",
      description: "A quick notes manager to create, update, delete, view, and search notes with a clean, fast UI.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "JavaScript", "CSS"],
      category: "mini",
      github: "https://github.com/Payal-balotra/paste-app",
      live: "https://portfolio-psi-seven-72.vercel.app/",
      features: [
        "Create, update, delete, view, and search notes",
        "Clean, user-friendly interface",
        "Deployed on Vercel"
      ]
    },
    {
      id: 1,
      title: "Amazon Clone",
      description: "A full-featured e-commerce platform with shopping cart, order tracking, product search, and user authentication.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "JavaScript", "CSS", "HTML", "MERN Stack"],
      category: "mini",
      github: "https://github.com/Payal-balotra",
      live: "https://projectama.netlify.app/",
      features: [
        "Shopping Cart Functionality",
        "Order Placement & Tracking",
        "Product Search & Filtering",
        "User Authentication",
        "Responsive Design",
        "Deployed on Netlify"
      ]
    },
    {
      id: 2,
      title: "Calculator App",
      description: "A modern calculator with advanced mathematical functions and clean UI design.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "mini",
      github: "https://github.com/Payal-balotra",
      live: "#",
      features: [
        "Basic Arithmetic Operations",
        "Advanced Functions",
        "Clean UI Design",
        "Responsive Layout"
      ]
    },
    {
      id: 3,
      title: "To-Do List Manager",
      description: "A comprehensive task management application with CRUD operations and local storage.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "mini",
      github: "https://github.com/Payal-balotra",
      live: "#",
      features: [
        "Add/Edit/Delete Tasks",
        "Mark as Complete",
        "Local Storage",
        "Filter Tasks"
      ]
    },
    {
      id: 4,
      title: "Stone Paper Scissors",
      description: "An interactive game with score tracking and animated gameplay.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop",
      technologies: ["JavaScript", "HTML", "CSS"],
      category: "mini",
      github: "https://github.com/Payal-balotra",
      live: "#",
      features: [
        "Interactive Gameplay",
        "Score Tracking",
        "Animated UI",
        "Sound Effects"
      ]
    },
    
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'mini', label: 'Mini Projects' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          className={`section-header ${inView ? 'visible' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work, demonstrating my skills in frontend development and problem-solving
          </p>
        </motion.div>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              layout
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Interested in Working Together?</h3>
          <p>
            I'm always open to new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 