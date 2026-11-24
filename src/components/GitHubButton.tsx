import React from 'react';
import { Github } from 'lucide-react';

interface GitHubButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
  label?: string;
}

export const GitHubButton: React.FC<GitHubButtonProps> = ({
  className = '',
  href = '#',
  onClick,
  label = 'GitHub',
}) => {
  const content = (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-300 hover:border-[#D7E2EA] hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      <Github className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );

  if (href && !onClick) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};

export default GitHubButton;
