import type { NextConfig } from "next";

const config: NextConfig = {
  devIndicators: false,
  output: "export",
  basePath: "/tichulearnbook",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default config;
