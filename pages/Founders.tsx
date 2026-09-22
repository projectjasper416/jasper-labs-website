import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import jasperLogo from '../assets/jasper-labs.png';
import vinayPhoto from '../assets/vinay.jpg';
import adityaPhoto from '../assets/aditya.jpg';
import './Home.css';
import './Founders.css';

const founders = [
  {
    name: 'Vinay Kolla',
    role: 'Product Leader',
    photo: vinayPhoto,
    className: 'founder-vinay',
    bio: 'Vinay is a product leader with a decade of experience across financial services in APAC and North America. He oversees product strategy and engineering execution at Jasper Labs, turning validated hypotheses into highly scalable software and AI agents.',
  },
  {
    name: 'Adityaram Majeti',
    role: 'AI Engineer',
    photo: adityaPhoto,
    className: 'founder-aditya',
    bio: 'Adityaram is an AI engineer who has successfully launched and scaled products across multiple domains and geographies. He focuses on operational delivery, custom customer integrations, and business engines that translate theoretical AI capabilities into commercial value.',
  },
];

const Arrow = () => <ArrowUpRight size={18} aria-hidden="true" />;
const Brand = () => <><img className="jasper-logo" src={jasperLogo} alt="Jasper Labs" /><span className="brand-name">JASPER LABS<span>APPLIED AI STUDIO</span></span></>;

const Founders: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const previousTitle = document.title;
    document.title = 'Meet the founders — Jasper Labs';
    return () => { document.title = previousTitle; };
  }, []);

  return <div className="jl founders-page">
    <a className="skip-link" href="#founders-main">Skip to content</a>
    <header className="jl-header">
      <Link to="/" className="wordmark" aria-label="Jasper Labs home"><Brand /></Link>
      <nav className="founders-nav" aria-label="Main navigation">
        <Link to="/" className="text-link"><ArrowLeft size={17} aria-hidden="true" /><span>Back to home</span></Link>
        <Link to="/" state={{ section: 'contact' }} className="button button-small">Get a free AI audit <Arrow /></Link>
      </nav>
    </header>
    <main id="founders-main">
      <section className="founders-intro jl-wrap" aria-labelledby="founders-title">
        <span className="eyebrow">THE PEOPLE BEHIND JASPER LABS</span>
        <div className="founders-intro-grid">
          <h1 id="founders-title">Meet the<br /><em>founders.</em></h1>
          <p>Product strategy, engineering, and a shared focus on making AI useful for businesses across India.</p>
        </div>
      </section>
      <section className="founders-profiles jl-wrap" aria-label="Founder profiles">
        {founders.map((founder, index) => <article className={`founder-profile ${founder.className}`} key={founder.name} aria-labelledby={`founder-${index}`}>
          <div className="founder-portrait"><img src={founder.photo} alt={founder.name} width={index === 0 ? 768 : 934} height={index === 0 ? 1024 : 1001} decoding="async" /></div>
          <div className="founder-details">
            <span className="eyebrow">{founder.role}</span>
            <h2 id={`founder-${index}`}>{founder.name}</h2>
            <p>{founder.bio}</p>
          </div>
        </article>)}
      </section>
      <section className="founders-contact" aria-labelledby="founders-contact-title">
        <div className="jl-wrap founders-contact-grid">
          <div><span className="eyebrow">START WITH A CONVERSATION</span><h2 id="founders-contact-title">What could AI<br />do for <em>your business?</em></h2></div>
          <div className="founders-contact-copy"><p>Bring the work that takes too much of your team's time. Our free AI audit helps you find a practical starting point.</p><Link to="/" state={{ section: 'contact' }} className="button">Get a free AI audit <Arrow /></Link><a className="founders-email" href="mailto:projectjasper416@gmail.com">projectjasper416@gmail.com <Arrow /></a></div>
        </div>
      </section>
    </main>
    <footer className="jl-footer jl-wrap">
      <div className="footer-top"><Link className="wordmark" to="/" aria-label="Jasper Labs home"><Brand /></Link><p>Applied AI for<br />businesses across India.</p><div><Link to="/" state={{ section: 'contact' }}>Contact <Arrow /></Link><a href="https://www.linkedin.com/company/jasper-labs/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a></div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Jasper Labs</span><span>Serving businesses across India.</span><Link to="/">BACK TO HOME ↑</Link></div>
    </footer>
  </div>;
};

export default Founders;
