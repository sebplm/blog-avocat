'use client';

import Link from 'next/link';
import { useState } from 'react';
import SiteLogo from '@/components/SiteLogo';
import { SITE } from '@/lib/site';

const nav = [
  { label: 'Route', href: '/avocat-accident-route-toulouse' },
  { label: 'Médical', href: '/avocat-erreur-medicale-toulouse' },
  { label: 'Agressions', href: '/avocat-agression-toulouse' },
  { label: 'Annuaire', href: '/trouver-votre-avocat' },
  { label: 'Guides', href: '/blog' },
  { label: 'Contact', href: '/contactez-avocat-toulouse' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--cream)]/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 lg:grid-cols-[300px_1fr_auto]">
        <Link href="/" className="min-w-0 leading-none" onClick={() => setOpen(false)}>
          <SiteLogo compact />
        </Link>

        <nav className="hidden min-w-0 items-center justify-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap border border-transparent px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-stone-700 transition hover:border-[var(--line)] hover:bg-[var(--paper)] hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${SITE.phone.replaceAll(' ', '')}`}
            className="whitespace-nowrap border-l border-[var(--line)] pl-5 text-right text-sm font-semibold leading-none text-[var(--ink)]"
          >
            <span className="block text-[10px] uppercase tracking-[0.18em] text-stone-500">Contact direct</span>
            <span className="mt-1 block">{SITE.phone}</span>
          </a>
          <a href={SITE.firmUrl} target="_blank" rel="noopener" className="btn-primary min-w-[122px] px-5 py-3">
            Appeler
          </a>
        </div>

        <button
          className="border border-[var(--ink)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--paper)] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-[var(--line)] py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--ink)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={SITE.firmUrl} target="_blank" rel="noopener" className="btn-primary mt-2 text-center">
              Contactez NA Avocats
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
