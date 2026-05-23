import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  allowedDevOrigins: [
    "preview-chat-04654527-702a-4fbd-9340-e0ead62786e1.space-z.ai",
  ],
};

export default nextConfig;
