import Link from "next/link";

/**
 * プロフィールの外部リンク（サイト内で共有）。
 * brand = 各SNSの公式カラー（ボタン/アイコンの地色）、ink = 文字色。
 */
export const SOCIALS = [
  {
    label: "Instagram",
    handle: "@m_minato2008",
    href: "https://www.instagram.com/m_minato2008/",
    brand: "linear-gradient(45deg,#F9CE34 0%,#EE2A7B 50%,#6228D7 100%)",
    ink: "#C13584",
    shadow: "rgba(221,42,123,0.3)",
    outline: true,
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Facebook",
    handle: "松井 湊",
    href: "https://www.facebook.com/profile.php?id=100087532402329",
    brand: "#1877F2",
    ink: "#1877F2",
    shadow: "rgba(24,119,242,0.3)",
    icon: <path d="M14.5 22V13h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7H18V2.4A24 24 0 0 0 15.4 2C12.9 2 11.2 3.6 11.2 6.4V9.5H8V13h3.2v9z" />,
  },
  {
    label: "Wantedly",
    handle: "minato_matsui_2008",
    href: "https://www.wantedly.com/id/minato_matsui_2008",
    brand: "#21BDDB",
    ink: "#1596AF",
    shadow: "rgba(33,189,219,0.32)",
    icon: (
      <path d="M2.2 5.3h4.2l3 8.2 1.6-4.4-1.4-3.8h4.2l3 8.2 3-8.2h4.1L18 18.7h-3.9l-1.9-5-1.9 5H6.4z" />
    ),
  },
  {
    label: "GitHub",
    handle: "mi-0808",
    href: "https://github.com/mi-0808",
    brand: "#181717",
    ink: "#181717",
    shadow: "rgba(24,23,23,0.28)",
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    ),
  },
] as const;

/**
 * SNSリンク。各サービスの公式カラーで塗った押しやすいボタン。
 * compact=true は塗りつぶしのピル（プロフィール欄の写真下）。
 */
export default function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={compact ? "flex flex-wrap gap-2.5" : "grid gap-3 sm:grid-cols-2"}>
      {SOCIALS.map((s) => {
        const outline = "outline" in s;
        return (
          <li key={s.label}>
            <Link
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label}（新しいタブで開く）`}
              style={
                compact
                  ? { background: s.brand, boxShadow: `0 8px 18px ${s.shadow}` }
                  : { borderColor: `${s.ink}33`, boxShadow: `0 8px 20px ${s.shadow.replace(/[\d.]+\)$/, "0.14)")}` }
              }
              className={
                compact
                  ? "inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  : "group flex min-h-[56px] items-center gap-3 rounded-xl border bg-white px-4 py-3 transition-transform duration-300 hover:-translate-y-0.5"
              }
            >
              <span
                className={
                  compact
                    ? ""
                    : "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                }
                style={compact ? undefined : { background: s.brand }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width={compact ? 16 : 18}
                  height={compact ? 16 : 18}
                  fill={outline ? "none" : "currentColor"}
                  stroke={outline ? "currentColor" : "none"}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {s.icon}
                </svg>
              </span>
              {compact && <span>{s.label}</span>}
              {!compact && (
                <span className="min-w-0">
                  <span className="block text-sm font-bold" style={{ color: s.ink }}>
                    {s.label}
                  </span>
                  <span className="block truncate text-xs text-muted">{s.handle}</span>
                </span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
