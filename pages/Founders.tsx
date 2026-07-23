import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import vinayPhoto from '../assets/vinay.jpg';
import adityaPhoto from '../assets/aditya.jpg';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const Founders: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pb-16 min-h-screen flex flex-col bg-white text-black">
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 border-b-2 border-black bg-white/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" aria-label="Back to Jasper Labs home">
              <Logo className="h-8 md:h-9 w-auto" />
            </Link>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Page Intro Banner */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-black bg-black text-white relative overflow-hidden">
            {/* Animated Grid Background */}
            <div
              className="absolute inset-0 z-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse 80% 60% at center, black 30%, transparent 100%)'
              }}
            />
            <div className="relative z-10 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-500">
                  People / Leadership
                </span>
                <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tighter uppercase">
                  Meet the Founders
                </h1>
                <p className="text-sm font-mono text-gray-400 max-w-xl leading-relaxed border-l-2 border-blue-500 pl-4">
                  The team incubating ideas, building solutions, and driving AI automation projects forward.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Section 1: Vinay Kolla (Photo Left, Bio Right) */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b-2 border-black">
            <div className="max-w-6xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-16 items-center">
              {/* Photo Left */}
              <motion.div {...fadeUp} className="w-full flex justify-center">
                <div className="relative p-1 bg-white border-2 border-black shadow-[6px_6px_0px_#000] aspect-square w-full max-w-[320px] overflow-hidden">
                  <img
                    src={vinayPhoto}
                    alt="Vinay Kolla"
                    className="object-cover w-full h-full transition-all duration-300"
                  />
                </div>
              </motion.div>

              {/* Bio Right */}
              <motion.div {...fadeUp} className="space-y-4 text-left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-display uppercase tracking-tight">
                    Vinay Kolla
                  </h2>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                    Product Leader
                  </span>
                </div>
                <p className="font-mono text-sm leading-relaxed text-gray-600 border-l border-black pl-4">
                  Vinay is a product leader with a decade of experience across financial services in APAC and North America. He oversees product strategy and engineering execution at Jasper Labs, turning validated hypotheses into highly scalable software and AI agents.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Adityaram Majeti (Bio Left, Photo Right, gray-100 bg) */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 border-b-2 border-black">
            <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
              {/* Bio Left (Adityaram description first on layout) */}
              <motion.div {...fadeUp} className="space-y-4 text-left order-2 md:order-1">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-display uppercase tracking-tight">
                    Adityaram Majeti
                  </h2>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
                    AI Engineer
                  </span>
                </div>
                <p className="font-mono text-sm leading-relaxed text-gray-600 border-l border-black pl-4">
                  Adityaram is an AI engineer who has successfully launched and scaled products across multiple domains and geographies. He focuses on operational delivery, custom customer integrations, and business engines that translate theoretical AI capabilities into commercial value.
                </p>
              </motion.div>

              {/* Photo Right */}
              <motion.div {...fadeUp} className="w-full flex justify-center order-1 md:order-2">
                <div className="relative p-1 bg-white border-2 border-black shadow-[6px_6px_0px_#000] aspect-square w-full max-w-[320px] overflow-hidden">
                  <img
                    src={adityaPhoto}
                    alt="Adityaram Majeti"
                    className="object-cover w-full h-full transition-all duration-300"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer (identical to Home redesign) */}
        <footer className="pt-16 pb-28 bg-black text-white border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Column 1: Logo & Tagline */}
              <div className="space-y-4">
                <Logo className="text-white h-12 w-auto" />
                <p className="text-gray-400 text-xs font-mono leading-relaxed max-w-xs">
                  Building the future, one experiment at a time.
                </p>
              </div>

              {/* Column 2: Company Links */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-bold">Company</h4>
                <ul className="space-y-2 text-sm font-mono">
                  <li>
                    <Link to="/founders" className="text-white hover:text-white transition-colors duration-200">
                      Meet the Founders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      state={{ section: 3 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Connect Links */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 font-bold">Connect</h4>
                <ul className="space-y-2 text-sm font-mono">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/jasper-labs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-mono text-gray-600">
              <p>&copy; {new Date().getFullYear()} Jasper Labs. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Founders;
