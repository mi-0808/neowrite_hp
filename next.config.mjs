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
  // 旧サービスページは削除済み。外部リンクから来た人をトップの「できること」へ送る
  async redirects() {
    return [{ source: "/service", destination: "/#service", permanent: true }];
  },
};

export default nextConfig;
