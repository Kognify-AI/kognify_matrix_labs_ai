import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const PortfolioSection: React.FC = () => {
  // Sample projects - in a real app, these would come from a CMS or API
  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Customer Portal",
      category: "AI Integration",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "An intelligent customer portal with AI-driven recommendations and chatbot support."
    },
    {
      id: 2,
      title: "3D Product Configurator",
      category: "3D Website Design",
      image: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Interactive 3D product configurator allowing users to customize and preview products in real-time."
    },
    {
      id: 3,
      title: "Enterprise Resource Planning System",
      category: "ERP Solutions",
      image: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Comprehensive ERP system streamlining operations for a manufacturing company."
    },
    {
      id: 4,
      title: "Supply Chain Management Platform",
      category: "WMS",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "End-to-end supply chain management platform with real-time tracking and analytics."
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Portfolio</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></motion.div>
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-gray-300 text-lg">
            Explore our recent projects and discover how we've helped businesses transform their digital presence.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-purple-600/70 rounded-full text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.description}
                </p>
                <motion.a 
                  href="#contact"
                  className="inline-flex items-center text-purple-400 hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block bg-transparent border border-purple-500 text-white px-8 py-3 rounded-full 
            font-medium hover:bg-purple-900/30 transition-all duration-300 
            group"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;