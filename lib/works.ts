export type WorkItem = {
  id: string;
  /** 相手先（実名を第一要素に置く） */
  client: string;
  /** 何をしたか */
  what: string;
  /** 役割・体制 */
  role: string;
  /** 使用技術・領域 */
  tech: string[];
  accentColor: string;
  /** 白背景の文字用（WCAG AA 準拠） */
  textColor: string;
  category: string;
};

export const works: WorkItem[] = [
  {
    id: "media-support",
    client: "地域メディア運営企業（社名非公開）",
    what: "複数アカウントに届く問い合わせDMの一次対応と、投稿まわりの事務オペレーションを担当。テンプレート整備と対応履歴の整理まで。",
    role: "DM一次対応・事務オペレーション",
    tech: ["DM一次対応", "テンプレート設計", "対応履歴の整理"],
    accentColor: "#FF7718",
    textColor: "#B34E00",
    category: "オンライン営業サポート",
  },
  {
    id: "chubu-cic",
    client: "中部シイアイシイ研究所",
    what: "インターンとしてAIシステム開発に参画。チームのリーダーを務めた。",
    role: "リーダー / AIシステム開発",
    tech: ["AIシステム開発", "チームリード"],
    accentColor: "#10B89A",
    textColor: "#0B7A66",
    category: "システム開発",
  },
  {
    id: "oumi",
    client: "青海株式会社",
    what: "インターンとしてWebアプリケーション開発を担当。",
    role: "Webアプリ開発",
    tech: ["Webアプリケーション開発"],
    accentColor: "#1DA7D8",
    textColor: "#0F6E92",
    category: "システム開発",
  },
  {
    id: "web-writing",
    client: "Web制作・ライティング受託",
    what: "企業・個人のWebサイト制作とライティングを継続受注。受注歴は2年を超え、現在も継続中。",
    role: "設計・制作・運用",
    tech: ["Next.js", "Tailwind CSS", "ライティング"],
    accentColor: "#0E6F78",
    textColor: "#0E6F78",
    category: "Web制作",
  },
];
