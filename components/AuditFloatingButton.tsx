import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CONTACT_EMAIL = 'projectjasper416@gmail.com';

interface AuditFloatingButtonProps {
  aboveBottomNav?: boolean;
}

const AuditFloatingButton: React.FC<AuditFloatingButtonProps> = ({ aboveBottomNav = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    automationNeeds: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // Same EmailJS service, template, and key as the contact form on the home page.
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: CONTACT_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          inquiry_type: 'AI Automation Audit request',
          message: `Company: ${formData.company}\n\nWhat they want to automate:\n${formData.automationNeeds}`,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormState('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        automationNeeds: '',
      });
      // Automatically close modal after success message displays for a bit
      setTimeout(() => {
        setIsOpen(false);
        setFormState('idle');
      }, 3000);
    } catch (error) {
      console.error('Audit request failed:', error);
      setFormState('error');
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed z-40 bg-[#2563EB] text-white border-2 border-black font-mono font-bold uppercase tracking-wider text-xs md:text-sm px-4 py-3 md:px-5 md:py-3.5 flex items-center gap-2 md:gap-3 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_#000] transition-all duration-200 ease-out select-none ${
          aboveBottomNav
            ? 'bottom-20 md:bottom-24 right-6 md:right-8'
            : 'bottom-6 md:bottom-8 right-6 md:right-8'
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span>Schedule a free AI Automation Audit</span>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (formState !== 'loading') setIsOpen(false);
              }}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-md bg-black border-2 border-white p-8 text-white shadow-2xl z-10"
            >
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 -translate-x-px -translate-y-px" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500 translate-x-px -translate-y-px" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500 -translate-x-px translate-y-px" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500 translate-x-px translate-y-px" />

              {/* Close Button */}
              {formState !== 'loading' && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center py-8 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white shadow-lg">
                      <Check className="w-8 h-8 stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-bold font-display uppercase tracking-tight">
                      Request Received!
                    </h3>
                    <p className="font-mono text-sm text-gray-400 max-w-xs leading-relaxed">
                      Thank you! Your AI Automation Audit request has been submitted. We'll be in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold font-display uppercase tracking-tight">
                        Free AI Audit
                      </h3>
                      <p className="text-xs font-mono text-gray-400 border-l border-blue-500 pl-3">
                        Tell us what you want to automate, and we'll analyze your workflow for free.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="audit-name"
                          className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest"
                        >
                          Name
                        </label>
                        <input
                          id="audit-name"
                          type="text"
                          name="name"
                          required
                          disabled={formState === 'loading'}
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white text-sm font-display rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/40 placeholder:text-white/20 transition-all duration-200"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="audit-email"
                          className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest"
                        >
                          Email
                        </label>
                        <input
                          id="audit-email"
                          type="email"
                          name="email"
                          required
                          disabled={formState === 'loading'}
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white text-sm font-display rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/40 placeholder:text-white/20 transition-all duration-200"
                          placeholder="example@gmail.com"
                        />
                      </div>

                      {/* Company */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="audit-company"
                          className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest"
                        >
                          Company
                        </label>
                        <input
                          id="audit-company"
                          type="text"
                          name="company"
                          required
                          disabled={formState === 'loading'}
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white text-sm font-display rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/40 placeholder:text-white/20 transition-all duration-200"
                          placeholder="Your company"
                        />
                      </div>

                      {/* Needs */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="audit-needs"
                          className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest"
                        >
                          What are you looking to automate?
                        </label>
                        <textarea
                          id="audit-needs"
                          name="automationNeeds"
                          required
                          rows={3}
                          disabled={formState === 'loading'}
                          value={formData.automationNeeds}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/10 px-4 py-3 text-white text-sm font-display rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.06] focus:ring-1 focus:ring-blue-500/40 resize-none placeholder:text-white/20 transition-all duration-200"
                          placeholder="Describe the processes or workflows..."
                        />
                      </div>

                      {formState === 'error' && (
                        <div className="flex gap-2 border border-red-500/50 bg-red-500/10 p-3 font-mono text-xs leading-relaxed text-red-300">
                          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>
                            We couldn't submit that request. Please email us directly at{' '}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                              {CONTACT_EMAIL}
                            </a>{' '}
                            and we'll pick it up.
                          </span>
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={formState === 'loading'}
                        className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white text-black font-bold uppercase tracking-widest text-xs md:text-sm rounded-sm hover:bg-blue-600 hover:text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        {formState === 'loading' ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                            Analyzing...
                          </span>
                        ) : (
                          <>
                            Submit Request
                            <span className="transition-transform duration-200 group-hover:translate-x-1">
                              →
                            </span>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AuditFloatingButton;
