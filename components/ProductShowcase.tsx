import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, PhoneCall } from 'lucide-react';
import resumeSetGoLogo from '../assets/resumesetgo.png';

interface ProductShowcaseProps {
    onContact: () => void;
}

interface Product {
    tag: string;
    name: string;
    description: string;
    logo?: string;
    icon?: React.ElementType;
    cta: string;
    href?: string;
    to?: string;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onContact }) => {
    const products: Product[] = [
        {
            tag: 'AI Job Search Co-Pilot',
            name: 'ResumeSetGo',
            description:
                'Your AI co-pilot for the job hunt — tailors resumes to each role, surfaces the right openings, and helps you stop rewriting and start landing.',
            logo: resumeSetGoLogo,
            href: 'https://resumesetgo.in/',
            cta: 'Visit Site',
        },
        {
            tag: 'AI Email Marketing Agent',
            name: 'Campaign Agent',
            description:
                'Runs email marketing campaigns intelligently — spotting edge cases and angles humans miss, then optimizing send timing, segments, and copy on its own.',
            icon: Mail,
            to: '/products/email-marketing-agent',
            cta: 'Learn More',
        },
        {
            tag: 'Custom Retell AI Voice Agent',
            name: 'Voice Agent',
            description:
                'A Retell-powered voice agent customized to your business — handling appointment booking and changes, customer support, and anything else your workflow needs.',
            icon: PhoneCall,
            cta: 'Request a Demo',
        },
    ];

    const cardClass =
        'flex flex-col h-full p-8 text-left hover:bg-blue-600 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:bg-blue-600 focus-visible:text-white';

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black bg-black">
            {products.map((product, index) => {
                const Icon = product.icon;
                const inner = (
                    <>
                        <div className="flex items-start justify-between mb-6">
                            <div className="h-14 flex items-center">
                                {product.logo ? (
                                    <img
                                        src={product.logo}
                                        alt={`${product.name} logo`}
                                        className="h-12 w-auto"
                                    />
                                ) : Icon ? (
                                    <Icon className="w-11 h-11 stroke-[1.5] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
                                ) : null}
                            </div>
                            <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>

                        <span className="text-xs font-bold font-mono uppercase tracking-widest text-blue-600 group-hover:text-white transition-colors duration-300 mb-2">
                            {product.tag}
                        </span>

                        <h3 className="text-2xl font-bold font-display uppercase mb-3 tracking-tight leading-tight">
                            {product.name}
                        </h3>

                        <p className="font-mono text-sm leading-relaxed opacity-80 mb-6">
                            {product.description}
                        </p>

                        <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest">
                            {product.cta}
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </span>
                    </>
                );

                return (
                    <motion.div
                        key={product.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="group flex flex-col bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-black last:border-0"
                    >
                        {product.href ? (
                            <a href={product.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
                                {inner}
                            </a>
                        ) : product.to ? (
                            <Link to={product.to} className={cardClass}>
                                {inner}
                            </Link>
                        ) : (
                            <button type="button" onClick={onContact} className={cardClass}>
                                {inner}
                            </button>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ProductShowcase;
