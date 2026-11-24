import React from 'react';
import FadeIn from '../components/FadeIn';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="expertise"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 scroll-mt-10"
    >
      {/* Anchor for backward compatibility with #services links */}
      <div id="services" className="sr-only" />

      <div className="max-w-5xl mx-auto">
        {/* Subtle Category Pill Tag with Purple Accent */}
        <FadeIn delay={0} y={20} className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/[0.08] border border-purple-500/20 text-purple-700 text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Core Competencies</span>
          </div>
        </FadeIn>

        {/* Heading */}
        <FadeIn delay={0.05} y={30}>
          <h2
            style={{ fontSize: 'clamp(2.4rem, 6.8vw, 84px)' }}
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-14 sm:mb-18 md:mb-24"
          >
            Technical Expertise
          </h2>
        </FadeIn>

        {/* 5 Technical Expertise items in a vertical five-row list */}
        <div className="w-full flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {PORTFOLIO_DATA.services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.08} y={25} className="w-full">
              <div className="group w-full flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-4 sm:gap-6 md:gap-12 transition-all duration-300 hover:bg-purple-50/40 hover:pl-4 sm:hover:pl-6 px-2 sm:px-4 rounded-2xl relative">
                {/* Number on the left with subtle purple transition on hover */}
                <div
                  style={{ fontSize: 'clamp(3rem, 9vw, 128px)' }}
                  className="font-black text-[#0C0C0C] group-hover:text-purple-600 transition-colors duration-300 leading-none shrink-0 select-none md:w-[220px]"
                >
                  {service.number}
                </div>

                {/* Name + description stacked vertically on the right */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3
                    style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.85rem)' }}
                    className="font-bold uppercase tracking-tight text-[#0C0C0C] group-hover:text-purple-950 transition-colors duration-300 mb-2 sm:mb-3"
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.15rem)' }}
                    className="font-normal leading-relaxed text-neutral-700 max-w-2xl"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
