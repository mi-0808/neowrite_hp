/** @type {import('next').NextConfig} */
const nextConfig = {
  // dev と build で出力先を分ける。共有すると build が dev のチャンクを消して
  // 開発サーバーの CSS/JS が 404 になるため。
  distDir: process.env.NEXT_DIST_DIR || ".next",
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
