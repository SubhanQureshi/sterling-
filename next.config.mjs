import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Next.js SSG Static Export for maximum edge performance
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for Next.js SSG static export
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/design-system/styles')],
  },
};

export default nextConfig;
