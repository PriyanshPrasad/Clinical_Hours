import type { CSSProperties } from "react";

export function ClinicalHoursLogo({ compact = false, dark = false, className = "" }: { compact?: boolean; dark?: boolean; className?: string }) {
  const ink = dark ? "#F5FFFC" : "#183D52";
  const mark = dark ? "#9FE2CB" : "#2F7DA7";
  const accent = dark ? "#D9F2A5" : "#65B795";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 48 48" className="size-10 shrink-0">
        <rect x="2" y="2" width="44" height="44" rx="14" fill={mark} />
        <path d="M13 27.5c3.2-8.1 8.1-12.1 14.6-12.1 3.1 0 5.5 1.1 7.3 3.2" fill="none" stroke="white" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M12.5 34.5h23" fill="none" stroke={accent} strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="13" cy="27.5" r="3" fill="white" />
        <circle cx="35" cy="18.5" r="3" fill={accent} />
      </svg>
      {!compact && <span style={{ "--logo-ink": ink } as CSSProperties} className="leading-tight"><strong className="block text-[1.05rem] tracking-[-.03em] text-[var(--logo-ink)]">Clinical Hours</strong><small className="block text-[.68rem] font-medium text-[#78919B]">Track. Reflect. Grow.</small></span>}
    </span>
  );
}
