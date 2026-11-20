/** @type {import('next').NextConfig} */
const nextConfig = {
  // dev だけ出力先を分ける（npm run dev が NEXT_DIST_DIR を渡す）。
  // build と共有すると build が dev のチャンクを消し、開発サーバーの CSS が 404 になる。
  // Vercel は .next を見るので、build 側は既定のままにしておくこと。
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
