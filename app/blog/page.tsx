import type { Metadata } from 'next';
import BlogExplorer from '@/components/BlogExplorer';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Guides dommage corporel et indemnisation à Toulouse',
  description:
    "Tous les guides sur le dommage corporel à Toulouse : accident de la route, erreur médicale, accident du travail, agression, expertise et indemnisation.",
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      <section className="section bg-[var(--paper)]">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Bibliothèque juridique</p>
          <h1 className="section-title mt-4 max-w-4xl">
            {articles.length} guides pour comprendre l'indemnisation des victimes à Toulouse.
          </h1>
          <p className="body-large mt-6 max-w-3xl">
            Accident de la route, erreur médicale, accident du travail, agression, chute ou expertise médicale :
            chaque article vise une recherche locale ou une question fréquente de victime.
          </p>
        </div>
      </section>

      <BlogExplorer articles={articles} />
    </>
  );
}
