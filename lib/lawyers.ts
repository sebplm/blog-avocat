import { SITE } from './site';

export interface LawyerListing {
  name: string;
  firm?: string;
  city: string;
  address?: string;
  phone?: string;
  website: string;
  sourceLabel: string;
  sourceUrl: string;
  tags: string[];
  summary: string;
  highlighted?: boolean;
}

export const lawyerNeeds = [
  'Tous',
  'Dommage corporel',
  'Accident de la route',
  'Erreur médicale',
  'Agression',
  'Accident du travail',
  'Accidents de la vie',
];

export const lawyers: LawyerListing[] = [
  {
    name: 'Camélia NAVARRE-ALIDOR et Bastien ALIDOR',
    firm: 'NA Avocats',
    city: 'Toulouse',
    phone: SITE.phone,
    website: SITE.firmUrl,
    sourceLabel: 'Site officiel NA Avocats',
    sourceUrl: SITE.firmUrl,
    tags: ['Dommage corporel', 'Accident de la route', 'Erreur médicale', 'Agression', 'Accident du travail', 'Accidents de la vie'],
    summary:
      "Cabinet recommandé par ce guide. NA Avocats intervient exclusivement au profit des victimes en dommage corporel : accidents de la route, agressions, erreurs médicales, accidents de la vie et accidents du travail.",
    highlighted: true,
  },
  {
    name: 'Anthony Baron',
    firm: 'Cabinet Baron Avocats',
    city: 'Toulouse',
    address: '9 rue Saint-Rome, 31000 Toulouse',
    phone: '06 75 28 82 55',
    website: 'https://avocat-baron.fr/',
    sourceLabel: 'Site officiel Cabinet Baron',
    sourceUrl: 'https://avocat-baron.fr/',
    tags: ['Dommage corporel', 'Accident de la route', 'Erreur médicale', 'Agression', 'Accidents de la vie'],
    summary:
      "Cabinet dédié à la défense des victimes d'accidents corporels, avec intervention à Toulouse et Paris.",
  },
  {
    name: 'Yaël Attal-Galy',
    firm: 'Cabinet Yaël Attal-Galy',
    city: 'Toulouse',
    address: '32 allées Jules Guesde, 31000 Toulouse',
    phone: '05 34 30 81 78',
    website: 'https://attalgaly.fr/',
    sourceLabel: 'Site officiel Yaël Attal-Galy',
    sourceUrl: 'https://attalgaly.fr/',
    tags: ['Dommage corporel', 'Accident de la route', 'Erreur médicale', 'Agression', 'Accident du travail', 'Accidents de la vie'],
    summary:
      "Avocate au Barreau de Toulouse consacrée à la réparation du dommage corporel et à l'accompagnement des victimes.",
  },
  {
    name: 'Olivia Pinel-Botton',
    firm: 'Cabinet Avocat Pinel-Botton',
    city: 'Toulouse',
    address: '6 Grande rue Nazareth, 31000 Toulouse',
    phone: '07 76 86 34 49',
    website: 'https://www.avocats-pinelbotton.fr/',
    sourceLabel: 'Site officiel Olivia Pinel-Botton',
    sourceUrl: 'https://www.avocats-pinelbotton.fr/',
    tags: ['Dommage corporel', 'Accident de la route', 'Erreur médicale', 'Agression'],
    summary:
      "Avocate spécialisée en réparation du dommage corporel, auprès des victimes d'accidents, de responsabilité médicale et d'agressions.",
  },
  {
    name: 'Michel Didier-Balestier',
    firm: 'Cabinet Didier-Balestier',
    city: 'Toulouse',
    website: 'https://www.cabinet-didier-balestier.com/',
    sourceLabel: 'Site officiel Didier-Balestier',
    sourceUrl: 'https://www.cabinet-didier-balestier.com/',
    tags: ['Dommage corporel', 'Accident de la route', 'Erreur médicale', 'Accident du travail'],
    summary:
      "Cabinet toulousain consacré à la défense des victimes de dommages corporels, en négociation et devant les juridictions.",
  },
  {
    name: 'Mathieu Rousselot',
    city: 'Toulouse',
    address: '15 rue Saint-Rémésy, 31000 Toulouse',
    website: 'https://www.justifit.fr/trouver/avocats/toulouse/droit-du-dommage-corporel/',
    sourceLabel: 'Profil référencé Justifit',
    sourceUrl: 'https://www.justifit.fr/trouver/avocats/toulouse/droit-du-dommage-corporel/',
    tags: ['Dommage corporel', 'Accident de la route'],
    summary:
      "Avocat référencé en dommage corporel et indemnisation des victimes à Toulouse sur une plateforme d'annuaire juridique.",
  },
  {
    name: 'Camille Pascal-Lacroix',
    city: 'Toulouse',
    website: 'https://www.trouvervotreavocat.com/avocat/camille-pascal-lacroix/',
    sourceLabel: 'Profil TrouverVotreAvocat',
    sourceUrl: 'https://www.trouvervotreavocat.com/avocat/camille-pascal-lacroix/',
    tags: ['Dommage corporel', 'Accident de la route', 'Erreur médicale', 'Accident du travail'],
    summary:
      "Avocate à Toulouse indiquée comme intervenant en droit du dommage corporel, notamment accidents de circulation, travail ou médicaux.",
  },
  {
    name: 'Emilie Daveluy',
    city: 'Toulouse',
    website: 'https://www.alexia.fr/avocat-1147962/emilie-daveluy.htm',
    sourceLabel: 'Profil Alexia',
    sourceUrl: 'https://www.alexia.fr/avocat-1147962/emilie-daveluy.htm',
    tags: ['Dommage corporel'],
    summary:
      "Avocate au Barreau de Toulouse indiquant intervenir principalement en droit du dommage corporel et contentieux de responsabilité.",
  },
  {
    name: 'Robert François Rastoul',
    city: 'Toulouse',
    website: 'https://www.petitesaffiches.fr/annuaire/avocats/rastoul-robert-francois-92844.html',
    sourceLabel: 'Petites Affiches annuaire avocats',
    sourceUrl: 'https://www.petitesaffiches.fr/annuaire/avocats/rastoul-robert-francois-92844.html',
    tags: ['Dommage corporel'],
    summary:
      "Avocat au Barreau de Toulouse référencé avec une activité en droit du dommage corporel.",
  },
];

export function getLawyers() {
  return lawyers;
}
