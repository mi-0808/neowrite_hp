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

/** 料金は当面サイトに出さず、相談時にお伝えする（下の2つは非表示中の目安） */
export const PRICE_CONSULT = "料金は、ご相談のうえでお伝えします。";

export const PRICE_CONSULT_NOTE =
  "やりたいことと稼働の目安を伺ってから、お見積りをお出しします。まずは気軽にご相談ください。";

export const PRICE_FROM = "月額15万円〜";

export const PRICE_NOTE =
  "インターンを1人雇う予算で、要件定義からデザイン・試作まで。稼働の上限時間は契約時に決めます。";

export const CONTRACT_NOTE =
  "契約形態：準委任契約（時間制）。作業内容と時間は毎月ご報告します。";

/** サービスが扱う4領域 */
export const SERVICE_AREAS = [
  {
    number: "01",
    title: "ビジネスデザイン",
    body: "アプリマーケティングとネットワーク効果で、広まり使われ続ける仕組みを設計する",
    accentColor: "#10B89A",
    textColor: "#0B7A66",
  },
  {
    number: "02",
    title: "プロダクトデザイン",
    body: "論点から「何を作るか・何を作らないか」を決める",
    accentColor: "#1DA7D8",
    textColor: "#0F6E92",
  },
  {
    number: "03",
    title: "アプリデザイン",
    body: "画面構成と導線を設計し、試作品まで作る",
    accentColor: "#0E6F78",
    textColor: "#0E6F78",
  },
  {
    number: "04",
    title: "UIデザイン",
    body: "アクセシビリティに配慮した見た目と操作感を作る",
    accentColor: "#FF7718",
    textColor: "#B34E00",
  },
] as const;

/** 4領域カードの下に置く考え方 */
export const SERVICE_PHILOSOPHY =
  "機能を足す前に、論点を絞る。作れるものを全部作ると、プロダクトは誰のものでもなくなります。まず「いま確かめるべき問いは何か」を決め、そこに必要な設計だけを残す。足し算は、その問いに答えが出てからで間に合います。";

/** 役割分担。読み手（起業家）を「あなた」、NEOWRITE を「私」と呼ぶ */
export const ROLES = [
  {
    side: "あなた",
    who: "起業家の方",
    items: [
      "ユーザーヒアリング",
      "課題と仮説の設定",
      "機能の優先順位の最終決定",
      "現場での実証",
      "公開の判断",
    ],
  },
  {
    side: "私",
    who: "NEOWRITE",
    items: [
      "ヒアリングの問い設計と整理",
      "論点の絞り込み",
      "要件定義",
      "4領域のデザイン",
      "試作品の実装（コードと資料は毎回お渡し）",
    ],
  },
] as const;

/** 進め方（3〜6を繰り返す） */
export const FLOW_STEPS = [
  { number: "01", title: "ご相談", body: "フォームまたはメールでご連絡ください。「まだ相談レベル」で大丈夫です。", badge: `${FACTS.replyDays}営業日以内に返信` },
  { number: "02", title: "論点の整理", body: "起業家のヒアリング結果をもとに、いま確かめるべき問いを一緒に絞り込みます。", badge: "ヒアリング結果をもとに" },
  { number: "03", title: "要件定義", body: "絞った論点から、何を作るか・何を作らないかを決めて文書に落とします。", badge: "作らないものも決める" },
  { number: "04", title: "デザイン", body: "ビジネス・プロダクト・アプリ・UIの4領域を、同じ論点の上で設計します。", badge: "4領域を一貫して" },
  { number: "05", title: "試作", body: "実際に触れる試作品を実装します。コードと資料は毎回お渡しします。", badge: "コードと資料をお渡し" },
  { number: "06", title: "実証のフィードバックを受けて改善", body: "現場での実証結果を受けて論点を引き直し、3〜6を繰り返します。", badge: "3〜6を繰り返す" },
] as const;
