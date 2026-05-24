import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import CTABanner from '@/components/CTABanner';
import { getArticlesByPillar } from '@/lib/articles';
import { getAllPillars, getPillarBySlug } from '@/lib/pillars';
import { SITE } from '@/lib/site';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPillars().map((pillar) => ({ slug: pillar.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const pillar = getPillarBySlug(params.slug);
  if (!pillar) return {};

  return {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
    alternates: { canonical: `/${pillar.slug}` },
    openGraph: {
      title: pillar.metaTitle,
      description: pillar.metaDescription,
      url: `${SITE.url}/${pillar.slug}`,
      images: [{ url: pillar.image }],
      locale: 'fr_FR',
      type: 'article',
    },
  };
}

export default function PillarPage({ params }: Props) {
  const pillar = getPillarBySlug(params.slug);
  if (!pillar) notFound();

  const articles = getArticlesByPillar(pillar.slug, 6);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pillar.title,
    description: pillar.metaDescription,
    url: `${SITE.url}/${pillar.slug}`,
    inLanguage: 'fr-FR',
    about: pillar.category,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section bg-[var(--cream)]">
        <div className="section-inner grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
              <Link href="/" className="hover:text-[var(--gold)]">Accueil</Link>
              <span>/</span>
              <span>{pillar.eyebrow}</span>
            </nav>
            <p className="eyebrow mt-12">{pillar.eyebrow}</p>
            <h1 className="display-title mt-5">{pillar.title}</h1>
            <p className="body-large mt-7 max-w-3xl">{pillar.hero}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contactez-meilleur-avocat-toulouse" className="btn-primary">
                Contactez-nous
              </Link>
              <Link href="/blog" className="btn-secondary">
                Articles liés
              </Link>
            </div>
          </div>
          <div className="photo-card">
            <img src={pillar.image} alt={pillar.title} className="h-[420px] w-full object-cover md:h-[540px]" />
          </div>
        </div>
      </section>

      <section className="section bg-[var(--paper)]">
        <div className="section-inner grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="eyebrow">Guide complet</p>
            <h2 className="section-title mt-4">{pillar.intro}</h2>
          </div>
          <div className="grid gap-0 border-t border-[var(--line)]">
            {pillar.sections.map((section) => (
              <div key={section.title} className="border-b border-[var(--line)] py-8">
                <h3 className="font-serif text-3xl">{section.title}</h3>
                <p className="mt-4 leading-8 text-stone-600">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--cream)]">
        <div className="section-inner">
          <p className="eyebrow">Points à vérifier</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillar.proofPoints.map((point) => (
              <div key={point} className="border border-[var(--line)] p-6">
                <p className="leading-7 text-stone-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {articles.length > 0 && (
        <section className="section bg-[var(--paper)]">
          <div className="section-inner">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Guides liés</p>
                <h2 className="section-title mt-4">Articles pour approfondir</h2>
              </div>
              <Link href="/blog" className="btn-secondary">
                Tous les guides
              </Link>
            </div>
            <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="mx-auto max-w-7xl px-5">
        <CTABanner />
      </div>
    </>
  );
}
