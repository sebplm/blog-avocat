import Link from 'next/link';
import SiteLogo from '@/components/SiteLogo';
import { getAllPillars } from '@/lib/pillars';
import { SITE } from '@/lib/site';

export default function Footer() {
  const pillars = getAllPillars();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr_0.85fr]">
          <div>
            <SiteLogo />
            <p className="mt-4 max-w-md leading-7 text-stone-600">
              Média local d'information juridique pour les victimes de dommages corporels à Toulouse,
              en Haute-Garonne et en Occitanie.
            </p>
            <a href={SITE.firmUrl} target="_blank" rel="noopener" className="btn-primary mt-7">
              Contacter NA Avocats
            </a>
          </div>

          <div>
            <h3 className="eyebrow">Nos spécialités</h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-700">
              {pillars.slice(0, 6).map((pillar) => (
                <li key={pillar.slug}>
                  <Link href={`/${pillar.slug}`} className="hover:text-[var(--gold)]">
                    {pillar.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-700">
              <li><Link href="/blog" className="hover:text-[var(--gold)]">Guides et ressources</Link></li>
              <li><Link href="/contactez-avocat-toulouse" className="hover:text-[var(--gold)]">Contact avocat Toulouse</Link></li>
              <li><a href={SITE.firmUrl} target="_blank" rel="noopener" className="hover:text-[var(--gold)]">Site NA Avocats</a></li>
              <li><a href={`tel:${SITE.phone.replaceAll(' ', '')}`} className="hover:text-[var(--gold)]">{SITE.phone}</a></li>
              <li><Link href="/mentions-legales" className="hover:text-[var(--gold)]">Mentions légales</Link></li>
              <li><Link href="/politique-de-confidentialite" className="hover:text-[var(--gold)]">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--line)] pt-6 text-xs leading-6 text-stone-500">
          <p>
            Ce site est un guide d'information juridique. Il ne constitue pas un conseil juridique personnalisé.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} {SITE.domain}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
