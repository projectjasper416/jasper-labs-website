import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        n: '01',
        title: 'Free audit',
        body: 'We spend time inside your business and map where the hours and the money actually go. You get the findings written down, whether or not you hire us.',
        meta: 'No cost',
    },
    {
        n: '02',
        title: 'Pick one thing',
        body: 'We start with the single process that pays back fastest. We agree what success means in numbers, then quote it at a fixed price.',
        meta: 'Fixed scope',
    },
    {
        n: '03',
        title: 'Build on your real data',
        body: 'We build against your actual tools and data, not a demo environment. You see it working every week, so nothing is a surprise at the end.',
        meta: 'Weekly demos',
    },
    {
        n: '04',
        title: 'Go live and own it',
        body: 'It ships to production. We monitor and tune it as the business changes. The code and the documentation are yours to keep.',
        meta: 'You own it',
    },
];

const HowWeWork: React.FC = () => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[2px] border-2 border-black bg-black">
            {steps.map((step, index) => (
                <motion.div
                    key={step.n}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group bg-white p-8 hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-default flex flex-col"
                >
                    <span className="text-5xl font-bold font-display text-blue-600 group-hover:text-white transition-colors duration-300 leading-none">
                        {step.n}
                    </span>

                    <h3 className="mt-6 text-xl font-bold font-display uppercase tracking-tight leading-tight">
                        {step.title}
                    </h3>

                    <p className="mt-3 font-mono text-sm leading-relaxed opacity-80 flex-grow">
                        {step.body}
                    </p>

                    <span className="mt-6 inline-block self-start border-2 border-current px-2 py-1 text-[10px] font-bold font-mono uppercase tracking-widest">
                        {step.meta}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

export default HowWeWork;
