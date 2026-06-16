import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import LabCard from '../components/LabCard';
import ProductGrid from '../components/ProductGrid';
import ProductShowcase from '../components/ProductShowcase';
import Section from '../components/Section';
import Logo from '../components/Logo';
import { motion } from 'framer-motion';

const SECTION_IDS = ['home', 'research', 'products', 'contact'] as const;
type SectionId = typeof SECTION_IDS[number];

const Home: React.FC = () => {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [formStatus, setFormStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ type: 'idle' });

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  // When navigating back from a product page, jump straight to the requested section.
  useEffect(() => {
    const target = (location.state as { section?: number } | null)?.section;
    if (target == null || !SECTION_IDS[target]) return;
    requestAnimationFrame(() => {
      document.getElementById(SECTION_IDS[target])?.scrollIntoView({ behavior: 'auto', block: 'start' });
    });
  }, [location.state]);

  // Highlight the nav item for whichever section is currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'loading' });

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const inquiryType = formData.get('inquiryType') as string;
    const message = formData.get('message') as string;

    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { to_email: 'projectjasper416@gmail.com', from_name: name, from_email: email, inquiry_type: inquiryType, message, reply_to: email },
        EMAILJS_PUBLIC_KEY
      );
      setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      form.reset();
      setTimeout(() => setFormStatus({ type: 'idle' }), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus({ type: 'error', message: 'Sorry, there was an error sending your message. Please try again or contact us directly at projectjasper416@gmail.com' });
    }
  };

  const labInitiatives = [
    {
      title: 'AI Experimentation Lab',
      description: 'Where we prototype next-generation AI applications. Currently exploring multimodal AI, agentic systems, and responsible AI deployment.',
      status: 'Active', focus: 'Rapid Prototyping',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Product Validation Studio',
      description: 'Turning hypotheses into testable products. We build MVPs, run user experiments, and validate market fit before scaling.',
      status: 'Active', focus: 'User Validation',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Talent Incubator',
      description: 'Growing the next generation of builders. We provide hands-on experience with real projects, mentorship, and pathways to impact.',
      status: 'Active', focus: 'Skill Development',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Academic Bridge Lab',
      description: 'Connecting cutting-edge research with practical applications. We partner with universities to translate academic insights into real-world solutions.',
      status: 'Active', focus: 'Research Translation',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Sustainability Lab',
      description: 'Building products that fund themselves. We focus on creating sustainable business models that validate ideas while generating revenue for future innovation.',
      status: 'Active', focus: 'Sustainable Models',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
    },
    {
      title: 'Innovation Pipeline',
      description: 'From idea to impact. Our systematic approach to identifying opportunities, validating assumptions, and launching experiments that matter.',
      status: 'Active', focus: 'Systematic Innovation',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  // Sections now render in normal document flow; the page scrolls natively.
  const overlay = (index: number, content: React.ReactNode) => (
    <React.Fragment key={index}>{content}</React.Fragment>
  );

  return (
    <Layout>
      <div className="pb-16">
        <Navigation
          currentSection={activeSection}
          onNavigate={scrollToSection}
        />

        {/* Section 0 — Home */}
        {overlay(0, <Hero onExplore={() => scrollToSection('research')} />)}

      {/* Section 1 — Research */}
      {overlay(1,
        <Section id="research" className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-black">
          <div className="max-w-7xl mx-auto space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left space-y-3"
            >
              <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter uppercase">
                What's in the Lab
              </h2>
              <p className="text-base text-gray-600 font-mono max-w-2xl border-l-2 border-black pl-4">
                Active experiments, ongoing initiatives, and the work happening right now at Jasper Labs.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {labInitiatives.map((lab, index) => (
                <LabCard key={index} {...lab} index={index} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Section 2 — Products */}
      {overlay(2,
        <Section id="products" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-100 text-black border-b-4 border-black">
          <div className="max-w-7xl mx-auto space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left space-y-6"
            >
              <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter uppercase">
                Product Focus
              </h2>
              <p className="text-xl text-gray-600 font-mono max-w-2xl border-l-2 border-black pl-6">
                Product thinking is at our core — from how we structure experiments to how we design user experiences.
              </p>
            </motion.div>

            <ProductGrid />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-left space-y-6 pt-4"
            >
              <h3 className="text-4xl md:text-6xl font-bold font-display tracking-tighter uppercase">
                Built in the Lab
              </h3>
              <p className="text-xl text-gray-600 font-mono max-w-2xl border-l-2 border-black pl-6">
                The products and AI agents we've shipped — and the ones we're customizing for businesses right now.
              </p>
            </motion.div>

            <ProductShowcase onContact={() => scrollToSection('contact')} />
          </div>
        </Section>
      )}

      {/* Section 3 — Contact + Footer */}
      {overlay(3,
        <>
          <Section id="contact" className="relative min-h-screen bg-black text-white flex flex-col justify-center overflow-hidden">
            {/* Ambient background accents */}
            <div className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-24 w-[32rem] h-[32rem] bg-blue-500/10 rounded-full blur-[140px]" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '48px 48px' }}
            />

            <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-10 py-24">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">

                {/* Left — intro & direct contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <h2 className="text-5xl sm:text-6xl font-bold font-display tracking-tighter uppercase leading-[0.95]">
                    Let's build<br />something <span className="text-blue-500">real</span>.
                  </h2>

                  <p className="text-base text-gray-400 font-mono max-w-md leading-relaxed">
                    Have an idea, a partnership, or just a question? Drop us a line and we'll get back to you.
                  </p>
                </motion.div>

                {/* Right — form card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 sm:p-10"
                >
                  {/* Corner accents */}
                  <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500 -translate-x-px -translate-y-px" />
                  <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-blue-500 translate-x-px -translate-y-px" />
                  <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-blue-500 -translate-x-px translate-y-px" />
                  <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-500 translate-x-px translate-y-px" />

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name + Topic */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-xs font-mono text-gray-400 uppercase tracking-widest">Name</label>
                        <input
                          type="text" id="name" name="name" required
                          className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white text-sm font-display rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/40 placeholder:text-white/30 transition-all duration-200"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="inquiryType" className="block text-xs font-mono text-gray-400 uppercase tracking-widest">Topic</label>
                        <select
                          id="inquiryType" name="inquiryType"
                          className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white text-sm font-display rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/40 cursor-pointer appearance-none transition-all duration-200"
                        >
                          <option value="partnership" className="bg-black">Partnership</option>
                          <option value="collaboration" className="bg-black">Collaboration</option>
                          <option value="careers" className="bg-black">Career Opportunity</option>
                          <option value="general" className="bg-black">Something else</option>
                        </select>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-mono text-gray-400 uppercase tracking-widest">Email</label>
                      <input
                        type="email" id="email" name="email" required
                        className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white text-sm font-display rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/40 placeholder:text-white/30 transition-all duration-200"
                        placeholder="example@gmail.com"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-xs font-mono text-gray-400 uppercase tracking-widest">Message</label>
                      <textarea
                        id="message" name="message" required rows={4}
                        className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white text-sm font-display rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/40 resize-none placeholder:text-white/30 transition-all duration-200"
                        placeholder="Tell us about your idea..."
                      />
                    </div>

                    {formStatus.type !== 'idle' && (
                      <div className={`p-4 border font-mono text-sm rounded-sm ${formStatus.type === 'success' ? 'border-green-500/60 bg-green-500/10 text-green-400' : formStatus.type === 'error' ? 'border-red-500/60 bg-red-500/10 text-red-400' : 'border-blue-500/60 bg-blue-500/10 text-blue-400'}`}>
                        {formStatus.type === 'loading' && (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                            <span className="uppercase">Sending...</span>
                          </div>
                        )}
                        {(formStatus.type === 'success' || formStatus.type === 'error') && (
                          <p>{formStatus.message}</p>
                        )}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus.type === 'loading'}
                      className="group w-full inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-blue-600 hover:text-white transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </button>
                  </form>
                </motion.div>

              </div>
            </div>
          </Section>

          <footer className="pt-12 pb-28 bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <Logo className="text-white h-16 md:h-20 w-auto" />
                <div className="text-center md:text-right space-y-1">
                  <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">
                    Building the future, one experiment at a time.
                  </p>
                  <p className="text-gray-600 text-xs font-mono">
                    &copy; {new Date().getFullYear()} Jasper Labs. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
      </div>
    </Layout>
  );
};

export default Home;
