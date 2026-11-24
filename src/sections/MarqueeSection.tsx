import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const MarqueeSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0C0C0C] py-20 sm:py-28 md:py-32 px-6 sm:px-10 md:px-16 overflow-hidden select-none flex flex-col items-center justify-center text-center">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[350px] sm:h-[450px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

      {/* Subtle Background Texture Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-30" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Label Above Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-mono font-semibold text-neutral-200">
              A Little About What I Do
            </span>
          </div>
        </motion.div>

        {/* Main Heading: TURNING IDEAS INTO DIGITAL EXPERIENCES. */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-black uppercase tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-center"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#E8EDF2] to-[#A2B1BE]">
            TURNING IDEAS INTO
          </span>
          <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
            DIGITAL EXPERIENCES.
          </span>
        </motion.h2>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-200 font-normal leading-relaxed max-w-2xl sm:max-w-3xl text-center"
        >
          I'm a B.Tech Information Technology student passionate about software development, artificial intelligence and building practical solutions to real-world problems.
        </motion.p>

        {/* Minimal Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2"
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 cursor-pointer transition-opacity duration-300 hover:opacity-100 opacity-60"
            aria-label="Scroll to About section"
          >
            {/* Minimal Capsule Pill */}
            <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1 bg-white/[0.02] backdrop-blur-sm group-hover:border-purple-400/50 transition-colors duration-300">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                }}
                className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              />
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
