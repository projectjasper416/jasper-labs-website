import React from 'react';
import { motion } from 'framer-motion';
import { Home, Zap, Rocket, Cpu, Mail } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'automate', label: 'Automate', icon: Zap },
    { id: 'products', label: 'Work', icon: Rocket },
    { id: 'services', label: 'Services', icon: Cpu },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 border-t-2 border-black bg-white/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-stretch h-16">
        {navItems.map((item) => {
          const isActive = currentSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative flex-1 flex items-center justify-center gap-2 font-bold uppercase tracking-wider transition-colors duration-200 border-r-2 border-black last:border-r-0 ${isActive ? 'bg-blue-600 text-white' : 'bg-white text-black hover:bg-gray-50'}`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active-bar"
                  className="absolute top-0 left-0 right-0 h-0.5 bg-white"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <item.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              <span className="hidden sm:inline text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
