import { FACTS } from "@/lib/facts";

/**
 * 提供サービスの単一ソース。
 * 文言と金額の差し替えはこのファイルだけで完結させる。
 */

export const SERVICE_NAME = "100年デザイン";

/** ヒーロー見出しの改行位置ごとの行。キャッチコピーは従来のものを使う */
export const TAGLINE_LINES = ["次世代の挑戦を", "テクノロジーで", "形にする。"];

export const TAGLINE = TAGLINE_LINES.join("");

export const SUB_COPY =
  "いまある企画やアイデアを、実際に使えるアプリにします。設計から開発・公開まで、一人で担当します。";

/** サービス概要（ヒーロー直後の「できること」） */
export const SERVICE_HEADING = "できること";

/** 誰に向けたものか（見出しの上に小さく出す） */
export const SERVICE_AUDIENCE = "エンジニアインターンを探している企業へ";

export const SERVICE_PITCH = "AI駆動開発で、動くアプリを作ります。";

/** こんな相談ができます。見出しは一目で分かる短い言葉、本文はお客さん側の言葉 */
export const CONSULT_CASES = [
  { icon: "idea", title: "アイデアから", text: "アイデアはあるけれど、何から作ればいいか分からない" },
  { icon: "present", title: "まず試作", text: "まず試作品を作って、社内やお客さんに見せたい" },
  { icon: "fix", title: "今あるものを改善", text: "今あるアプリやサイトに、機能を足したい・直したい" },
  { icon: "ai", title: "AIで手間を減らす", text: "AIを使って、毎日の手作業を減らしたい" },
] as const;

/** 対応範囲。どこからどこまでやるか、各段階でお渡しするもの */
export const SCOPE_STEPS = [
  {
    number: "01",
    icon: "plan",
    title: "企画の整理",
    body: "作りたいもの、使う人、最初に必要な機能を一緒に整理します。",
    deliverable: "機能の一覧と優先順位",
  },
  {
    number: "02",
    icon: "design",
    title: "設計",
    body: "画面の流れと、保存するデータの形を決めます。",
    deliverable: "画面の設計図",
  },
  {
    number: "03",
    icon: "code",
    title: "開発",
    body: "AI駆動開発で、実際に動くアプリを作ります。",
    deliverable: "動くアプリとソースコード",
  },
  {
    number: "04",
    icon: "launch",
    title: "公開",
    body: "サーバーやドメインを設定し、使える状態にします。",
    deliverable: "公開されたアプリと管理画面",
  },
  {
    number: "05",
    icon: "improve",
    title: "改善",
    body: "使われ方を見ながら、修正や機能の追加を続けます。",
    deliverable: "改善の記録と資料",
  },
] as const;

/** 対応範囲の補足 */
export const SCOPE_NOTE = "途中の段階だけのご相談（設計だけ、今あるアプリの改善だけ など）もお受けします。";

/**
 * 作れるもの。画像は実際に作ったものの画面。
 * トップでは title・body・image だけ、サービスページでは details と example も出す
 */
export const BUILD_ITEMS = [
  {
    id: "web",
    title: "Webアプリ",
    body: "企画から公開・運用まで",
    image: { src: "/works/goen-hero.png", alt: "GOEN のトップページ。今週この街で始まるイベントを探す画面" },
    details: [
      "検証のための試作品（MVP）づくり",
      "会員登録・ログイン、データベース、管理画面",
      "公開作業と、使われ方を見ながらの改善",
    ],
    ideas: ["イベントや施設の予約サイト", "クチコミ・レビューを集めるサイト", "会員向けのマイページと管理画面"],
    example: {
      name: "GOEN",
      text: "企画から設計・開発・運用まで、一人で担当",
      href: "/story/goen",
      url: FACTS.goenUrl,
    },
  },
  {
    id: "mobile",
    title: "スマホアプリ",
    body: "Next.js / React Native",
    image: { src: "/works/myhood-wide.png", alt: "MyHood のスマホ画面。コミュニティの一覧" },
    details: [
      "スマホで使いやすい画面の設計と実装",
      "Next.js でのWebアプリ、React Native でのアプリ開発",
      "Firebase を使ったデータ管理と公開",
    ],
    ideas: ["コミュニティ・SNSアプリ", "日々の記録や日記をつけるアプリ", "スマホで完結する申し込み・受付"],
    example: {
      name: "MyHood",
      text: "業務委託として、チーム開発に参加",
      href: "/story/myhood",
      url: FACTS.myhoodUrl,
    },
  },
  {
    id: "ai",
    title: "AIを組み込んだ業務システム",
    body: "OpenAI API を使った画像解析など",
    image: { src: "/works/cleanboss-guest.png", alt: "クリーン番長の入退室画面。入室する人を選ぶ" },
    details: [
      "OpenAI API を使った画像解析などの機能",
      "現場で実際に使う業務システムへの組み込み",
      "オフライン環境での動作確認",
    ],
    example: {
      name: "クリーン番長",
      text: "インターンでチームのリーダーとして試作を開発し、社内で使われるシステムへ",
      href: "/story/cleanboss",
      url: "https://cleanboss-1.vercel.app/demo",
    },
    ideas: [
      "写真で点検・検品するシステム",
      "書類や画像から文字を読み取り、入力の手間を減らす仕組み",
      "問い合わせ内容をAIで分類し、返信の下書きを作る仕組み",
    ],
  },
] as const;

/** 関わり方 */
export const ENGAGEMENTS = [
  { title: "インターン", body: "チームの一員として入り、開発を担当します。" },
  { title: "業務委託", body: "作りたいものを決めて、開発をお受けします。" },
] as const;

/** 使っている技術 */
export const TECH_STACK = [
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "Python",
  "Supabase",
  "Firebase",
  "OpenAI API",
  "Vercel",
] as const;

/** 進め方（3〜6を繰り返す） */
export const FLOW_STEPS = [
  { number: "01", title: "ご相談", body: "フォームまたはメールでご連絡ください。「まだ相談レベル」で大丈夫です。", badge: `${FACTS.replyDays}営業日以内に返信` },
  { number: "02", title: "論点の整理", body: "起業家のヒアリング結果をもとに、いま確かめるべき問いを一緒に絞り込みます。", badge: "ヒアリング結果をもとに" },
  { number: "03", title: "要件定義", body: "絞った論点から、何を作るか・何を作らないかを決めて文書に落とします。", badge: "作らないものも決める" },
  { number: "04", title: "デザイン", body: "ビジネス・プロダクト・アプリ・UIを、同じ論点の上で設計します。", badge: "論点から一貫して" },
  { number: "05", title: "試作", body: "実際に触れる試作品を実装します。コードと資料は毎回お渡しします。", badge: "コードと資料をお渡し" },
  { number: "06", title: "実証のフィードバックを受けて改善", body: "現場での実証結果を受けて論点を引き直し、3〜6を繰り返します。", badge: "3〜6を繰り返す" },
] as const;
