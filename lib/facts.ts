/**
 * サイト全体で使う「事実の数値」の単一ソース。
 * 数字の不一致は信用を毀損するため、実績数値は必ずここを参照する。
 */
export const FACTS = {
  foundedYear: 2022,
  /** 事業歴（年）。表示年に応じて自動更新 */
  yearsInBusiness: new Date().getFullYear() - 2022,
  startedAge: 14,
  currentAge: 18,
  webYearsLabel: "2年超",
  productsCount: 2,
  replyDays: 2,
  pressCount: 1,
  pressName: "東愛知新聞",
  pressDate: "2026.06.11",
  goenUrl: "https://goen-self.vercel.app/",
  myhoodUrl: "https://myhoodbeta.web.app/",
  email: "matsuiminato8@gmail.com",
  location: "愛知県豊田市",
} as const;

/** お問い合わせ欄に出す連絡の条件（見出しと値の組） */
export const CONTACT_TERMS = [
  { label: "返信", value: `${FACTS.replyDays}営業日以内` },
  { label: "連絡方法", value: "メール・フォーム" },
  { label: "対応エリア", value: "全国（オンライン）" },
] as const;
