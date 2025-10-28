import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Linkedin, 
  Github,
  Send,
  CheckCircle
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "balotra123.singh@gmail.com",
      link: "mailto:balotra123.singh@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Payal Balotra",
      link: "https://www.linkedin.com/in/payal-balotra/"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Payal-balotra",
      link: "https://github.com/Payal-balotra"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          className={`section-header ${inView ? 'visible' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-method"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <div className="method-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="method-content">
                    <h4>{info.title}</h4>
                    <span>{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <motion.button
                type="submit"
                className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
            
            {isSubmitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={20} />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}
          </motion.div>
        </div>

        <motion.div 
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>Let's Build Something Amazing Together</h3>
          <p>
            I'm passionate about creating exceptional web experiences and solving complex problems. 
            Whether you need a frontend developer for your team or want to collaborate on a project, 
            I'm here to help bring your ideas to life.
          </p>
          <div className="cta-buttons">
            <motion.a
              href="mailto:balotra123.singh@gmail.com"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Send Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/payal-balotra-2992562a4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 