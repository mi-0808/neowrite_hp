export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  points: string[];
  capabilities: string[];
  flow: { step: string; label: string; body: string }[];
  note?: { heading: string; body: string };
};

export const services: ServiceItem[] = [
  {
    id: "system",
    number: "01",
    title: "システム開発",
    tagline: "課題に合わせたシステムを、小さく速く。",
    description:
      "業務効率化ツール、Webアプリケーション、管理システムなど、目的に合わせたシステムを設計・開発します。",
    accentColor: "#10B89A",
    points: ["Excel管理が限界", "アナログな作業を減らしたい", "小さく始めて検証したい"],
    capabilities: [
      "業務効率化ツール・管理システム",
      "Webアプリケーション開発",
      "AI・機械学習を活用したシステム",
      "API設計・外部サービス連携",
      "データベース設計・運用",
    ],
    flow: [
      { step: "01", label: "要件整理", body: "課題・目的・制約を丁寧にヒアリングし、必要な機能を言語化します。" },
      { step: "02", label: "設計", body: "データ構造・画面設計・技術スタックを決め、小さく検証できる構成を組みます。" },
      { step: "03", label: "開発・テスト", body: "Next.js / Python / Supabase などを用いて高速に実装・検証します。" },
      { step: "04", label: "納品・運用", body: "Vercel へデプロイ後、改善提案・機能追加にも対応します。" },
    ],
  },
  {
    id: "web",
    number: "02",
    title: "Web制作・運用",
    tagline: "信頼を伝えるサイトを、作って終わりにしない。",
    description:
      "企業サイト・サービスサイト・LPなどを制作し、作って終わりではなく、育てる運用までサポートします。",
    accentColor: "#1DA7D8",
    points: ["何を伝えるべきか整理したい", "信頼感のあるサイトにしたい", "採用や問い合わせにつなげたい"],
    capabilities: [
      "コーポレートサイト・採用サイト",
      "LP（ランディングページ）",
      "ECサイト・予約サイト",
      "モバイル・PC完全レスポンシブ対応",
      "SEO対策・アクセス解析",
    ],
    flow: [
      { step: "01", label: "ヒアリング", body: "目的・ターゲット・競合を整理し、サイトで伝えるべきことを言語化します。" },
      { step: "02", label: "設計・ワイヤー", body: "情報設計とページ構成を固め、スマホ・PCの動線を設計します。" },
      { step: "03", label: "デザイン・実装", body: "ブランドに合ったデザインを制作し、Next.js / Tailwind CSS で高速実装します。" },
      { step: "04", label: "公開・運用", body: "Vercel などへデプロイし、更新代行・改善提案まで伴走します。" },
    ],
    note: {
      heading: "このサイト自体もNEOWRITEが制作・運用しています。",
      body: "Next.js + Tailwind CSS をベースに、スピード・デザイン・保守性を両立した構成でお届けします。",
    },
  },
  {
    id: "sns",
    number: "03",
    title: "SNS運用",
    tagline: "数字より、積み重なる信頼を。",
    description:
      "Instagram・Xなどを中心に、事業とつながるSNS運用を支援します。投稿内容の設計からトーン・世界観づくり、運用の仕組み化まで一貫して対応します。",
    accentColor: "#FF7718",
    points: ["投稿内容の設計", "トーンと世界観づくり", "運用の仕組み化"],
    capabilities: [
      "Instagram・X を中心とした運用設計",
      "投稿内容・スケジュール設計",
      "世界観・トーン・ビジュアル設計",
      "複数アカウントの並行運用",
      "フォロワー増加・エンゲージメント改善施策",
    ],
    flow: [
      { step: "01", label: "現状分析", body: "既存アカウントの強み・弱みを分析し、競合と比較して伸びしろを特定します。" },
      { step: "02", label: "戦略設計", body: "ターゲット・ポジション・投稿テーマを決め、運用の骨格を組みます。" },
      { step: "03", label: "コンテンツ制作", body: "デザイン・文章・ハッシュタグまで一貫して制作・投稿します。" },
      { step: "04", label: "改善・継続", body: "数字を見ながら毎月改善。仕組みとして回る運用体制をつくります。" },
    ],
    note: {
      heading: "複数の地域密着メディアアカウントを運用中。",
      body: "東海・関西・関東・中国・北陸エリアにまたがるポータルアカウントの投稿設計・運用を担当しています（詳細はお問い合わせください）。",
    },
  },
];
