'use client';

import Link from 'next/link';
import { useState } from 'react';
import SiteLogo from '@/components/SiteLogo';
import { SITE } from '@/lib/site';

const nav = [
  { label: 'Accidents de la route', href: '/avocat-accident-route-toulouse' },
  { label: 'Accidents médicaux', href: '/avocat-erreur-medicale-toulouse' },
  { label: 'Agressions', href: '/avocat-agression-toulouse' },
  { label: 'Trouver votre avocat', href: '/trouver-votre-avocat' },
  { label: 'Guides', href: '/blog' },
  { label: 'Contact', href: '/contactez-avocat-toulouse' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--cream)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <Link href="/" className="leading-none" onClick={() => setOpen(false)}>
          <SiteLogo compact />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-700 transition hover:text-[var(--gold)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href={`tel:${SITE.phone.replaceAll(' ', '')}`} className="text-sm font-semibold text-[var(--ink)]">
            {SITE.phone}
          </a>
          <a href={SITE.firmUrl} target="_blank" rel="noopener" className="btn-primary py-3">
            Appeler
          </a>
        </div>

        <button
          className="border border-[var(--line)] px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--paper)] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[var(--ink)]"
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
