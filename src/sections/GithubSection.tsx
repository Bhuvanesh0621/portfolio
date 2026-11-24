import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  GitBranch,
  Star,
  ExternalLink,
  Code2,
  Calendar,
  Sparkles,
  Activity,
  FolderGit2,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface RepoData {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  updatedAt?: string;
}

const FALLBACK_REPOS: RepoData[] = [
  {
    name: 'Billbrain',
    description: 'AI-driven payment, subscription & expense intelligence ecosystem with predictive cashflow insights.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Bhuvanesh0621/Billbrain',
  },
  {
    name: 'aiparkingsystem',
    description: 'Enterprise smart parking telemetry system with real-time multi-floor 3D slot tracking & AI vision.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Bhuvanesh0621/aiparkingsystem',
  },
  {
    name: 'EBPL-PROJECT',
    description: 'Data science and exploratory data analytics pipeline with Python for predictive modeling.',
    language: 'Python',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Bhuvanesh0621/EBPL-PROJECT',
  },
  {
    name: 'smart-parking-system',
    description: 'Core backend and client interface for automated license plate reading and bay status allocation.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    url: 'https://github.com/Bhuvanesh0621/smart-parking-system',
  },
];

// Generate dynamic 24-week contribution tiles simulation for the heatmap
const generateHeatmapDays = () => {
  const weeks = 24;
  const daysPerWeek = 7;
  const data = [];
  const levels = [0, 1, 2, 3, 4];

  // Pseudo-random seed to create a realistic developer commit pattern
  let seed = 42;
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let w = 0; w < weeks; w++) {
    const weekDays = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const rand = random();
      let level = 0;
      if (rand > 0.45) level = 1;
      if (rand > 0.70) level = 2;
      if (rand > 0.88) level = 3;
      if (rand > 0.96) level = 4;
      weekDays.push(level);
    }
    data.push(weekDays);
  }
  return data;
};

const HEATMAP_DATA = generateHeatmapDays();

export const GithubSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [repos, setRepos] = useState<RepoData[]>(FALLBACK_REPOS);
  const [stats, setStats] = useState({
    publicRepos: 5,
    followers: 0,
    following: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);

  // Client-side fetch of real GitHub data with rate-limit protection
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        // Fetch User Info
        const userRes = await fetch('https://api.github.com/users/Bhuvanesh0621');
        if (userRes.ok) {
          const userData = await userRes.json();
          setStats({
            publicRepos: userData.public_repos || 5,
            followers: userData.followers || 0,
            following: userData.following || 0,
          });
        }

        // Fetch Repositories
        const reposRes = await fetch(
          'https://api.github.com/users/Bhuvanesh0621/repos?sort=updated&per_page=6'
        );
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            const mapped: RepoData[] = reposData.map((r: any) => ({
              name: r.name,
              description:
                r.description ||
                (r.name.toLowerCase().includes('billbrain')
                  ? 'AI-driven payment, subscription & expense intelligence platform.'
                  : r.name.toLowerCase().includes('parking')
                  ? 'Smart parking telemetry and AI computer vision bay allocation.'
                  : 'Practical software engineering and data development repository.'),
              language: r.language || (r.name.toLowerCase().includes('ebpl') ? 'Python' : 'TypeScript'),
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
              url: r.html_url,
              updatedAt: r.updated_at,
            }));
            setRepos(mapped);
          }
        }
      } catch (err) {
        // Silently preserve verified fallback repos
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-purple-950/60 border-purple-800/40';
      case 2:
        return 'bg-purple-800/70 border-purple-700/60';
      case 3:
        return 'bg-purple-600 border-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]';
      case 4:
        return 'bg-purple-400 border-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.8)]';
      default:
        return 'bg-white/[0.03] border-white/[0.04]';
    }
  };

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'typescript':
        return 'bg-[#3178C6] text-[#3178C6]';
      case 'python':
        return 'bg-[#3572A5] text-[#3572A5]';
      case 'javascript':
        return 'bg-[#F7DF1E] text-[#F7DF1E]';
      default:
        return 'bg-purple-400 text-purple-400';
    }
  };

  return (
    <section
      id="github"
      className="relative w-full bg-[#0C0C0C] py-24 sm:py-32 px-6 sm:px-10 md:px-14 lg:px-16 overflow-hidden select-none border-t border-white/[0.06]"
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-purple-200">
                Live GitHub Telemetry
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white/95">
              Code Activity &amp;{' '}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400 bg-clip-text text-transparent">
                Open Source
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
              Real-time synchronization with GitHub. Building clean web apps, data pipelines, and AI-enabled systems with continuous commits.
            </p>
          </div>

          {/* Direct Profile CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 hover:border-purple-400/50 hover:bg-purple-500/10 text-[#D7E2EA] hover:text-white transition-all duration-300 active:scale-95 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md"
            >
              <Github className="w-4 h-4 text-purple-400 transition-transform duration-300 group-hover:scale-110" />
              <span>@Bhuvanesh0621</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Heatmap & Contribution Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl bg-[#121215] border border-white/10 p-6 sm:p-8 mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden group"
        >
          {/* Subtle Top Glow Border */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

          {/* Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-300 uppercase tracking-wider mb-1 font-semibold">
                <FolderGit2 className="w-4 h-4 text-purple-400" />
                <span>Public Repos</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white">
                {stats.publicRepos}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-300 uppercase tracking-wider mb-1 font-semibold">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Core Languages</span>
              </div>
              <span className="text-xl sm:text-2xl font-black text-white">
                TypeScript / Python
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-300 uppercase tracking-wider mb-1 font-semibold">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Status</span>
              </div>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm sm:text-base font-semibold text-emerald-300">Active Builder</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-neutral-300 uppercase tracking-wider mb-1 font-semibold">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Focus Area</span>
              </div>
              <span className="text-sm sm:text-base font-bold text-white mt-1 block">
                Full-Stack &amp; AI
              </span>
            </div>
          </div>

          {/* Contribution Heatmap Visualization */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-3 text-xs sm:text-sm text-neutral-300 font-mono font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Contribution Timeline</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <span className="text-neutral-400">Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.03] border border-white/[0.04]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-950/60 border border-purple-800/40" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-800/70 border border-purple-700/60" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-600 border border-purple-500" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-400 border border-purple-300" />
                <span className="text-neutral-400 ml-1">More</span>
              </div>
            </div>

            {/* Scrollable Heatmap Grid */}
            <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10">
              <div className="flex gap-1.5 min-w-[680px] justify-between">
                {HEATMAP_DATA.map((week, wIdx) => (
                  <div key={`week-${wIdx}`} className="flex flex-col gap-1.5 flex-1">
                    {week.map((level, dIdx) => (
                      <div
                        key={`cell-${wIdx}-${dIdx}`}
                        onMouseEnter={() => setHoveredTile(`Week ${wIdx + 1}, Day ${dIdx + 1}`)}
                        onMouseLeave={() => setHoveredTile(null)}
                        className={`w-full aspect-square rounded-sm border transition-all duration-200 hover:scale-125 cursor-pointer ${getLevelColor(
                          level
                        )}`}
                        title={`Activity level: ${level}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {repos.slice(0, 4).map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl bg-[#141418] border border-white/10 hover:border-purple-400/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)] hover:scale-[1.015]"
            >
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:text-white group-hover:bg-purple-600/20 transition-colors">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              </div>

              {/* Meta & Badges */}
              <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-mono text-neutral-300 font-medium">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language).split(' ')[0]}`}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <Star className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <GitBranch className="w-3.5 h-3.5 text-purple-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
