import Link from 'next/link';
import { Article } from '@/lib/articles';

export default function ArticleCard({ article }: { article: Article }) {
  const date = new Date(article.publishedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="article-card group">
      <div className="flex items-center justify-between gap-4">
        <span className="badge">{article.category}</span>
        <span className="text-xs text-stone-500">{article.readTime} min</span>
      </div>
      <h2 className="mt-5 font-serif text-2xl leading-tight text-[var(--ink)]">
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className="mt-4 text-sm leading-7 text-stone-600">{article.excerpt}</p>
      <div className="mt-7 flex items-center justify-between border-t border-[var(--line)] pt-4">
        <span className="text-xs text-stone-500">{date}</span>
        <Link href={`/blog/${article.slug}`} className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--gold)]">
          Lire
        </Link>
      </div>
    </article>
  );
}
