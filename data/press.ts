export type PressItem = {
  id: number;
  media: string;
  date: string;
  category: string;
  title: string;
  description: string;
  url: string;
  image: string;
  isExternal: boolean;
};

export const pressItems: PressItem[] = [
  {
    id: 1,
    media: "東愛知新聞",
    date: "2026.06.11",
    category: "インタビュー",
    title: "【連載】籔内の学生紹介ファイル〈20〉大人の中に飛び込み道ひらく 「GOEN」など開発｜ネオライト代表 松井湊さん",
    description: "東三河エリアで地域活性化や新たな価値創造に取り組む学生として取材を受けました。NEOWRITEの活動とGOEN開発の経緯について語っています。",
    url: "https://higashiaichi.jp/news/detail.php?id=27331",
    image: "https://admin.higashiaichi.jp/uploads/20260612-110551-375945679.jpg",
    isExternal: true,
  },
];
