'use client';

import { useMemo, useState } from 'react';
import { LawyerListing, lawyerNeeds } from '@/lib/lawyers';

export default function LawyerFinder({ lawyers }: { lawyers: LawyerListing[] }) {
  const [activeNeed, setActiveNeed] = useState('Tous');

  const filtered = useMemo(() => {
    if (activeNeed === 'Tous') return lawyers;
    return lawyers.filter((lawyer) => lawyer.tags.includes(activeNeed));
  }, [activeNeed, lawyers]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {lawyerNeeds.map((need) => (
          <button
            key={need}
            onClick={() => setActiveNeed(need)}
            className={`border px-4 py-2 text-sm font-semibold transition ${
              activeNeed === need
                ? 'border-[var(--ink)] bg-[var(--ink)] text-white'
                : 'border-[var(--line)] text-stone-600 hover:border-[var(--gold)] hover:text-[var(--ink)]'
            }`}
          >
            {need}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm font-semibold text-stone-500">
        {filtered.length} avocat{filtered.length > 1 ? 's' : ''} identifié{filtered.length > 1 ? 's' : ''}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filtered.map((lawyer) => (
          <article
            key={`${lawyer.name}-${lawyer.website}`}
            className={`border p-6 ${
              lawyer.highlighted
                ? 'border-[var(--ink)] bg-[var(--ink)] text-white'
                : 'border-[var(--line)] bg-[var(--cream)]'
            }`}
          >
            {lawyer.highlighted && (
              <span className="inline-flex bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)]">
                Cabinet recommandé
              </span>
            )}
            <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className={`font-serif text-3xl ${lawyer.highlighted ? 'text-white' : 'text-[var(--ink)]'}`}>
                  {lawyer.firm || lawyer.name}
                </h2>
                {lawyer.firm && (
                  <p className={`mt-1 text-sm ${lawyer.highlighted ? 'text-stone-300' : 'text-stone-500'}`}>
                    {lawyer.name}
                  </p>
                )}
              </div>
              <p className={`text-sm font-semibold ${lawyer.highlighted ? 'text-stone-300' : 'text-stone-500'}`}>
                {lawyer.city}
              </p>
            </div>

            <p className={`mt-5 leading-8 ${lawyer.highlighted ? 'text-stone-200' : 'text-stone-600'}`}>
              {lawyer.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {lawyer.tags.map((tag) => (
                <span
                  key={tag}
                  className={`border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                    lawyer.highlighted
                      ? 'border-white/25 text-stone-200'
                      : 'border-[var(--line)] text-stone-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className={`mt-6 border-t pt-5 text-sm ${lawyer.highlighted ? 'border-white/20' : 'border-[var(--line)]'}`}>
              {lawyer.address && <p>{lawyer.address}</p>}
              {lawyer.phone && <p className="mt-1">{lawyer.phone}</p>}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={lawyer.website}
                  target="_blank"
                  rel="noopener"
                  className={lawyer.highlighted ? 'bg-white px-5 py-3 text-center font-semibold uppercase tracking-[0.12em] text-[var(--ink)]' : 'btn-primary'}
                >
                  Voir le cabinet
                </a>
                <a
                  href={lawyer.sourceUrl}
                  target="_blank"
                  rel="noopener"
                  className={lawyer.highlighted ? 'border border-white/25 px-5 py-3 text-center font-semibold uppercase tracking-[0.12em] text-white' : 'btn-secondary'}
                >
                  Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
