import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Users, Leaf } from 'lucide-react';

const ProductGrid: React.FC = () => {
    const features = [
        {
            icon: Microscope,
            title: 'Research-Driven',
            description: 'Every product starts with deep research and validated hypotheses.',
        },
        {
            icon: Users,
            title: 'User-Centered',
            description: 'We build products that solve real problems for real people.',
        },
        {
            icon: Leaf,
            title: 'Sustainable',
            description: 'Long-term viability and impact guide every decision we make.',
        }
    ];

    return (
        <div className="grid md:grid-cols-3 gap-0 border-2 border-black bg-black">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="group p-8 bg-white hover:bg-blue-600 hover:text-white transition-colors duration-300 border-b-2 md:border-b-0 md:border-r-2 border-black last:border-0 cursor-default"
                >
                    <div className="mb-6">
                        <feature.icon className="w-12 h-12 stroke-[1.5] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                    </div>

                    <h3 className="text-xl font-bold font-display uppercase mb-3 tracking-tight">
                        {feature.title}
                    </h3>

                    <p className="font-mono text-sm leading-relaxed opacity-80">
                        {feature.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default ProductGrid;
