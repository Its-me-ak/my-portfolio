'use client';

import {
  VscEye,
  VscRepoForked,
  VscStarEmpty,
  VscGithubAlt,
  VscLinkExternal,
  VscTypeHierarchy,
} from 'react-icons/vsc';

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

interface RepoCardProps {
  repo: Repo;
}

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className="flex flex-col justify-between bg-[var(--article-bg)] border border-white/10 rounded-lg p-5 h-full relative overflow-hidden">
      <div className="flex justify-between items-start mb-3 flex-wrap gap-y-3 gap-x-2">
        <h3 className="text-[var(--accent-color)] text-[1.1rem] font-semibold relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[1px] after:bg-[var(--accent-color)] after:opacity-50">
          {repo.name}
        </h3>
        {repo.language && (
          <div className="flex items-center gap-[0.3rem] text-xs text-white/70 px-2 py-1 rounded bg-white/5 whitespace-nowrap">
            <VscTypeHierarchy className="text-[var(--accent-color)] text-sm" />
            <span>{repo.language}</span>
          </div>
        )}
      </div>

      <p className="my-3 text-[var(--text-color)] text-[0.92rem] leading-[1.5] break-words">
        {repo.description || 'No description provided'}
      </p>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5 flex-wrap gap-2">
        <div className="flex gap-4 flex-wrap text-sm text-white/70">
          <div className="flex items-center">
            <VscStarEmpty className="text-[var(--accent-color)] mr-1 text-base" />
            {repo.stargazers_count}
          </div>
          <div className="flex items-center">
            <VscRepoForked className="text-[var(--accent-color)] mr-1 text-base" />
            {repo.forks}
          </div>
          <div className="flex items-center">
            <VscEye className="text-[var(--accent-color)] mr-1 text-base" />
            {repo.watchers}
          </div>
        </div>

        <div className="flex gap-4 text-white/70">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            title="View Repository"
            className="hover:opacity-100 opacity-70 transition-opacity"
          >
            <VscGithubAlt className="text-[var(--accent-color)] text-lg" />
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Live Site"
              className="hover:opacity-100 opacity-70 transition-opacity"
            >
              <VscLinkExternal className="text-[var(--accent-color)] text-lg" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
