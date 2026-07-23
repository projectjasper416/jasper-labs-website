import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import AuditFloatingButton from './AuditFloatingButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white text-black selection:bg-blue-600 selection:text-white">
      {/* Subtle grid texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        {children}
      </motion.main>

      <AuditFloatingButton aboveBottomNav={isHomePage} />
    </div>
  );
};

export default Layout;

