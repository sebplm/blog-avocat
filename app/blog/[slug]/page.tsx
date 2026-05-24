import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import CTABanner from '@/components/CTABanner';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles';
import { SITE } from '@/lib/site';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      publishedTime: article.publishedAt,
      locale: 'fr_FR',
      url: `${SITE.url}/blog/${article.slug}`,
      images: [{ url: SITE.courthouseImage }],
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(params.slug, 3);
  const date = new Date(article.publishedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: SITE.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: `${SITE.url}/blog/${article.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section bg-[var(--paper)]">
        <div className="mx-auto max-w-4xl">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-[var(--gold)]">Accueil</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--gold)]">Guides</Link>
            <span>/</span>
            <span>{article.category}</span>
          </nav>

          <header className="mt-12">
            <span className="badge">{article.category}</span>
            <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">{article.title}</h1>
            <p className="body-large mt-6">{article.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[var(--line)] pt-5 text-sm text-stone-500">
              <span>Publié le {date}</span>
              <span>/</span>
              <span>{article.readTime} min de lecture</span>
              <span>/</span>
              <span>Toulouse et Occitanie</span>
            </div>
          </header>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article className="mx-auto max-w-4xl">
            <div className="prose-article" dangerouslySetInnerHTML={{ __html: article.content }} />

            {related.length > 0 && (
              <section className="mt-16">
                <h2 className="section-title">Articles liés</h2>
                <div className="mt-7 grid gap-6 md:grid-cols-3">
                  {related.map((relatedArticle) => (
                    <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="border border-[var(--line)] bg-[var(--paper)] p-6">
              <p className="eyebrow">Besoin d'aide ?</p>
              <h2 className="mt-4 font-serif text-3xl">Demander un avis avant de signer.</h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                Avant une expertise ou une offre d'assurance, faites analyser votre situation par NA Avocats.
              </p>
              <a href={SITE.firmUrl} target="_blank" rel="noopener" className="btn-primary mt-6 w-full">
                Demander un avis
              </a>
            </div>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5">
        <CTABanner compact />
      </div>
    </>
  );
}
