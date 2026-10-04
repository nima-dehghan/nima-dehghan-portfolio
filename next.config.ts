import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  images: { unoptimized: true },
  basePath: "/nima-dehghan-portfolio",
  assetPrefix: "/nima-dehghan-portfolio",
};

export default nextConfig;
