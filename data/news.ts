export type NewsItem = {
  id: number;
  date: string;
  category: "メディア掲載" | "お知らせ" | "受賞";
  title: string;
  url: string;
  isExternal: boolean;
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "2026.06.11",
    category: "メディア掲載",
    title: "東愛知新聞「籔内の学生紹介ファイル」に掲載されました",
    url: "https://higashiaichi.jp/news/detail.php?id=27331",
    isExternal: true,
  },
];
