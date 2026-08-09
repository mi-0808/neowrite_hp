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
  /** 自社プロダクトか。false は「開発に関わっている」だけのプロジェクト（/product には出さない） */
  ownProduct?: boolean;
  /** ownProduct が false のときの権利者 */
  owner?: string;
  /** 画面キャプチャ。開発ストーリーとプロダクト詳細で使う */
  gallery?: { src: string; alt: string; caption: string }[];
  /** どうやって作ったか。技術構成と、実際に踏んだ手順 */
  how?: {
    stack: { label: string; items: string[] }[];
    steps?: { number: string; title: string; body: string }[];
    /** リリース後に分かったこと */
    after?: { heading: string; body: string[] };
  };
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
    gallery: [
      { src: "/works/goen-top.png", alt: "GOEN トップページ", caption: "トップ。キーワードとカテゴリの2経路で、まず探すところから始まる。" },
      { src: "/works/goen-events.png", alt: "GOEN イベント一覧ページ", caption: "イベント一覧。ジャンルで絞り込み、ひとり参加しやすさと雰囲気のクチコミから選ぶ。" },
      { src: "/works/goen-bottom.png", alt: "GOEN トップページ下部。参加者向けと主催者向けの導線", caption: "参加者と主催者、それぞれの入口を並べた。書く側にも回ってもらう設計。" },
    ],
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
    how: {
      stack: [
        { label: "フロントエンド", items: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"] },
        { label: "バックエンド", items: ["Supabase", "PostgreSQL", "Row Level Security"] },
        { label: "決済・チケット", items: ["Stripe Connect", "Webhook処理", "QRチケット発行"] },
      ],
      steps: [
        { number: "01", title: "ビジネスコンテストを機に着手した", body: "「第3期東海火おこし」への参加をきっかけに開発を始めました。人が集まる場をどう選んでいるのかを整理するところからのスタートです。" },
        { number: "02", title: "解く範囲を後段に絞った", body: "参加の意思決定を「興味が持てるか」と「一人で行っても大丈夫か」の2段階と捉え、後段の不安だけを解く設計にしました。前段はすでに既存サービスが担っているためです。" },
        { number: "03", title: "星の評価をやめた", body: "主催者が出す情報には主催者のバイアスがかかります。参加者目線の生の声を届けたかったので、定量スコアではなく口コミのテキストを軸に据えました。" },
        { number: "04", title: "3つのロールをデータ層で分けた", body: "一般ユーザー・主催者・管理者で見えるものが異なるため、Supabase の Row Level Security で権限をデータベース側に持たせ、アプリ側の実装ミスが権限漏れにならない構造にしました。" },
        { number: "05", title: "決済とチケットを組んだ", body: "Stripe Connect で主催者への支払いに対応し、成功・失敗・返金の各 Webhook を冪等に処理。チケットは UUID で発行し、使用済みフラグで二重利用を防いでいます。" },
        { number: "06", title: "計測をやり直した", body: "GA4 のイベント設計が曖昧なまま計測を始めてしまい、数値が信用できない状態に。DebugView で送信内容を1件ずつ確認しながら定義を組み直しました。" },
      ],
      after: {
        heading: "リリースして分かったこと",
        body: [
          "主催者にアカウント登録までは進んでもらえるものの、その先の実運用に入る手前で止まることが分かりました。使い始めの手順が本人任せになっていたためで、「はじめ方3ステップ」の資料を用意して導線を埋めました。",
          "扱うイベントの多くが無料開催で、作り込んだ決済機能へのニーズが想定より薄いことも分かりました。作れることと必要とされることは別だという、実際に出してみないと得られない結果です。",
        ],
      },
    },
  },
  {
    id: "myhood",
    ownProduct: false,
    owner: "青海株式会社",
    name: "MyHood",
    kana: "マイフッド",
    tagline: "80億人の人生を、80億通りの環境で",
    description:
      "青海株式会社が開発・運営するコミュニティSNS。身近な人同士・自分自身との時間や感情を、文章・映像・音楽・写真を通じて共有するための表現環境です。NEOWRITEの事業ではなく、私は開発メンバーの一人として実装を担当しています。",
    icon: "/myhood_icons.png",
    accentColor: "#3DD6C8",
    textColor: "#0B7A66",
    shadowColor: "rgba(61,214,200,0.22)",
    url: "https://myhoodbeta.web.app/",
    status: "development",
    gallery: [
      { src: "/works/myhood-spaces.png", alt: "MyHood のスペース画面。コミュニティ横断の投稿一覧", caption: "スペース。コミュニティ横断で「最近動いたもの」を並べ、戻ってくる理由をつくる。" },
    ],
    why: {
      problem: "ユーザー体験を最適化し、顧客のニーズに応える設計から運用まで。",
      body: [
        "ユーザー数の解析まで行ったうえで、体験として最適なアプリ設計を担当しました。",
        "収益化を狙って市場に流すサービスなので、流通額を見越した決済への対応も必要になります。信頼性の高いシステムを構築し、ユーザーが安心して利用できる状態を保ちながら、開発しながらアプリを運用しています。",
      ],
    },
    features: [
      { number: "01", title: "自己表現の軸", body: "文章・映像・音楽・写真など、多様なメディアで自分を表現できる環境を提供する。" },
      { number: "02", title: "身近な人との共有", body: "広く拡散するためではなく、大切な人と感情や時間を共有するためのSNS。" },
      { number: "03", title: "承認から解放", body: "数値的評価に依存しない設計で、純粋な表現と繋がりを取り戻す。" },
      { number: "04", title: "あなただけの環境", body: "80億人それぞれが、自分だけの世界観・コミュニティを持てるプラットフォーム。" },
    ],
    how: {
      stack: [
        { label: "フロントエンド", items: ["Next.js", "TypeScript", "タイムライン／動画タイムラインUI"] },
        { label: "バックエンド", items: ["Firebase", "ユーザー基盤・データ設計"] },
        { label: "チーム開発", items: ["バックログ作成・管理", "既存ユーザーへのヒアリング"] },
      ],
      steps: [
        { number: "01", title: "やることをバックログに落とした", body: "チームで開発するため、決まっていない仕様を洗い出してバックログとして書き起こし、着手できる粒度まで分解しました。" },
        { number: "02", title: "既存ユーザーに話を聞いた", body: "すでに使っている人がいる状態だったので、体験の不満や引っかかりをヒアリングし、「新機能を足す」より「いまの体験をどう更新するか」を優先順位の軸にしました。" },
        { number: "03", title: "100人規模を受け止める基盤を整えた", body: "ベータ版としてまずユーザーが100人集まれることを条件に、ユーザー基盤とデータ構造を整備しました。" },
        { number: "04", title: "主要機能を実装した", body: "チュートリアル、タイムライン、動画タイムラインなどの主要機能を担当。バックエンドとフロントエンドを1〜2か月でほぼ形にしました。" },
        { number: "05", title: "利用状況を数値で見た", body: "ユーザー数と使われ方を解析し、どの画面で離れているかを踏まえて設計を調整しました。感覚ではなく数字を判断材料にしています。" },
        { number: "06", title: "決済と信頼性を前提に組んだ", body: "収益化を狙って市場に出すサービスなので、流通額を見越した決済への対応と、ユーザーが安心して使える信頼性の確保を設計の前提に置いています。" },
      ],
    },
  },
  {
    id: "cleanboss",
    name: "クリーン番長",
    icon: "/cleanboss_icon.png",
    tagline: "見落としを、機械の目で減らす。",
    description:
      "クリーンルーム作業者の防塵着用状態を画像解析で自動判定するシステム。人の目視チェックに依存していた確認工程を、入室前の自動判定に置き換えることを目指しています。",
    accentColor: "#1DA7D8",
    textColor: "#0F6E92",
    shadowColor: "rgba(29,167,216,0.22)",
    url: "https://cleanboss-1.vercel.app/demo",
    status: "development",
    gallery: [
      { src: "/works/cleanboss-entry.png", alt: "クリーン番長 入退室画面", caption: "入退室の起点。現在の入室人数を先に見せ、入室か退室かを選ぶだけの画面にした。" },
      { src: "/works/cleanboss-guest.png", alt: "クリーン番長 本人選択画面のゲストタブ", caption: "本人選択。名簿にない来訪者は名前を聞かず「ゲスト1」で記録し、後から名簿で直せる。" },
      { src: "/works/cleanboss-members.png", alt: "クリーン番長 社員名簿の管理画面", caption: "社員名簿。CSV一括取り込みとQR一括印刷まで用意し、現場の登録作業を減らす。" },
    ],
    why: {
      problem: "着用の確認は人の目に頼っていて、見落としが起きる。",
      body: [
        "防塵着の着用状態は、入室のたびに人が目で確かめるしかありませんでした。確認する人にも負荷がかかり、忙しい時間帯ほど見落としのリスクが上がります。",
        "画像解析で判定を自動化すれば、確認の質を人の集中力から切り離せる。プロトタイプで検出精度78.5%を確認し、現在は同じ現場向けの入退室管理へ展開しています。",
      ],
    },
    features: [
      { number: "01", title: "着用状態を自動判定", body: "カメラ画像から防塵着の着用状態を解析し、入室可否の判断材料を返す。" },
      { number: "02", title: "精度を数値で検証", body: "プロトタイプ段階で検出精度78.5%を計測し、改善点を特定した。" },
      { number: "03", title: "オフラインでも動く", body: "ネットワークに依存しない動作を前提に、現場環境での検証を進行中。" },
      { number: "04", title: "入退室管理へ展開", body: "検知の仕組みを土台に、来訪者を含む入退室の管理システムを開発中。" },
    ],
    how: {
      stack: [
        { label: "画像解析", items: ["Python", "画像分類モデル", "学習用データセットの自作"] },
        { label: "アプリケーション", items: ["Next.js", "TypeScript", "Vercel"] },
        { label: "動作環境", items: ["オフライン動作前提の構成", "現場端末での検証"] },
      ],
      steps: [
        { number: "01", title: "現場の確認工程を分解した", body: "入室前に人が何を見て可否を判断しているかを聞き取り、機械が判定できる形（着用/非着用の分類）に落とし込みました。" },
        { number: "02", title: "データを自分で集めた", body: "既製のデータセットでは現場の着用状態を再現できないため、判定対象の画像を集めて学習用データを整備しました。" },
        { number: "03", title: "精度を測りながら回した", body: "プロトタイプで検出精度78.5%を計測。誤判定の傾向を分類し、どの条件で外すのかを特定して改善点を絞りました。" },
        { number: "04", title: "現場の制約に合わせ直した", body: "ネットワークが使えない前提が判明したため、オフラインで完結する構成に組み替えて検証中です。" },
      ],
    },
  },
];
