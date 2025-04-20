// app/github/GithubPageClient.tsx
'use client';

import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson } from 'react-icons/vsc';
import RepoCard, { Repo } from '@/components/RepoCard';
import { useSidebar } from '@/context/SidebarContext';

interface User {
    login: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
}

export default function GithubPageClient({ user, repos }: { user: User; repos: Repo[] }) {
    const { isSidebarOpen } = useSidebar();
    console.log('GitHub user:', user);



    return (
        <main className={`${isSidebarOpen ? "lg:ml-80 ml-12" : "ml-12"} mt-10 pb-2`}>
            <div className="flex flex-col items-center text-center pt-12">
                <h1 className="text-2xl font-bold text-[var(--accent-color)] mb-6 tracking-tight leading-snug">GitHub</h1>
                <p className="text-[1.1rem] font-normal text-white/70 mb-12 max-w-[600px] leading-relaxed">
                    Browse through my GitHub repositories and see what I&apos;ve been working on...
                </p>
            </div>

            <div className="w-full py-4">
                <div className="bg-[var(--article-bg)] rounded-lg p-8 mb-8 border border-white/10 w-full flex flex-col items-center">
                    <div className="flex flex-col items-center gap-6 px-8">
                        <Image
                            src={user.avatar_url}
                            alt={''}
                            width={100}
                            height={100}
                            priority
                            className="rounded-full border-[3px] border-[var(--accent-color)] w-[100px] h-[100px]"
                        />
                        <div className="flex flex-col items-center gap-8 w-full">
                            <h2 className="text-[1.5rem] font-semibold text-[var(--text-color)] uppercase tracking-wider">
                                <span className="before:content-['@'] before:text-[var(--accent-color)]">{user.login}</span>
                            </h2>
                            <div className="flex gap-6 flex-wrap sm:flex-row flex-col text-sm text-[var(--text-secondary)]">
                                <div className="flex items-center gap-2">
                                    <VscRepo className="text-[var(--accent-color)]" />
                                    <span>{user.public_repos} repositories</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <VscPerson className="text-[var(--accent-color)]" />
                                    <span>{user.followers} followers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <span className="text-[1.2rem] font-semibold">Popular Repositories</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {repos.map((repo) => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </div>

                <div className="lg:w-full w-[340px] sm:w-[560px] md:w-[700px] pt-6 pb-6">
                    <h2 className="text-xl font-semibold mb-4 text-white">GitHub Contributions</h2>

                    <div className="overflow-x-auto rounded-lg p-4 bg-[#122738]">
                        <GitHubCalendar
                            username="its-me-ak"
                            blockSize={16}
                            blockMargin={5}
                            fontSize={14}
                            colorScheme="dark"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
