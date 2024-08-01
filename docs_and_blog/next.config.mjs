/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    rewrites: async () => [
      {
        source: "/doc",
        destination: "/doc/index.html",
      },
    ],
  };
  export default nextConfig;
