/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.higashiaichi.jp",
      },
    ],
  },
};

export default nextConfig;
