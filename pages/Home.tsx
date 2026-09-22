import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { contactConfig } from '../config/contact';
import { ArrowUpRight, ArrowRight, Plus, Minus, Menu, X, AudioLines, Workflow, Search, FileText } from 'lucide-react';
import './Home.css';
import IndiaNews from '../components/IndiaNews';
import ProcessGraphic from '../components/ProcessGraphic';
import jasperLogo from '../assets/jasper-labs.png';
import emberLogo from '../assets/ember-logo.png';
import resumeLogo from '../assets/resumesetgo.png';
import indiaBusiness from '../assets/india-business-hero.jpg';
import jasperLogo3d from '../assets/jasper-logo-3d.jpg';
import bluekeyLogo from '../assets/clients/bluekey.png';
import twillsLogo from '../assets/clients/twills.png';

const Arrow = () => <ArrowUpRight size={18} aria-hidden="true" />;
const Home: React.FC = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message?: string }>({ type: 'idle' });
  useEffect(() => {
    const target = (location.state as { section?: string } | null)?.section;
    if (target) requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView());
  }, [location.state]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus.type === 'loading') return;
    setFormStatus({ type: 'loading' });

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const inquiryType = formData.get('inquiryType') as string;
    const message = formData.get('message') as string;

    const EMAILJS_SERVICE_ID = contactConfig.serviceId;
    const EMAILJS_TEMPLATE_ID = contactConfig.templateId;
    const EMAILJS_PUBLIC_KEY = contactConfig.publicKey;

    try {
      if ([EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY].some(value => value.startsWith('YOUR_'))) {
        throw new Error('Contact service is not configured');
      }
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { to_email: contactConfig.recipient, from_name: name, from_email: email, inquiry_type: inquiryType, message, reply_to: email },
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

  return <div className="jl">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="jl-header">
      <a href="#home" className="wordmark" aria-label="Jasper Labs home"><img className="jasper-logo" src={jasperLogo} alt="Jasper Labs" /><span className="brand-name">JASPER LABS<span>APPLIED AI STUDIO</span></span></a>
      <nav aria-label="Main navigation" className={menu ? 'jl-nav is-open' : 'jl-nav'}>
        <a href="#services" onClick={() => setMenu(false)}>Our approach</a><a href="#automate" onClick={() => setMenu(false)}>Capabilities</a><a href="#products" onClick={() => setMenu(false)}>From the lab</a>
        <a className="button button-small" href="#contact" onClick={() => setMenu(false)}>Get a free AI audit <Arrow /></a>
      </nav>
      <button className="menu-toggle" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
    </header>
    <main id="main">
      <section className="hero jl-wrap" id="home">
        <div className="hero-copy">
          <h1>AI for the way<br /><em>India does</em><br />business.</h1>
          <p>Orders on WhatsApp. Records in spreadsheets. A team with more to do than hours in the day. We help Indian businesses find where AI can help — and build what fits.</p>
          <div className="hero-actions"><a className="button" href="#contact">Start with a free AI audit <Arrow /></a><a className="text-link" href="#services">Explore our approach <ArrowRight size={17} /></a></div>
          <div className="hero-note">For MSMEs, growing companies, and enterprise teams across India.</div>
        </div>
        <figure className="workbench-art india-business-art">
          <div className="workbench-image"><img src={indiaBusiness} alt="Conceptual miniature of Indian enterprise: a distributor dispatching orders, a manufacturing workshop, and entrepreneurs in an upstairs office." fetchPriority="high" width="1536" height="1024" /><div className="art-registration" aria-hidden="true"><i/><i/><i/><i/></div></div>
        </figure>
      </section>
      <section className="clients jl-wrap" aria-labelledby="clients-heading">
        <h2 id="clients-heading">Our clients</h2>
        <ul className="client-logos">
          <li><a href="https://bluekeyinteriors.com/" target="_blank" rel="noopener noreferrer" aria-label="Blue Key Interiors (opens in a new tab)"><img className="client-bluekey" src={bluekeyLogo} alt="Blue Key Interiors" width="346" height="72" loading="lazy" decoding="async" /></a></li>
          <li><a href="https://www.twills.in/" target="_blank" rel="noopener noreferrer" aria-label="Twills (opens in a new tab)"><img className="client-twills" src={twillsLogo} alt="Twills" width="256" height="46" loading="lazy" decoding="async" /></a></li>
        </ul>
      </section>
      <section id="services" className="approach jl-section">
        <div className="jl-wrap"><div className="section-top"><span className="eyebrow">01 / THE STARTING POINT</span><span className="section-aside">Better questions. Better possibilities.</span></div>
          <div className="section-heading"><h2>Before we build AI,<br />we understand <em>you.</em></h2><p>A family-run business, a factory, a growing startup. Your systems, budgets, and ambitions are different. Our free AI audit starts with a conversation about the way your team works.</p></div>
          <div className="audit-grid"><div className="audit-feature"><span className="eyebrow">THE JASPER LABS AI AUDIT</span><h3>A fresh perspective.<br />A clear next step.</h3><p>Show us the calls, spreadsheets, paperwork, and follow-ups that fill your day. We help you decide where AI is worth the effort.</p><a className="button" href="#contact">Find your opportunity <Arrow /></a><span className="audit-footnote">Free audit. No obligation to build.</span><div className="audit-blueprint" aria-hidden="true"><svg viewBox="0 0 220 190" fill="none"><path d="M0 20h55q40 0 40 40v40q0 35 35 35h90M0 40h40q35 0 35 35v40q0 40 40 40h105M0 60h25q30 0 30 30v40q0 45 45 45h120" stroke="currentColor" strokeWidth="1"/><circle cx="160" cy="155" r="22" fill="#075cf0" stroke="currentColor"/><path d="M150 155h20m-8-8 8 8-8 8" stroke="currentColor"/></svg></div></div>
          <div className="audit-steps">{[
            ['01','Understand the business','We listen to your team and map the work: what takes time, what gets stuck, and what matters most.'],
            ['02','Find the valuable opportunities','Together, we assess where AI could help, considering your data, feasibility, and likely business value.'],
            ['03','Make a plan worth building','You leave with a prioritised direction. If it makes sense to build, we define a focused first solution.']
          ].map(([n,title,copy]) => <div className="audit-step" key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div><Arrow /></div>)}</div></div>
        </div>
      </section>
      <section id="automate" className="capabilities jl-wrap jl-section"><div className="section-top"><span className="eyebrow">02 / POSSIBILITIES, APPLIED</span><span className="section-aside">Built for the way you work.</span></div>
        <div className="section-heading"><h2>Familiar work.<br /><em>Fresh possibilities.</em></h2><p>Enquiries, orders, invoices, and follow-ups. Here are a few places we could explore in your audit, shaped around your tools and your team.</p></div>
        <div className="cap-grid">{[
          [AudioLines,'Every enquiry deserves an answer','CUSTOMER ENQUIRIES','Explore voice or chat support for product questions, appointments, and follow-ups, with a person available when needed.'],
          [Workflow,'From WhatsApp to the next step','ORDERS & OPERATIONS','Explore turning incoming order messages into organised tasks for your sales, stock, and dispatch teams.'],
          [Search,'Answers beyond the spreadsheet','TEAM KNOWLEDGE','Explore searchable product catalogues, price lists, and operating procedures, so your team can find what it needs.'],
          [FileText,'Less paperwork. More oversight.','INVOICES & RECORDS','Explore extracting details from supplier invoices and purchase orders, with your team reviewing them before use.']
        ].map(([Icon,title,tag,copy],i) => { const I = Icon as React.ElementType; return <article className="cap-card" key={i}><div className="cap-icon"><span>0{i+1}</span><I strokeWidth={1.3} size={19}/></div><ProcessGraphic kind={i} /><span className="eyebrow">{tag as string}</span><h3>{title as string}</h3><p>{copy as string}</p></article>})}</div>
        <div className="cap-note"><img className="note-logo" src={jasperLogo} alt="" width="42" height="42" /><p>Retail & distribution. Manufacturing. Services. Technology.<br /><strong>Different businesses. A starting point that fits yours.</strong></p><a className="text-link" href="#contact">Let's find it <Arrow /></a></div>
      </section>
      <section className="lab jl-section" id="products"><div className="jl-wrap"><div className="section-top"><span className="eyebrow">03 / FROM THE LAB</span><span className="section-aside">Ideas turned into working products.</span></div><div className="section-heading lab-brand-heading"><div className="lab-intro-copy"><h2>We explore.<br />We experiment.<br /><em>We build.</em></h2><p>Our products reflect the same curiosity and hands-on engineering we bring to your business.</p></div><figure className="lab-brand-art"><img src={jasperLogo3d} alt="The Jasper Labs logo rendered as a blue enamel and silver sculpture with raised white lines." width="1536" height="1024" loading="lazy" decoding="async" /></figure></div>
        <div className="product-grid"><Link className="product-card ember-card" to="/products/uplift-modeling"><div className="product-art ember-art" aria-hidden="true"><img className="ember-product-logo" src={emberLogo} alt=""/><div className="ember-bars">{[27,45,35,62,51,78,66,96,83,110,100,130].map((h,i)=><i key={i} style={{height:h}} />)}</div><span>FIND THE INCREMENTAL IMPACT.</span></div><div className="product-info"><div><span className="eyebrow">UPLIFT MODELING</span><h3>Ember</h3><p>Focus campaigns on the people they can influence.</p></div><Arrow /></div></Link>
        <Link className="product-card voice-card" to="/products/voice-agent"><div className="product-art voice-art" aria-hidden="true"><div className="wave">{Array.from({length:31},(_,i)=><i key={i} style={{height:20+Math.abs(Math.sin(i*.7))*70+Math.sin(i*.16)*32}} />)}</div><span>A MORE NATURAL CONNECTION.</span></div><div className="product-info"><div><span className="eyebrow">CONVERSATIONAL AI</span><h3>Voice Agent</h3><p>Conversations connected to your business workflows.</p></div><Arrow /></div></Link></div>
        <div className="more-products"><Link to="/products/email-marketing-agent"><span>ALSO FROM THE LAB</span><strong>Campaign Agent</strong><Arrow /></Link><a href="https://resumesetgo.in/" target="_blank" rel="noopener noreferrer"><span>AI JOB SEARCH CO-PILOT</span><img className="resume-product-logo" src={resumeLogo} alt="ResumeSetGo"/><Arrow /></a></div>
      </div></section>
      <IndiaNews />
      <section className="faq jl-wrap jl-section"><div><span className="eyebrow">A LITTLE MORE CLARITY</span><h2>Good questions.<br /><em>Honest answers.</em></h2></div><div className="faq-list">{[
        ['What does the free AI audit include?','A conversation about your business, a review of relevant workflows, and a discussion of promising AI opportunities. We help prioritize what is feasible and useful, so you have a clearer next step.'],
        ['Is this right for an organization our size?','We work exclusively with organizations in India, across sizes and industries. The starting point is your needs, available data, and resources — whether you are exploring AI for the first time or improving an existing system.'],
        ['Do we need to know what we want to build?','No. Bring the problems, repetitive tasks, or opportunities you are thinking about. Finding a sensible starting point is exactly what the audit is for.'],
        ['What happens after the audit?','You decide how to proceed. If you want to build with us, we agree on the scope, approach, and cost before development begins. The audit does not commit you to a paid project.']
      ].map(([q,a],i)=><div className="faq-item" key={q}><h3><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i} aria-controls={`faq-${i}`}>{q}{openFaq===i?<Minus size={18}/>:<Plus size={18}/>}</button></h3><div id={`faq-${i}`} hidden={openFaq!==i}><p>{a}</p></div></div>)}</div></section>
      <section className="contact jl-section" id="contact"><div className="jl-wrap contact-grid"><div><span className="eyebrow"><span className="status-dot"/> REQUEST A FREE AI AUDIT</span><h2>What could AI<br />do for <em>you?</em></h2><p>Tell us what you do, where in India you work, and what takes too much of your team's time. We'll start with a conversation about your free AI audit.</p><a className="contact-email" href="mailto:projectjasper416@gmail.com">projectjasper416@gmail.com <Arrow /></a><span className="contact-note">A real conversation. A practical starting point.</span></div>
        <form onSubmit={handleSubmit} className="audit-form"><h3>Request your free AI audit <Arrow /></h3><div className="form-row"><label htmlFor="name">Your name<input id="name" name="name" autoComplete="name" placeholder="Your full name" required /></label><label htmlFor="email">Work email<input id="email" name="email" type="email" autoComplete="email" placeholder="you@yourbusiness.in" required /></label></div><label htmlFor="inquiryType">I'm interested in<select id="inquiryType" name="inquiryType" defaultValue="automation"><option value="automation">A free AI audit</option><option value="project">A new AI project</option><option value="partnership">A partnership</option><option value="careers">A career opportunity</option><option value="general">Something else</option></select></label><label htmlFor="message">A little about your business<textarea id="message" name="message" rows={3} required placeholder="For example: We distribute electrical supplies in Pune. Order follow-ups take our team hours every day." /></label><button className="button" disabled={formStatus.type==='loading'} type="submit">{formStatus.type==='loading'?'Sending…':'Let’s explore the possibilities'}<Arrow /></button><p className="form-note">No cost for the audit. No obligation to proceed.</p><div role="status" aria-live="polite" className={`form-status ${formStatus.type}`}>{formStatus.message}</div></form>
      </div></section>
    </main>
    <footer className="jl-footer jl-wrap"><div className="footer-top"><a className="wordmark" href="#home"><img className="jasper-logo" src={jasperLogo} alt="Jasper Labs" /><span className="brand-name">JASPER LABS<span>APPLIED AI STUDIO</span></span></a><p>Applied AI for<br />businesses across India.</p><div><Link to="/founders">Meet the founders <Arrow /></Link><a href="https://www.linkedin.com/company/jasper-labs/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Jasper Labs</span><span>Serving businesses across India.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </div>;
};
export default Home;
