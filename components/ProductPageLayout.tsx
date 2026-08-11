import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Logo from './Logo';

interface ProductPageLayoutProps {
    children: React.ReactNode;
}

// Detail pages live inside a fixed, self-scrolling container because the
// document body is locked to overflow:hidden (see index.html).
const ProductPageLayout: React.FC<ProductPageLayoutProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, []);

    return (
        <motion.div
            ref={scrollRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 overflow-y-auto bg-white text-black selection:bg-blue-600 selection:text-white"
        >
            {/* Subtle grid texture */}
            <div
                className="fixed inset-0 z-0 pointer-events-none opacity-[0.035]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Top bar */}
            <header className="sticky top-0 z-30 border-b-2 border-black bg-white/95 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link to="/" aria-label="Back to Jasper Labs home">
                        <Logo className="h-8 md:h-9 w-auto" />
                    </Link>
                    <Link
                        to="/"
                        state={{ section: 'products' }}
                        className="group inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest hover:text-blue-600 transition-colors duration-200"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                        <span className="hidden sm:inline">All Products</span>
                    </Link>
                </div>
            </header>

            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default ProductPageLayout;
