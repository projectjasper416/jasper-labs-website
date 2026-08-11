import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Bot, PhoneCall, FileSearch, Workflow, MonitorSmartphone } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: 'Free Business Audit',
      description:
        'We sit with your team and map how the business actually runs. Then we show you where AI fits, where it does not, and what each one is worth. Costs nothing and you keep the findings.',
      highlight: true,
    },
    {
      icon: Bot,
      title: 'Custom AI Agents',
      description:
        'Agents built around your workflow and wired into your tools. Not a chatbot bolted onto a template. They do the task end to end and hand back to a person when they should.',
    },
    {
      icon: PhoneCall,
      title: 'AI Voice Receptionist',
      description:
        'Answers every call, books into your calendar, sends confirmations, and follows up. Runs 24/7 on your existing number. Live in under a week.',
    },
    {
      icon: FileSearch,
      title: 'Internal Knowledge Agent',
      description:
        'Q&A across your Drive, Notion, and Slack. Staff ask in plain English and get an answer with the source document attached, so nothing is guessed.',
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description:
        'The repetitive steps between your systems, handled. Data entry, form checks, routing, approvals, scheduled reports. Exceptions still reach a human.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Digitalize, Then Automate',
      description:
        'Still running on paper, WhatsApp, and spreadsheets? We build the website and software first, get your operations onto real systems, then layer AI on top.',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px] border-2 border-black bg-black">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`group relative p-8 hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-default ${
            service.highlight ? 'bg-gray-100' : 'bg-white'
          }`}
        >
          {service.highlight && (
            <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold font-mono uppercase tracking-widest px-3 py-1.5 group-hover:bg-black transition-colors duration-300">
              Start Here
            </span>
          )}

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
