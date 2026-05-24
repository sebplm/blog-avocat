import { CTA_URL, SITE } from '@/lib/site';

export default function CTABanner({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`cta-panel my-12 ${compact ? 'px-6 py-8' : ''}`}>
      <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-center">
        <div>
          <p className="eyebrow text-white/60">Premier rendez-vous</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-white md:text-4xl">
            Faites analyser votre dossier avant l'expertise ou l'offre d'assurance.
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-stone-300">
            {SITE.recommendedFirm} accompagne les victimes d'accidents corporels à Toulouse et défend
            une indemnisation complète face aux assurances.
          </p>
        </div>
        <div className="border border-white/20 p-5">
          <p className="text-sm uppercase tracking-[0.16em] text-stone-300">Analyse de dossier</p>
          <p className="mt-2 font-serif text-4xl text-white">Gratuite</p>
          <a href={CTA_URL} target="_blank" rel="noopener" className="mt-6 inline-flex w-full justify-center bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">
            Contacter le cabinet
          </a>
        </div>
      </div>
    </section>
  );
}
