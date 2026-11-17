export type WorkItem = {
  id: string;
  /** 関わり方（契約形態） */
  kind: "インターン" | "業務委託" | "自主制作";
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
  /** 役割 */
  role: string;
  /** 体制（一人か、チームのどの立場か） */
  team: string;
  /** 使用技術・対応領域 */
  tech: string[];
  /** カード上部に出すサムネイル */
  image?: { src: string; alt: string };
  /** 開発ストーリー（詳細ページ）への導線。無ければ出さない */
  storyHref?: string;
  /** 白背景の文字用（WCAG AA 準拠） */
  textColor: string;
  url?: string;
  /** 説明の最後に足す「デザインで判断したこと」1行。未記入なら表示しない */
  designNote?: string;
};

/**
 * つくってきたもの3件。受託と自主制作を同じ基準で並べる（チームでリーダーを務めた案件を先頭に）。
 * 守秘のある案件は発注元名と担当者名を伏せ、扱った内容のみ記載する。
 */
export const works: WorkItem[] = [
  {
    id: "cleanboss",
    kind: "インターン",
    label: "AI画像解析による作業者装備の自動検知システム",
    name: "クリーン番長",
    period: "2025 – 現在",
    status: "試作から、社内で使われるシステムへ発展",
    what: "インターンとして、クリーンルーム作業者の防塵着用状態を画像解析で自動判定するプロトタイプを、チームのリーダーとして開発しました。検出精度78.5%を確認した試作がきっかけとなり、同じ現場で実際に使われる入退室管理システムへと発展。現在はオフライン環境での動作検証と、来訪者の入室方式の設計を進めています。",
    role: "システム設計・開発",
    team: "チーム（リーダー）",
    tech: ["TypeScript", "React", "Python", "OpenAI API（画像解析）"],
    image: { src: "/works/cleanboss-entry.png", alt: "クリーン番長 デモの入退室画面" },
    storyHref: "/story/cleanboss",
    url: "https://cleanboss-1.vercel.app/demo",
    textColor: "#0F6E92",
    // TODO: designNote にデザインで判断したことを1行で書く
  },
  {
    id: "goen",
    kind: "自主制作",
    label: "イベントレビュー検索プラットフォーム",
    name: "GOEN",
    period: "2024 – 現在",
    status: "リリース・運用中",
    what: "参加前に場の雰囲気とひとり参加のしやすさが分かるよう、レビューを「評価」ではなく「安心の目安」として設計。企画・UI設計・実装・運用まで一人で担当し、現在も改善を続けています。",
    role: "企画・設計・開発・運用",
    team: "個人（一人で担当）",
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    image: { src: "/works/goen-top.png", alt: "GOEN トップページ。イベントを検索する画面" },
    storyHref: "/story/goen",
    textColor: "#B34E00",
    url: "https://goen-self.vercel.app/",
    // TODO: designNote にデザインで判断したことを1行で書く
  },
  {
    id: "myhood",
    kind: "業務委託",
    label: "信用の蓄積が経済圏になるコミュニティSNS",
    name: "MyHood",
    period: "2025 – 現在",
    status: "開発中（ベータ公開）",
    what: "拡散数や「いいね」の多寡を評価軸にしない共有環境として、複数人のチームで開発しているSNSです。企画段階から参加し、現在はチームの一員として開発を継続しています。ベータ版を公開中です。",
    role: "企画・実装",
    team: "チーム（メンバーとして参加）",
    tech: ["Next.js", "React Native", "TypeScript", "Firebase（Hosting まで）"],
    image: { src: "/works/myhood-spaces.png", alt: "MyHood のスペース画面。コミュニティ横断の投稿一覧" },
    storyHref: "/story/myhood",
    textColor: "#0B7A66",
    url: "https://myhoodbeta.web.app/",
    // TODO: designNote にデザインで判断したことを1行で書く
  },
];
