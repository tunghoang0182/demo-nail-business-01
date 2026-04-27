import type { NextConfig } from "next";

const repoName = "demo-nail-business-01";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 1,
    workerThreads: true,
  },
};

export default nextConfig;