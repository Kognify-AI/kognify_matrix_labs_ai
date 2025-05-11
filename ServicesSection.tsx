import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { Globe, Bot, Cuboid as Cube, Database, Users, Warehouse, Lightbulb } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Custom Website Development",
      description: "Bespoke websites tailored to your business needs with cutting-edge technology and responsive design.",
      icon: <Globe className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 2,
      title: "AI Integration & Chatbots",
      description: "Implement intelligent AI solutions and chatbots to enhance customer experience and automate processes.",
      icon: <Bot className="w-8 h-8 text-white" />,
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 3,
      title: "3D Website Design",
      description: "Immersive 3D web experiences using WebGL and Three.js to create memorable user journeys.",
      icon: <Cube className="w-8 h-8 text-white" />,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 4,
      title: "ERP Solutions",
      description: "Comprehensive Enterprise Resource Planning systems to streamline business operations and improve efficiency.",
      icon: <Database className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 5,
      title: "CRM Development",
      description: "Custom Customer Relationship Management systems to nurture client relationships and boost sales.",
      icon: <Users className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 6,
      title: "Warehouse Management Systems",
      description: "Efficient WMS solutions to optimize inventory control, picking, packing, and shipping processes.",
      icon: <Warehouse className="w-8 h-8 text-white" />,
      color: "from-indigo-600 to-blue-700"
    },
    {
      id: 7,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to navigate digital transformation and leverage technology for business growth.",
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      color: "from-purple-600 to-indigo-700"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
      
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
            Our <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Services</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mb-6"></motion.div>
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-gray-300 text-lg">
            We deliver cutting-edge technology solutions to transform your business and drive growth in the digital landscape.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;