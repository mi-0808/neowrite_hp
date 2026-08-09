export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  /** トップページカード用の課題起点キャッチ */
  catchCopy: string;
  /** 依頼側の言葉で書いた課題例 */
  problems: string[];
  /** 技術・対応範囲タグ */
  tech: string[];
  description: string;
  accentColor: string;
  /** 白背景の文字用（WCAG AA 準拠）。accentColor は塗り専用 */
  textColor: string;
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
    catchCopy: "業務の“面倒”を、動くツールに。",
    problems: ["「社内の手作業をWebアプリにしたい」", "「アイデアを形にして検証したい」"],
    tech: ["Next.js", "TypeScript", "Python", "Supabase", "PostgreSQL"],
    description:
      "業務効率化ツール、Webアプリケーション、管理システムなど、目的に合わせたシステムを設計・開発します。",
    accentColor: "#10B89A",
    textColor: "#0B7A66",
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
    catchCopy: "作って終わりにしない、運用まで。",
    problems: ["「サイトを作りたいが、何から始めればいいか分からない」", "「作ったはいいが、更新が止まっている」"],
    tech: ["Next.js", "Tailwind CSS", "Vercel", "ライティング込み"],
    description:
      "企業サイト・サービスサイト・LPなどを制作し、作って終わりではなく、育てる運用までサポートします。",
    accentColor: "#1DA7D8",
    textColor: "#0F6E92",
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
    tagline: "投稿の中身ではなく、動き続ける運用を引き受けます。",
    catchCopy: "企業SNSの日々の運用を、代わりに。",
    problems: ["「問い合わせDMの返信が追いつかない」", "「アカウントの日々の運用に手が回らない」"],
    tech: ["DM・コメント対応", "テンプレート設計", "リスト作成", "定型オペレーション"],
    description:
      "企業SNSアカウントの保守運用を代行します。届くDM・コメントへの一次対応、見込み客への初期アプローチ、対応履歴の整理まで。投稿企画やコンテンツ制作は行わず、営業に直結する運用の実務を担当します。",
    accentColor: "#FF7718",
    textColor: "#B34E00",
    points: ["DM・コメントの一次対応", "アプローチ文面の設計", "運用フローの整備"],
    capabilities: [
      "企業SNSアカウントの日常運用・保守",
      "問い合わせDM・コメントの一次対応代行",
      "返信テンプレート・トークスクリプトの設計",
      "見込み客リストの作成と初期アプローチ",
      "対応履歴・進捗の整理とレポート",
    ],
    flow: [
      { step: "01", label: "現状整理", body: "アカウントに届く問い合わせの種類と量、いま誰がどう返しているかを整理します。" },
      { step: "02", label: "ルール設計", body: "返信テンプレート・対応基準・エスカレーションの線引きを決めます。" },
      { step: "03", label: "運用開始", body: "決めたルールに沿って日々の一次対応・初期アプローチを実行します。" },
      { step: "04", label: "改善・共有", body: "対応履歴を共有し、テンプレートと基準を運用しながら磨きます。" },
    ],
    note: {
      heading: "投稿の企画・制作は含みません。",
      body: "担当するのはアカウントの保守運用と、営業につながる一次対応まで。条件交渉や意思決定を伴うものは整理した上でお客様にお渡しします。",
    },
  },
];
