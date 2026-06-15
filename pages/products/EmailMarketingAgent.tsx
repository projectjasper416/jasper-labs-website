import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Mail,
    ArrowRight,
    Database,
    Radar,
    Send,
    ShieldCheck,
    Sparkles,
    Brain,
    Clock,
} from 'lucide-react';
import ProductPageLayout from '../../components/ProductPageLayout';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const stats = [
    { value: '30 min', label: 'To onboard a new product' },
    { value: '1 / user / day', label: 'Reasoned, original email' },
    { value: '100%', label: 'Human-approved before send' },
    { value: 'Any SaaS', label: 'No per-customer code' },
];

const principles = [
    {
        icon: Database,
        title: 'Schema is discovered',
        body: 'Our agent maps your unique database at setup — every table, column, and relationship. Nothing is hardcoded. Connect a different product and it figures the new one out on its own.',
    },
    {
        icon: Radar,
        title: 'Signals are raw facts',
        body: 'It works from measurable truths about behavior — "last active 14 days ago", "2 of 5 features used", "payment started, never completed" — not pre-baked campaign categories. You approve which signals matter.',
    },
    {
        icon: Brain,
        title: 'Decisions are reasoned',
        body: 'No if/else rules. For every user, this intelligent Agent weighs the full combination of signals against your product context and decides what — if anything — is worth saying today, then writes it from scratch.',
    },
];

const setupSteps = [
    { n: '01', title: 'Connect your database', body: 'We connect to your database your way, with access you control. It stays secure, and nothing else in your stack is touched.' },
    { n: '02', title: 'Fill the onboarding brief', body: 'A 5–10 minute form on your product, conversion model, and tone. It becomes an intelligent product brief that guides every decision — not a rigid template.' },
    { n: '03', title: 'Your schema gets mapped', body: 'The system reads your brief, analyzes your database, and produces a precise map plus a list of behavioral signals it found in your data.' },
    { n: '04', title: 'You approve the signals', body: 'A simple yes/no on each signal. The ones you approve become the vocabulary the system reasons with. Setup is done.' },
];

const dailySteps = [
    { icon: Brain, title: 'Analyze & draft', body: 'The system reads your data and behavioral signals intelligently, reasons over each user, and prepares a personalized draft for everyone worth reaching today.' },
    { icon: ShieldCheck, title: 'You approve the batch', body: 'Every planned draft is sent to you for review. Read them, then approve or cancel the whole batch with one tap.' },
    { icon: Send, title: 'Deliver & log', body: 'Only after your approval does it send the emails, with one-click unsubscribe built in, and log every decision for a full audit trail.' },
];

const outcomes = [
    { title: 'Convert at the right moment', body: 'Move free users to paid exactly when their behavior says they are ready — not on a fixed day-7 timer.' },
    { title: 'Activate stalled users', body: 'Reach people who are one step from the value moment and give them the specific nudge that gets them there.' },
    { title: 'Win back dormant users', body: 'Re-engage accounts going quiet before they churn, with a reason to come back that fits what they last did.' },
    { title: 'Recover abandoned checkouts', body: 'Follow up with users who started paying and dropped off, referencing exactly where they left.' },
    { title: 'Drive feature discovery', body: 'Surface the underused capability that matters most to each user, instead of a generic feature blast.' },
    { title: 'Or any goal you define', body: 'Tell it what success looks like for your product and it optimizes toward that — every brief is fully customized.' },
];

const SectionHeading: React.FC<{ eyebrow: string; title: string }> = ({ eyebrow, title }) => (
    <motion.div {...fadeUp} className="space-y-3">
        <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600">{eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tighter uppercase">{title}</h2>
    </motion.div>
);

const EmailMarketingAgent: React.FC = () => {
    return (
        <ProductPageLayout>
            {/* Hero */}
            <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="inline-flex items-center gap-3 border-2 border-black px-4 py-2 mb-8">
                        <Mail className="w-5 h-5" />
                        <span className="text-xs font-bold font-mono uppercase tracking-[0.2em]">AI Email Marketing Agent</span>
                    </motion.div>

                    <motion.h1
                        {...fadeUp}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tighter uppercase leading-[0.95] max-w-4xl"
                    >
                        Email that reasons.
                        <br />
                        <span className="text-blue-600">Not email that triggers.</span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 text-lg md:text-xl font-mono leading-relaxed text-gray-700 max-w-2xl border-l-2 border-black pl-6"
                    >
                        A multi-agent system any SaaS product can plug into. It learns your database,
                        understands your product, finds the behavioral signals hiding in your data, and writes a
                        genuinely personal email to each user — every single day.
                    </motion.p>

                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <Link
                            to="/"
                            state={{ section: 3 }}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold uppercase tracking-widest text-sm hover:bg-blue-600 transition-colors duration-200"
                        >
                            Request a Demo
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                        <button
                            type="button"
                            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-200"
                        >
                            How it works
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Stat band */}
            <section className="border-y-2 border-black bg-black text-white">
                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`p-6 md:p-8 border-black ${i < 2 ? 'border-b-2' : ''} lg:border-b-0 ${i % 2 === 0 ? 'border-r-2' : ''} ${i < 3 ? 'lg:border-r-2' : ''}`}
                        >
                            <div className="text-2xl md:text-4xl font-bold font-display tracking-tight text-blue-500">{s.value}</div>
                            <div className="mt-2 text-xs font-mono uppercase tracking-widest text-gray-400">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Problem */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="max-w-6xl mx-auto space-y-12">
                    <SectionHeading eyebrow="The Problem" title="Most email marketing can't reason" />
                    <div className="grid md:grid-cols-2 gap-0 border-2 border-black">
                        <motion.div {...fadeUp} className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">
                            <h3 className="text-xl font-bold font-display uppercase mb-3">Rule-based systems</h3>
                            <p className="font-mono text-sm leading-relaxed text-gray-700">
                                Hardcoded triggers that fire on fixed conditions. Predictable but dumb — they can't reason
                                across multiple signals at once, they apply the same logic to everyone, and every new
                                campaign needs engineering.
                            </p>
                        </motion.div>
                        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="p-8">
                            <h3 className="text-xl font-bold font-display uppercase mb-3">Generic platforms</h3>
                            <p className="font-mono text-sm leading-relaxed text-gray-700">
                                Mailchimp, Customer.io and friends need manual segments, manual copy, and manual
                                scheduling. They have no understanding of your specific schema or the nuances that make
                                one user's situation different from the next.
                            </p>
                        </motion.div>
                    </div>
                    <motion.p {...fadeUp} className="text-xl md:text-2xl font-display tracking-tight max-w-3xl">
                        Neither can look at a user who signed up two weeks ago, used two of your features a handful of
                        times, started a checkout but never finished, and is still on the free plan — and write the one
                        email that speaks to exactly that. <span className="text-blue-600">That takes reasoning, not rules.</span>
                    </motion.p>
                </div>
            </section>

            {/* Principles */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gray-100 border-y-2 border-black">
                <div className="max-w-6xl mx-auto space-y-12">
                    <SectionHeading eyebrow="How it's different" title="Intelligence lives in the agents" />
                    <div className="grid md:grid-cols-3 gap-0 border-2 border-black bg-black">
                        {principles.map((p, i) => (
                            <motion.div
                                key={p.title}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="group bg-white p-8 hover:bg-blue-600 hover:text-white transition-colors duration-300 border-b-2 md:border-b-0 md:border-r-2 border-black last:border-0"
                            >
                                <p.icon className="w-10 h-10 stroke-[1.5] mb-6" />
                                <h3 className="text-lg font-bold font-display uppercase mb-3 tracking-tight">{p.title}</h3>
                                <p className="font-mono text-sm leading-relaxed opacity-80">{p.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 scroll-mt-16">
                <div className="max-w-6xl mx-auto space-y-16">
                    <SectionHeading eyebrow="How it works" title="Two lifecycles" />

                    {/* Setup */}
                    <div className="space-y-8">
                        <motion.div {...fadeUp} className="flex items-center gap-3">
                            <Sparkles className="w-5 h-5 text-blue-600" />
                            <h3 className="text-2xl font-bold font-display uppercase tracking-tight">Setup — once per product</h3>
                        </motion.div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black bg-black">
                            {setupSteps.map((s, i) => (
                                <motion.div
                                    key={s.n}
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="bg-white p-6 border-b-2 lg:border-b-0 border-black sm:[&:nth-child(odd)]:border-r-2 lg:[&:nth-child(odd)]:border-r-2 lg:border-r-2 last:border-0"
                                >
                                    <div className="text-3xl font-bold font-display text-blue-600 mb-3">{s.n}</div>
                                    <h4 className="text-base font-bold font-display uppercase mb-2 tracking-tight leading-tight">{s.title}</h4>
                                    <p className="font-mono text-xs leading-relaxed text-gray-600">{s.body}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Daily */}
                    <div className="space-y-8">
                        <motion.div {...fadeUp} className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <h3 className="text-2xl font-bold font-display uppercase tracking-tight">Daily run — automatic, every day</h3>
                        </motion.div>
                        <div className="border-2 border-black divide-y-2 divide-black">
                            {dailySteps.map((s, i) => (
                                <motion.div
                                    key={s.title}
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                    className="group flex items-start gap-5 p-6 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                                >
                                    <div className="shrink-0 w-10 h-10 border-2 border-current flex items-center justify-center">
                                        <s.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold font-display uppercase tracking-tight mb-1">
                                            <span className="text-blue-600 group-hover:text-white mr-2">{String(i + 1).padStart(2, '0')}</span>
                                            {s.title}
                                        </h4>
                                        <p className="font-mono text-sm leading-relaxed opacity-80">{s.body}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Human-in-the-loop */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-black text-white border-y-2 border-black">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div {...fadeUp} className="space-y-6">
                        <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-500">Human in the loop</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tighter uppercase">Nothing sends without your tap</h2>
                        <p className="font-mono text-base leading-relaxed text-gray-300">
                            Every planned email arrives for your review as a full draft — recipient, subject, body, CTA,
                            and the signal that drove the decision. Approve or cancel the whole batch. If you don't
                            respond in time, the run auto-expires so a stale batch never goes out.
                        </p>
                    </motion.div>
                    <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="border-2 border-white/20 p-6 font-mono text-sm space-y-3">
                        <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest">
                            <ShieldCheck className="w-4 h-4 text-blue-500" /> Draft preview
                        </div>
                        <div className="border-t border-white/10 pt-3">
                            <p className="text-gray-400">Subject</p>
                            <p className="text-white">Ready to unlock the advanced reports?</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Body</p>
                            <p className="text-white/90">You've been exploring the advanced reports, but they're still locked on your current plan. Want a 7-day trial to put them to work?</p>
                        </div>
                        <div className="border-l-2 border-blue-500 pl-3">
                            <p className="text-gray-400 text-xs uppercase tracking-widest">Why this user — a fixed campaign would miss it</p>
                            <p className="text-white/70 text-xs leading-relaxed">Repeatedly explored a locked premium feature, active almost daily, never started a trial. That's buying intent no scheduled blast would ever surface.</p>
                        </div>
                        <div className="flex gap-3 pt-2">
                            <span className="flex-1 text-center py-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest">Approve</span>
                            <span className="flex-1 text-center py-2 border border-white/30 text-white text-xs font-bold uppercase tracking-widest">Cancel</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Outcomes */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gray-100 border-y-2 border-black">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="space-y-5 max-w-3xl">
                        <SectionHeading eyebrow="What it drives" title="Whatever you're optimizing for" />
                        <motion.p {...fadeUp} className="font-mono text-base leading-relaxed text-gray-700">
                            Because the multi-agent system learns your product and reasons per user, it isn't locked to
                            one playbook. Tell it the goal and it works toward it. A few of the common ones:
                        </motion.p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black bg-black">
                        {outcomes.map((o, i) => (
                            <motion.div
                                key={o.title}
                                {...fadeUp}
                                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                className="group bg-white p-7 hover:bg-blue-600 hover:text-white transition-colors duration-300 border-b-2 border-black sm:[&:nth-last-child(-n+1)]:border-b-2 lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-child(odd)]:border-r-2 lg:[&:not(:nth-child(3n))]:border-r-2"
                            >
                                <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300 mb-4" />
                                <h3 className="text-base font-bold font-display uppercase tracking-tight mb-2 leading-tight">{o.title}</h3>
                                <p className="font-mono text-sm leading-relaxed opacity-75">{o.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.h2 {...fadeUp} className="text-4xl md:text-6xl font-bold font-display tracking-tighter uppercase">
                        Want this running on your product?
                    </motion.h2>
                    <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/"
                            state={{ section: 3 }}
                            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                            Request a Demo
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/"
                            state={{ section: 2 }}
                            className="inline-flex items-center gap-3 px-10 py-4 border-2 border-white/40 font-bold uppercase tracking-widest text-sm hover:border-white transition-colors duration-200"
                        >
                            Back to Products
                        </Link>
                    </motion.div>
                </div>
            </section>
        </ProductPageLayout>
    );
};

export default EmailMarketingAgent;
