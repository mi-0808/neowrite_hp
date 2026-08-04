export type Product = {
  id: string;
  name: string;
  kana?: string;
  tagline: string;
  description: string;
  icon?: string;
  accentColor: string;
  /** 白背景の文字用（WCAG AA 準拠） */
  textColor: string;
  shadowColor: string;
  url?: string;
  status: "released" | "development" | "coming-soon";
  why?: {
    problem: string;
    body: string[];
  };
  features?: {
    number: string;
    title: string;
    body: string;
  }[];
};

export const products: Product[] = [
  {
    id: "goen",
    name: "GOEN",
    kana: "ごえん",
    tagline: "次のイベント、一緒に探そう。",
    description:
      "雰囲気・ひとり参加しやすさを可視化したクチコミで、安心して選べるイベントクチコミサービス。",
    icon: "/goen_icons.png",
    accentColor: "#FF7718",
    textColor: "#B34E00",
    shadowColor: "rgba(255,107,0,0.22)",
    url: "https://goen-self.vercel.app/",
    status: "released",
    why: {
      problem: "イベントに行きたくても、雰囲気が分からなくて踏み出せない。",
      body: [
        "GOENは、その小さな不安から生まれる若者の孤独と機会損失を減らすために開発しました。",
        "レビューを単なる評価ではなく、次に参加する人への「安心の目安」として設計する。GOENは、テクノロジーで社会問題を解くNEOWRITEの思想を体現するプロダクトです。",
      ],
    },
    features: [
      { number: "01", title: "雰囲気を先に知る", body: "雰囲気タグとレビューで、場の温度感を参加前に想像できるようにする。" },
      { number: "02", title: "ひとり参加の不安を減らす", body: "初参加のハードルを下げる「安心の目安」を、体験者の声から可視化する。" },
      { number: "03", title: "レビューが次の一歩になる", body: "読んで、参加して、書く。小さな循環が、誰かの挑戦をそっと後押しする。" },
      { number: "04", title: "多様な出会いを扱う", body: "交流・ワークショップ・ビジネス・スポーツ・料理など、日常の外側にある機会をひらく。" },
    ],
  },
  {
    id: "myhood",
    name: "MyHood",
    kana: "マイフッド",
    tagline: "80億人の人生を、80億通りの環境で",
    description:
      "注目・承認を追求する既存SNSの負のサイクルを問い直す、コミュニティSNS。身近な人同士・自分自身との時間や感情を、文章・映像・音楽・写真を通じて共有するための表現環境。",
    icon: "/myhood_icons.png",
    accentColor: "#3DD6C8",
    textColor: "#0B7A66",
    shadowColor: "rgba(61,214,200,0.22)",
    url: "https://myhoodbeta.web.app/",
    status: "development",
    why: {
      problem: "既存のSNSは、承認と注目の奪い合いになっている。",
      body: [
        "「いいね」の数や拡散力が評価軸になったとき、人は本当に伝えたいことより、受けるコンテンツを優先し始める。",
        "MyHoodは、そのサイクルから外れた場所をつくるために生まれました。あなたの世界はあなたが作る——80億人それぞれの表現環境を、テクノロジーで実現します。",
      ],
    },
    features: [
      { number: "01", title: "自己表現の軸", body: "文章・映像・音楽・写真など、多様なメディアで自分を表現できる環境を提供する。" },
      { number: "02", title: "身近な人との共有", body: "広く拡散するためではなく、大切な人と感情や時間を共有するためのSNS。" },
      { number: "03", title: "承認から解放", body: "数値的評価に依存しない設計で、純粋な表現と繋がりを取り戻す。" },
      { number: "04", title: "あなただけの環境", body: "80億人それぞれが、自分だけの世界観・コミュニティを持てるプラットフォーム。" },
    ],
  },
];
