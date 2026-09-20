import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import emberLogo from '../../assets/ember-logo.png';
import emberMark from '../../assets/ember-mark.png';
import jasperLabsLogo from '../../assets/jasper-labs.png';

const UpliftModeling: React.FC = () => {
  useEffect(() => {
    // Dynamic Google Fonts Injection
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;1,400&family=STIX+Two+Text:ital,wght@0,400;1,400;1,500&family=IBM+Plex+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Save original title and favicon
    const originalTitle = document.title;
    let faviconLink: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    const originalFavicon = faviconLink ? faviconLink.getAttribute('href') || '/assets/logo.png' : '/assets/logo.png';

    // Update Title and Favicon
    document.title = "Ember from Jasperlabs";
    if (faviconLink) {
      faviconLink.setAttribute('href', '/assets/ember-mark.png');
    } else {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      faviconLink.type = 'image/png';
      faviconLink.setAttribute('href', '/assets/ember-mark.png');
      document.head.appendChild(faviconLink);
    }

    window.scrollTo(0, 0);

    return () => {
      document.head.removeChild(link);
      document.title = originalTitle;
      if (faviconLink) {
        faviconLink.setAttribute('href', originalFavicon);
      }
    };
  }, []);

  return (
    <div
      className="selection:bg-[#A83A0D] selection:text-[#FFF4EC] min-h-screen relative"
      style={{
        backgroundColor: '#EFE2D4',
        color: '#1E1A14',
        fontFamily: "'Archivo', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        overflowX: 'hidden'
      }}
    >
      {/* Custom Global styles for animations & hovers */}
      <style>{`
        .hover-color-accent:hover {
          color: #8F2F06 !important;
        }
        .hover-bg-accent:hover {
          background: #A83A0D !important;
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.72; }
          40% { opacity: 1; }
          70% { opacity: 0.85; }
        }
      `}</style>

      {/* Noise Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 200,
          pointerEvents: 'none',
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27/%3E%3C/filter%3E%3Crect width=%27160%27 height=%27160%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")`
        }}
      />

      {/* Fixed Navigation */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 40px',
          background: 'linear-gradient(#EFE2D4 12%, rgba(239,226,212,0.85) 62%, rgba(239,226,212,0))'
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={emberLogo}
            alt="Ember"
            style={{ width: '128px', height: 'auto', display: 'block', borderRadius: '9px' }}
          />
        </Link>
        <Link
          to="/"
          state={{ section: 'contact' }}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '12px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1E1A14',
            borderBottom: '1px solid #1E1A14',
            paddingBottom: '3px'
          }}
        >
          Book a setup call
        </Link>
      </div>

      {/* Section 1: Intro */}
      <section style={{ padding: '22vh 40px 12vh' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link
            to="/"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#4E463B'
            }}
          >
            ← Back to Home
          </Link>
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#8F2F06',
              margin: '40px 0 0'
            }}
          >
            Learn more
          </p>
          <h1
            style={{
              fontSize: 'clamp(36px, 5.2vw, 76px)',
              lineHeight: 1.06,
              fontWeight: 500,
              letterSpacing: '-0.035em',
              margin: '16px 0 0',
              maxWidth: '20ch'
            }}
          >
            Why we look for a pattern instead of a likely buyer
          </h1>
          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.65,
              color: '#4A4238',
              margin: '32px 0 0',
              maxWidth: '58ch'
            }}
          >
            Your first goal &mdash; getting the people who loaded real data to run their first query &mdash; sounds like a ranking problem. It isn't. Ranking gives you the users most likely to convert, and a good number of those were going to convert without hearing from you. This page explains what we look for instead.
          </p>

          {/* Dot Grid visual */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '40px',
              flexWrap: 'wrap',
              margin: '56px 0 0',
              paddingTop: '34px',
              borderTop: '1px solid #CDBAA4'
            }}
          >
            <span style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ display: 'grid', gridTemplateColumns: 'repeat(18, 9px)', gap: '6px' }}>
                {/* Row 1 */}
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#8F2F06' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#8F2F06' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#8F2F06' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#8F2F06' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                
                {/* Row 2 */}
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#8F2F06' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#8F2F06' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#8F2F06' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>

                {/* Row 3 */}
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#8F2F06' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#8F2F06' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
              </span>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.11em',
                  textTransform: 'uppercase',
                  color: '#4E463B'
                }}
              >
                Every signup in one goal, ranked by likelihood
              </span>
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '4px' }}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.11em',
                  textTransform: 'uppercase',
                  color: '#8F2F06'
                }}
              >
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#8F2F06' }}></span>
                Worth an outreach
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '9px',
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.11em',
                  textTransform: 'uppercase',
                  color: '#4E463B'
                }}
              >
                <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#D6C4B0' }}></span>
                Not
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Split Table */}
      <section style={{ padding: '0 40px 14vh' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 2.6vw, 38px)',
              lineHeight: 1.22,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              margin: 0,
              maxWidth: '26ch'
            }}
          >
            Four kinds of user sit inside every list
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#4A4238',
              margin: '20px 0 44px',
              maxWidth: '58ch'
            }}
          >
            Once you accept that an email can change an outcome in either direction, your database splits into four groups. Only one of them is worth the send.
          </p>

          {/* Matrix table */}
          <div style={{ display: 'grid', gridTemplateColumns: '30px repeat(2, 1fr)', gap: 0 }}>
            <div></div>
            <div
              style={{
                padding: '0 32px 12px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '10.5px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4E463B'
              }}
            >
              Wouldn't convert on their own
            </div>
            <div
              style={{
                padding: '0 32px 12px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '10.5px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4E463B'
              }}
            >
              Would convert on their own
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifycontent: 'center' }}>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#4E463B',
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  whiteSpace: 'nowrap'
                }}
              >
                Converts after your email
              </span>
            </div>
            <div
              style={{
                gridColumn: '2 / span 2',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1px',
                background: '#CDBAA4',
                border: '1px solid #CDBAA4',
                borderBottom: 'none'
              }}
            >
              <div style={{ background: '#F6EEE4', padding: '30px 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8F2F06' }}>
                  Worth the email
                </span>
                <span style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '-0.02em' }}>Persuadable</span>
                <span style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#4A4238' }}>
                  Converts if you write, doesn't if you don't. The entire return on the campaign comes from this group.
                </span>
              </div>
              <div style={{ background: '#EDE4D8', padding: '30px 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4E463B' }}>
                  Wasted spend
                </span>
                <span style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '-0.02em' }}>Sure thing</span>
                <span style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#4A4238' }}>
                  Converts either way. A response model ranks these highest, because they look exactly like your customers &mdash; they already are one, they just haven't paid yet.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifycontent: 'center' }}>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '10.5px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#4E463B',
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  whiteSpace: 'nowrap'
                }}
              >
                Doesn't convert after it
              </span>
            </div>
            <div
              style={{
                gridColumn: '2 / span 2',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1px',
                background: '#CDBAA4',
                border: '1px solid #CDBAA4'
              }}
            >
              <div style={{ background: '#EDE4D8', padding: '30px 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4E463B' }}>
                  Wasted spend
                </span>
                <span style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '-0.02em' }}>Lost cause</span>
                <span style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#4A4238' }}>
                  Never converts. Harmless, but every send to this group dilutes your numbers and your sender reputation.
                </span>
              </div>
              <div style={{ background: '#F0E2D0', padding: '30px 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8F2F06' }}>
                  Actively harmful
                </span>
                <span style={{ fontSize: '22px', fontWeight: 500, letterSpacing: '-0.02em' }}>Do-not-disturb</span>
                <span style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#4A4238' }}>
                  Would have converted, but the email reminds them they aren't using the product. They unsubscribe instead. Nothing in a response model prevents this send.
                </span>
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: "'STIX Two Text', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 2vw, 28px)',
              lineHeight: 1.45,
              color: '#4A4238',
              margin: '44px 0 0',
              maxWidth: '34ch'
            }}
          >
            A pattern separates the first group from the other three. A ranking cannot.
          </p>
        </div>
      </section>

      {/* Section 3: Sequence */}
      <section style={{ padding: '14vh 40px', background: '#F3ECE3', borderTop: '1px solid #CDBAA4', borderBottom: '1px solid #CDBAA4' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 2.6vw, 38px)',
              lineHeight: 1.22,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              margin: 0,
              maxWidth: '26ch'
            }}
          >
            What that looks like on your first goal
          </h2>

          <div style={{ margin: '44px 0 0', padding: '34px 0 30px', borderTop: '1px solid #DCCAB6', borderBottom: '1px solid #DCCAB6' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', alignItems: 'end' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <span style={{ height: '7px', background: '#8F2F06' }}></span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.06em', color: '#3C352C' }}>
                  signed up
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <span style={{ height: '7px', background: '#8F2F06' }}></span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.06em', color: '#3C352C' }}>
                  came back
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <span style={{ height: '7px', background: '#8F2F06' }}></span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.06em', color: '#3C352C' }}>
                  loaded real data
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <span style={{ height: '7px', background: 'repeating-linear-gradient(90deg, #C08D6E 0 6px, transparent 6px 12px)' }}></span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.06em', color: '#8F2F06' }}>
                  first query &nbsp;←&nbsp; stalled here
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                <span style={{ height: '7px', background: '#DCCAB6' }}></span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.06em', color: '#4E463B' }}>
                  paid
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '26px', flexWrap: 'wrap', marginTop: '26px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '10.5px', letterSpacing: '0.11em', textTransform: 'uppercase', color: '#4E463B' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '20px', height: '7px', background: '#8F2F06' }}></span>Done</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '20px', height: '7px', background: 'repeating-linear-gradient(90deg, #C08D6E 0 6px, transparent 6px 12px)' }}></span>The missing step &mdash; what the email is about</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '20px', height: '7px', background: '#DCCAB6' }}></span>Not yet</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '44px' }}>
            <div style={{ borderTop: '1px solid #DCCAB6', padding: '26px 0', display: 'grid', gridTemplateColumns: '0.35fr 1fr', gap: '40px', alignItems: 'baseline' }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8F2F06' }}>
                Step one
              </span>
              <span style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#3C352C' }}>
                We take the users who already paid you and reconstruct what they did before they paid &mdash; in order, with timing. For most products this is a short sequence, not a long profile. Loading real data rather than the sample set is usually in it.
              </span>
            </div>
            <div style={{ borderTop: '1px solid #DCCAB6', padding: '26px 0', display: 'grid', gridTemplateColumns: '0.35fr 1fr', gap: '40px', alignItems: 'baseline' }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8F2F06' }}>
                Step two
              </span>
              <span style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#3C352C' }}>
                We score everyone who hasn't paid on how far into that sequence they got, and where they stopped. Someone who loaded real data and stalled before their first query is deep in the pattern with one step missing. Someone who never got past signup is not.
              </span>
            </div>
            <div style={{ borderTop: '1px solid #DCCAB6', padding: '26px 0', display: 'grid', gridTemplateColumns: '0.35fr 1fr', gap: '40px', alignItems: 'baseline' }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8F2F06' }}>
                Step three
              </span>
              <span style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#3C352C' }}>
                The missing step decides the message. Not "here's what our product does" &mdash; the one action that stands between where they are and where your customers were. That's why the email carries a query rather than a feature tour.
              </span>
            </div>
            <div style={{ borderTop: '1px solid #DCCAB6', borderBottom: '1px solid #DCCAB6', padding: '26px 0', display: 'grid', gridTemplateColumns: '0.35fr 1fr', gap: '40px', alignItems: 'baseline' }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8F2F06' }}>
                Step four
              </span>
              <span style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#3C352C' }}>
                A portion of the qualifying users is deliberately held back and not written to. Comparing the two groups a few weeks later is the only way to know whether the email caused anything. That comparison is what tunes the next round.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Diagnostics */}
      <section style={{ padding: '14vh 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 2.6vw, 38px)',
              lineHeight: 1.22,
              fontWeight: 500,
              letterSpacing: '-0.025em',
              margin: 0,
              maxWidth: '26ch'
            }}
          >
            The checks we run before trusting a pattern
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#4A4238',
              margin: '20px 0 44px',
              maxWidth: '58ch'
            }}
          >
            A pattern that fits your history can still be an artefact of it. Every model we fit on your data goes through the same diagnostics before it is allowed to decide who hears from you.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* posterior predictive check */}
            <div style={{ borderTop: '1px solid #CDBAA4', padding: '28px 0', display: 'grid', gridTemplateColumns: '0.4fr 1fr', gap: '44px', alignItems: 'baseline' }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <span style={{ display: 'block', width: '82px', height: '44px', marginBottom: '4px' }}>
                  <svg viewBox="0 0 82 44" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                    <path d="M2 40C14 40 16 10 30 10s16 30 28 30" fill="none" stroke="#C08D6E" strokeWidth="1.6" strokeDasharray="3 3"/>
                    <path d="M12 40C24 40 26 15 40 15s16 25 30 25" fill="none" stroke="#8F2F06" strokeWidth="1.8"/>
                    <line x1="0" y1="41" x2="82" y2="41" stroke="#CDBAA4" strokeWidth="1"/>
                  </svg>
                </span>
                <span style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.25 }}>Posterior predictive check</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.08em', color: '#4E463B' }}>
                  Does the model reproduce your history?
                </span>
              </span>
              <span style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#3C352C' }}>
                We have the model simulate the conversions it thinks your database should have produced, then compare that against what actually happened. If the simulated world doesn't look like your real one, the pattern is wrong no matter how well it scores.
              </span>
            </div>

            {/* Linearity */}
            <div style={{ borderTop: '1px solid #CDBAA4', padding: '28px 0', display: 'grid', gridTemplateColumns: '0.4fr 1fr', gap: '44px', alignItems: 'baseline' }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <span style={{ display: 'block', width: '82px', height: '44px', marginBottom: '4px' }}>
                  <svg viewBox="0 0 82 44" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                    <line x1="2" y1="40" x2="70" y2="6" stroke="#C08D6E" strokeWidth="1.4" strokeDasharray="3 3"/>
                    <path d="M2 40C26 40 40 18 70 14" fill="none" stroke="#8F2F06" strokeWidth="1.8"/>
                    <line x1="0" y1="41" x2="82" y2="41" stroke="#CDBAA4" strokeWidth="1"/>
                  </svg>
                </span>
                <span style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.25 }}>Linearity</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.08em', color: '#4E463B' }}>
                  Does more of a signal mean more intent?
                </span>
              </span>
              <span style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#3C352C' }}>
                Usage rarely scales cleanly. Ten sessions is not ten times the intent of one, and past a point more activity means someone is fighting the product rather than adopting it. We test the shape of each relationship instead of assuming a straight line.
              </span>
            </div>

            {/* Variance */}
            <div style={{ borderTop: '1px solid #CDBAA4', padding: '28px 0', display: 'grid', gridTemplateColumns: '0.4fr 1fr', gap: '44px', alignItems: 'baseline' }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <span style={{ display: 'block', width: '82px', height: '44px', marginBottom: '4px' }}>
                  <svg viewBox="0 0 82 44" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                    <path d="M2 26C20 20 34 32 52 22 62 16 68 20 78 16" fill="none" stroke="#8F2F06" strokeWidth="1.6"/>
                    <path d="M2 14C20 6 34 20 52 10 62 3 68 8 78 4" fill="none" stroke="#C08D6E" strokeWidth="1" strokeDasharray="2 3"/>
                    <path d="M2 38C20 34 34 44 52 34 62 29 68 32 78 28" fill="none" stroke="#C08D6E" strokeWidth="1" strokeDasharray="2 3"/>
                  </svg>
                </span>
                <span style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.25 }}>Variance</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.08em', color: '#4E463B' }}>
                  Is the estimate stable, or noise?
                </span>
              </span>
              <span style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#3C352C' }}>
                With a few thousand signups, a promising cohort can be four people who happened to convert. We carry the uncertainty on every score, and a pattern held up by a handful of accounts is reported as unproven rather than acted on.
              </span>
            </div>

            {/* Residuals */}
            <div style={{ borderTop: '1px solid #CDBAA4', padding: '28px 0', display: 'grid', gridTemplateColumns: '0.4fr 1fr', gap: '44px', alignItems: 'baseline' }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <span style={{ display: 'block', width: '82px', height: '44px', marginBottom: '4px' }}>
                  <svg viewBox="0 0 82 44" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                    <line x1="0" y1="22" x2="82" y2="22" stroke="#CDBAA4" strokeWidth="1"/>
                    <circle cx="8" cy="14" r="2.1" fill="#8F2F06"/>
                    <circle cx="20" cy="30" r="2.1" fill="#8F2F06"/>
                    <circle cx="31" cy="18" r="2.1" fill="#8F2F06"/>
                    <circle cx="43" cy="26" r="2.1" fill="#8F2F06"/>
                    <circle cx="54" cy="9" r="2.1" fill="#C08D6E"/>
                    <circle cx="61" cy="7" r="2.1" fill="#C08D6E"/>
                    <circle cx="70" cy="10" r="2.1" fill="#C08D6E"/>
                    <circle cx="77" cy="34" r="2.1" fill="#8F2F06"/>
                  </svg>
                </span>
                <span style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.25 }}>Residuals</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.08em', color: '#4E463B' }}>
                  Who is the model getting wrong?
                </span>
              </span>
              <span style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#3C352C' }}>
                The misses are the interesting part. When the users a model can't explain share something — a plan, a signup source, a month — that structure is a signal it hasn't learned yet, and it usually becomes the next one it does.
              </span>
            </div>

            {/* Normalization */}
            <div style={{ borderTop: '1px solid #CDBAA4', borderBottom: '1px solid #CDBAA4', padding: '28px 0', display: 'grid', gridTemplateColumns: '0.4fr 1fr', gap: '44px', alignItems: 'baseline' }}>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <span style={{ display: 'block', width: '82px', height: '44px', marginBottom: '4px' }}>
                  <svg viewBox="0 0 82 44" style={{ width: '100%', height: '100%', display: 'block', overflow: 'visible' }}>
                    <rect x="3" y="4" width="9" height="37" fill="#C08D6E"/>
                    <rect x="17" y="30" width="9" height="11" fill="#C08D6E"/>
                    <path d="M35 22h11m-4-4 4 4-4 4" fill="none" stroke="#4E463B" strokeWidth="1.3"/>
                    <rect x="56" y="16" width="9" height="25" fill="#8F2F06"/>
                    <rect x="70" y="16" width="9" height="25" fill="#8F2F06"/>
                  </svg>
                </span>
                <span style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.25 }}>Normalization</span>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.08em', color: '#4E463B' }}>
                  Are these numbers comparable at all?
                </span>
              </span>
              <span style={{ fontSize: '16.5px', lineHeight: 1.7, color: '#3C352C' }}>
                Row counts, session lengths and team sizes live on wildly different scales, and a one-person project cannot be measured against a fifty-seat account raw. Everything is put on common footing first, so the model weighs behaviour rather than whichever column happens to have the biggest numbers.
              </span>
            </div>
          </div>

          <p
            style={{
              fontFamily: "'STIX Two Text', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(20px, 2vw, 28px)',
              lineHeight: 1.45,
              color: '#4A4238',
              margin: '44px 0 0',
              maxWidth: '36ch'
            }}
          >
            You will never see this layer. It is why the emails you do see are worth sending.
          </p>
        </div>
      </section>

      {/* Section 5: Bibliography */}
      <section style={{ padding: '0 40px 14vh' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '72px', alignItems: 'start' }}>
          <div>
            <h2
              style={{
                fontSize: 'clamp(24px, 2.6vw, 38px)',
                lineHeight: 1.22,
                fontWeight: 500,
                letterSpacing: '-0.025em',
                margin: 0,
                maxWidth: '20ch'
              }}
            >
              Where this comes from
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#4A4238', margin: '20px 0 0', maxWidth: '42ch' }}>
              The approach has a name in the literature &mdash; uplift modeling, sometimes true lift or differential response. It has been studied in direct marketing for over a decade. We didn't invent it. We built the part that connects it to a founder's own database.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <a
              href="https://link.springer.com/article/10.1007/s10796-022-10283-4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-color-accent"
              style={{
                borderTop: '1px solid #CDBAA4',
                padding: '22px 0',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '32px',
                alignItems: 'baseline',
                color: '#3C352C',
                transition: 'color 0.2s ease'
              }}
            >
              <span style={{ fontSize: '16px', lineHeight: 1.5 }}>
                Multiple Treatment Modeling for Target Marketing Campaigns: A Large-Scale Benchmark Study
              </span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11.5px', color: '#4E463B', whiteSpace: 'nowrap' }}>
                2022
              </span>
            </a>
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S0167923621001585"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-color-accent"
              style={{
                borderTop: '1px solid #CDBAA4',
                padding: '22px 0',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '32px',
                alignItems: 'baseline',
                color: '#3C352C',
                transition: 'color 0.2s ease'
              }}
            >
              <span style={{ fontSize: '16px', lineHeight: 1.5 }}>Uplift modeling with value-driven evaluation metrics</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11.5px', color: '#4E463B', whiteSpace: 'nowrap' }}>
                2021
              </span>
            </a>
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S0377221719309415"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-color-accent"
              style={{
                borderTop: '1px solid #CDBAA4',
                padding: '22px 0',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '32px',
                alignItems: 'baseline',
                color: '#3C352C',
                transition: 'color 0.2s ease'
              }}
            >
              <span style={{ fontSize: '16px', lineHeight: 1.5 }}>
                Response transformation and profit decomposition for revenue uplift modeling
              </span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11.5px', color: '#4E463B', whiteSpace: 'nowrap' }}>
                2020
              </span>
            </a>
            <a
              href="https://www.jtit.pl/jtit/article/view/1263"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-color-accent"
              style={{
                borderTop: '1px solid #CDBAA4',
                borderBottom: '1px solid #CDBAA4',
                padding: '22px 0',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '32px',
                alignItems: 'baseline',
                color: '#3C352C',
                transition: 'color 0.2s ease'
              }}
            >
              <span style={{ fontSize: '16px', lineHeight: 1.5 }}>Uplift Modeling in Direct Marketing</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11.5px', color: '#4E463B', whiteSpace: 'nowrap' }}>
                2012
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section style={{ background: '#EFE2D4', padding: '14vh 40px', borderTop: '1px solid #CDBAA4' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <img
              src={emberMark}
              alt=""
              style={{ height: '76px', width: 'auto', display: 'block', animation: 'breathe 4.5s ease-in-out infinite' }}
            />
            <h2
              style={{
                fontSize: 'clamp(24px, 2.6vw, 38px)',
                lineHeight: 1.15,
                fontWeight: 500,
                letterSpacing: '-0.03em',
                margin: 0,
                maxWidth: '20ch'
              }}
            >
              Bring us a goal. We'll find the pattern.
            </h2>
          </div>
          <Link
            to="/"
            state={{ section: 'contact' }}
            className="hover-bg-accent"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#FFF4EC',
              background: '#8F2F06',
              padding: '16px 34px',
              transition: 'background 0.2s ease'
            }}
          >
            Book a setup call
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '44px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', borderTop: '1px solid #CDBAA4' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/">
            <img
              src={emberLogo}
              alt="Ember"
              style={{ width: '130px', height: 'auto', display: 'block', borderRadius: '9px' }}
            />
          </Link>
          <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={jasperLabsLogo} alt="Jasper Labs" style={{ height: '26px', width: 'auto', display: 'block' }} />
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#414A56' }}>
              A Jasper Labs product
            </span>
          </span>
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '24px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', letterSpacing: '0.13em', textTransform: 'uppercase' }}>
          <span style={{ color: '#4E463B' }}>Brand &amp; tracking</span>
          <a href="https://jasperlabs.in" target="_blank" rel="noopener noreferrer" style={{ color: '#4E463B' }}>
            jasperlabs.in
          </a>
          <span style={{ color: '#4E463B' }}>© 2026</span>
        </span>
      </footer>
    </div>
  );
};

export default UpliftModeling;
