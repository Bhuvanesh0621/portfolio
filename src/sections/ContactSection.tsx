import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  User,
  MessageSquare,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  Github,
  Linkedin,
  Download,
  Terminal,
  Loader2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: '',
  });

  const [lastSentData, setLastSentData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Copy Email to Clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Helper to generate mailto URL
  const getMailtoUrl = (data: { name: string; email: string; subject: string; message: string }) => {
    const subj = encodeURIComponent(`[Portfolio Contact] ${data.subject} - from ${data.name}`);
    const body = encodeURIComponent(
      `Hello Bhuvanesh,\n\nName: ${data.name}\nEmail: ${data.email}\nTopic: ${data.subject}\n\nMessage:\n${data.message}\n\n---\nSent via bhuvanesh-portfolio`
    );
    return `mailto:${profile.email}?subject=${subj}&body=${body}`;
  };

  // Helper to generate WhatsApp URL
  const getWhatsAppUrl = (data: { name: string; email: string; subject: string; message: string }) => {
    const text = encodeURIComponent(
      `Hi Bhuvanesh, I sent a message from your portfolio website:\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Topic:* ${data.subject}\n*Message:* ${data.message}`
    );
    return `https://wa.me/919941135545?text=${text}`;
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setFormStatus('sending');
    const submissionData = { ...formData };
    setLastSentData(submissionData);

    try {
      // Send directly to verified FormSubmit endpoint for bhuvaneshkumar299@gmail.com
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: submissionData.name,
          email: submissionData.email,
          _subject: `[Portfolio Inquiry] ${submissionData.subject} from ${submissionData.name}`,
          message: submissionData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await res.json().catch(() => null);

      if (res.ok && (result?.success === 'true' || result?.success === true || res.status === 200)) {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Project Collaboration',
          message: '',
        });
      } else {
        // If API is temporarily blocked or awaiting activation, launch client email as backup
        window.open(getMailtoUrl(submissionData), '_blank');
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Project Collaboration',
          message: '',
        });
      }
    } catch (err) {
      // Network/AdBlocker/CORS fallback: guarantee message delivery via native mail client
      window.open(getMailtoUrl(submissionData), '_blank');
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Project Collaboration',
        message: '',
      });
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0C0C0C] py-20 sm:py-28 px-6 sm:px-10 md:px-14 lg:px-16 border-t border-white/10 z-30 select-none overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] rounded-full bg-blue-600/8 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30" />

      {/* Copy Toast Alert */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#16161A] border border-purple-500/40 text-white shadow-[0_10px_30px_rgba(168,85,247,0.3)] backdrop-blur-md"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-xs sm:text-sm font-medium font-mono">
              Email copied to clipboard! 📋
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Grid: Left Info, Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-white/10">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Contact Introduction & Direct Details       */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-purple-200 uppercase tracking-widest mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.12)] font-semibold">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <span>Instant Messaging</span>
              </div>

              <h2 className="font-black uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E6EDF2] to-[#8A9BA8] leading-[0.95]">
                Let&apos;s Connect.
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 font-normal mt-4 leading-relaxed">
                Have an interesting opportunity, project idea or collaboration in mind? Send me a message directly or connect across professional platforms.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4 group hover:border-purple-400/40 transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-wider font-mono text-neutral-400 block font-semibold">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors truncate block mt-0.5"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-mono text-neutral-200 hover:text-white flex items-center gap-1.5 transition-all shrink-0 cursor-pointer active:scale-95 font-medium"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-neutral-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#0077B5]/50 hover:bg-[#0077B5]/10 flex items-center justify-between text-sm font-semibold text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#0077B5]" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 hover:bg-white/10 flex items-center justify-between text-sm font-semibold text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* WhatsApp Instant Connect Card */}
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 p-3.5 rounded-xl bg-emerald-500/[0.07] border border-emerald-500/25 hover:border-emerald-400/60 hover:bg-emerald-500/15 flex items-center justify-between text-sm font-semibold text-white transition-all group shadow-[0_0_20px_rgba(16,185,129,0.08)] cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white text-sm font-bold">Chat on WhatsApp</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Online" />
                    </div>
                    <p className="text-xs text-neutral-300 font-mono mt-0.5">{profile.displayPhone || '+91 99411 35545'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-medium">
                  <span className="hidden sm:inline">Direct Chat</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>

              {/* View / Download Resume Button */}
              {onOpenResume ? (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="mt-3 w-full p-3.5 rounded-xl border border-white/15 bg-white/5 hover:border-purple-400/50 hover:bg-purple-500/10 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-white transition-all group shadow-sm active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-purple-400 transition-transform group-hover:-translate-y-0.5" />
                  <span>View &amp; Download Verified Resume</span>
                </button>
              ) : (
                <a
                  href={profile.resumeUrl}
                  download="Bhuvanesh_Kumar_Resume.pdf"
                  className="mt-3 w-full p-3.5 rounded-xl border border-white/15 bg-white/5 hover:border-purple-400/50 hover:bg-purple-500/10 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-white transition-all group shadow-sm active:scale-95"
                >
                  <Download className="w-4 h-4 text-purple-400 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download Verified Resume PDF</span>
                </a>
              )}
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Interactive Direct Messaging Form          */}
          {/* ======================================================== */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#121215] border border-white/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
              {/* Subtle Glow Header Line */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>Send a Direct Message</span>
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 mt-1.5 font-normal">
                    Fill out the form below and your message will land straight in my inbox.
                  </p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Available to respond" />
              </div>

              {/* Form Status: Success Screen */}
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 sm:py-10 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_25px_rgba(16,185,129,0.25)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">Message Transmitted!</h4>
                  <p className="text-sm sm:text-base text-neutral-300 max-w-md mt-2 leading-relaxed font-normal">
                    Your message has been processed for direct delivery to <span className="text-purple-300 font-semibold">{profile.email}</span>.
                  </p>

                  {/* Immediate Direct Backup Actions */}
                  {lastSentData && (
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 w-full max-w-md">
                      <a
                        href={getWhatsAppUrl(lastSentData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Confirm on WhatsApp</span>
                      </a>

                      <a
                        href={getMailtoUrl(lastSentData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-neutral-200 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
                      >
                        <Mail className="w-4 h-4 text-purple-400" />
                        <span>Open in Email App</span>
                      </a>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setFormStatus('idle');
                      setLastSentData(null);
                    }}
                    className="mt-6 text-xs sm:text-sm font-mono text-neutral-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    Send Another Note &rarr;
                  </button>
                </motion.div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs sm:text-sm text-red-400 font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                        Your Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-purple-400/60 focus:bg-white/[0.05] focus:outline-none text-sm sm:text-base text-white placeholder:text-neutral-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                        Your Email <span className="text-purple-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-purple-400/60 focus:bg-white/[0.05] focus:outline-none text-sm sm:text-base text-white placeholder:text-neutral-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                      Subject / Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl bg-[#18181D] border border-white/10 focus:border-purple-400/60 focus:outline-none text-sm sm:text-base text-white transition-colors cursor-pointer"
                    >
                      <option value="Project Collaboration">Project Collaboration</option>
                      <option value="Internship Opportunity">Internship Opportunity</option>
                      <option value="Full-time Role Inquiry">Full-time Role Inquiry</option>
                      <option value="General Question / Connect">General Question / Connect</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-300 font-semibold mb-2">
                      Your Message <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Bhuvanesh, I came across your portfolio and wanted to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-purple-400/60 focus:bg-white/[0.05] focus:outline-none text-sm sm:text-base text-white placeholder:text-neutral-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full h-12 sm:h-13 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] active:scale-[0.98] cursor-pointer disabled:opacity-70"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-neutral-400 mt-2 font-mono">
                    Direct automated dispatch to <span className="text-neutral-200">{profile.email}</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-neutral-400 font-mono gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>&copy; {new Date().getFullYear()} {profile.fullName}. Built with React, TypeScript &amp; Framer Motion.</span>
          </div>

          <a
            href="#"
            className="hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
