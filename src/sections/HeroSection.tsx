import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowDown, ExternalLink, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const { profile, navLinks } = PORTFOLIO_DATA;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const portraitVariants = {
    hidden: { opacity: 0, x: -40, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' as const, delay: 0.15 },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C] select-none">
      {/* Subtle Ambient Radial Gradients */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] rounded-full bg-purple-600/12 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[350px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-40" />

      {/* 1. Header / Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex items-center justify-between px-6 sm:px-10 md:px-14 lg:px-16 pt-6 sm:pt-8 z-30 flex-wrap gap-4"
      >
        {/* Navigation Links */}
        <nav className="flex items-center gap-5 sm:gap-7 md:gap-9 flex-wrap">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base transition-all duration-200 hover:text-white hover:opacity-100 opacity-85 relative group py-1"
            >
              <span>{link.label}</span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Top-Right Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA] hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA] hover:text-[#0077B5] hover:border-[#0077B5]/40 hover:bg-white/10 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </motion.header>

      {/* 2. Main Hero Body (Asymmetrical: Left Portrait, Center Typography) */}
      <div className="w-full flex-1 max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex items-center z-10 py-6 sm:py-8 lg:py-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ======================================================== */}
          {/* LEFT SIDE: Professional Profile Photograph (25–30% space) */}
          {/* ======================================================== */}
          <motion.div
            variants={portraitVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-start items-center relative order-1 lg:order-1"
          >
            <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-full max-w-[340px] group">
              {/* Ambient purple & indigo glow behind the portrait */}
              <div className="absolute inset-0 -top-8 -left-6 bg-gradient-to-tr from-purple-600/25 via-indigo-500/20 to-blue-500/10 rounded-full blur-3xl -z-10 scale-110 pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              {/* Portrait Image Container with subtle fade at bottom */}
              <div className="relative overflow-visible flex justify-center lg:justify-start">
                <img
                  src="/bhuvanesh-hero-portrait.png"
                  alt={`${profile.fullName} - Professional Developer Portrait`}
                  className="w-full h-auto max-h-[46vh] sm:max-h-[52vh] lg:max-h-[64vh] object-contain select-none filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] drop-shadow-[0_10px_25px_rgba(168,85,247,0.2)] transition-transform duration-500 hover:scale-[1.015]"
                  loading="eager"
                />

                {/* Smooth natural bottom fade into #0C0C0C background */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none" />
              </div>

              {/* Status Pill below image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161A]/95 border border-white/15 backdrop-blur-md shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-200 font-medium">
                  Open to Opportunities
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* CENTER: Name, Title, Introduction & Call to Actions      */}
          {/* ======================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 xl:col-span-8 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-2"
          >
            {/* Subtle Greeting Badge */}
            <motion.div variants={itemFadeUp} className="mb-2 sm:mb-3">
              <span className="inline-block text-sm sm:text-base md:text-lg font-mono uppercase tracking-[0.25em] text-[#D7E2EA]/80 font-medium">
                HEY, I'M
              </span>
            </motion.div>

            {/* Extra-Large Name: BHUVANESH KUMAR M. */}
            <motion.h1
              variants={itemFadeUp}
              className="font-black uppercase tracking-tight leading-[0.92] text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E6EDF2] to-[#8A9BA8] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] drop-shadow-sm"
            >
              BHUVANESH
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E0E7EC] to-[#A2B3C2]">
                KUMAR M.
              </span>
            </motion.h1>

            {/* Professional Title: SOFTWARE DEVELOPER & AI ENTHUSIAST */}
            <motion.div variants={itemFadeUp} className="mt-4 sm:mt-5">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-[0.16em] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-blue-300">
                SOFTWARE DEVELOPER &amp; AI ENTHUSIAST
              </p>
            </motion.div>

            {/* Supporting Introduction */}
            <motion.p
              variants={itemFadeUp}
              className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-[#D7E2EA]/90 font-normal leading-relaxed max-w-xl"
            >
              Building intelligent solutions and meaningful digital experiences through technology and creativity.
            </motion.p>

            {/* Action Buttons & Social Links */}
            <motion.div
              variants={itemFadeUp}
              className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {/* EXPLORE MY WORK */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#D7E2EA] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              {/* RESUME BUTTONS (Interactive Preview Modal + Direct Download) */}
              {onOpenResume ? (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#D7E2EA] backdrop-blur-md transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/10 hover:text-white active:scale-95 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
                  <span>VIEW RESUME</span>
                </button>
              ) : (
                <a
                  href={profile.resumeUrl}
                  download="Bhuvanesh_Kumar_Resume.pdf"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-[#D7E2EA] backdrop-blur-md transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/10 hover:text-white active:scale-95 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                >
                  <Download className="w-4 h-4 text-purple-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>DOWNLOAD RESUME</span>
                </a>
              )}

              {/* Social Link Badges */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA] hover:text-white hover:border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-200"
                  aria-label="GitHub Profile"
                  title="View GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA] hover:text-[#0077B5] hover:border-[#0077B5]/40 hover:bg-white/10 hover:scale-105 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                  title="View LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* 3. Bottom Indicator Bar */}
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 pb-6 pt-2 z-20 flex items-center justify-between text-xs sm:text-sm text-neutral-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span className="font-medium text-neutral-300">B.Tech IT • Software Developer</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-neutral-400 font-medium">
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
