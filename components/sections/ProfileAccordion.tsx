"use client";

import { useState } from "react";

const career = [
  { year: "2022", age: "14歳", events: ["事業活動を開始。SNS運用・コンテンツ制作に取り組む"] },
  { year: "2023", age: "15歳", events: ["ウェブ制作・ライティングの受注（2年超）", "NEOWRITEを開業（豊田税務署）"] },
  { year: "2024", age: "16歳", events: ["株式会社CCP（地域クリエイティブプロジェクト）marche_portal インスタグラム運用（東海・関西・関東・中国・北陸）担当", "イベントレビューサービス「GOEN」企画・開発"] },
  { year: "2025", age: "17歳", events: ["中部シイアイシイ研究所 インターン（リーダー・AIシステム開発）", "GOEN をリリース・運用開始"] },
  { year: "2026", age: "18歳", events: ["東愛知新聞「籔内の学生紹介ファイル」に掲載（2026.06.11）", "青海株式会社 インターン（ウェブアプリ開発）"] },
];

const skills = [
  { category: "フロントエンド", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "バックエンド", items: ["Python", "Supabase", "Firebase", "PostgreSQL", "REST API"] },
  { category: "インフラ", items: ["Vercel", "GitHub"] },
  { category: "SNS・マーケティング", items: ["Instagram 運用設計", "コンテンツ設計", "トーン・世界観設計"] },
];

function AccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium text-ink">{title}</span>
        <span className="ml-4 flex-shrink-0 text-neo-teal transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          +
        </span>
      </button>
      {open && <div className="pb-6">{children}</div>}
    </div>
  );
}

export default function ProfileAccordion() {
  return (
    <div className="mt-10">
      <AccordionItem title="経歴">
        <div className="space-y-0">
          {career.map((c) => (
            <div key={c.year} className="grid gap-3 border-t border-line/60 py-4 md:grid-cols-[100px_1fr]">
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-medium text-ink">{c.year}</span>
                <span className="text-[11px] text-muted">{c.age}</span>
              </div>
              <ul className="space-y-1.5">
                {c.events.map((ev) => (
                  <li key={ev} className="flex gap-3 text-sm leading-7 text-muted">
                    <span className="flex h-[1.75rem] w-1.5 flex-shrink-0 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-neo-blue" />
                    </span>
                    {ev}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AccordionItem>

      <AccordionItem title="スキル">
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.category} className="rounded-md border border-line bg-white p-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neo-blue">{s.category}</p>
              <ul className="mt-3 space-y-1">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2 text-xs text-muted">
                    <span className="text-neo-green">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AccordionItem>
    </div>
  );
}
