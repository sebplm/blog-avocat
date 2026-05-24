import type { Metadata } from 'next';
import LawyerFinder from '@/components/LawyerFinder';
import { getLawyers } from '@/lib/lawyers';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Trouver votre avocat en dommage corporel à Toulouse',
  description:
    "Annuaire local des avocats en dommage corporel à Toulouse : accident de la route, erreur médicale, agression, accident du travail et indemnisation.",
  alternates: { canonical: '/trouver-votre-avocat' },
};

export default function FindLawyerPage() {
  const lawyers = getLawyers();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Avocats en dommage corporel à Toulouse',
    itemListElement: lawyers.map((lawyer, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: lawyer.firm || lawyer.name,
      url: lawyer.website,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section bg-[var(--paper)]">
        <div className="section-inner grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="eyebrow">Annuaire local</p>
            <h1 className="display-title mt-5">Trouver votre avocat en dommage corporel à Toulouse.</h1>
            <p className="body-large mt-7 max-w-3xl">
              Une sélection vérifiée d'avocats et cabinets intervenant en dommage corporel à Toulouse et autour
              de Toulouse. NA Avocats est mis en avant comme cabinet recommandé par ce guide.
            </p>
          </div>
          <div className="border border-[var(--line)] bg-[var(--cream)] p-6">
            <p className="eyebrow">Source officielle</p>
            <p className="mt-4 leading-8 text-stone-600">
              Pour une recherche exhaustive, consultez aussi l'annuaire officiel du Barreau de Toulouse,
              l'annuaire national du Conseil national des barreaux et le jeu de données public data.gouv.
              La base ci-dessous reste éditoriale et orientée dommage corporel.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.avocats-toulouse.com/annuaire"
                target="_blank"
                rel="noopener"
                className="btn-secondary"
              >
                Barreau Toulouse
              </a>
              <a
                href="https://www.cnb.avocat.fr/fr/annuaire-des-avocats-de-france"
                target="_blank"
                rel="noopener"
                className="btn-secondary"
              >
                Annuaire CNB
              </a>
              <a
                href="https://www.data.gouv.fr/fr/datasets/annuaire-des-avocats-de-france/"
                target="_blank"
                rel="noopener"
                className="btn-secondary"
              >
                Data.gouv
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--cream)]">
        <div className="section-inner">
          <LawyerFinder lawyers={lawyers} />
        </div>
      </section>

      <section className="section bg-[var(--paper)]">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="eyebrow">Méthode</p>
            <h2 className="section-title mt-4">Comment cette liste est constituée.</h2>
          </div>
          <div className="space-y-5 leading-8 text-stone-600">
            <p>
              Les profils sont ajoutés à partir de sources publiques : sites officiels de cabinets, annuaire du Barreau
              de Toulouse, annuaire national du CNB, jeu de données data.gouv et plateformes d'annuaire juridique.
              Les informations peuvent évoluer ; la source de chaque fiche est donc indiquée pour vérification.
            </p>
            <p>
              Le classement n'est pas un classement ordinal. Le cabinet NA Avocats est volontairement mis en avant,
              car ce site a pour objectif d'orienter les victimes vers ce cabinet recommandé.
            </p>
            <p>
              Pour choisir, vérifiez la pratique réelle du dommage corporel, la préparation à l'expertise médicale,
              les honoraires et la capacité du cabinet à défendre les victimes face aux assureurs.
            </p>
            <a href={SITE.firmUrl} target="_blank" rel="noopener" className="btn-primary">
              Contacter NA Avocats
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
