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
    tagline: "事業になるアイデアを、動くプロダクトにする。",
    catchCopy: "アイデアを形にして、検証する。",
    problems: ["「アイデアを形にして検証したい」", "「新規事業のプロダクトを立ち上げたい」"],
    tech: ["Next.js", "TypeScript", "React", "Python", "Supabase", "PostgreSQL"],
    description:
      "事業化を目指すビジネスアイデアを、実際に使えるアプリ・システムとして設計・開発します。まず検証できる最小の形をつくり、ユーザーの反応を見ながら育てるところまでを一緒に進めます。",
    accentColor: "#10B89A",
    textColor: "#0B7A66",
    points: ["アイデアを検証したい", "新規事業を立ち上げたい", "小さく出して反応を見たい"],
    capabilities: [
      "新規事業・新サービスのプロダクト設計",
      "検証用プロトタイプ（MVP）の開発",
      "Webアプリケーション・モバイル対応の実装",
      "AI・外部APIを組み込んだ機能開発",
      "リリース後の改善と機能追加",
    ],
    flow: [
      { step: "01", label: "アイデアを整理", body: "誰のどんな課題を解くのか、何が確かめられれば前に進めるのかを一緒に言語化します。" },
      { step: "02", label: "検証する形を決める", body: "全部つくらず、仮説を確かめるのに必要な最小の機能に絞って設計します。" },
      { step: "03", label: "開発・リリース", body: "Next.js / Python / Supabase などで実装し、実際に使える状態まで持っていきます。" },
      { step: "04", label: "反応を見て育てる", body: "使われ方を見ながら、次に何をつくるかを判断して改善を続けます。" },
    ],
    note: {
      heading: "業務効率化ツールや組み込みシステムは対象外です。",
      body: "扱うのは、事業として世に出すことを前提としたアプリ・システムの企画と開発です。社内の業務システムや機器向けの組み込み開発はお受けしていません。",
    },
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
