import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
    onExplore: () => void;
}

const stagger = {
    animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 border-b-4 border-black bg-black text-white overflow-hidden">
            {/* Animated Grid Background */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.18 }}
                transition={{ duration: 1.5 }}
                style={{
                    backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse 80% 60% at center, black 30%, transparent 100%)'
                }}
            />

            {/* Subtle vignette */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)' }} />

            {/* Logo positioned top-left */}
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute top-8 left-8 md:top-12 md:left-12 z-20"
            >
                <Logo className="text-white w-12 h-12 md:w-16 md:h-16" variant="icon" />
            </motion.div>

            <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
                <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-8">
                    <motion.h1
                        variants={fadeUp}
                        className="text-7xl sm:text-8xl md:text-9xl font-bold font-display tracking-tighter leading-[0.9]"
                    >
                        JASPER
                        <br />
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.55)' }}
                        >
                            LABS
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="text-xl sm:text-2xl text-gray-400 font-mono max-w-2xl mx-auto border-l-2 border-blue-600 pl-6 text-left md:text-center md:border-l-0 md:border-t-2 md:pt-6"
                    >
                        ENGINEERING CUSTOM AI AGENTS &
                        <br />
                        END-TO-END WORKFLOW AUTOMATIONS.
                    </motion.p>

                    <motion.div variants={fadeUp} className="pt-8 flex justify-center">
                        <button
                            onClick={onExplore}
                            className="group relative px-8 py-4 bg-white text-black font-bold text-lg uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                            <span className="flex items-center gap-4">
                                See What We Do
                                <ArrowRight className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" />
                            </span>
                            <div className="absolute top-2 left-2 w-full h-full border-2 border-white/40 -z-10 group-hover:top-0 group-hover:left-0 transition-all duration-200" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={onExplore}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors duration-200 cursor-pointer"
                aria-label="Scroll down"
            >
                <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.button>
        </section>
    );
};

export default Hero;
