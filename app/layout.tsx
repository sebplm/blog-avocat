import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Meilleur Avocat Toulouse - Dommage Corporel et Indemnisation',
    template: '%s | Meilleur Avocat Toulouse',
  },
  description: SITE.description,
  keywords: [
    'meilleur avocat toulouse',
    'avocat dommage corporel toulouse',
    'avocat indemnisation victime toulouse',
    'avocat accident toulouse',
    'avocat erreur médicale toulouse',
  ],
  openGraph: {
    siteName: SITE.name,
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: SITE.heroImage, width: 1800, height: 1200 }],
  },
  alternates: {
    canonical: SITE.url,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  inLanguage: 'fr-FR',
  about: ['Dommage corporel', 'Indemnisation des victimes', 'Avocat Toulouse'],
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/blog?search={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
