import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
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
            About <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Kognify Matrix Labs</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></motion.div>
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-gray-300 text-lg">
            We are a team of innovators, designers, and developers passionate about transforming businesses through cutting-edge technology solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={fadeInUp} 
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
          >
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(146,80,245,0.5)] transition-all duration-300">
              <Lightbulb size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To empower businesses through innovative digital solutions that drive growth, efficiency, and competitive advantage in the rapidly evolving technological landscape.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
          >
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(146,80,245,0.5)] transition-all duration-300">
              <Server size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Approach</h3>
            <p className="text-gray-300">
              We combine technical expertise with creative thinking to deliver tailor-made solutions that address unique business challenges and capitalize on opportunities in the digital realm.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp} 
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
          >
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(146,80,245,0.5)] transition-all duration-300">
              <Cpu size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
            <p className="text-gray-300">
              With years of experience in delivering cutting-edge technology solutions, our team excels in web development, AI integration, ERP implementation, and digital transformation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;