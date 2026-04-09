import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface LabCardProps {
    title: string;
    description: string;
    status: string;
    focus: string;
    image: string;
    index: number;
}

const LabCard: React.FC<LabCardProps> = ({ title, description, status, focus, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
        >
            {/* Compact image strip */}
            <div className="h-24 overflow-hidden border-b-2 border-black">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
            </div>

            <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <span className="px-1.5 py-0.5 text-xs font-bold uppercase bg-blue-600 text-white border border-blue-600">
                            {focus}
                        </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <h3 className="text-base font-bold font-display uppercase tracking-tight leading-tight">
                    {title}
                </h3>

                <p className="text-xs font-mono leading-relaxed opacity-70">
                    {description}
                </p>
            </div>

            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
        </motion.div>
    );
};

export default LabCard;
