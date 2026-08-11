import React from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    Repeat2,
    Scissors,
    Zap,
    Expand,
    LineChart,
    ArrowRight,
} from 'lucide-react';

/** Six outcomes that apply to any business, not just one vertical. */
const outcomes = [
    {
        icon: TrendingUp,
        tag: 'Revenue',
        title: 'Capture every enquiry',
        body: 'Calls, forms, and messages answered in seconds, day or night.',
        example: 'A voice agent books the job while you are closed.',
    },
    {
        icon: Repeat2,
        tag: 'Revenue uplift',
        title: 'Follow up without fail',
        body: 'Leads and quotes chased on schedule until they close or say no.',
        example: 'No deal lost to a forgotten email.',
    },
    {
        icon: Scissors,
        tag: 'Cost',
        title: 'Cut the manual admin',
        body: 'Invoices, data entry, and approvals run without a person in the middle.',
        example: 'Invoice lands, gets read, gets filed.',
    },
    {
        icon: Zap,
        tag: 'Time',
        title: 'Answers in seconds',
        body: 'Your team stops hunting through files and interrupting colleagues.',
        example: 'Ask in plain English, get a sourced answer.',
    },
    {
        icon: Expand,
        tag: 'Scale',
        title: 'More volume, same team',
        body: 'Support and operations absorb growth without another hiring round.',
        example: 'Twice the enquiries, the same headcount.',
    },
    {
        icon: LineChart,
        tag: 'Insight',
        title: 'See it coming',
        body: 'Forecasts, alerts, and flags built from your own numbers.',
        example: 'Know who is going quiet before they leave.',
    },
];

/** The AI functions we assemble these from. */
const capabilities = [
    'Voice & chat agents',
    'Retrieval over your data',
    'Document extraction',
    'Classification & routing',
    'Forecasting',
    'Speech recognition',
    'Computer vision',
    'Multi-agent orchestration',
    'System integration',
    'Fine-tuning',
];

interface UseCasesProps {
    onContact: () => void;
}

const UseCases: React.FC<UseCasesProps> = ({ onContact }) => {
    return (
        <div className="space-y-10">
            {/* Six outcomes */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px] border-2 border-black bg-black">
                {outcomes.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="group bg-white p-7 md:p-8 hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-default flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <item.icon className="w-9 h-9 stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                            <span className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] text-blue-600 group-hover:text-white transition-colors duration-300">
                                {item.tag}
                            </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight leading-tight">
                            {item.title}
                        </h3>

                        {/* min-height keeps the rule below aligned across each row */}
                        <p className="mt-3 min-h-[3.25rem] font-mono text-sm leading-relaxed opacity-80">
                            {item.body}
                        </p>

                        <p className="mt-auto pt-5 font-mono text-xs leading-relaxed opacity-70 border-t border-black/15 group-hover:border-white/30 transition-colors duration-300">
                            {item.example}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Technical credibility, compressed to one line of chips */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8"
            >
                <span className="shrink-0 text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600">
                    Built from
                </span>
                <div className="flex flex-wrap gap-2">
                    {capabilities.map((capability) => (
                        <span
                            key={capability}
                            className="border-2 border-black px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wide"
                        >
                            {capability}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Close the loop — send them to the audit */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-2 border-black bg-black text-white p-8 md:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
            >
                <p className="text-xl md:text-2xl font-display tracking-tight leading-snug max-w-2xl">
                    Work that used to need another hire becomes a fixed software cost.{' '}
                    <span className="text-blue-500">
                        Your capacity stops being tied to headcount.
                    </span>
                </p>

                <button
                    onClick={onContact}
                    className="group shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                    Show me where
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
            </motion.div>
        </div>
    );
};

export default UseCases;
