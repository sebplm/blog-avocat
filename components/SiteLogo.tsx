import { SITE } from '@/lib/site';

type SiteLogoProps = {
  compact?: boolean;
};

export default function SiteLogo({ compact = false }: SiteLogoProps) {
  return (
    <span className="inline-flex items-center gap-3 leading-none">
      <span
        className={
          compact
            ? 'relative grid h-11 w-11 shrink-0 place-items-center border border-[var(--ink)] bg-[var(--cream)]'
            : 'relative grid h-12 w-12 shrink-0 place-items-center border border-[var(--ink)] bg-[var(--cream)]'
        }
        aria-hidden="true"
      >
        <span className="absolute left-2 right-2 top-2 h-0 border-x-[14px] border-b-[9px] border-x-transparent border-b-[var(--ink)]" />
        <span className="absolute left-2 right-2 top-[19px] h-[2px] bg-[var(--gold)]" />
        <span className="absolute bottom-[13px] left-[11px] h-[12px] w-[3px] bg-[var(--ink)]" />
        <span className="absolute bottom-[13px] left-[18px] h-[12px] w-[3px] bg-[var(--ink)]" />
        <span className="absolute bottom-[13px] left-[25px] h-[12px] w-[3px] bg-[var(--ink)]" />
        <span className="absolute bottom-[13px] left-[32px] h-[12px] w-[3px] bg-[var(--ink)]" />
        <span className="absolute bottom-2 left-2 right-2 h-[3px] bg-[var(--ink)]" />
        <span className="absolute bottom-[5px] left-[7px] right-[7px] h-[1px] bg-[var(--gold)]" />
      </span>
      <span>
        <span
          className={
            compact
              ? 'block font-serif text-[25px] leading-[0.95] text-[var(--ink)]'
              : 'block font-serif text-2xl text-[var(--ink)] md:text-3xl'
          }
        >
          {SITE.name}
        </span>
        {!compact && (
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)] md:text-[11px]">
            {SITE.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
