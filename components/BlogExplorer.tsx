'use client';

import { useMemo, useState } from 'react';
import ArticleCard from '@/components/ArticleCard';
import CTABanner from '@/components/CTABanner';
import { Article, CATEGORIES } from '@/lib/articles';

export default function BlogExplorer({ articles }: { articles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = activeCategory === 'Tous' || article.category === activeCategory;
      const haystack = `${article.title} ${article.excerpt} ${article.keywords.join(' ')}`.toLowerCase();
      return matchesCategory && haystack.includes(query.toLowerCase());
    });
  }, [activeCategory, articles, query]);

  return (
    <section className="px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="border border-[var(--line)] bg-[var(--cream)] p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`border px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? 'border-[var(--ink)] bg-[var(--ink)] text-white'
                      : 'border-[var(--line)] bg-transparent text-stone-600 hover:border-[var(--gold)] hover:text-[var(--ink)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher un sujet"
              className="h-11 border border-[var(--line)] bg-white px-4 text-sm outline-none focus:border-[var(--gold)]"
            />
          </div>
        </div>

        <p className="mt-6 text-sm font-semibold text-stone-500">
          {filtered.length} article{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="border border-[var(--line)] p-10 text-center text-stone-500">
            Aucun guide ne correspond à cette recherche.
          </div>
        )}

        <CTABanner />
      </div>
    </section>
  );
}
