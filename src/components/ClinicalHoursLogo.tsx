import type { CSSProperties } from "react";

export function ClinicalHoursLogo({ compact = false, dark = false, className = "" }: { compact?: boolean; dark?: boolean; className?: string }) {
  const ink = dark ? "#F5FFFC" : "#183D52";
  const building = dark ? "#F5FFFC" : "#2F7DA7";
  const path = dark ? "#A9E0C9" : "#65B795";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 48 48" className="size-10 shrink-0">
        <rect x="2" y="2" width="44" height="44" rx="14" fill={dark ? "#245C78" : "#E3F2F0"} />
        <path d="M14 32V15.5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2V32" fill={building} />
        <path d="M19 32V25h10v7" fill={dark ? "#245C78" : "#E3F2F0"} />
        <path d="M22 17.5h4v4h4v4h-4v4h-4v-4h-4v-4h4z" fill={dark ? "#245C78" : "#E3F2F0"} />
        <path d="M8 42c4.3-4.6 8.3-6.9 12.1-6.9 3.2 0 5.8 1.2 8 3.5 2.1 2.2 4 3.3 5.7 3.3 1.8 0 3.2-.7 4.2-2" fill="none" stroke={path} strokeWidth="3" strokeLinecap="round" />
        <circle cx="8" cy="42" r="1.8" fill={path} />
      </svg>
      {!compact && <span style={{ "--logo-ink": ink } as CSSProperties} className="leading-tight"><strong className="block text-[1.05rem] tracking-[-.03em] text-[var(--logo-ink)]">ClinicalHours</strong><small className="block text-[.68rem] font-medium text-[#78919B]">Track. Reflect. Grow.</small></span>}
    </span>
  );
}
