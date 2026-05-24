import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact avocat en dommage corporel à Toulouse',
  description:
    "Victime d'un accident à Toulouse ? Contactez le cabinet NA Avocats, recommandé pour les dossiers de dommage corporel et indemnisation.",
  alternates: { canonical: '/contactez-avocat-toulouse' },
};

export default function ContactPage() {
  return (
    <>
      <section className="section bg-[var(--cream)]">
        <div className="section-inner grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="eyebrow">Contact avocat Toulouse</p>
            <h1 className="display-title mt-5">Contactez un avocat spécialisé en dommage corporel.</h1>
            <p className="body-large mt-7 max-w-3xl">
              Si vous avez reçu une offre d'assurance, une convocation à expertise ou si vous ne savez pas
              par où commencer, demandez un premier avis au cabinet NA Avocats à Toulouse.
            </p>
          </div>

          <div className="border border-[var(--line)] bg-[var(--paper)] p-7">
            <p className="eyebrow">Cabinet recommandé</p>
            <h2 className="mt-4 font-serif text-4xl">NA Avocats</h2>
            <p className="mt-4 leading-7 text-stone-600">
              Dommage corporel, accidents de la route, agressions, accidents médicaux et accidents de la vie.
            </p>
            <div className="mt-7 space-y-3">
              <a href={SITE.firmUrl} target="_blank" rel="noopener" className="btn-primary w-full">
                Ouvrir le formulaire
              </a>
              <a href={`tel:${SITE.phone.replaceAll(' ', '')}`} className="btn-secondary w-full">
                Appeler le {SITE.phone}
              </a>
            </div>
            <p className="mt-5 text-xs leading-6 text-stone-500">
              Ce site n'est pas le site officiel du cabinet. Il oriente les victimes vers le cabinet recommandé
              lorsque leur dossier nécessite un accompagnement personnalisé.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="section-inner photo-card">
          <img src={SITE.officeImage} alt="Bureau d'avocats sans personne visible" className="h-[380px] w-full object-cover md:h-[520px]" />
        </div>
      </section>

      <section className="section bg-[var(--cream)]">
        <div className="section-inner grid gap-8 md:grid-cols-3">
          {[
            ['01', 'Expliquez la situation', "Type d'accident, date, blessures, assurance ou convocation reçue."],
            ['02', 'Préparez vos pièces', 'Certificat médical, courriers, photos, plainte, arrêt de travail ou offre reçue.'],
            ['03', 'Obtenez un avis', "Le cabinet vous indique les premières actions utiles pour protéger l'indemnisation."],
          ].map(([step, title, body]) => (
            <div key={step} className="border border-[var(--line)] p-7">
              <span className="font-serif text-4xl text-[var(--gold)]">{step}</span>
              <h2 className="mt-5 font-serif text-3xl">{title}</h2>
              <p className="mt-4 leading-7 text-stone-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-[var(--paper)]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Avant de contacter</p>
          <h2 className="section-title mt-4">Lire le guide adapté à votre situation.</h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {[
              ['Accident de la route', '/avocat-accident-route-toulouse'],
              ['Erreur médicale', '/avocat-erreur-medicale-toulouse'],
              ['Accident du travail', '/avocat-accident-travail-toulouse'],
              ['Indemnisation', '/indemnisation-dommage-corporel-toulouse'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="btn-secondary">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
