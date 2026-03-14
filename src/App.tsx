import { useState, useEffect } from 'react';

const CHROME_EXT_URL = "https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig";

// ---------- Scroll animation hook ----------
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.fade-up, .fade-in');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ---------- Navbar ----------
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Why ReplyChief', href: '#why' },
    { label: 'How It Works', href: '#how' },
    { label: 'Features', href: '#features' },
    { label: 'Compare', href: '#compare' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
      style={scrolled ? {
        background: 'rgba(5, 10, 20, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: 'none',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      } : { borderBottom: 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="https://replychief.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 flex-shrink-0">
            <img src="https://replychief.com/asset/logo.png" alt="ReplyChief" className="h-8 w-auto" />
            <span className="font-bold text-white text-lg tracking-tight">ReplyChief</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CHROME_EXT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand px-4 py-2 rounded-full text-sm font-semibold text-white flex items-center gap-2"
            >
              <span>🚀</span>
              <span>Add to Chrome – It's Free</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu md:hidden ${mobileOpen ? 'open' : ''}`}
        style={{
          background: 'rgba(5, 10, 20, 0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CHROME_EXT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand mt-2 px-4 py-3 rounded-full text-sm font-semibold text-white text-center"
          >
            <span>🚀 Add to Chrome – It's Free</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ---------- Hero Section ----------
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="bg-blob-1" style={{ top: '-100px', left: '-100px' }} />
      <div className="bg-blob-2" style={{ bottom: '100px', right: '-50px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full float-anim opacity-60" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-500 rounded-full float-anim opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full float-anim opacity-50" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="fade-up inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-blue-300 font-medium mb-8 pulse-glow">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          🚀 Just Launched — AI-Powered LinkedIn Comments
        </div>

        {/* H1 */}
        <h1 className="fade-up text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6" style={{ transitionDelay: '0.1s' }}>
          <span className="gradient-text-hero">Automate LinkedIn</span>
          <br />
          <span className="text-white">Comments Safely with AI</span>
        </h1>

        <p className="fade-up text-sm sm:text-base text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed" style={{ transitionDelay: '0.2s' }}>
          LinkedIn engagement drives results. But doing it manually? That's a full-time job you didn't sign up for.
          ReplyChief lets you engage at scale — with AI-generated, context-aware comments that sound genuinely human —
          without ever putting your account at risk.
        </p>

        <p className="fade-up text-xl font-semibold gradient-text mb-10" style={{ transitionDelay: '0.3s' }}>
          Save hours. Stay visible. Stay safe.
        </p>

        {/* CTAs */}
        <div className="fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12" style={{ transitionDelay: '0.4s' }}>
          <a
            href={CHROME_EXT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand px-8 py-4 rounded-full text-base font-bold text-white flex items-center gap-3 shadow-2xl"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a4 4 0 014 4H8a4 4 0 014-4zm0 16a8 8 0 01-6.928-4h13.856A8 8 0 0112 20z" /></svg>
            <span>Install Free Chrome Extension</span>
          </a>
          <a
            href="#how"
            className="px-8 py-4 rounded-full text-base font-semibold text-slate-300 border border-white/20 hover:border-blue-500/50 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            See How It Works →
          </a>
        </div>

        {/* Social proof */}
        <div className="fade-up flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400" style={{ transitionDelay: '0.5s' }}>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✅</span> No credit card required
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✅</span> Zero account bans ever
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✅</span> Installs in 10 seconds
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✅</span> LinkedIn-safe by design
          </div>
        </div>

        {/* Stats */}
        <div className="fade-up mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4" style={{ transitionDelay: '0.6s' }}>
          {[
            { stat: '10,000+', label: 'Active Professionals' },
            { stat: '0', label: 'Accounts Banned' },
            { stat: '340%', label: 'Avg Profile View Growth' },
            { stat: '10min', label: 'Daily Time Investment' },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-2xl p-5 text-center">
              <div className="text-3xl font-black gradient-text mb-1">{item.stat}</div>
              <div className="text-xs text-slate-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Why Section ----------
function WhySection() {
  return (
    <section id="why" className="relative py-24 overflow-hidden">
      <div className="bg-blob-1 opacity-50" style={{ top: '50%', right: '-200px' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-up inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-blue-300 mb-6">
            The LinkedIn Reality in 2026
          </div>
          <h2 className="fade-up text-4xl sm:text-5xl font-black text-white mb-6">
            Why LinkedIn Comment Automation<br />
            <span className="gradient-text">Is Essential in 2026</span>
          </h2>
          <p className="fade-up text-lg text-slate-400 max-w-3xl mx-auto">
            The rules of LinkedIn have changed. Visibility belongs to those who engage — consistently, meaningfully, and at volume. But winning professionals aren't spending three hours a day writing comments. They're working smarter. See how we stack up against the{' '}
            <a href="https://replychief.com/best-linkedin-engagement-tools-2026" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">best LinkedIn engagement tools in 2026</a>.
          </p>
        </div>

        {/* The Paradox */}
        <div className="fade-up glass-card rounded-3xl p-8 sm:p-10 mb-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">⚡</span> The Time vs. Trust Paradox
          </h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            To build trust, you need to show up in the comments — consistently. But showing up consistently takes enormous amounts of time. The only scalable solution is an{' '}
            <a href="https://replychief.com/ai-linkedin-comment-generator" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">AI LinkedIn comment generator</a>
            {' '}that works at speed without sacrificing quality. Let's break down the math:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: '⏱️', val: '3–5 min', desc: 'per thoughtful comment' },
              { icon: '📊', val: '20–30', desc: 'posts/day for real visibility' },
              { icon: '🔥', val: '60–150 min', desc: 'every single day — just commenting' },
            ].map((item) => (
              <div key={item.val} className="bg-white/5 rounded-2xl p-5 text-center border border-white/10">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-2xl font-black gradient-text mb-1">{item.val}</div>
                <div className="text-sm text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-4 gap-3">
            {[
              { label: 'Option A', desc: 'Comment on 3-4 posts — visibility flatlines', bad: true },
              { label: 'Option B', desc: '"Great insight!" — damages credibility', bad: true },
              { label: 'Option C', desc: 'Risky bot — account flagged or banned', bad: true },
              { label: 'Option D', desc: 'ReplyChief — speed + quality + safety ✅', bad: false },
            ].map((opt) => (
              <div key={opt.label} className={`rounded-xl p-4 border ${opt.bad ? 'border-red-500/20 bg-red-500/5' : 'border-blue-500/40 bg-blue-500/10'}`}>
                <div className={`text-xs font-bold mb-1 ${opt.bad ? 'text-red-400' : 'text-blue-400'}`}>{opt.label}</div>
                <div className="text-sm text-slate-300">{opt.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Manual doesn't scale */}
        <div className="fade-up glass-card rounded-3xl p-8 sm:p-10 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-3xl">📉</span> Manual Commenting Doesn't Scale
          </h3>
          <p className="text-slate-300 mb-6">In 2026, LinkedIn has over 1.2 billion members. Your feed is infinite. Your capacity to engage manually is not.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '😰', title: 'Quality Drops', desc: 'More posts = less thought per comment. Your replies become generic and less valuable.' },
              { icon: '💀', title: 'Burnout Hits', desc: 'Commenting feels like a chore. Consistency crumbles. Visibility disappears.' },
              { icon: '💸', title: 'Opportunity Cost', desc: 'Every minute writing comments is a minute not spent closing deals or building products.' },
              { icon: '📊', title: 'Results Plateau', desc: 'Without volume, visibility caps out. Same views, same connections, same stagnant pipeline.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-white/3 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-sm text-slate-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- How It Works ----------
function HowItWorks() {
  return (
    <section id="how" className="relative py-24 overflow-hidden">
      <div className="bg-blob-2 opacity-60" style={{ top: '0', left: '-100px' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-up inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-blue-300 mb-6">
            Safety First
          </div>
          <h2 className="fade-up text-4xl sm:text-5xl font-black text-white mb-6">
            How ReplyChief Automates<br />
            <span className="gradient-text">Comments Without Risk</span>
          </h2>
          <p className="fade-up text-lg text-slate-400 max-w-3xl mx-auto">
            ReplyChief was designed from the ground up to be the safest LinkedIn comment automation tool on the market.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: '🌐',
              title: 'Browser-Based (No Cloud Risk)',
              subtitle: 'The #1 safety distinction',
              points: [
                'Runs entirely inside your Chrome browser',
                'All activity from your own IP address',
                'Never accesses your login credentials',
                'Only active when you\'re browsing LinkedIn',
                'LinkedIn sees it as you — naturally'
              ],
              highlight: 'Virtually undetectable by design',
              link: { href: 'https://replychief.com/linkedin-engagement-chrome-extension', label: 'Explore the LinkedIn engagement Chrome extension →' }
            },
            {
              icon: '👁️',
              title: 'Human Review Before Posting',
              subtitle: 'You always have the final say',
              points: [
                'AI generates comment in the comment box',
                'Post as-is if you love it',
                'Edit any part to match your voice',
                'Regenerate for a different angle',
                'Skip entirely — no pressure'
              ],
              highlight: 'ReplyChief NEVER auto-posts',
              link: { href: 'https://replychief.com/ai-writing-assistant-for-linkedin', label: 'See our AI writing assistant for LinkedIn →' }
            },
            {
              icon: '🛡️',
              title: 'LinkedIn-Compliant Patterns',
              subtitle: 'Built-in behavioral safeguards',
              points: [
                'Natural timing gaps between comments',
                'Randomized intervals — no machine patterns',
                'Daily limits within acceptable thresholds',
                'Cool-down periods near engagement ceilings',
                'Proactive warnings before limits reached'
              ],
              highlight: 'Zero accounts restricted — ever',
              link: { href: 'https://replychief.com/linkedin-ai-reply-suggestions', label: 'Discover smarter LinkedIn AI reply suggestions →' }
            },
          ].map((card) => (
            <div key={card.title} className="fade-up glass-card rounded-3xl p-8 border border-white/10 flex flex-col">
              <div className="text-5xl mb-4">{card.icon}</div>
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">{card.subtitle}</div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <ul className="space-y-2 flex-1 mb-6">
                {card.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✅</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl px-4 py-2 text-sm font-semibold text-blue-300 text-center">
                {card.highlight}
              </div>
              {'link' in card && card.link && (
                <a
                  href={(card as { link: { href: string; label: string } }).link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors text-center block"
                >
                  {(card as { link: { href: string; label: string } }).link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Features ----------
function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="bg-blob-1 opacity-40" style={{ bottom: '-100px', right: '-100px' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-up inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-blue-300 mb-6">
            Powerful Features
          </div>
          <h2 className="fade-up text-4xl sm:text-5xl font-black text-white mb-6">
            Features Built for<br />
            <span className="gradient-text">Safe Automation</span>
          </h2>
        </div>

        {/* Feature 1 - Contextual AI */}
        <div className="fade-up glass-card rounded-3xl p-8 sm:p-10 mb-6 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-3">Contextual AI That Reads Each Post</h3>
              <p className="text-slate-400 mb-6">
                Most tools scan keywords and spit out generic responses. ReplyChief's AI reads and comprehends every post in full, generating intelligent{' '}
                <a href="https://replychief.com/linkedin-ai-reply-suggestions" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">LinkedIn AI reply suggestions</a>
                {' '}tailored to the exact content of each post:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: '📝', text: 'Full post text — every word, every nuance' },
                  { icon: '🖼️', text: 'Visual content — images, infographics, carousels' },
                  { icon: '🔗', text: 'Shared links and articles — extracting key points' },
                  { icon: '👤', text: "Author context — role, industry, recent themes" },
                  { icon: '💬', text: 'Comment thread — never repeats others' },
                  { icon: '😊', text: 'Sentiment & tone — celebratory, vulnerable, humorous' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 bg-white/3 rounded-lg p-3">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <span className="text-sm text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-72 glass rounded-2xl p-6 border border-blue-500/20 flex-shrink-0">
              <div className="text-xs text-blue-400 font-semibold mb-3 uppercase tracking-wide">Result</div>
              <p className="text-white font-semibold leading-relaxed">Every comment is specific, adds genuine value, and reads like someone who actually read every word.</p>
              <div className="mt-4 text-5xl font-black gradient-text">2s</div>
              <div className="text-sm text-slate-400">vs. 5 minutes manually</div>
            </div>
          </div>
        </div>

        {/* Feature 2 - Tone */}
        <div className="fade-up glass-card rounded-3xl p-8 sm:p-10 mb-6 border border-white/10">
          <div className="text-4xl mb-4">🎭</div>
          <h3 className="text-2xl font-bold text-white mb-3">Tone Customization — Sound Like You</h3>
          <p className="text-slate-400 mb-6">
            Complete control over how your comments sound — matching your personal brand and professional voice. ReplyChief doubles as a powerful{' '}
            <a href="https://replychief.com/linkedin-personal-branding-ai-tool" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">LinkedIn personal branding AI tool</a>
            {' '}that shapes how the world sees you.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { tone: 'Professional', desc: 'Polished, credible', emoji: '💼' },
              { tone: 'Casual & Friendly', desc: 'Warm, conversational', emoji: '😊' },
              { tone: 'Thought Leader', desc: 'Bold, insight-driven', emoji: '💡' },
              { tone: 'Witty & Conversational', desc: 'Light, clever', emoji: '😄' },
              { tone: 'Empathetic', desc: 'Understanding, human', emoji: '❤️' },
              { tone: 'Direct & Concise', desc: 'Clear, action-oriented', emoji: '🎯' },
            ].map((t) => (
              <div key={t.tone} className="bg-white/4 border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 rounded-xl p-4 cursor-default">
                <div className="text-2xl mb-2">{t.emoji}</div>
                <div className="font-semibold text-white text-sm mb-1">{t.tone}</div>
                <div className="text-xs text-slate-400">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature 3 - Pacing */}
        <div className="fade-up glass-card rounded-3xl p-8 sm:p-10 border border-white/10">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold text-white mb-3">Daily Limits & Smart Pacing</h3>
          <p className="text-slate-400 mb-6">Automation without guardrails is a liability. ReplyChief includes comprehensive safety controls.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { level: 'Conservative', range: '10–15/day', who: 'New accounts', color: 'green' },
              { level: 'Moderate', range: '20–30/day', who: 'Active professionals', color: 'blue' },
              { level: 'Aggressive', range: '40–50/day', who: 'Power users', color: 'purple' },
            ].map((plan) => (
              <div key={plan.level} className={`rounded-xl p-4 border ${plan.color === 'green' ? 'border-green-500/30 bg-green-500/5' : plan.color === 'blue' ? 'border-blue-500/30 bg-blue-500/5' : 'border-purple-500/30 bg-purple-500/5'}`}>
                <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${plan.color === 'green' ? 'text-green-400' : plan.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`}>{plan.level}</div>
                <div className="text-2xl font-black text-white mb-1">{plan.range}</div>
                <div className="text-sm text-slate-400">{plan.who}</div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🌅', title: 'Morning Ramp-Up', desc: 'Starts slowly, mimicking natural LinkedIn-with-coffee behavior' },
              { icon: '📈', title: 'Peak Windows', desc: 'Slightly higher frequency during your most active hours' },
              { icon: '🌆', title: 'Afternoon Taper', desc: 'Gradually reduces to match natural energy curves' },
              { icon: '🔴', title: 'Auto-Pause Protection', desc: 'Detects unusual patterns and pauses automatically' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 bg-white/3 rounded-lg p-4">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="font-semibold text-white text-sm mb-0.5">{item.title}</div>
                  <div className="text-xs text-slate-400">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Comparison Table ----------
function CompareSection() {
  const rows = [
    { feature: 'Architecture', good: 'Browser-based Chrome extension', bad: 'Cloud-based servers' },
    { feature: 'Account Access', good: 'Magic login — enter email, get code, done. Zero password stored.', bad: 'Requires full login credentials' },
    { feature: 'Posting Method', good: 'Human-approved before every post', bad: 'Fully automated, no review' },
    { feature: 'Detection Risk', good: 'Virtually undetectable', bad: 'Easily flagged by LinkedIn' },
    { feature: 'Comment Quality', good: 'Context-aware, unique, human-sounding', bad: 'Generic templates, robotic' },
    { feature: 'LinkedIn Compliance', good: 'Designed to respect platform limits', bad: 'Ignores activity thresholds' },
    { feature: 'Pacing Controls', good: 'Smart pacing with natural patterns', bad: 'Blasts comments as fast as possible' },
    { feature: 'Account Bans', good: 'Zero — ever', bad: 'Frequent user reports of restrictions' },
    { feature: 'Data Privacy', good: 'No data stored, no credentials saved', bad: 'Often stores and shares user data' },
    { feature: 'IP Address', good: 'Your own browser IP', bad: 'Shared server IPs (red flag)' },
  ];

  return (
    <section id="compare" className="relative py-24 overflow-hidden">
      <div className="bg-blob-2 opacity-50" style={{ top: '50%', left: '-150px' }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-up inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-blue-300 mb-6">
            Honest Comparison
          </div>
          <h2 className="fade-up text-4xl sm:text-5xl font-black text-white mb-6">
            ReplyChief vs.<br />
            <span className="gradient-text">Risky Automation Bots</span>
          </h2>
          <p className="fade-up text-lg text-slate-400 max-w-2xl mx-auto">
            The internet is full of LinkedIn automation tools that promise growth. Most of them will get your account banned. Here's the honest comparison:
          </p>
        </div>

        <div className="fade-up glass rounded-3xl border border-white/10 overflow-hidden">
          <table className="comparison-table w-full">
            <thead>
              <tr className="bg-white/5">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 w-1/4">Feature</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-green-400 w-3/8">
                  <div className="flex items-center gap-2">
                    <img src="https://replychief.com/asset/logo.png" alt="ReplyChief" className="h-5 w-auto" />
                    ReplyChief (Safe)
                  </div>
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-red-400 w-3/8">⚠️ Risky Bots (Dangerous)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-t border-white/5 hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-300">{row.feature}</td>
                  <td className="px-6 py-4 text-sm text-green-300">✅ {row.good}</td>
                  <td className="px-6 py-4 text-sm text-red-300">❌ {row.bad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="fade-up mt-8 glass border border-blue-500/30 rounded-2xl p-6 text-center bg-blue-500/5">
          <p className="text-slate-300 text-lg">
            <strong className="text-white">The critical difference:</strong> Risky bots work <em>against</em> LinkedIn's systems. ReplyChief works <em>with</em> them.
            From LinkedIn's perspective, you're simply a professional who writes excellent comments.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------- Success Stories ----------
function SuccessStories() {
  const stories = [
    {
      avatar: 'M',
      name: 'Marcus T.',
      role: 'SaaS Founder',
      quote: '"ReplyChief is the perfect LinkedIn comment generator for founders — it made me more visible than I ever was when doing it manually. And I\'ve never once worried about my account safety."',
      link: { href: 'https://replychief.com/linkedin-comment-generator-for-founders', label: 'See why founders love ReplyChief →' },
      stats: [
        { val: '340%', label: 'Profile view increase' },
        { val: '5x', label: 'Connection requests' },
        { val: '10 min', label: 'Daily time (from 45 min)' },
      ],
      color: 'blue'
    },
    {
      avatar: 'R',
      name: 'Rachel S.',
      role: 'Sales Enablement Manager',
      quote: '"We tried three other automation tools before ReplyChief. Two got reps\' accounts restricted within a week. ReplyChief has been running for six months with zero problems."',
      stats: [
        { val: '280%', label: 'Profile view increase' },
        { val: '$420K', label: 'Pipeline influenced' },
        { val: '8 min', label: 'Daily time per rep' },
      ],
      color: 'green'
    },
    {
      avatar: 'P',
      name: 'Priya M.',
      role: 'LinkedIn Top Voice & Creator',
      quote: '"I was about to quit LinkedIn because the engagement demands were unsustainable. ReplyChief gave me my time back without sacrificing the community engagement my audience expects."',
      stats: [
        { val: '45%', label: 'Engagement rate increase' },
        { val: '2x', label: 'Creator collaborations' },
        { val: '25 min', label: 'Daily time (from 2 hours)' },
      ],
      color: 'purple'
    },
    {
      avatar: 'T',
      name: 'Tom L.',
      role: 'Agency Founder',
      quote: '"We were skeptical about using AI for executive engagement — the risk to our clients\' reputations was too high. ReplyChief exceeded our quality standards and eliminated our safety concerns entirely."',
      stats: [
        { val: '310%', label: 'Combined profile views' },
        { val: '72%', label: 'Labor cost reduction' },
        { val: '4hrs', label: 'Weekly time (from 15hrs)' },
      ],
      color: 'orange'
    },
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
  };

  return (
    <section id="stories" className="relative py-24 overflow-hidden">
      <div className="bg-blob-1 opacity-30" style={{ top: '0', right: '-100px' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-up inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-blue-300 mb-6">
            Real Results
          </div>
          <h2 className="fade-up text-4xl sm:text-5xl font-black text-white mb-6">
            Success Stories
          </h2>
          <p className="fade-up text-lg text-slate-400">Real professionals. Real results. Real accounts — all safe and thriving.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <div key={story.name} className="fade-up glass-card rounded-3xl p-8 border border-white/10 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${colorMap[story.color]} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                  {story.avatar}
                </div>
                <div>
                  <div className="font-bold text-white">{story.name}</div>
                  <div className="text-sm text-slate-400">{story.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400 text-sm">★</span>)}
                </div>
              </div>
              <blockquote className="text-slate-300 italic mb-4 leading-relaxed flex-1">{story.quote}</blockquote>
              {'link' in story && story.link && (
                <a
                  href={(story as { link: { href: string; label: string } }).link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors block mb-4"
                >
                  {(story as { link: { href: string; label: string } }).link.label}
                </a>
              )}
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                {story.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-black gradient-text">{stat.val}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Pricing ----------
function Pricing() {
  const [yearly, setYearly] = useState(false);

  type Plan = {
    name: string;
    desc: string;
    price: string;
    period: string;
    yearlyNote?: string | null;
    slotNote?: string;
    features: string[];
    cta: string;
    popular: boolean;
    highlight: boolean;
  };

  const plans: Plan[] = [
    {
      name: 'Free',
      desc: 'Perfect for trying out',
      price: '$0',
      period: 'forever',
      features: [
        '10 comments/day',
        '3 basic tones',
        '1 device',
        'Basic support',
        'Human review before posting',
        'Smart pacing included',
      ],
      cta: 'Install Free',
      popular: false,
      highlight: false,
    },
    {
      name: 'Pro',
      desc: 'For active professionals',
      price: yearly ? '$59' : '$5.99',
      period: yearly ? '/year' : '/month',
      yearlyNote: yearly ? 'Save 18% — billed annually' : null,
      features: [
        'Unlimited comments',
        'All 8 tones',
        '2 devices',
        'Priority support',
        'Advanced personalization',
        'Tone memory & learning',
      ],
      cta: yearly ? 'Get Yearly' : 'Get Monthly',
      popular: true,
      highlight: true,
    },
    {
      name: 'Lifetime',
      desc: 'Pay once, use forever',
      price: '$149',
      period: 'one-time',
      slotNote: 'First 100 slots only — then $299',
      features: [
        'Unlimited forever',
        'All future updates',
        '5 devices',
        'Lifetime support',
        'All future features',
        'VIP access',
      ],
      cta: 'Get Lifetime Deal',
      popular: false,
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="bg-blob-2 opacity-40" style={{ bottom: '0', right: '-100px' }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-up inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-blue-300 mb-6">
            Simple Pricing
          </div>
          <h2 className="fade-up text-4xl sm:text-5xl font-black text-white mb-4">
            Start Automating for Free
          </h2>
          <p className="fade-up text-lg text-slate-400 mb-8">
            Choose the plan that fits your needs. Upgrade or cancel anytime. Looking for a{' '}
            <a href="https://replychief.com/free-linkedin-comment-generator" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">free LinkedIn comment generator</a>?
            {' '}Our free plan gives you everything you need to get started.
          </p>

          {/* Toggle */}
          <div className="fade-up inline-flex items-center gap-3 glass rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!yearly ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              Yearly
              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">Save 18%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative rounded-3xl p-8 border flex flex-col ${
                plan.highlight
                  ? 'bg-gradient-to-b from-blue-600/20 to-blue-900/20 border-blue-500/50 glow-blue'
                  : 'glass-card border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  ⭐ MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{plan.desc}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-black ${plan.highlight ? 'gradient-text' : 'text-white'}`}>{plan.price}</span>
                  <span className="text-slate-400 text-sm pb-1">{plan.period}</span>
                </div>
                {plan.yearlyNote && (
                  <div className="text-green-400 text-sm font-semibold mt-1">{plan.yearlyNote}</div>
                )}
                {plan.slotNote && (
                  <div className="mt-2 inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
                    <span className="text-orange-300 text-xs font-semibold">{plan.slotNote}</span>
                  </div>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className={plan.highlight ? 'text-blue-400' : 'text-green-400'}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={CHROME_EXT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all duration-300 ${
                  plan.highlight
                    ? 'btn-brand text-white'
                    : plan.name === 'Free'
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    : 'bg-white/10 text-white hover:bg-blue-500/20 border border-blue-500/30'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="fade-up mt-10 glass border border-green-500/30 rounded-2xl p-6 text-center bg-green-500/5">
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className="text-xl font-bold text-white mb-2">Our Safety Guarantee</h3>
          <p className="text-slate-300 mb-4">If your LinkedIn account is ever restricted due to using ReplyChief as directed, we will:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              'Immediately investigate and resolve the issue',
              'Provide a full refund of any payments made',
              'Offer dedicated support to restore your account'
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-green-300">
                <span>✅</span> {item}
              </div>
            ))}
          </div>
          <p className="text-slate-400 mt-4 text-sm italic">This has never happened. We intend to keep it that way.</p>
        </div>

        <div className="fade-up mt-6 text-center text-sm text-slate-500 flex flex-wrap justify-center gap-4">
          <span>✅ 30-day money-back guarantee</span>
          <span>✅ Cancel anytime</span>
          <span>✅ Secure payment via Stripe</span>
        </div>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Is automating LinkedIn comments against LinkedIn\'s Terms of Service?',
      a: 'LinkedIn prohibits fully automated engagement — bots that post without human oversight. ReplyChief is not a bot. It\'s an AI writing assistant that suggests comments for your review. You always approve and post manually. This human-in-the-loop approach is fully compliant with LinkedIn\'s policies.'
    },
    {
      q: 'How is ReplyChief different from a LinkedIn auto commenter?',
      a: 'Traditional auto commenters post comments automatically without your input — that\'s dangerous and detectable. ReplyChief generates intelligent comment suggestions that you review, edit, and post yourself. Same speed, zero risk.'
    },
    {
      q: 'Will my comments look like they were written by AI?',
      a: 'No. ReplyChief\'s anti-AI-slop engine specifically avoids the patterns, phrases, and structures that flag content as AI-generated. Every comment is unique, contextual, and naturally written.'
    },
    {
      q: 'Can LinkedIn detect ReplyChief?',
      a: "ReplyChief runs as a Chrome extension in your browser. It doesn't access LinkedIn's API, doesn't run from cloud servers, and doesn't alter LinkedIn's code. From LinkedIn's perspective, you're a professional using Chrome to browse LinkedIn and write comments. There's nothing to detect."
    },
    {
      q: 'What if I want to stop using ReplyChief?',
      a: 'Uninstall the Chrome extension anytime. Cancel your subscription anytime. No contracts, no commitments, no data retained. It\'s that simple.'
    },
    {
      q: 'Does ReplyChief work with LinkedIn Sales Navigator?',
      a: 'Yes! ReplyChief works seamlessly with both standard LinkedIn and Sales Navigator — making it the ideal LinkedIn commenting tool for sales teams doing targeted prospect engagement.',
      linkText: 'Explore the dedicated LinkedIn commenting tool for sales →',
      linkHref: 'https://replychief.com/linkedin-commenting-tool-for-sales',
    },
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="bg-blob-1 opacity-30" style={{ top: '50%', left: '-100px' }} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-up inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-blue-300 mb-6">
            Got Questions?
          </div>
          <h2 className="fade-up text-4xl sm:text-5xl font-black text-white">
            Frequently Asked<br /><span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="fade-up glass-card rounded-2xl border border-white/10 overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-white/3 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-white">{faq.q}</span>
                <span className={`text-blue-400 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
                  ✚
                </span>
              </button>
              <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                  {faq.a}
                  {'linkHref' in faq && faq.linkHref && (
                    <a
                      href={(faq as { linkHref: string; linkText: string }).linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                    >
                      {(faq as { linkHref: string; linkText: string }).linkText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Final CTA ----------
function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      <div className="bg-blob-1 opacity-60" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-up glass rounded-3xl border border-blue-500/30 p-12 sm:p-16 bg-blue-500/5">
          <div className="text-5xl mb-6 float-anim">🚀</div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Safe LinkedIn Automation<br />
            <span className="gradient-text">Starts Here</span>
          </h2>
          <p className="text-lg text-slate-300 mb-4 max-w-2xl mx-auto">
            Stop choosing between engagement and safety. Stop choosing between quality and speed. ReplyChief gives you both — starting right now.
          </p>
          <p className="text-slate-400 mb-10">Join 10,000+ professionals who refuse to choose between productivity and authenticity.</p>
          <a
            href={CHROME_EXT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-bold text-white shadow-2xl pulse-glow"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a4 4 0 014 4H8a4 4 0 014-4zm0 16a8 8 0 01-6.928-4h13.856A8 8 0 0112 20z" /></svg>
            <span>Install ReplyChief Free — Start Automating Safely</span>
          </a>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            <span>✅ No credit card required</span>
            <span>✅ Installs in 10 seconds</span>
            <span>✅ Zero risk to your account</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="https://replychief.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="https://replychief.com/asset/logo.png" alt="ReplyChief" className="h-8 w-auto" />
            <div>
              <div className="font-bold text-white">ReplyChief</div>
              <div className="text-xs text-slate-500">A product of Inoviqa</div>
            </div>
          </a>
          <div className="text-sm text-slate-500 text-center">
            © 2026 RFQ Autopilot. A product of Inoviqa
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="https://replychief.com/privacy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="https://replychief.com/terms" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="https://replychief.com/support" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- Main App ----------
export default function App() {
  useScrollAnimation();

  return (
    <div className="relative min-h-screen bg-[#050a14]">
      <Navbar />
      <Hero />
      <WhySection />
      <HowItWorks />
      <Features />
      <CompareSection />
      <SuccessStories />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
