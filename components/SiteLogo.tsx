import { SITE } from '@/lib/site';

type SiteLogoProps = {
  compact?: boolean;
};

export default function SiteLogo({ compact = false }: SiteLogoProps) {
  return (
    <span className="inline-flex items-center gap-3 leading-none">
      <span className="relative grid h-12 w-12 place-items-center border border-[var(--ink)] bg-[var(--ink)] text-white">
        <span className="absolute inset-1 border border-[var(--gold)]" />
        <span className="font-serif text-lg tracking-0">AA</span>
      </span>
      <span>
        <span className="block font-serif text-2xl text-[var(--ink)] md:text-3xl">{SITE.name}</span>
        {!compact && (
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)] md:text-[11px]">
            {SITE.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
