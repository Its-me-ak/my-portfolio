import GithubPageClient from "@/components/GithubPageClient";

async function getGithubData() {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

    const [userRes, repoRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`,
            },
            cache: 'no-store',
        }),

        fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=15`, {
            headers: {
                Authorization: `token ${process.env.GITHUB_API_KEY}`,
            },
            cache: 'no-store',
        })]);

    const user = await userRes.json();
    const reposRaw = await repoRes.json();

    // Ensure repos is always an array
    const repos = Array.isArray(reposRaw) ? reposRaw : [];

    return { user, repos };
}


export default async function GithubPage() {
    const { user, repos } = await getGithubData();
    return <GithubPageClient user={user} repos={repos} />;
}
