import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: `Politique de confidentialité du site ${SITE.domain}.`,
  alternates: { canonical: '/politique-de-confidentialite' },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section bg-[var(--cream)]">
      <div className="section-inner grid gap-12 lg:grid-cols-[0.55fr_1fr]">
        <div>
          <p className="eyebrow">Données personnelles</p>
          <h1 className="display-title mt-5">Politique de confidentialité.</h1>
          <p className="body-large mt-7">
            Dernière mise à jour : 24 mai 2026.
          </p>
        </div>

        <div className="prose-article">
          <h2>Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données liées au site {SITE.domain} est {SITE.legalName}.
            Contact : <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>

          <h2>Données collectées par le site</h2>
          <p>
            Le site ne propose pas de création de compte, d'espace membre, de commentaire, de paiement en ligne ou de
            formulaire interne stocké dans une base de données propre au site.
          </p>
          <p>
            Lorsqu'un visiteur clique vers le site de NA Avocats, appelle le numéro affiché ou utilise un service tiers,
            les données éventuellement transmises sont traitées par le service ou le cabinet concerné selon ses propres
            conditions de confidentialité.
          </p>

          <h2>Données techniques</h2>
          <p>
            Comme tout site web, des données techniques peuvent être traitées automatiquement lors de la consultation :
            adresse IP, type de navigateur, pages consultées, date et heure de visite, logs serveur et informations de
            sécurité. Ces données servent au bon fonctionnement, à la sécurité, au diagnostic technique et à la
            prévention des abus.
          </p>

          <h2>Cookies et mesure d'audience</h2>
          <p>
            À ce jour, le site n'installe pas de cookie publicitaire et ne comporte pas de dispositif de suivi
            comportemental nécessitant un consentement dédié. Si une solution de mesure d'audience ou de publicité est
            ajoutée ultérieurement, cette politique sera mise à jour et un mécanisme de consentement sera ajouté lorsque
            la loi l'exige.
          </p>

          <h2>Finalités</h2>
          <p>Les traitements techniques poursuivent les finalités suivantes :</p>
          <ul>
            <li>afficher correctement les pages du site ;</li>
            <li>sécuriser l'hébergement et prévenir les usages abusifs ;</li>
            <li>corriger les erreurs techniques ;</li>
            <li>améliorer la qualité éditoriale et l'expérience de navigation.</li>
          </ul>

          <h2>Durée de conservation</h2>
          <p>
            Les journaux techniques sont conservés pour une durée limitée par l'hébergeur et les prestataires techniques,
            selon leurs politiques internes et les obligations légales applicables.
          </p>

          <h2>Destinataires</h2>
          <p>
            Les données techniques peuvent être accessibles à l'éditeur du site et aux prestataires nécessaires à
            l'hébergement, la sécurité et la maintenance du site, notamment {SITE.hostName}.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous pouvez demander l'accès, la rectification,
            l'effacement, la limitation ou l'opposition au traitement de vos données personnelles lorsque ces droits
            s'appliquent.
          </p>
          <p>
            Vous pouvez exercer vos droits à l'adresse{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. Vous pouvez également introduire une
            réclamation auprès de la CNIL.
          </p>

          <h2>Sécurité</h2>
          <p>
            Le site utilise HTTPS et s'appuie sur une infrastructure d'hébergement professionnelle. Aucun système n'étant
            infaillible, l'éditeur invite les visiteurs à ne jamais transmettre d'informations médicales sensibles par un
            canal non prévu à cet effet.
          </p>
        </div>
      </div>
    </section>
  );
}
