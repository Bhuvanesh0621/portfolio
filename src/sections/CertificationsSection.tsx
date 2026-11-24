import React from 'react';
import FadeIn from '../components/FadeIn';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section
      id="certifications"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-12 py-24 sm:py-28 md:py-32 select-none border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <FadeIn delay={0} y={30}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#D7E2EA]/70 text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
              Verified Credentials
            </div>
            <h2
              style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
              className="hero-heading font-black uppercase leading-none tracking-tight"
            >
              Certifications
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base font-normal mt-3 leading-relaxed">
              Standardized national evaluation and academic excellence awards
            </p>
          </FadeIn>
        </div>

        {/* Certifications Cards */}
        <div className="flex flex-col gap-8">
          {certifications.map((cert, idx) => (
            <FadeIn key={idx} delay={0.15 * idx} y={25}>
              <div className="rounded-[32px] sm:rounded-[40px] border border-white/15 bg-gradient-to-br from-[#161616] via-[#121212] to-[#0D0D0D] p-6 sm:p-9 shadow-2xl relative overflow-hidden group hover:border-[#D7E2EA]/40 transition-all duration-300">
                {/* Background Ambient Glow Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B600A8]/10 via-[#7621B0]/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B600A8] shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <Award className="w-7 h-7" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-purple-300 font-medium">
                          {cert.title}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full font-bold">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{cert.level}</span>
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1.5">
                        {cert.course}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-300 mt-1.5 font-normal">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Score Pill */}
                  <div className="self-start md:self-center flex flex-col items-start md:items-end">
                    <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-neutral-400 font-medium">
                      Examination Score
                    </span>
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight mt-0.5">
                      {cert.score}
                    </span>
                  </div>
                </div>

                {/* Description & Competencies */}
                <div className="pt-6">
                  <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed max-w-3xl">
                    {cert.description}
                  </p>

                  <div className="mt-5 flex items-center gap-4 text-xs sm:text-sm text-neutral-300 flex-wrap font-medium">
                    <span className="inline-flex items-center gap-1.5 text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Object-Oriented Programming
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Java Collections Framework
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Multi-Threading &amp; Exception Handling
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
