import React from 'react';
import FadeIn from '../components/FadeIn';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Globe, Brain, Terminal, Sparkles } from 'lucide-react';

const categoryIcons = [Code2, Globe, Brain, Terminal];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-12 py-24 sm:py-28 md:py-32 select-none overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={30}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#D7E2EA]/90 text-xs sm:text-sm uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              Core Competencies
            </div>
            <h2
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight"
            >
              Technical Expertise
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base font-normal mt-3 max-w-xl mx-auto leading-relaxed">
              Verified skills and technologies applied in practical engineering &amp; academic projects
            </p>
          </FadeIn>
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <FadeIn key={category.title} delay={idx * 0.1} y={25}>
                <div className="h-full rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#121212]/90 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-[#D7E2EA]/30 hover:bg-[#161616] group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D7E2EA] group-hover:bg-[#B600A8]/20 group-hover:text-white group-hover:border-[#B600A8]/40 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm uppercase tracking-wider text-neutral-400 font-mono mt-0.5">
                        {category.skills.length} Technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm sm:text-base font-medium text-neutral-200 transition-all duration-200 hover:scale-105 hover:bg-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
