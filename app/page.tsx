import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import CTABanner from '@/components/CTABanner';
import { getAllArticles } from '@/lib/articles';
import { getAllPillars } from '@/lib/pillars';
import { SITE } from '@/lib/site';

const specialties = [
  ['Accident de la route', 'Voiture, moto, passager, piéton, cycliste.', '/avocat-accident-route-toulouse'],
  ['Accidents médicaux', 'Faute médicale, infection nosocomiale, CCI.', '/avocat-erreur-medicale-toulouse'],
  ['Accidents de la vie', 'Chute, sport, brûlure, garantie GAV.', '/avocat-accident-vie-toulouse'],
  ['Agression', 'CIVI, FGTI, préjudice moral et corporel.', '/avocat-agression-toulouse'],
];

export default function HomePage() {
  const articles = getAllArticles();
  const pillars = getAllPillars();

  return (
    <>
      <section className="section bg-[var(--cream)] pt-12 md:pt-20">
        <div className="section-inner grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="eyebrow">Cabinet recommandé en dommage corporel</p>
            <h1 className="display-title mt-5">
              Avocat dommage corporel à Toulouse.
            </h1>
            <p className="body-large mt-7 max-w-2xl">
              Le guide local pour aider les victimes d'accidents à comprendre leurs droits,
              préparer leur indemnisation et contacter un cabinet spécialisé.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contactez-avocat-toulouse" className="btn-primary">
                Contactez-nous
              </Link>
              <Link href="/blog" className="btn-secondary">
                Voir les guides
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {specialties.map(([title, description, href]) => (
              <Link key={title} href={href} className="border border-[var(--line)] bg-[var(--paper)] p-6 transition hover:border-[var(--gold)] hover:bg-white">
                <h2 className="font-serif text-2xl">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="section-inner">
          <div className="photo-card">
            <img
              src={SITE.heroImage}
              alt="Livres de droit et ambiance de cabinet d'avocat"
              className="h-[360px] w-full object-cover md:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section className="section bg-[var(--cream)]">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">Cabinet expert</p>
            <h2 className="section-title mt-4">Défendre les victimes face aux assurances.</h2>
          </div>
          <div>
            <p className="body-large">
              Ce site n'est pas une vitrine classique. Il sert de guide de référence pour les victimes
              à Toulouse et en Occitanie, puis oriente les dossiers sérieux vers NA Avocats.
            </p>
            <p className="body-large mt-5">
              Accident de la route, erreur médicale, agression, accident du travail ou accident de la vie :
              chaque parcours doit être documenté, préparé et chiffré avec méthode.
            </p>
            <a href={SITE.firmUrl} target="_blank" rel="noopener" className="btn-primary mt-8">
              Découvrir NA Avocats
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--paper)]">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="eyebrow">Nos spécialités</p>
            <h2 className="section-title mt-4">Une ressource structurée par situation d'accident.</h2>
          </div>
          <div className="mt-12 border-t border-[var(--line)]">
            {pillars.map((pillar, index) => (
              <Link
                key={pillar.slug}
                href={`/${pillar.slug}`}
                className="grid gap-4 border-b border-[var(--line)] py-7 transition hover:bg-white/55 md:grid-cols-[80px_0.6fr_1fr_140px] md:items-center"
              >
                <span className="font-serif text-3xl text-[var(--gold)]">{String(index + 1).padStart(2, '0')}</span>
                <span className="font-serif text-2xl text-[var(--ink)]">{pillar.title}</span>
                <span className="leading-7 text-stone-600">{pillar.hero}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">Lire</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--cream)]">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <div className="photo-card">
            <img
              src={SITE.officeImage}
              alt="Bureau d'avocats et dossier de dommage corporel"
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Accompagnement</p>
            <h2 className="section-title mt-4">Un premier rendez-vous pour cadrer la stratégie.</h2>
            <p className="body-large mt-6">
              La victime doit comprendre ce qu'elle peut réclamer avant l'expertise médicale,
              avant une transaction, et avant de répondre seule à l'assureur.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Expertise médicale', 'Offre d’assurance', 'Préjudice professionnel', 'Aide humaine'].map((item) => (
                <div key={item} className="border border-[var(--line)] p-5">
                  <p className="font-serif text-2xl">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--paper)]">
        <div className="section-inner">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Guides et ressources</p>
              <h2 className="section-title mt-4">{articles.length} articles pour comprendre vos droits.</h2>
            </div>
            <Link href="/blog" className="btn-secondary">
              Tous les guides
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 6).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--cream)]">
        <div className="section-inner">
          <CTABanner />
        </div>
      </section>
    </>
  );
}
