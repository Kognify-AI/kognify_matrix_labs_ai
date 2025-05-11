import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  delay = 0 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden group"
    >
      <div className="p-6 md:p-8 h-full flex flex-col">
        <div className={`bg-gradient-to-br ${color} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(146,80,245,0.5)] transition-all duration-300`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto">
          <motion.a 
            href="#contact"
            className="inline-flex items-center text-purple-400 hover:text-white transition-colors group-hover:translate-x-1"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.a>
        </div>
      </div>
      
      <div className={`h-1 w-0 bg-gradient-to-r ${color} group-hover:w-full transition-all duration-500`}></div>
    </motion.div>
  );
};

export default ServiceCard;