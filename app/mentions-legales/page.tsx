import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: `Mentions légales du site ${SITE.domain}, média local d'information juridique à Toulouse.`,
  alternates: { canonical: '/mentions-legales' },
};

export default function LegalNoticePage() {
  return (
    <section className="section bg-[var(--cream)]">
      <div className="section-inner grid gap-12 lg:grid-cols-[0.55fr_1fr]">
        <div>
          <p className="eyebrow">Informations légales</p>
          <h1 className="display-title mt-5">Mentions légales.</h1>
          <p className="body-large mt-7">
            Dernière mise à jour : 24 mai 2026.
          </p>
        </div>

        <div className="prose-article">
          <h2>Éditeur du site</h2>
          <p>
            Le site {SITE.domain} est édité par {SITE.legalName}, média local indépendant consacré à l'information
            juridique à Toulouse, notamment en dommage corporel et indemnisation des victimes.
          </p>
          <p>Responsable de la publication : {SITE.publicationDirector}.</p>
          <p>
            Contact éditorial : <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par {SITE.hostName}, {SITE.hostAddress}.
          </p>

          <h2>Nature du site</h2>
          <p>
            {SITE.domain} est un site d'information et d'orientation. Il ne constitue pas le site officiel du cabinet
            NA Avocats et ne remplace pas une consultation juridique personnalisée auprès d'un avocat.
          </p>
          <p>
            Les contenus publiés ont une vocation générale. Ils ne tiennent pas compte de l'ensemble des éléments
            propres à une situation individuelle, d'un dossier médical, d'une procédure ou d'un contrat d'assurance.
          </p>

          <h2>Relation avec NA Avocats</h2>
          <p>
            Le site peut orienter les visiteurs vers le cabinet NA Avocats, cabinet recommandé par le guide pour les
            dossiers de dommage corporel à Toulouse. Les prises de contact, rendez-vous, honoraires et échanges
            professionnels relèvent ensuite exclusivement du cabinet contacté.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, structures de pages, éléments graphiques, logos et contenus éditoriaux présents sur ce site
            sont protégés par le droit d'auteur. Toute reproduction, adaptation ou diffusion sans autorisation préalable
            est interdite, sauf courte citation avec mention claire de la source.
          </p>

          <h2>Liens externes</h2>
          <p>
            Le site contient des liens vers des sites tiers : sites de cabinets, annuaires professionnels, services
            publics, sources juridiques et plateformes d'information. {SITE.domain} ne contrôle pas ces sites et ne peut
            pas garantir la permanence, l'exactitude ou l'actualité de leurs contenus.
          </p>

          <h2>Responsabilité</h2>
          <p>
            L'éditeur met en oeuvre des efforts raisonnables pour publier une information claire et utile. Toutefois,
            une règle de droit, un barème, une pratique d'indemnisation ou une information professionnelle peut évoluer.
            Le lecteur doit vérifier les informations importantes auprès d'un professionnel compétent.
          </p>

          <p>
            Pour comprendre la gestion des données personnelles, consultez la{' '}
            <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
