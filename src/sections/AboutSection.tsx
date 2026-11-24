import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BookOpen, Code, Sparkles, Target, Terminal, Cpu, GitBranch, Database } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const aboutText = PORTFOLIO_DATA.profile.introParagraph;

  const highlights = [
    {
      icon: BookOpen,
      title: 'B.Tech IT Student',
      subtitle: 'Sri Muthukumaran Institute of Technology',
    },
    {
      icon: Code,
      title: 'Core Foundations',
      subtitle: 'Programming, Databases & Web Tech',
    },
    {
      icon: Target,
      title: 'Practical Builder',
      subtitle: 'Real-World Functional Applications',
    },
    {
      icon: Sparkles,
      title: 'Growth Mindset',
      subtitle: 'Continuous Learning & Problem Solving',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-12 py-24 sm:py-28 md:py-32 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* 4 Floating Tech Elements (Replacing toy/cartoon icons with engineering widgets) */}
      
      {/* Top-left: Minimal Code Terminal */}
      <div className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none hidden md:block">
        <FadeIn delay={0.1} x={-60} y={0} duration={0.8}>
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[200px] lg:w-[230px] rounded-2xl bg-[#11131A]/90 border border-purple-500/30 p-3.5 shadow-[0_15px_35px_rgba(168,85,247,0.18)] backdrop-blur-md select-none text-left"
          >
            <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] font-mono text-neutral-400 ml-1.5 flex items-center gap-1">
                <Terminal className="w-3 h-3 text-purple-400" /> developer.ts
              </span>
            </div>
            <div className="font-mono text-xs space-y-1">
              <p className="text-purple-300">const <span className="text-white">bhuvanesh</span> = {'{'}</p>
              <p className="text-neutral-400 pl-3">role: <span className="text-emerald-400">"Software Dev"</span>,</p>
              <p className="text-neutral-400 pl-3">focus: <span className="text-cyan-300">"AI &amp; Web Tech"</span></p>
              <p className="text-purple-300">{'}'};</p>
            </div>
          </motion.div>
        </FadeIn>
      </div>

      {/* Bottom-left: AI Neural Engine Chip (Replacing the purple smiley ring) */}
      <div className="absolute bottom-[6%] left-[2%] sm:left-[4%] md:left-[5%] z-0 pointer-events-none hidden md:block">
        <FadeIn delay={0.25} x={-60} y={0} duration={0.8}>
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -1.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="w-[180px] lg:w-[210px] rounded-2xl bg-[#11131A]/90 border border-purple-500/35 p-3.5 shadow-[0_15px_35px_rgba(168,85,247,0.22)] backdrop-blur-md select-none text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Cpu className="w-5 h-5 animate-pulse text-purple-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Neural Engine</span>
                <span className="text-[10px] font-mono text-purple-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Gemini &amp; OCR
                </span>
              </div>
            </div>
            <div className="mt-2.5 pt-2 border-t border-white/10 flex justify-between text-[11px] font-mono">
              <span className="text-neutral-400">Model Inference</span>
              <span className="text-emerald-400 font-semibold">&lt; 850ms</span>
            </div>
          </motion.div>
        </FadeIn>
      </div>

      {/* Top-right: Git Branch & Production Deployment Chip */}
      <div className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none hidden md:block">
        <FadeIn delay={0.15} x={60} y={0} duration={0.8}>
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="w-[180px] lg:w-[220px] rounded-2xl bg-[#11131A]/90 border border-indigo-500/30 p-3.5 shadow-[0_15px_35px_rgba(99,102,241,0.18)] backdrop-blur-md select-none text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs font-mono font-semibold text-neutral-200">main</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DEPLOYED
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-300 truncate">
              commit: <span className="text-purple-300 font-medium">feat(ai): smartpark</span>
            </p>
          </motion.div>
        </FadeIn>
      </div>

      {/* Bottom-right: Database & API Performance Chip */}
      <div className="absolute bottom-[6%] right-[2%] sm:right-[4%] md:right-[5%] z-0 pointer-events-none hidden md:block">
        <FadeIn delay={0.3} x={60} y={0} duration={0.8}>
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="w-[180px] lg:w-[210px] rounded-2xl bg-[#11131A]/90 border border-cyan-500/30 p-3.5 shadow-[0_15px_35px_rgba(6,182,212,0.18)] backdrop-blur-md select-none text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <Database className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Full Stack Sync</span>
                <span className="text-[10px] font-mono text-neutral-400">React &bull; Node &bull; SQL</span>
              </div>
            </div>
            <div className="mt-2.5 pt-2 border-t border-white/10 flex justify-between text-[11px] font-mono">
              <span className="text-neutral-400">Telemetry</span>
              <span className="text-cyan-300 font-semibold">Live &bull; 99.9%</span>
            </div>
          </motion.div>
        </FadeIn>
      </div>

      {/* Center Editorial Content */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={35}>
          <span className="text-neutral-300 text-sm sm:text-base uppercase tracking-[0.25em] font-medium mb-2 block">
            Discover My Journey
          </span>
          <h2
            style={{ fontSize: 'clamp(2.8rem, 10vw, 140px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          >
            About Me
          </h2>
        </FadeIn>

        {/* Animated Editorial Paragraph */}
        <div className="mt-8 sm:mt-12 md:mt-14 w-full flex justify-center">
          <AnimatedText
            text={aboutText}
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.45rem)' }}
            className="text-white/90 font-normal text-center leading-relaxed max-w-[760px] px-4"
          />
        </div>

        {/* 4 Academic & Professional Pillars */}
        <FadeIn delay={0.2} y={25} className="w-full mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto w-full px-2">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-center transition-all duration-300 hover:border-[#D7E2EA]/40 hover:bg-white/10 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3.5 text-[#D7E2EA] group-hover:text-[#B600A8] group-hover:border-[#B600A8]/40 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16">
          <FadeIn delay={0.3} y={20}>
            <ContactButton href="#contact" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
