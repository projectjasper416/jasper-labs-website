import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Phone,
    PhoneCall,
    PhoneForwarded,
    Calendar,
    CalendarCheck,
    MessageSquare,
    HelpCircle,
    Bell,
    Repeat,
    UserCheck,
    Clock,
    ArrowRight,
    Sparkles,
    Mic,
    Users,
    MapPin,
    Settings2,
    ShieldCheck,
} from 'lucide-react';
import ProductPageLayout from '../../components/ProductPageLayout';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const stats = [
    { value: '24/7', label: 'Always answering' },
    { value: '< 2 sec', label: 'To pick up the call' },
    { value: '< 1 week', label: 'To go live' },
    { value: 'Zero', label: 'Calls left to voicemail' },
];

const capabilities = [
    { icon: Phone, title: 'Answer every call, instantly', body: 'Every caller gets a live response in seconds — 10 AM on a Tuesday or 9 PM on a Sunday. Always available, never on hold.' },
    { icon: CalendarCheck, title: 'Book, reschedule & cancel', body: 'It checks your live calendar during the call to book open slots, and can find an existing booking to change or cancel it — updating your calendar instantly, no staff involvement needed.' },
    { icon: MessageSquare, title: 'Send SMS confirmations', body: 'After every booking, reschedule, or cancellation the customer gets a text with the service, date, time, staff member, and address — in your brand voice.' },
    { icon: HelpCircle, title: 'Answer common questions', body: 'Knows your services, pricing, hours, location, parking, staff, and policies. Customers get instant, accurate answers — no callback required.' },
    { icon: Bell, title: 'Make reminder calls', body: 'Calls customers ahead of upcoming appointments to confirm, cutting no-shows and last-minute cancellations that drain your schedule.' },
    { icon: UserCheck, title: 'Transfer to a human', body: 'If a caller wants a real person, it connects them to you or your team instantly. Human escalation is always one sentence away.' },
    { icon: Repeat, title: 'Catch the overflow', body: 'Even during open hours it acts as a safety net — when your front desk is already busy, it catches the overflow so nothing hits voicemail.' },
    { icon: Sparkles, title: 'Handle custom tasks', body: 'Beyond calls and bookings — tell us the jobs your front desk does and we build them into the agent as custom tasks, made just for your business.' },
];

const callFlow = [
    { icon: Phone, title: 'Your customer calls', body: 'They dial your existing business number, exactly like they always have.' },
    { icon: PhoneForwarded, title: 'Smart routing kicks in', body: 'Based on your rules, the call either rings your phone first or goes straight to the AI.' },
    { icon: Mic, title: 'The AI answers', body: 'It greets the caller by your business name, in the tone and personality you chose.' },
    { icon: Calendar, title: 'It checks your calendar', body: 'The agent looks up your real-time availability and finds the open slots.' },
    { icon: CalendarCheck, title: 'The appointment is booked', body: 'It confirms date, time, service, and staff member, then writes the booking straight into your calendar.' },
    { icon: MessageSquare, title: 'A confirmation text goes out', body: 'The customer instantly receives an SMS with every detail. The whole call takes under two minutes.' },
];

const routing = [
    { title: 'Business-hours fallback', body: 'Your phone rings first. If you don\'t pick up within thirty seconds, the AI steps in. You stay in control during the day.' },
    { title: 'After-hours coverage', body: 'Once you close, every call goes straight to the AI. No ringing on your phone — you rest, it works.' },
    { title: 'Always-on AI', body: 'The AI answers every call at all hours, so nothing ever reaches your personal phone.' },
    { title: 'Human takeover', body: 'The AI hands the call to you or a team member the moment a caller asks for a person.' },
    { title: 'Call forwarding', body: 'Route calls to any mobile, landline, or team member based on your rules.' },
    { title: 'Custom schedules', body: 'Set specific handling for holidays, lunch breaks, staff meetings, vacations, or any special day.' },
];

const customization = [
    { icon: Mic, title: 'Name, voice & personality', body: 'Warm and calm for a spa, crisp and efficient for a clinic — matched exactly to your brand.' },
    { icon: Settings2, title: 'Services & pricing', body: 'Your full menu of services and prices, answered accurately whenever a caller asks.' },
    { icon: Clock, title: 'Business hours', body: 'Opening and closing times, breaks, holidays, and seasonal schedules — all built in.' },
    { icon: Users, title: 'Your staff members', body: 'It knows your practitioners by name and books callers with the right person.' },
    { icon: MapPin, title: 'Location & FAQs', body: 'Address, parking, transit, cancellation policy, payment methods, and anything else customers ask.' },
];

const getStarted = [
    { n: '01', title: 'Book a demo', body: 'Call a live demo number and experience it yourself — book, ask questions, reschedule. Takes about fifteen minutes.' },
    { n: '02', title: 'Share your details', body: 'Tell us your services, pricing, hours, staff, location, common questions, and scheduling platform. A simple conversation.' },
    { n: '03', title: 'We build & test', body: 'In less than a week we build your agent from scratch, connect your calendar, set routing and SMS, and run live test calls.' },
    { n: '04', title: 'You go live', body: 'Your receptionist starts answering. You wake up to confirmed bookings and never miss a call again.' },
];

const SectionHeading: React.FC<{ eyebrow: string; title: string }> = ({ eyebrow, title }) => (
    <motion.div {...fadeUp} className="space-y-3">
        <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600">{eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tighter uppercase">{title}</h2>
    </motion.div>
);

const VoiceAgent: React.FC = () => {
    return (
        <ProductPageLayout>
            {/* Hero */}
            <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
                <div className="max-w-6xl mx-auto">
                    <motion.div {...fadeUp} className="inline-flex items-center gap-3 border-2 border-black px-4 py-2 mb-8">
                        <PhoneCall className="w-5 h-5" />
                        <span className="text-xs font-bold font-mono uppercase tracking-[0.2em]">AI Voice Receptionist</span>
                    </motion.div>

                    <motion.h1
                        {...fadeUp}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tighter uppercase leading-[0.95] max-w-4xl"
                    >
                        Never miss a call.
                        <br />
                        <span className="text-blue-600">Never lose a booking.</span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-8 text-lg md:text-xl font-mono leading-relaxed text-gray-700 max-w-2xl border-l-2 border-black pl-6"
                    >
                        A 24/7 virtual front desk, built from scratch for your business. It answers every call, books
                        appointments, sends confirmations, and handles your customers' questions — automatically, around
                        the clock, and it sounds like a real person on your team.
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
                            Book a Demo
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
                    <SectionHeading eyebrow="The Problem" title="A missed call is a lost customer" />
                    <motion.p {...fadeUp} className="font-mono text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl">
                        You're with a client. The phone rings. You can't answer. The caller doesn't leave a voicemail —
                        they call your competitor instead, and you never even know you lost the booking. It happens every
                        single day to appointment-based businesses: during treatments, lunch breaks, staff meetings, and
                        after closing time.
                    </motion.p>
                    <div className="grid sm:grid-cols-2 gap-0 border-2 border-black">
                        <motion.div {...fadeUp} className="p-8 border-b-2 sm:border-b-0 sm:border-r-2 border-black">
                            <div className="text-4xl md:text-5xl font-bold font-display text-blue-600 mb-2">62%</div>
                            <p className="font-mono text-sm leading-relaxed text-gray-700">of callers won't leave a voicemail when they reach one.</p>
                        </motion.div>
                        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="p-8">
                            <div className="text-4xl md:text-5xl font-bold font-display text-blue-600 mb-2">85%</div>
                            <p className="font-mono text-sm leading-relaxed text-gray-700">of callers who don't get a live answer never call your business back.</p>
                        </motion.div>
                    </div>
                    <motion.p {...fadeUp} className="text-xl md:text-2xl font-display tracking-tight max-w-3xl">
                        You don't need more marketing. <span className="text-blue-600">You need to answer the phone.</span>
                    </motion.p>
                </div>
            </section>

            {/* Capabilities */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gray-100 border-y-2 border-black">
                <div className="max-w-6xl mx-auto space-y-12">
                    <SectionHeading eyebrow="What it does" title="Your whole front desk, on every call" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {capabilities.map((c, i) => (
                            <motion.div
                                key={c.title}
                                {...fadeUp}
                                transition={{ duration: 0.45, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                className="group border-2 border-black bg-white p-6 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                            >
                                <c.icon className="w-8 h-8 stroke-[1.5] mb-4" />
                                <h3 className="text-base font-bold font-display uppercase tracking-tight mb-2 leading-tight">{c.title}</h3>
                                <p className="font-mono text-xs leading-relaxed opacity-80">{c.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 scroll-mt-16">
                <div className="max-w-6xl mx-auto space-y-12">
                    <SectionHeading eyebrow="How it works" title="Tailored to how you work" />
                    <motion.p {...fadeUp} className="font-mono text-base leading-relaxed text-gray-700 max-w-3xl">
                        Your AI receptionist answers every call and handles whatever you need — bookings, rescheduling,
                        questions, reminders, or custom tasks built around your business. During your hours your phone
                        rings first; if you're busy, the AI steps in, and after hours it answers immediately. The flow
                        below is one common example; every step and conversation is shaped to how you work.
                    </motion.p>

                    <div className="space-y-4">
                        <span className="inline-block text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600">
                            Example — a booking call
                        </span>
                        <div className="border-2 border-black divide-y-2 divide-black">
                            {callFlow.map((s, i) => (
                                <motion.div
                                    key={s.title}
                                    {...fadeUp}
                                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
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

                    {/* Discovery / info-gathering callout */}
                    <motion.div {...fadeUp} className="border-2 border-black bg-black text-white p-8 md:p-10 space-y-4">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-6 h-6 text-blue-500" />
                            <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-tight">We learn your business first</h3>
                        </div>
                        <p className="font-mono text-sm md:text-base leading-relaxed text-gray-300 max-w-3xl">
                            Before launch we sit down with you to understand your services, products, hours, policies, and
                            goals — and we discuss connecting to your existing platforms and scheduling tools if you'd
                            like any. The agent answers only from your real information, so every call is accurate and on
                            point, with no guesswork and no hallucinations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Smart routing */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-black text-white border-y-2 border-black">
                <div className="max-w-6xl mx-auto space-y-12">
                    <motion.div {...fadeUp} className="space-y-3">
                        <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-500">Your calls, your rules</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tighter uppercase">Smart call routing</h2>
                        <p className="font-mono text-base leading-relaxed text-gray-300 max-w-3xl pt-2">
                            You decide exactly how calls are handled. Set it up once and it runs automatically every day.
                            These are common setups — any flow you need can be built to your requirements.
                        </p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-white/20">
                        {routing.map((r, i) => (
                            <motion.div
                                key={r.title}
                                {...fadeUp}
                                transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                className="p-6 border-b-2 border-white/20 lg:[&:nth-last-child(-n+3)]:border-b-0 sm:[&:nth-child(odd)]:border-r-2 lg:[&:not(:nth-child(3n))]:border-r-2 sm:[&:nth-last-child(-n+1)]:border-b-2 lg:[&:nth-last-child(-n+1)]:border-b-0"
                            >
                                <PhoneForwarded className="w-6 h-6 text-blue-500 mb-3" />
                                <h3 className="text-base font-bold font-display uppercase tracking-tight mb-2 leading-tight">{r.title}</h3>
                                <p className="font-mono text-xs leading-relaxed text-gray-400">{r.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Built for your business */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="space-y-5 max-w-3xl">
                        <SectionHeading eyebrow="Built for you" title="Made from scratch for your business" />
                        <motion.p {...fadeUp} className="font-mono text-base leading-relaxed text-gray-700">
                            This isn't a generic chatbot or a phone tree. Every agent is created specifically for your
                            business. If you can describe how your ideal receptionist would handle a call, we can build it.
                        </motion.p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {customization.map((c, i) => (
                            <motion.div
                                key={c.title}
                                {...fadeUp}
                                transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                                className="group border-2 border-black p-6 hover:bg-black hover:text-white transition-colors duration-300"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <c.icon className="w-6 h-6" />
                                    <h3 className="text-base font-bold font-display uppercase tracking-tight leading-tight">{c.title}</h3>
                                </div>
                                <p className="font-mono text-sm leading-relaxed opacity-75">{c.body}</p>
                            </motion.div>
                        ))}
                        <motion.div
                            {...fadeUp}
                            transition={{ duration: 0.45, delay: 0.18 }}
                            className="border-2 border-black border-dashed p-6 flex items-center gap-3 bg-gray-50"
                        >
                            <Sparkles className="w-6 h-6 text-blue-600 shrink-0" />
                            <p className="font-mono text-xs leading-relaxed text-gray-600">
                                Custom SMS wording, special booking rules, intake requirements, multi-location handling —
                                whatever your workflow needs is built into the conversation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Get started */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-gray-100 border-y-2 border-black">
                <div className="max-w-6xl mx-auto space-y-12">
                    <SectionHeading eyebrow="Get started" title="Live in under a week" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black bg-black">
                        {getStarted.map((s, i) => (
                            <motion.div
                                key={s.n}
                                {...fadeUp}
                                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white p-6 border-b-2 lg:border-b-0 border-black sm:[&:nth-child(odd)]:border-r-2 lg:border-r-2 last:border-0"
                            >
                                <div className="text-3xl font-bold font-display text-blue-600 mb-3">{s.n}</div>
                                <h4 className="text-base font-bold font-display uppercase mb-2 tracking-tight leading-tight">{s.title}</h4>
                                <p className="font-mono text-xs leading-relaxed text-gray-600">{s.body}</p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div {...fadeUp} className="flex flex-wrap items-center gap-6 pt-2">
                        <div className="flex items-center gap-3 font-mono text-sm text-gray-700">
                            <ShieldCheck className="w-5 h-5 text-blue-600" /> Free first month of support
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.h2 {...fadeUp} className="text-4xl md:text-6xl font-bold font-display tracking-tighter uppercase">
                        Ready to stop missing calls?
                    </motion.h2>
                    <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="font-mono text-base text-gray-400 max-w-xl mx-auto">
                        Book a free fifteen-minute demo and hear your AI receptionist in action. No obligation — just a
                        live look at exactly how it would work for your business.
                    </motion.p>
                    <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/"
                            state={{ section: 3 }}
                            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                            Book a Demo
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

export default VoiceAgent;
