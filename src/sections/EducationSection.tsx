import React from 'react';
import FadeIn from '../components/FadeIn';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, Building, Sparkles } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section
      id="education"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-12 py-24 sm:py-28 md:py-32 select-none border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={30}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#D7E2EA]/70 text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              Academic Journey
            </div>
            <h2
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight"
            >
              Education
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base font-normal mt-3 leading-relaxed">
              Formal academic foundation in Information Technology and Science disciplines
            </p>
          </FadeIn>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 flex flex-col gap-10 sm:gap-14">
          {education.map((item, idx) => (
            <FadeIn key={idx} delay={0.15 * idx} y={25}>
              <div className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0C0C0C] border-2 border-[#B600A8] group-hover:bg-[#B600A8] group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(182,0,168,0.5)]" />

                {/* Timeline Card */}
                <div className="rounded-[28px] sm:rounded-[36px] border border-white/10 bg-[#121212]/90 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 hover:border-[#D7E2EA]/30 hover:bg-[#161616]">
                  {/* Top Bar: Duration & Degree */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-purple-400 font-bold block mb-1.5">
                        {item.department ? `Department of ${item.department}` : item.board ? `Board: ${item.board}` : 'Academic Record'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                        {item.degree}
                      </h3>
                    </div>

                    <div className="inline-flex items-center gap-1.5 self-start sm:self-auto text-xs sm:text-sm font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-neutral-200 px-4 py-2 rounded-full shrink-0 font-medium">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  {/* Institution Details */}
                  <div className="mt-4 flex items-center gap-2 text-base sm:text-lg text-white font-medium">
                    <Building className="w-4 h-4 text-[#0077B5] shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  {item.details && (
                    <p className="mt-3 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
