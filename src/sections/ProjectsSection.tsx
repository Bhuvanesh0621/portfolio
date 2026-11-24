import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import GitHubButton from '../components/GitHubButton';
import { PORTFOLIO_DATA, ProjectDetail } from '../data/portfolioData';
import { CheckCircle2, AlertCircle, Lightbulb, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectDetail;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Target scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="relative min-h-[90vh] sm:min-h-[96vh] flex items-start justify-center pb-8"
      style={{
        marginTop: index === 0 ? 0 : '2rem',
      }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(4.5rem + ${index * 24}px)`,
        }}
        className="sticky w-full max-w-6xl mx-auto rounded-[32px] sm:rounded-[44px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9 shadow-2xl flex flex-col justify-between transition-shadow duration-300"
      >
        {/* Top Header: Number, Category, Title, Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-white/10 gap-4">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
              className="font-black text-[#D7E2EA] leading-none select-none font-mono"
            >
              {project.number}
            </span>

            <div>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-purple-300 font-mono bg-purple-500/15 border border-purple-500/30 px-3.5 py-1 rounded-full font-semibold">
                {project.category}
              </span>
              <h3
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)' }}
                className="font-extrabold uppercase tracking-tight text-white mt-2"
              >
                {project.name}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-normal mt-1">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Action buttons: Live Demo & GitHub */}
          <div className="flex items-center gap-3 flex-wrap">
            {project.githubUrl && (
              <GitHubButton href={project.githubUrl} />
            )}
            {project.liveUrl && (
              <LiveProjectButton href={project.liveUrl} />
            )}
          </div>
        </div>

        {/* Problem & Solution Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-red-400 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Statement</span>
            </div>
            <p className="text-neutral-200 font-normal leading-relaxed text-sm sm:text-base">
              {project.problem}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold uppercase tracking-wider text-xs sm:text-sm mb-1.5">
              <Lightbulb className="w-4 h-4" />
              <span>Architected Solution</span>
            </div>
            <p className="text-neutral-200 font-normal leading-relaxed text-sm sm:text-base">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Main Features Bullet Grid */}
        <div className="py-2.5">
          <span className="text-xs sm:text-sm uppercase tracking-wider text-neutral-300 font-semibold block mb-2.5">
            Key Engineering Features:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-200 font-normal leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Metrics Badges */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="py-2.5 flex flex-wrap items-center gap-2.5">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-purple-300 font-mono font-semibold flex items-center gap-1.5 mr-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Impact Metrics:
            </span>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center gap-1.5 sm:gap-2"
                >
                  <span className="text-xs text-neutral-400 font-mono">{metric.label}:</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="py-3 flex flex-wrap gap-2 items-center">
          <span className="text-xs sm:text-sm uppercase tracking-wider text-neutral-300 font-mono mr-1">
            Tech Stack:
          </span>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-white/5 border border-white/15 px-3 py-1.5 text-xs sm:text-sm text-neutral-200 font-mono font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 pt-2">
          {/* Left column (40% width): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
            <div
              style={{ height: 'clamp(120px, 14vw, 190px)' }}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[36px] overflow-hidden bg-[#161616] border border-white/10 shadow-inner group"
            >
              <img
                src={project.images.col1Top}
                alt={`${project.name} architecture preview`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div
              style={{ height: 'clamp(130px, 16vw, 220px)' }}
              className="w-full rounded-[24px] sm:rounded-[30px] md:rounded-[36px] overflow-hidden bg-[#161616] border border-white/10 shadow-inner group"
            >
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} interface telemetry`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right column (60% width): 1 tall image */}
          <div className="md:col-span-7">
            <div className="w-full h-full min-h-[260px] sm:min-h-[310px] md:min-h-full rounded-[24px] sm:rounded-[30px] md:rounded-[36px] overflow-hidden bg-[#161616] border border-white/10 shadow-inner group">
              <img
                src={project.images.col2}
                alt={`${project.name} full ecosystem showcase`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const projects = PORTFOLIO_DATA.projects;

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-32 z-20 border-t border-white/5"
    >
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14 sm:mb-18">
        <FadeIn delay={0} y={30}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#D7E2EA]/70 text-xs uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            Portfolio Highlights
          </div>
          <h2
            style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          >
            Selected Works
          </h2>
          <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-light mt-3 max-w-lg mx-auto">
            Practical full-stack web platforms and intelligent AI engineering implementations
          </p>
        </FadeIn>
      </div>

      {/* Stacking Project Cards */}
      <div className="w-full flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
