import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, TrendingUp } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: Cpu,
      title: 'AI Engineering',
      description: 'Custom LLM integrations, backend pipelines, and autonomous agent systems built for your tech stack.',
    },
    {
      icon: Users,
      title: 'AI Talent Augmentation',
      description: 'Direct integration of top-tier AI engineering talent to accelerate your product development cycles.',
    },
    {
      icon: TrendingUp,
      title: 'AI Growth Consulting',
      description: 'Strategic roadmapping, workflow cost auditing, and tailored automation design to drive scale.',
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-0 border-2 border-black bg-black">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="group p-8 bg-white hover:bg-blue-600 hover:text-white transition-colors duration-300 border-b-2 md:border-b-0 md:border-r-2 border-black last:border-0 cursor-default"
        >
          <div className="mb-6">
            <service.icon className="w-12 h-12 stroke-[1.5] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
          </div>

          <h3 className="text-xl font-bold font-display uppercase mb-3 tracking-tight">
            {service.title}
          </h3>

          <p className="font-mono text-sm leading-relaxed opacity-80">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesGrid;
