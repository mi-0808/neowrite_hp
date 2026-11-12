export type WorkItem = {
  id: string;
  /** 受託か、自分で立ち上げたものか */
  kind: "受託" | "自主制作";
  /** 何をするものかを、固有名詞を使わずに説明したラベル */
  label: string;
  /** 内部識別用のプロジェクト名。サイト上には表示しない */
  name: string;
  /** 着手〜現在（または終了）まで */
  period: string;
  /** 現在の状態 */
  status: string;
  /** 何をしたか。2〜3文で、事実だけ */
  what: string;
  /** 役割・体制 */
  role: string;
  /** 使用技術・対応領域 */
  tech: string[];
  /** カード上部に出すサムネイル */
  image?: { src: string; alt: string };
  /** 開発ストーリー（詳細ページ）への導線。無ければ出さない */
  storyHref?: string;
  accentColor: string;
  /** 白背景の文字用（WCAG AA 準拠） */
  textColor: string;
  url?: string;
  /** 説明の最後に足す「デザインで判断したこと」1行。未記入なら表示しない */
  designNote?: string;
};

/**
 * つくってきたもの3件。受託と自主制作を同じ基準で並べる。
 * 守秘のある案件は発注元名と担当者名を伏せ、扱った内容のみ記載する。
 */
export const works: WorkItem[] = [
  {
    id: "goen",
    kind: "自主制作",
    label: "イベントレビュー検索プラットフォーム",
    name: "GOEN",
    period: "2024 – 現在",
    status: "リリース・運用中",
    what: "参加前に場の雰囲気とひとり参加のしやすさが分かるよう、レビューを「評価」ではなく「安心の目安」として設計。企画・UI設計・実装・運用まで一人で担当し、現在も改善を続けています。",
    role: "企画・設計・開発・運用",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    image: { src: "/works/goen-top.png", alt: "GOEN トップページ。イベントを検索する画面" },
    storyHref: "/story/goen",
    accentColor: "#FF7718",
    textColor: "#B34E00",
    url: "https://goen-self.vercel.app/",
    // TODO: designNote にデザインで判断したことを1行で書く
  },
  {
    id: "myhood",
    kind: "自主制作",
    label: "信用の蓄積が経済圏になるコミュニティSNS",
    name: "MyHood",
    period: "2025 – 現在",
    status: "開発中（ベータ公開）",
    what: "拡散数や「いいね」の多寡を評価軸にしない共有環境として、複数人のチームで開発しているSNSです。企画段階から参加し、現在はチームの一員として開発を継続しています。ベータ版を公開中です。",
    role: "チーム開発に参加（企画・実装）",
    tech: ["Next.js", "TypeScript", "Firebase", "Vercel"],
    image: { src: "/works/myhood-spaces.png", alt: "MyHood のスペース画面。コミュニティ横断の投稿一覧" },
    storyHref: "/story/myhood",
    accentColor: "#10B89A",
    textColor: "#0B7A66",
    url: "https://myhoodbeta.web.app/",
    // TODO: designNote にデザインで判断したことを1行で書く
  },
  {
    id: "cleanboss",
    kind: "受託",
    label: "AI画像解析による作業者装備の自動検知システム",
    name: "クリーン番長",
    period: "2025 – 現在",
    status: "検知システムは検証完了、入退室管理へ展開中",
    what: "クリーンルーム作業者の防塵着用状態を画像解析で自動判定するプロトタイプを開発し、検出精度78.5%を確認。その成果をもとに、現在は同じ現場向けの入退室管理システムへ展開しています。オフライン環境での動作検証と、来訪者の入室方式の設計を進行中です。",
    role: "システム設計・開発",
    tech: ["AI画像解析", "Python", "オフライン動作対応", "入退室管理"],
    image: { src: "/works/cleanboss-entry.png", alt: "クリーン番長 デモの入退室画面" },
    storyHref: "/story/cleanboss",
    url: "https://cleanboss-1.vercel.app/demo",
    accentColor: "#1DA7D8",
    textColor: "#0F6E92",
    // TODO: designNote にデザインで判断したことを1行で書く
  },
];
