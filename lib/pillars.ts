import { SITE } from './site';

export interface PillarPage {
  slug: string;
  title: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  image: string;
  category: string;
  intro: string;
  proofPoints: string[];
  sections: {
    title: string;
    body: string;
  }[];
}

export const pillars: PillarPage[] = [
  {
    slug: 'meilleurs-avocats-dommage-corporel-toulouse',
    title: 'Meilleurs avocats en dommage corporel à Toulouse',
    eyebrow: 'Comparatif local',
    metaTitle: 'Meilleurs Avocats Dommage Corporel Toulouse',
    metaDescription:
      "Guide pour choisir le meilleur avocat en dommage corporel à Toulouse : spécialisation, honoraires, expertise médicale et cabinet recommandé.",
    hero:
      "Comparer les cabinets, comprendre les critères sérieux et identifier l'avocat capable de défendre réellement une victime face aux assurances.",
    image: SITE.officeImage,
    category: 'Meilleur avocat',
    intro:
      "Le meilleur avocat en dommage corporel n'est pas celui qui promet le montant le plus élevé. C'est celui qui sait documenter le préjudice, préparer l'expertise médicale et tenir tête aux assureurs.",
    proofPoints: [
      'Spécialisation dommage corporel et défense des victimes',
      'Expérience des expertises médicales contradictoires',
      'Honoraires transparents et stratégie expliquée',
      'Capacité à aller au contentieux si l’offre est insuffisante',
    ],
    sections: [
      {
        title: 'Les critères qui comptent vraiment',
        body:
          "Un bon avocat en dommage corporel maîtrise la nomenclature Dintilhac, les mécanismes d'assurance, la preuve médicale et les procédures judiciaires. Il doit aussi savoir expliquer clairement la stratégie à une victime qui traverse souvent une période difficile.",
      },
      {
        title: 'Pourquoi NA Avocats est recommandé',
        body:
          "Le cabinet NAVARRE-ALIDOR intervient en dommage corporel à Toulouse, notamment pour les accidents de la route, agressions, accidents de la vie et accidents médicaux. Son positionnement est clair : défendre les victimes et obtenir une indemnisation juste.",
      },
      {
        title: "Le bon moment pour contacter un avocat",
        body:
          "Le plus tôt possible, idéalement avant l'expertise médicale ou avant toute offre transactionnelle. Une intervention précoce permet d'éviter les erreurs de déclaration, de préparer les pièces et de cadrer les échanges avec l'assureur.",
      },
    ],
  },
  {
    slug: 'avocat-accident-route-toulouse',
    title: 'Avocat accident de la route à Toulouse',
    eyebrow: 'Route, moto, piéton, passager',
    metaTitle: 'Avocat Accident Route Toulouse : Indemnisation Victime',
    metaDescription:
      "Victime d'un accident de la route à Toulouse ? Guide complet sur la loi Badinter, l'assurance, l'expertise et l'indemnisation.",
    hero:
      "Comprendre vos droits après un accident de voiture, moto, vélo ou piéton renversé, et éviter une indemnisation trop basse.",
    image: SITE.roadImage,
    category: 'Accident de la route',
    intro:
      "Après un accident de la route, l'assureur enclenche vite sa procédure. La victime doit faire constater ses blessures, conserver les preuves et ne pas accepter une offre avant d'avoir mesuré l'ensemble des préjudices.",
    proofPoints: [
      'Application de la loi Badinter',
      'Indemnisation conducteur, passager, piéton, cycliste ou motard',
      'Expertise médicale et médecin de recours',
      'Contestation des offres d’assurance insuffisantes',
    ],
    sections: [
      {
        title: 'La loi Badinter protège de nombreuses victimes',
        body:
          "Les passagers, piétons et cyclistes bénéficient souvent d'une protection forte. Le conducteur peut aussi être indemnisé selon les circonstances et les responsabilités retenues.",
      },
      {
        title: 'L’offre de l’assurance doit être relue',
        body:
          "Une offre peut paraître importante tout en oubliant l'incidence professionnelle, l'aide humaine, les souffrances endurées ou les besoins futurs. La lecture poste par poste est indispensable.",
      },
      {
        title: 'Toulouse et ses axes à risque',
        body:
          "Rocade, périphérique, trajets vers Blagnac, Colomiers, Labège ou Montauban : les accidents locaux impliquent souvent plusieurs véhicules et des assureurs aux intérêts divergents.",
      },
    ],
  },
  {
    slug: 'avocat-erreur-medicale-toulouse',
    title: 'Avocat erreur médicale à Toulouse',
    eyebrow: 'Accidents médicaux',
    metaTitle: 'Avocat Erreur Médicale Toulouse : Recours Patient',
    metaDescription:
      "Erreur médicale, infection nosocomiale, retard de diagnostic ou accident chirurgical à Toulouse : vos recours et indemnisations.",
    hero:
      "Faire analyser un dossier médical, distinguer faute et aléa thérapeutique, et demander réparation lorsque la prise en charge a causé un dommage.",
    image: SITE.medicalImage,
    category: 'Erreur médicale',
    intro:
      "Un accident médical exige une lecture technique du dossier : chronologie, comptes rendus, consentement, examens réalisés ou oubliés, lien entre le soin et le dommage.",
    proofPoints: [
      'Demande et analyse du dossier médical',
      'Procédure CCI / ONIAM',
      'Expertise médicale contradictoire',
      'Indemnisation faute, infection ou aléa thérapeutique',
    ],
    sections: [
      {
        title: "L'erreur médicale n'est pas toujours évidente",
        body:
          "Un mauvais résultat ne suffit pas. Il faut établir une faute, un défaut d'information, un retard de diagnostic ou une complication indemnisable au titre de la solidarité nationale.",
      },
      {
        title: 'La procédure CCI peut être utile',
        body:
          "La CCI permet d'obtenir une expertise et un avis dans certains dossiers. Mais le dossier doit être préparé : pièces médicales complètes, chronologie claire et questions précises à poser à l’expert.",
      },
      {
        title: 'Pourquoi être accompagné',
        body:
          "Face à un établissement, un assureur médical ou l'ONIAM, la victime doit traduire son vécu en éléments médicaux et juridiques. C'est précisément le rôle d'un avocat spécialisé.",
      },
    ],
  },
  {
    slug: 'avocat-accident-travail-toulouse',
    title: 'Avocat accident du travail à Toulouse',
    eyebrow: 'Salariés blessés',
    metaTitle: 'Avocat Accident Travail Toulouse : Droits et Recours',
    metaDescription:
      "Accident du travail, faute inexcusable, maladie professionnelle : guide des droits du salarié blessé à Toulouse.",
    hero:
      "Faire reconnaître l'accident, contester les évaluations trop faibles et rechercher une indemnisation complémentaire lorsque l'employeur a manqué à son obligation de sécurité.",
    image: SITE.workplaceImage,
    category: 'Accident du travail',
    intro:
      "La prise en charge CPAM ne répare pas toujours toute la réalité du dommage. Lorsque les séquelles sont importantes, l'analyse de la faute inexcusable et du préjudice professionnel devient centrale.",
    proofPoints: [
      'Déclaration et reconnaissance CPAM',
      'Contestation consolidation ou taux d’incapacité',
      'Faute inexcusable de l’employeur',
      'Préjudice professionnel et perte de revenus',
    ],
    sections: [
      {
        title: 'Accident reconnu ne veut pas dire préjudice réparé',
        body:
          "La réparation forfaitaire peut laisser de côté des souffrances, l'aide humaine, l'impact sur les loisirs ou la carrière. Une stratégie complémentaire peut être nécessaire.",
      },
      {
        title: 'La faute inexcusable change le dossier',
        body:
          "Si l'employeur avait conscience du danger ou aurait dû l'avoir, la victime peut obtenir une indemnisation élargie. La preuve se construit avec documents, alertes, témoignages et conditions de travail.",
      },
      {
        title: 'Un enjeu local fort en région toulousaine',
        body:
          "Aéronautique, BTP, logistique, santé, intérim : les profils de dossiers varient fortement autour de Toulouse et nécessitent une approche concrète du poste occupé.",
      },
    ],
  },
  {
    slug: 'avocat-agression-toulouse',
    title: "Avocat victime d'agression à Toulouse",
    eyebrow: 'CIVI et préjudice moral',
    metaTitle: 'Avocat Victime Agression Toulouse : CIVI et Indemnisation',
    metaDescription:
      "Victime d'une agression à Toulouse ? Dépôt de plainte, certificat médical, CIVI, FGTI et indemnisation du préjudice moral.",
    hero:
      "Être indemnisé même lorsque l'auteur est inconnu, insolvable ou difficile à poursuivre, grâce aux mécanismes dédiés aux victimes.",
    image: SITE.courthouseImage,
    category: 'Agression',
    intro:
      "Après une agression, la procédure pénale ne suffit pas toujours à réparer la victime. L'indemnisation doit intégrer les blessures, le traumatisme, les pertes et les conséquences quotidiennes.",
    proofPoints: [
      'Plainte, certificat médical et ITT',
      'Saisine CIVI / FGTI',
      'Préjudice moral et psychologique',
      'Auteur inconnu ou insolvable',
    ],
    sections: [
      {
        title: 'La CIVI peut indemniser la victime',
        body:
          "Lorsque les conditions sont réunies, la Commission d'indemnisation des victimes d'infractions permet d'obtenir une réparation même si l'auteur ne paie pas lui-même.",
      },
      {
        title: 'Le traumatisme doit être prouvé',
        body:
          "Stress post-traumatique, peur, sommeil, anxiété, évitement : le préjudice moral se documente par le suivi médical et les changements concrets de vie.",
      },
      {
        title: 'Agir vite aide le dossier',
        body:
          "Plainte, certificat médical, photos, témoins et suivi psychologique sont des pièces essentielles. Plus elles sont réunies tôt, plus le dossier d'indemnisation est solide.",
      },
    ],
  },
  {
    slug: 'avocat-accident-vie-toulouse',
    title: 'Avocat accident de la vie à Toulouse',
    eyebrow: 'Chute, sport, accident domestique',
    metaTitle: 'Avocat Accident de la Vie Toulouse : Indemnisation',
    metaDescription:
      "Chute en magasin, accident de sport, garantie accidents de la vie : comprendre vos recours après un accident de la vie à Toulouse.",
    hero:
      "Transformer un accident du quotidien en dossier indemnisable lorsque la responsabilité d'un tiers, d'un lieu ou d'un contrat peut être mobilisée.",
    image: SITE.publicPlaceImage,
    category: 'Accidents de la vie',
    intro:
      "Les accidents de la vie sont souvent sous-estimés. Pourtant, une chute, un défaut d'entretien, une activité sportive mal encadrée ou une garantie GAV peuvent ouvrir droit à indemnisation.",
    proofPoints: [
      'Responsabilité d’un magasin, lieu public ou organisateur',
      'Analyse des contrats GAV et assurances',
      'Preuve du danger ou du défaut d’entretien',
      'Indemnisation des séquelles et pertes de revenus',
    ],
    sections: [
      {
        title: 'La preuve disparaît vite',
        body:
          "Un sol est nettoyé, un trottoir réparé, une caméra effacée. Après une chute ou un accident dans un lieu public, il faut documenter immédiatement les circonstances.",
      },
      {
        title: 'La GAV a des limites',
        body:
          "La garantie accidents de la vie peut aider, mais elle contient souvent des seuils, exclusions et plafonds. L'offre proposée doit être comparée aux préjudices réels.",
      },
      {
        title: 'Le sport n’exclut pas toute responsabilité',
        body:
          "Une faute caractérisée, un matériel dangereux, un défaut d'encadrement ou une règle de sécurité ignorée peuvent justifier une demande d'indemnisation.",
      },
    ],
  },
  {
    slug: 'indemnisation-dommage-corporel-toulouse',
    title: 'Indemnisation du dommage corporel à Toulouse',
    eyebrow: 'Barèmes et postes de préjudice',
    metaTitle: 'Indemnisation Dommage Corporel Toulouse : Guide',
    metaDescription:
      "Comprendre l'indemnisation du dommage corporel à Toulouse : expertise médicale, barèmes, IPP, pertes de revenus et offre d'assurance.",
    hero:
      "Comprendre comment se calcule une indemnisation sérieuse, poste par poste, sans réduire une victime à un simple taux médical.",
    image: SITE.courthouseImage,
    category: 'Indemnisation',
    intro:
      "L'indemnisation du dommage corporel repose sur une méthode : établir les blessures, attendre la consolidation, évaluer les séquelles et chiffrer chaque conséquence dans la vie de la victime.",
    proofPoints: [
      'Nomenclature Dintilhac',
      'Expertise médicale et consolidation',
      'IPP, AIPP, DFP et souffrances endurées',
      'Pertes de revenus, aide humaine et préjudices futurs',
    ],
    sections: [
      {
        title: 'Le taux médical ne suffit pas',
        body:
          "Deux victimes avec le même taux peuvent subir des impacts très différents selon leur âge, leur métier, leurs loisirs, leur autonomie et leur vie familiale.",
      },
      {
        title: 'L’expertise médicale est centrale',
        body:
          "C'est souvent pendant l'expertise que sont fixés les éléments qui serviront au chiffrage. La préparation avec un avocat et parfois un médecin de recours est décisive.",
      },
      {
        title: 'Une offre doit se discuter',
        body:
          "L'assureur propose rarement spontanément le maximum. La discussion porte sur les preuves, les références indemnitaires et l'impact réel du dommage.",
      },
    ],
  },
];

export function getAllPillars() {
  return pillars;
}

export function getPillarBySlug(slug: string) {
  return pillars.find((pillar) => pillar.slug === slug);
}
