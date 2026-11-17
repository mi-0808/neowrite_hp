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
  "起業家が集めた悩みと仮説から論点を絞り、ビジネス・プロダクト・アプリ・UIまで一貫してデザインします。";

/** サービス概要（ヒーロー直後の「できること」） */
export const SERVICE_HEADING = "できること";

/** 誰に向けたものか（見出しの上に小さく出す） */
export const SERVICE_AUDIENCE = "エンジニアインターンを探している企業へ";

export const SERVICE_PITCH = "AI駆動開発で、動くアプリを作ります。";

/** 作れるもの。画像は実際に作ったものの画面 */
export const BUILD_ITEMS = [
  {
    title: "Webアプリ",
    body: "企画から公開・運用まで",
    image: { src: "/works/goen-top.png", alt: "GOEN のトップページ。イベントを探す画面" },
  },
  {
    title: "スマホアプリ",
    body: "Next.js / React Native",
    image: { src: "/works/myhood-wide.png", alt: "MyHood のスマホ画面。コミュニティの一覧" },
  },
  {
    title: "AIを組み込んだ業務システム",
    body: "OpenAI API を使った画像解析など",
    image: { src: "/works/cleanboss-guest.png", alt: "クリーン番長の入退室画面。入室する人を選ぶ" },
  },
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
