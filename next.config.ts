import type { NextConfig } from "next";

// Gera um site estático na pasta /out (rápido e fácil de hospedar)
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
