export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: number;
  keywords: string[];
  content: string;
  pillarSlug?: string;
}

type ArticleSeed = Omit<Article, 'content'> & {
  situation: string;
  audience: string;
  checklist: string[];
  warning: string;
  localAngle: string;
};

export const CATEGORIES = [
  'Tous',
  'Meilleur avocat',
  'Accident de la route',
  'Erreur médicale',
  'Accident du travail',
  'Agression',
  'Accidents de la vie',
  'Expertise médicale',
  'Indemnisation',
];

const seeds: ArticleSeed[] = [
  {
    slug: 'meilleur-avocat-dommage-corporel-toulouse',
    title: 'Meilleur avocat en dommage corporel à Toulouse : critères, honoraires et erreurs à éviter',
    metaTitle: 'Meilleur Avocat Dommage Corporel Toulouse : Guide 2026',
    metaDescription:
      "Comment choisir le meilleur avocat en dommage corporel à Toulouse ? Critères, honoraires, spécialisation et signaux de confiance pour les victimes.",
    excerpt:
      "Choisir un avocat après un accident corporel change souvent le niveau d'indemnisation. Voici les critères concrets pour comparer les cabinets toulousains.",
    category: 'Meilleur avocat',
    publishedAt: '2026-01-08T08:00:00.000Z',
    readTime: 8,
    keywords: ['meilleur avocat dommage corporel toulouse', 'avocat victime toulouse'],
    pillarSlug: 'meilleurs-avocats-dommage-corporel-toulouse',
    situation: "le choix d'un avocat spécialisé en dommage corporel",
    audience: 'victimes et familles qui veulent éviter une indemnisation sous-évaluée',
    checklist: ['vérifier la pratique régulière du dommage corporel', 'demander une convention d’honoraires claire', 'analyser les avis et la pédagogie du cabinet'],
    warning: "Un avocat généraliste peut être excellent, mais le dommage corporel exige une vraie habitude des expertises médicales et des assureurs.",
    localAngle: 'À Toulouse, la proximité avec le barreau local, les juridictions et les médecins de recours facilite le suivi du dossier.',
  },
  {
    slug: 'avocat-indemnisation-victime-toulouse',
    title: 'Avocat indemnisation victime à Toulouse : quand le contacter et pour quels préjudices ?',
    metaTitle: 'Avocat Indemnisation Victime Toulouse : Quand Agir ?',
    metaDescription:
      "Victime d'un accident à Toulouse ? Découvrez quand contacter un avocat, quels préjudices réclamer et comment préparer votre dossier.",
    excerpt:
      "L'indemnisation d'une victime ne se limite pas aux frais médicaux. Pertes de revenus, souffrances, séquelles et aide humaine doivent être défendus.",
    category: 'Meilleur avocat',
    publishedAt: '2026-01-15T08:00:00.000Z',
    readTime: 7,
    keywords: ['avocat indemnisation victime toulouse', 'préjudice corporel toulouse'],
    pillarSlug: 'indemnisation-dommage-corporel-toulouse',
    situation: "l'indemnisation complète d'une victime",
    audience: 'personnes blessées qui veulent comprendre les postes de préjudice indemnisables',
    checklist: ['rassembler certificats médicaux et arrêts de travail', 'ne pas signer trop vite une quittance', 'faire relire toute offre d’assurance'],
    warning: "Une offre rapide paraît rassurante, mais elle peut être très inférieure au préjudice réel si la consolidation n'est pas acquise.",
    localAngle: "Les victimes de Haute-Garonne peuvent être accompagnées dans les démarches amiables et judiciaires depuis Toulouse.",
  },
  {
    slug: 'pourquoi-ne-pas-negocier-seul-assurance-accident',
    title: "Pourquoi ne pas négocier seul avec l'assurance après un accident corporel ?",
    metaTitle: "Négocier Seul avec l'Assurance Après Accident : Risques",
    metaDescription:
      "Assurance, expertise médicale, offre d'indemnisation : les pièges à éviter avant de négocier seul après un accident corporel.",
    excerpt:
      "L'assureur connaît les barèmes, les délais et les faiblesses des dossiers. La victime, elle, découvre souvent le système au pire moment.",
    category: 'Indemnisation',
    publishedAt: '2026-01-22T08:00:00.000Z',
    readTime: 6,
    keywords: ['offre assurance accident corporel', 'négocier indemnisation accident'],
    pillarSlug: 'indemnisation-dommage-corporel-toulouse',
    situation: "la négociation avec l'assurance",
    audience: 'victimes qui ont reçu un courrier ou une proposition financière',
    checklist: ['demander le détail poste par poste', 'comparer avec les justificatifs médicaux', 'contester avant de signer si l’offre est faible'],
    warning: "Une transaction signée peut fermer la porte à une discussion plus favorable, sauf aggravation ultérieure strictement prouvée.",
    localAngle: 'Un avocat toulousain peut organiser une réponse structurée et mobiliser un médecin de recours si nécessaire.',
  },
  {
    slug: 'combien-coute-avocat-dommage-corporel-toulouse',
    title: 'Combien coûte un avocat en dommage corporel à Toulouse ?',
    metaTitle: 'Honoraires Avocat Dommage Corporel Toulouse : Prix',
    metaDescription:
      "Honoraires fixes, honoraire de résultat, protection juridique : comprendre le coût d'un avocat en dommage corporel à Toulouse.",
    excerpt:
      "La question des honoraires ne doit pas empêcher une victime de demander conseil. Plusieurs modèles existent selon la nature du dossier.",
    category: 'Meilleur avocat',
    publishedAt: '2026-01-29T08:00:00.000Z',
    readTime: 6,
    keywords: ['honoraires avocat dommage corporel toulouse', 'prix avocat accident toulouse'],
    pillarSlug: 'meilleurs-avocats-dommage-corporel-toulouse',
    situation: "les honoraires d'un avocat en dommage corporel",
    audience: 'victimes qui hésitent à consulter par peur du coût',
    checklist: ['demander une convention écrite', 'vérifier la protection juridique', 'distinguer frais, honoraires fixes et résultat'],
    warning: 'Un honoraire très bas sans explication peut masquer un accompagnement limité, notamment lors de l’expertise médicale.',
    localAngle: 'À Toulouse, beaucoup de dossiers peuvent commencer par une analyse initiale du dossier et des pièces disponibles.',
  },
  {
    slug: 'accident-voiture-toulouse-48h',
    title: 'Accident de voiture à Toulouse : que faire dans les 48 premières heures ?',
    metaTitle: 'Accident Voiture Toulouse : Que Faire en 48h ?',
    metaDescription:
      "Constat, certificat médical, assurance, preuves : les démarches essentielles après un accident de voiture à Toulouse.",
    excerpt:
      "Les premières heures conditionnent souvent la suite du dossier. Il faut documenter les blessures, les circonstances et les échanges avec l'assurance.",
    category: 'Accident de la route',
    publishedAt: '2026-02-05T08:00:00.000Z',
    readTime: 7,
    keywords: ['accident voiture toulouse', 'que faire accident route toulouse'],
    pillarSlug: 'avocat-accident-route-toulouse',
    situation: "l'accident de voiture",
    audience: 'conducteurs, passagers et familles après une collision',
    checklist: ['faire constater les blessures', 'conserver photos et coordonnées des témoins', 'déclarer le sinistre sans minimiser les douleurs'],
    warning: "Dire que tout va bien sur le moment peut compliquer la preuve si les douleurs apparaissent dans les jours suivants.",
    localAngle: 'Entre périphérique, rocade et axes vers Blagnac ou Labège, les accidents toulousains impliquent souvent plusieurs assureurs.',
  },
  {
    slug: 'indemnisation-accident-route-toulouse-montants',
    title: 'Indemnisation après accident de la route à Toulouse : montants, délais et procédure',
    metaTitle: 'Indemnisation Accident Route Toulouse : Montants',
    metaDescription:
      "Quels montants après un accident de la route à Toulouse ? Comprendre la loi Badinter, les délais et les postes de préjudice.",
    excerpt:
      "La loi Badinter protège largement les victimes non conductrices et encadre les délais d'offre de l'assureur.",
    category: 'Accident de la route',
    publishedAt: '2026-02-12T08:00:00.000Z',
    readTime: 8,
    keywords: ['indemnisation accident route toulouse', 'loi badinter toulouse'],
    pillarSlug: 'avocat-accident-route-toulouse',
    situation: "l'indemnisation routière",
    audience: 'victimes qui veulent anticiper les montants et les étapes',
    checklist: ['identifier le statut de la victime', 'attendre la consolidation pour l’évaluation finale', 'chiffrer chaque poste de préjudice'],
    warning: "Le montant dépend fortement des séquelles, de l'âge, du métier et de l'impact concret dans la vie quotidienne.",
    localAngle: "Un dossier d'accident à Toulouse peut être traité amiablement, mais une saisine judiciaire reste possible si l'offre est insuffisante.",
  },
  {
    slug: 'accident-moto-toulouse-droits-motard-blesse',
    title: 'Accident de moto à Toulouse : quels droits pour le motard blessé ?',
    metaTitle: 'Accident Moto Toulouse : Droits du Motard Blessé',
    metaDescription:
      "Motard blessé à Toulouse : responsabilité, indemnisation, équipement, expertise médicale et recours contre l'assureur.",
    excerpt:
      "Les accidents de moto entraînent souvent des séquelles importantes. La discussion sur la responsabilité ne doit pas effacer les droits de la victime.",
    category: 'Accident de la route',
    publishedAt: '2026-02-19T08:00:00.000Z',
    readTime: 7,
    keywords: ['accident moto toulouse avocat', 'motard blessé indemnisation'],
    pillarSlug: 'avocat-accident-route-toulouse',
    situation: "l'accident de moto",
    audience: 'motards blessés et proches confrontés aux assureurs',
    checklist: ['documenter l’équipement endommagé', 'obtenir un bilan médical complet', 'contester une faute exagérée du motard'],
    warning: "L'assureur peut tenter de réduire l'indemnisation en invoquant une faute de conduite : cette analyse doit être discutée.",
    localAngle: 'Les axes urbains denses de Toulouse exposent les deux-roues à des collisions avec voitures, bus et utilitaires.',
  },
  {
    slug: 'pieton-renverse-toulouse-indemnisation',
    title: 'Piéton renversé à Toulouse : comment obtenir réparation ?',
    metaTitle: 'Piéton Renversé Toulouse : Indemnisation Victime',
    metaDescription:
      "Piéton renversé à Toulouse : droits de la victime, rôle de l'assurance, certificat médical et indemnisation des séquelles.",
    excerpt:
      "Le piéton bénéficie d'une protection forte. L'enjeu est surtout de prouver toutes les conséquences physiques, professionnelles et personnelles.",
    category: 'Accident de la route',
    publishedAt: '2026-02-26T08:00:00.000Z',
    readTime: 6,
    keywords: ['piéton renversé toulouse', 'indemnisation piéton accident'],
    pillarSlug: 'avocat-accident-route-toulouse',
    situation: "le piéton renversé",
    audience: 'piétons blessés, enfants, seniors et familles',
    checklist: ['récupérer le procès-verbal', 'faire suivre les douleurs persistantes', 'préparer l’expertise médicale'],
    warning: "Les blessures apparemment légères peuvent cacher des douleurs durables, notamment cervicales, lombaires ou psychologiques.",
    localAngle: 'Dans le centre de Toulouse, les zones de traversée, voies bus et pistes cyclables créent parfois des responsabilités complexes.',
  },
  {
    slug: 'accident-conducteur-non-assure-indemnisation',
    title: 'Accident avec conducteur non assuré : qui indemnise la victime ?',
    metaTitle: 'Conducteur Non Assuré : Indemnisation Victime',
    metaDescription:
      "Accident avec conducteur non assuré ou en fuite : rôle du FGAO, conditions, délais et démarches pour la victime.",
    excerpt:
      "L'absence d'assurance du responsable ne signifie pas absence d'indemnisation. Le Fonds de garantie peut intervenir sous conditions.",
    category: 'Accident de la route',
    publishedAt: '2026-03-04T08:00:00.000Z',
    readTime: 7,
    keywords: ['conducteur non assuré indemnisation', 'FGAO accident toulouse'],
    pillarSlug: 'avocat-accident-route-toulouse',
    situation: "l'accident avec conducteur non assuré",
    audience: 'victimes confrontées à un responsable en fuite ou non assuré',
    checklist: ['déposer plainte si fuite', 'réunir les preuves du véhicule impliqué', 'respecter les délais du Fonds de garantie'],
    warning: "Les délais et pièces exigées sont stricts : un dossier incomplet peut ralentir fortement l'indemnisation.",
    localAngle: 'Un accompagnement depuis Toulouse permet de coordonner plainte, assurance personnelle et saisine du fonds compétent.',
  },
  {
    slug: 'offre-indemnisation-assurance-faut-il-accepter',
    title: "Offre d'indemnisation de l'assurance : faut-il accepter ?",
    metaTitle: "Offre d'Indemnisation Assurance : Accepter ou Refuser ?",
    metaDescription:
      "Avant d'accepter une offre d'indemnisation, vérifiez les postes de préjudice, la consolidation et les conséquences futures.",
    excerpt:
      "Une offre d'assurance se lit poste par poste. Le total affiché ne dit pas si les souffrances, l'assistance et les pertes futures sont correctement évaluées.",
    category: 'Indemnisation',
    publishedAt: '2026-03-11T08:00:00.000Z',
    readTime: 6,
    keywords: ['offre indemnisation assurance', 'refuser offre assurance accident'],
    pillarSlug: 'indemnisation-dommage-corporel-toulouse',
    situation: "l'offre d'indemnisation",
    audience: 'victimes sur le point de signer une transaction',
    checklist: ['vérifier la date de consolidation', 'contrôler chaque poste Dintilhac', 'demander un avis indépendant'],
    warning: "L'offre peut oublier des postes importants comme l'incidence professionnelle, l’aide humaine ou le préjudice d’agrément.",
    localAngle: "À Toulouse, un avocat habitué aux dossiers d'accidents peut comparer l'offre aux pratiques indemnitaires locales et nationales.",
  },
  {
    slug: 'erreur-medicale-toulouse-prouver-faute',
    title: 'Erreur médicale à Toulouse : comment prouver la faute ?',
    metaTitle: 'Erreur Médicale Toulouse : Prouver la Faute',
    metaDescription:
      "Dossier médical, expertise, faute, lien causal : les étapes pour faire reconnaître une erreur médicale à Toulouse.",
    excerpt:
      "Prouver une erreur médicale suppose de distinguer complication, aléa thérapeutique et faute du professionnel ou de l'établissement.",
    category: 'Erreur médicale',
    publishedAt: '2026-03-18T08:00:00.000Z',
    readTime: 8,
    keywords: ['erreur médicale toulouse', 'avocat erreur médicale toulouse'],
    pillarSlug: 'avocat-erreur-medicale-toulouse',
    situation: "l'erreur médicale",
    audience: 'patients et familles qui suspectent une faute de soin',
    checklist: ['demander le dossier médical complet', 'faire analyser la chronologie', 'préparer une expertise contradictoire'],
    warning: "Un mauvais résultat médical ne suffit pas toujours : il faut établir une faute ou un mécanisme indemnisable.",
    localAngle: 'Les dossiers médicaux toulousains peuvent concerner cliniques, hôpitaux, cabinets libéraux ou parcours de soins multiples.',
  },
  {
    slug: 'infection-nosocomiale-indemnisation-toulouse',
    title: 'Infection nosocomiale : droits et indemnisation de la victime',
    metaTitle: 'Infection Nosocomiale : Indemnisation Victime Toulouse',
    metaDescription:
      "Infection contractée à l'hôpital ou en clinique : responsabilité, ONIAM, expertise et indemnisation de la victime.",
    excerpt:
      "Une infection nosocomiale peut ouvrir droit à indemnisation même lorsque la faute individuelle n'est pas évidente.",
    category: 'Erreur médicale',
    publishedAt: '2026-03-25T08:00:00.000Z',
    readTime: 7,
    keywords: ['infection nosocomiale indemnisation', 'ONIAM Toulouse'],
    pillarSlug: 'avocat-erreur-medicale-toulouse',
    situation: "l'infection nosocomiale",
    audience: 'patients infectés après une hospitalisation ou une intervention',
    checklist: ['identifier la date d’apparition des symptômes', 'obtenir les comptes rendus opératoires', 'faire évaluer les séquelles'],
    warning: "Le lien entre infection et prise en charge doit être documenté médicalement, surtout lorsque plusieurs soins se succèdent.",
    localAngle: 'À Toulouse, le dossier peut impliquer plusieurs établissements et nécessite une lecture précise du parcours médical.',
  },
  {
    slug: 'alea-therapeutique-indemnisation-sans-faute',
    title: 'Aléa thérapeutique : peut-on être indemnisé sans faute médicale ?',
    metaTitle: 'Aléa Thérapeutique : Indemnisation Sans Faute',
    metaDescription:
      "Comprendre l'aléa thérapeutique, les critères de gravité, le rôle de l'ONIAM et la procédure d'indemnisation.",
    excerpt:
      "Certaines complications graves peuvent être indemnisées au titre de la solidarité nationale, même sans faute prouvée.",
    category: 'Erreur médicale',
    publishedAt: '2026-04-01T08:00:00.000Z',
    readTime: 7,
    keywords: ['aléa thérapeutique indemnisation', 'accident médical non fautif'],
    pillarSlug: 'avocat-erreur-medicale-toulouse',
    situation: "l'aléa thérapeutique",
    audience: 'patients victimes d’une complication grave et inhabituelle',
    checklist: ['mesurer la gravité des séquelles', 'rassembler les comptes rendus', 'saisir la bonne procédure'],
    warning: "Tous les aléas ne sont pas indemnisés : les critères de gravité et d'anormalité sont déterminants.",
    localAngle: 'Un avocat à Toulouse peut orienter le patient entre procédure amiable, CCI et action judiciaire.',
  },
  {
    slug: 'procedure-cci-crci-indemnisation-medicale',
    title: "Procédure CCI / CRCI : comment fonctionne l'indemnisation médicale ?",
    metaTitle: 'Procédure CCI CRCI : Indemnisation Accident Médical',
    metaDescription:
      "Saisir la CCI après un accident médical : conditions, étapes, expertise, avis et indemnisation par assureur ou ONIAM.",
    excerpt:
      "La CCI est une voie utile pour certains accidents médicaux, mais elle nécessite un dossier préparé et une expertise solide.",
    category: 'Erreur médicale',
    publishedAt: '2026-04-08T08:00:00.000Z',
    readTime: 8,
    keywords: ['CCI accident médical', 'CRCI indemnisation médicale'],
    pillarSlug: 'avocat-erreur-medicale-toulouse',
    situation: "la procédure CCI",
    audience: 'patients qui veulent une voie amiable après accident médical',
    checklist: ['vérifier les seuils de gravité', 'constituer un dossier médical complet', 'préparer l’audience et l’expertise'],
    warning: "La gratuité apparente de la procédure ne remplace pas une stratégie : l'avis dépend beaucoup de l’expertise.",
    localAngle: "Les victimes toulousaines peuvent être accompagnées pour présenter un dossier cohérent devant l'instance compétente.",
  },
  {
    slug: 'retard-diagnostic-recours-patient',
    title: 'Retard de diagnostic : quels recours pour le patient ?',
    metaTitle: 'Retard de Diagnostic : Recours et Indemnisation',
    metaDescription:
      "Cancer, AVC, fracture, infection : comment établir un retard de diagnostic et demander réparation du préjudice subi.",
    excerpt:
      "Le retard de diagnostic se prouve par une chronologie médicale précise et par l'impact du retard sur les chances de guérison.",
    category: 'Erreur médicale',
    publishedAt: '2026-04-15T08:00:00.000Z',
    readTime: 7,
    keywords: ['retard diagnostic indemnisation', 'avocat erreur diagnostic'],
    pillarSlug: 'avocat-erreur-medicale-toulouse',
    situation: "le retard de diagnostic",
    audience: 'patients dont la prise en charge a été retardée',
    checklist: ['reconstituer la chronologie des consultations', 'identifier les examens manquants', 'évaluer la perte de chance'],
    warning: "L'indemnisation peut porter sur une perte de chance, ce qui demande un raisonnement médical et juridique précis.",
    localAngle: "À Toulouse, les parcours mêlant urgences, médecine de ville et spécialistes exigent une analyse fine des responsabilités.",
  },
  {
    slug: 'accident-chirurgical-quand-contacter-avocat',
    title: 'Accident chirurgical : quand contacter un avocat ?',
    metaTitle: 'Accident Chirurgical : Quand Voir un Avocat ?',
    metaDescription:
      "Complication opératoire, défaut d'information, erreur technique : quand demander l'avis d'un avocat après une chirurgie.",
    excerpt:
      "Après une chirurgie compliquée, l'enjeu est de savoir si le dommage relève d'une faute, d'un défaut d'information ou d'un aléa indemnisable.",
    category: 'Erreur médicale',
    publishedAt: '2026-04-22T08:00:00.000Z',
    readTime: 6,
    keywords: ['accident chirurgical indemnisation', 'avocat accident médical toulouse'],
    pillarSlug: 'avocat-erreur-medicale-toulouse',
    situation: "l'accident chirurgical",
    audience: 'patients opérés avec séquelles ou complications importantes',
    checklist: ['demander le compte rendu opératoire', 'conserver les documents de consentement', 'faire évaluer le dommage actuel'],
    warning: "La distinction entre risque connu et faute technique ne peut pas être tranchée sans lecture médicale du dossier.",
    localAngle: 'Un accompagnement local facilite les échanges avec les établissements et experts intervenant en Haute-Garonne.',
  },
  {
    slug: 'accident-travail-toulouse-droits-salarie',
    title: 'Accident du travail à Toulouse : droits du salarié blessé',
    metaTitle: 'Accident du Travail Toulouse : Droits du Salarié',
    metaDescription:
      "Déclaration, CPAM, arrêt de travail, séquelles, faute inexcusable : les droits du salarié blessé à Toulouse.",
    excerpt:
      "La reconnaissance d'un accident du travail ouvre une prise en charge, mais pas toujours une réparation complète du préjudice.",
    category: 'Accident du travail',
    publishedAt: '2026-04-29T08:00:00.000Z',
    readTime: 8,
    keywords: ['accident du travail toulouse', 'avocat accident travail toulouse'],
    pillarSlug: 'avocat-accident-travail-toulouse',
    situation: "l'accident du travail",
    audience: 'salariés blessés, intérimaires et proches',
    checklist: ['déclarer rapidement l’accident', 'conserver les preuves du contexte', 'évaluer les séquelles après consolidation'],
    warning: "La prise en charge CPAM ne couvre pas automatiquement tous les préjudices personnels de la victime.",
    localAngle: 'Les bassins d’emploi de Toulouse, Blagnac, Colomiers et Labège concentrent de nombreux dossiers industriels et tertiaires.',
  },
  {
    slug: 'faute-inexcusable-employeur-indemnisation',
    title: "Faute inexcusable de l'employeur : définition, preuve et indemnisation",
    metaTitle: "Faute Inexcusable Employeur : Indemnisation Victime",
    metaDescription:
      "Comprendre la faute inexcusable : obligation de sécurité, preuve, procédure et indemnisation complémentaire du salarié.",
    excerpt:
      "La faute inexcusable permet d'obtenir une réparation plus large lorsque l'employeur avait ou aurait dû avoir conscience du danger.",
    category: 'Accident du travail',
    publishedAt: '2026-05-06T08:00:00.000Z',
    readTime: 8,
    keywords: ['faute inexcusable employeur', 'indemnisation accident travail'],
    pillarSlug: 'avocat-accident-travail-toulouse',
    situation: "la faute inexcusable de l'employeur",
    audience: 'salariés victimes d’un manquement de sécurité',
    checklist: ['identifier le danger connu', 'réunir témoins et documents internes', 'chiffrer les préjudices complémentaires'],
    warning: "La preuve se prépare tôt : fiches de poste, alertes, photos, formations et témoignages peuvent être décisifs.",
    localAngle: 'Un dossier toulousain peut impliquer employeur, CPAM, médecin conseil et juridiction sociale.',
  },
  {
    slug: 'accident-trajet-difference-accident-travail',
    title: "Accident de trajet : quelle différence avec l'accident du travail ?",
    metaTitle: 'Accident de Trajet ou Travail : Différences',
    metaDescription:
      "Accident sur le trajet domicile-travail : définition, droits, limites et indemnisation possible de la victime.",
    excerpt:
      "L'accident de trajet obéit à des règles particulières. Il peut être reconnu, mais n'offre pas toujours les mêmes leviers qu'un accident du travail.",
    category: 'Accident du travail',
    publishedAt: '2026-05-13T08:00:00.000Z',
    readTime: 6,
    keywords: ['accident de trajet indemnisation', 'accident trajet toulouse'],
    pillarSlug: 'avocat-accident-travail-toulouse',
    situation: "l'accident de trajet",
    audience: 'salariés blessés sur le chemin du travail',
    checklist: ['prouver le trajet habituel', 'déclarer à l’employeur', 'identifier un tiers responsable éventuel'],
    warning: "Un détour personnel peut compliquer la reconnaissance, mais chaque situation mérite une analyse concrète.",
    localAngle: 'Les trajets autour de Toulouse combinent voiture, transport en commun, vélo et marche, avec des responsabilités parfois croisées.',
  },
  {
    slug: 'maladie-professionnelle-meilleure-indemnisation',
    title: 'Maladie professionnelle : comment obtenir une meilleure indemnisation ?',
    metaTitle: 'Maladie Professionnelle : Meilleure Indemnisation',
    metaDescription:
      "Reconnaissance, taux d'incapacité, faute inexcusable, séquelles : les leviers pour améliorer l'indemnisation.",
    excerpt:
      "La maladie professionnelle peut laisser des séquelles lourdes. La reconnaissance administrative n'est qu'une première étape.",
    category: 'Accident du travail',
    publishedAt: '2026-05-20T08:00:00.000Z',
    readTime: 7,
    keywords: ['maladie professionnelle indemnisation', 'avocat maladie professionnelle'],
    pillarSlug: 'avocat-accident-travail-toulouse',
    situation: "la maladie professionnelle",
    audience: 'salariés exposés à des gestes, produits ou conditions de travail nocives',
    checklist: ['documenter les expositions', 'faire établir le lien médical', 'contester un taux trop faible si nécessaire'],
    warning: "Le taux d'incapacité retenu peut être discuté lorsque les séquelles professionnelles ou personnelles sont sous-évaluées.",
    localAngle: "Les secteurs aéronautique, logistique, santé et BTP en région toulousaine peuvent générer des dossiers très différents.",
  },
  {
    slug: 'expertise-medicale-cpam-se-preparer',
    title: 'Expertise médicale CPAM : comment se préparer ?',
    metaTitle: 'Expertise Médicale CPAM : Préparation Victime',
    metaDescription:
      "Convocation CPAM, médecin conseil, consolidation, taux d'incapacité : préparer son expertise médicale après accident du travail.",
    excerpt:
      "L'expertise médicale CPAM influence la consolidation, le taux d'incapacité et parfois la suite du recours.",
    category: 'Expertise médicale',
    publishedAt: '2026-05-27T08:00:00.000Z',
    readTime: 7,
    keywords: ['expertise médicale CPAM', 'médecin conseil CPAM accident travail'],
    pillarSlug: 'avocat-accident-travail-toulouse',
    situation: "l'expertise médicale CPAM",
    audience: 'victimes convoquées par le médecin conseil',
    checklist: ['apporter examens et comptes rendus', 'décrire les limites quotidiennes', 'demander une copie des conclusions'],
    warning: "Minimiser ses douleurs par pudeur ou fatigue peut conduire à une évaluation trop basse des séquelles.",
    localAngle: 'À Toulouse, l’avocat peut aider à préparer la chronologie et à contester les décisions défavorables.',
  },
  {
    slug: 'victime-agression-toulouse-indemnisation-civi',
    title: "Victime d'agression à Toulouse : indemnisation par la CIVI",
    metaTitle: 'Victime Agression Toulouse : Indemnisation CIVI',
    metaDescription:
      "Agression à Toulouse : dépôt de plainte, certificat médical, CIVI, FGTI et indemnisation des préjudices corporels et moraux.",
    excerpt:
      "La victime d'agression peut être indemnisée même si l'auteur est inconnu, insolvable ou difficile à poursuivre.",
    category: 'Agression',
    publishedAt: '2026-06-03T08:00:00.000Z',
    readTime: 7,
    keywords: ['victime agression toulouse', 'indemnisation CIVI Toulouse'],
    pillarSlug: 'avocat-agression-toulouse',
    situation: "l'agression",
    audience: 'victimes de violences physiques et proches',
    checklist: ['déposer plainte', 'faire constater les blessures', 'saisir la CIVI dans les délais'],
    warning: "Le traumatisme psychologique doit être documenté avec autant de sérieux que les blessures physiques.",
    localAngle: 'Un accompagnement à Toulouse permet de coordonner procédure pénale et indemnisation devant la CIVI.',
  },
  {
    slug: 'auteur-inconnu-insolvable-indemnisation',
    title: 'Auteur inconnu ou insolvable : comment être indemnisé ?',
    metaTitle: 'Auteur Inconnu ou Insolvable : Indemnisation Victime',
    metaDescription:
      "Agression, accident, violences : les solutions lorsque l'auteur est inconnu, non assuré ou insolvable.",
    excerpt:
      "Le responsable n'est pas toujours capable de payer. Des mécanismes d'indemnisation existent pour éviter que la victime reste seule.",
    category: 'Agression',
    publishedAt: '2026-06-10T08:00:00.000Z',
    readTime: 6,
    keywords: ['auteur inconnu indemnisation victime', 'auteur insolvable CIVI'],
    pillarSlug: 'avocat-agression-toulouse',
    situation: "l'auteur inconnu ou insolvable",
    audience: 'victimes qui pensent ne jamais pouvoir être indemnisées',
    checklist: ['conserver la plainte', 'identifier le fonds compétent', 'chiffrer les préjudices sans attendre le paiement de l’auteur'],
    warning: "L'absence d'auteur identifié ne dispense pas de prouver le dommage, les faits et les conséquences.",
    localAngle: 'Les victimes en Haute-Garonne peuvent mobiliser les procédures de fonds de garantie adaptées à leur situation.',
  },
  {
    slug: 'prejudice-moral-agression-evaluation',
    title: 'Préjudice moral après agression : comment est-il évalué ?',
    metaTitle: 'Préjudice Moral Agression : Évaluation et Indemnisation',
    metaDescription:
      "Stress post-traumatique, peur, anxiété, isolement : comment faire reconnaître le préjudice moral après une agression.",
    excerpt:
      "Le préjudice moral n'est pas abstrait : il se documente par les symptômes, le suivi, les changements de vie et l'expertise.",
    category: 'Agression',
    publishedAt: '2026-06-17T08:00:00.000Z',
    readTime: 6,
    keywords: ['préjudice moral agression', 'indemnisation traumatisme agression'],
    pillarSlug: 'avocat-agression-toulouse',
    situation: "le préjudice moral après agression",
    audience: 'victimes avec anxiété, peur ou traumatisme durable',
    checklist: ['consulter un professionnel de santé', 'décrire les changements de comportement', 'présenter le suivi lors de l’expertise'],
    warning: "Sans pièces médicales ou psychologiques, l'assureur ou le fonds peut réduire la portée du traumatisme.",
    localAngle: 'À Toulouse, le dossier peut intégrer les conséquences sur les déplacements, le travail et la vie familiale.',
  },
  {
    slug: 'victime-violences-deposer-plainte-rapidement',
    title: 'Victime de violences : pourquoi déposer plainte rapidement ?',
    metaTitle: 'Victime de Violences : Pourquoi Porter Plainte ?',
    metaDescription:
      "Plainte, certificat médical, ITT, preuves, indemnisation : pourquoi agir vite après des violences physiques.",
    excerpt:
      "La plainte n'est pas seulement pénale. Elle aide aussi à établir les faits pour l'indemnisation de la victime.",
    category: 'Agression',
    publishedAt: '2026-06-24T08:00:00.000Z',
    readTime: 6,
    keywords: ['victime violences porter plainte', 'ITT agression indemnisation'],
    pillarSlug: 'avocat-agression-toulouse',
    situation: "les violences physiques",
    audience: 'victimes hésitant à déposer plainte',
    checklist: ['faire établir un certificat médical', 'conserver messages et témoignages', 'demander conseil avant la phase d’indemnisation'],
    warning: "Attendre trop longtemps peut rendre les preuves plus difficiles à réunir, surtout pour les témoins et les lésions visibles.",
    localAngle: 'Un avocat toulousain peut accompagner la victime sans attendre l’issue complète du pénal.',
  },
  {
    slug: 'chute-magasin-lieu-public-responsabilite',
    title: 'Chute dans un magasin ou lieu public : qui est responsable ?',
    metaTitle: 'Chute Magasin Lieu Public : Responsabilité',
    metaDescription:
      "Sol glissant, escalier dangereux, trottoir abîmé : comment prouver la responsabilité après une chute en lieu public.",
    excerpt:
      "Les chutes de la vie courante sont souvent minimisées, alors qu'elles peuvent provoquer fractures, arrêts de travail et séquelles.",
    category: 'Accidents de la vie',
    publishedAt: '2026-07-01T08:00:00.000Z',
    readTime: 7,
    keywords: ['chute magasin indemnisation', 'chute lieu public toulouse'],
    pillarSlug: 'avocat-accident-vie-toulouse',
    situation: "la chute en lieu public",
    audience: 'personnes blessées dans un commerce, une rue ou un établissement',
    checklist: ['prendre des photos du danger', 'identifier témoins et responsable du lieu', 'faire constater les blessures immédiatement'],
    warning: "La preuve du défaut d'entretien ou de sécurité disparaît vite si le lieu est nettoyé ou réparé.",
    localAngle: 'À Toulouse, les dossiers peuvent concerner commerces, transports, trottoirs, parkings ou établissements recevant du public.',
  },
  {
    slug: 'accident-sport-toulouse-indemnisation',
    title: 'Accident de sport à Toulouse : qui indemnise vos blessures ?',
    metaTitle: 'Accident de Sport Toulouse : Indemnisation',
    metaDescription:
      "Club, salle de sport, faute d'un joueur, matériel défectueux : les recours après une blessure sportive à Toulouse.",
    excerpt:
      "Une blessure sportive n'est pas toujours un simple risque accepté. Une faute, un encadrement insuffisant ou un matériel dangereux peuvent engager une responsabilité.",
    category: 'Accidents de la vie',
    publishedAt: '2026-07-08T08:00:00.000Z',
    readTime: 6,
    keywords: ['accident sport toulouse indemnisation', 'blessure sport avocat'],
    pillarSlug: 'avocat-accident-vie-toulouse',
    situation: "l'accident de sport",
    audience: 'sportifs blessés en club, salle ou compétition',
    checklist: ['décrire les circonstances exactes', 'identifier licence et assurances', 'conserver certificats et témoignages'],
    warning: "L'assurance du club ne défend pas toujours l'intérêt maximal de la victime : il faut lire les garanties.",
    localAngle: 'Le dynamisme sportif toulousain multiplie les situations : rugby, football, escalade, vélo, sports en salle.',
  },
  {
    slug: 'accident-vie-privee-garantie-gav',
    title: 'Accident de la vie privée : comment fonctionne la garantie GAV ?',
    metaTitle: 'Garantie Accident de la Vie GAV : Indemnisation',
    metaDescription:
      "Chute à domicile, bricolage, accident familial : comprendre la garantie accidents de la vie et ses limites.",
    excerpt:
      "La GAV peut indemniser certains accidents sans tiers responsable, mais les contrats prévoient des seuils et exclusions importantes.",
    category: 'Accidents de la vie',
    publishedAt: '2026-07-15T08:00:00.000Z',
    readTime: 7,
    keywords: ['garantie accident de la vie indemnisation', 'GAV accident domestique'],
    pillarSlug: 'avocat-accident-vie-toulouse',
    situation: "l'accident de la vie privée",
    audience: 'victimes d’un accident domestique ou familial',
    checklist: ['retrouver le contrat GAV', 'vérifier les seuils d’intervention', 'faire évaluer les séquelles avant transaction'],
    warning: "La garantie peut exclure certains sports, certains taux d'incapacité ou limiter fortement les postes indemnisés.",
    localAngle: 'Un avocat peut relire le contrat et discuter l’évaluation proposée par l’assureur depuis Toulouse.',
  },
  {
    slug: 'expertise-medicale-dommage-corporel-toulouse',
    title: "L'expertise médicale en dommage corporel à Toulouse : guide complet",
    metaTitle: 'Expertise Médicale Dommage Corporel Toulouse',
    metaDescription:
      "Comment se déroule une expertise médicale ? Préparation, médecin de recours, pièges et conséquences sur l'indemnisation.",
    excerpt:
      "L'expertise médicale est souvent le moment où se joue le montant final de l'indemnisation.",
    category: 'Expertise médicale',
    publishedAt: '2026-07-22T08:00:00.000Z',
    readTime: 9,
    keywords: ['expertise médicale dommage corporel toulouse', 'médecin de recours toulouse'],
    pillarSlug: 'indemnisation-dommage-corporel-toulouse',
    situation: "l'expertise médicale en dommage corporel",
    audience: 'victimes convoquées par un expert d’assurance ou judiciaire',
    checklist: ['préparer une chronologie', 'apporter toutes les pièces', 'ne pas rester seul si les séquelles sont importantes'],
    warning: "Une expertise mal préparée peut sous-évaluer durablement les souffrances, l'aide humaine et l'incidence professionnelle.",
    localAngle: 'À Toulouse, la coordination entre avocat et médecin de recours peut être déterminante pour rééquilibrer le débat.',
  },
  {
    slug: 'medecin-recours-victime-role',
    title: 'Médecin de recours : pourquoi il peut changer votre indemnisation',
    metaTitle: 'Médecin de Recours Victime : Rôle et Utilité',
    metaDescription:
      "Le médecin de recours assiste la victime face au médecin d'assurance. Découvrez son rôle dans les dossiers corporels.",
    excerpt:
      "Le médecin de recours parle le même langage que l'expert et aide à faire reconnaître les séquelles que la victime exprime mal.",
    category: 'Expertise médicale',
    publishedAt: '2026-07-29T08:00:00.000Z',
    readTime: 6,
    keywords: ['médecin de recours victime', 'médecin expert assurance'],
    pillarSlug: 'indemnisation-dommage-corporel-toulouse',
    situation: "l'assistance par médecin de recours",
    audience: 'victimes avec séquelles importantes ou dossier contesté',
    checklist: ['transmettre le dossier médical complet', 'préparer les doléances', 'comparer les conclusions avec la réalité quotidienne'],
    warning: "Le médecin missionné par l'assurance n'est pas votre conseil : son rapport doit être discuté techniquement.",
    localAngle: 'Les cabinets spécialisés à Toulouse travaillent souvent avec des médecins de recours habitués au dommage corporel.',
  },
  {
    slug: 'consolidation-medicale-definition-indemnisation',
    title: 'Consolidation médicale : pourquoi cette date est décisive ?',
    metaTitle: 'Consolidation Médicale : Définition et Indemnisation',
    metaDescription:
      "La consolidation fixe le moment où les séquelles sont évaluables. Comprendre son impact sur l'offre d'indemnisation.",
    excerpt:
      "La consolidation ne signifie pas guérison. Elle marque le moment où les séquelles peuvent être évaluées durablement.",
    category: 'Expertise médicale',
    publishedAt: '2026-08-05T08:00:00.000Z',
    readTime: 6,
    keywords: ['consolidation médicale indemnisation', 'date consolidation accident'],
    pillarSlug: 'indemnisation-dommage-corporel-toulouse',
    situation: "la consolidation médicale",
    audience: 'victimes qui reçoivent une date de consolidation ou une offre',
    checklist: ['vérifier que l’état est stabilisé', 'signaler les soins encore nécessaires', 'ne pas confondre reprise du travail et consolidation'],
    warning: "Une consolidation trop précoce peut réduire l'évaluation des séquelles futures.",
    localAngle: 'Un avocat à Toulouse peut solliciter une nouvelle discussion médicale si la date proposée paraît prématurée.',
  },
  {
    slug: 'bareme-indemnisation-dommage-corporel-ipp-aipp',
    title: "Barème d'indemnisation du dommage corporel : comprendre l'IPP, l'AIPP et les postes de préjudice",
    metaTitle: 'Barème Indemnisation Dommage Corporel : IPP AIPP',
    metaDescription:
      "IPP, AIPP, DFP, souffrances endurées, préjudice esthétique : comprendre les barèmes et postes d'indemnisation.",
    excerpt:
      "Les barèmes donnent des repères, mais l'indemnisation sérieuse part de la vie réelle de la victime.",
    category: 'Indemnisation',
    publishedAt: '2026-08-12T08:00:00.000Z',
    readTime: 9,
    keywords: ['barème indemnisation dommage corporel', 'IPP AIPP indemnisation'],
    pillarSlug: 'indemnisation-dommage-corporel-toulouse',
    situation: "le barème d'indemnisation",
    audience: 'victimes qui veulent comprendre le calcul proposé',
    checklist: ['distinguer temporaire et permanent', 'chiffrer chaque poste', 'relier les montants aux preuves du dossier'],
    warning: "Un taux médical ne résume pas une vie : profession, loisirs, autonomie et douleurs doivent être intégrés.",
    localAngle: 'Les juridictions et négociations à Toulouse s’appuient sur des références nationales, adaptées au dossier concret.',
  },
  {
    slug: 'prejudice-professionnel-perte-revenus-accident',
    title: 'Préjudice professionnel et perte de revenus après accident : comment les calculer ?',
    metaTitle: 'Perte de Revenus Après Accident : Indemnisation',
    metaDescription:
      "Arrêt de travail, perte de primes, reconversion, incidence professionnelle : calculer le préjudice économique après accident.",
    excerpt:
      "Le dommage corporel peut bouleverser une carrière. La perte de revenus ne se limite pas aux salaires déjà manqués.",
    category: 'Indemnisation',
    publishedAt: '2026-08-19T08:00:00.000Z',
    readTime: 8,
    keywords: ['perte revenus accident indemnisation', 'incidence professionnelle dommage corporel'],
    pillarSlug: 'indemnisation-dommage-corporel-toulouse',
    situation: "le préjudice professionnel",
    audience: 'salariés, indépendants et dirigeants blessés',
    checklist: ['réunir bulletins et bilans', 'évaluer primes et perspectives', 'documenter la pénibilité ou reconversion'],
    warning: "Les indépendants doivent préparer des preuves économiques solides pour éviter une sous-évaluation.",
    localAngle: 'Dans l’écosystème toulousain, l’impact peut toucher aéronautique, santé, commerce, BTP ou professions libérales.',
  },
  {
    slug: 'aide-humaine-tierce-personne-indemnisation',
    title: "Aide humaine et tierce personne : comment l'indemnisation est calculée ?",
    metaTitle: 'Aide Humaine Tierce Personne : Indemnisation',
    metaDescription:
      "Aide familiale, auxiliaire de vie, perte d'autonomie : comment faire indemniser la tierce personne après accident.",
    excerpt:
      "L'aide apportée par les proches a une valeur indemnisable, même lorsqu'elle n'a pas été facturée.",
    category: 'Indemnisation',
    publishedAt: '2026-08-26T08:00:00.000Z',
    readTime: 7,
    keywords: ['aide humaine indemnisation', 'tierce personne dommage corporel'],
    pillarSlug: 'indemnisation-dommage-corporel-toulouse',
    situation: "l'aide humaine après accident",
    audience: 'victimes en perte d’autonomie et proches aidants',
    checklist: ['noter les heures d’aide', 'décrire les gestes concernés', 'prévoir les besoins futurs'],
    warning: "L'aide familiale est souvent oubliée par les victimes, alors qu'elle peut représenter un poste majeur.",
    localAngle: 'Un dossier toulousain peut intégrer les contraintes de logement, transports, travail et soutien familial local.',
  },
];

function list(items: string[]) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
}

const pillarLabels: Record<string, string> = {
  'meilleurs-avocats-dommage-corporel-toulouse': 'choisir un avocat en dommage corporel à Toulouse',
  'avocat-accident-route-toulouse': 'accident de la route à Toulouse',
  'avocat-erreur-medicale-toulouse': 'erreur médicale et accident médical',
  'avocat-accident-travail-toulouse': 'accident du travail à Toulouse',
  'avocat-agression-toulouse': "victime d'agression à Toulouse",
  'avocat-accident-vie-toulouse': 'accident de la vie à Toulouse',
  'indemnisation-dommage-corporel-toulouse': "indemnisation du dommage corporel à Toulouse",
};

const internalLinksByCategory: Record<string, { label: string; href: string }[]> = {
  'Meilleur avocat': [
    { label: 'les critères pour choisir le meilleur avocat', href: '/meilleurs-avocats-dommage-corporel-toulouse' },
    { label: "le guide de l'indemnisation du dommage corporel", href: '/indemnisation-dommage-corporel-toulouse' },
  ],
  'Accident de la route': [
    { label: 'le guide accident de la route à Toulouse', href: '/avocat-accident-route-toulouse' },
    { label: "le guide de l'indemnisation corporelle", href: '/indemnisation-dommage-corporel-toulouse' },
  ],
  'Erreur médicale': [
    { label: 'le guide erreur médicale à Toulouse', href: '/avocat-erreur-medicale-toulouse' },
    { label: "le rôle de l'expertise médicale", href: '/blog/expertise-medicale-dommage-corporel-toulouse' },
  ],
  'Accident du travail': [
    { label: 'le guide accident du travail à Toulouse', href: '/avocat-accident-travail-toulouse' },
    { label: "la faute inexcusable de l'employeur", href: '/blog/faute-inexcusable-employeur-indemnisation' },
  ],
  Agression: [
    { label: "le guide victime d'agression à Toulouse", href: '/avocat-agression-toulouse' },
    { label: "l'indemnisation via la CIVI", href: '/blog/victime-agression-toulouse-indemnisation-civi' },
  ],
  'Accidents de la vie': [
    { label: 'le guide accident de la vie à Toulouse', href: '/avocat-accident-vie-toulouse' },
    { label: 'la chute en magasin ou lieu public', href: '/blog/chute-magasin-lieu-public-responsabilite' },
  ],
  'Expertise médicale': [
    { label: "le guide de l'expertise médicale", href: '/blog/expertise-medicale-dommage-corporel-toulouse' },
    { label: "le guide de l'indemnisation corporelle", href: '/indemnisation-dommage-corporel-toulouse' },
  ],
  Indemnisation: [
    { label: "le guide de l'indemnisation du dommage corporel", href: '/indemnisation-dommage-corporel-toulouse' },
    { label: "le barème d'indemnisation IPP/AIPP", href: '/blog/bareme-indemnisation-dommage-corporel-ipp-aipp' },
  ],
};

function authorityResource(seed: ArticleSeed) {
  if (seed.category === 'Accident de la route') {
    return {
      label: 'la loi Badinter sur Legifrance',
      url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000693032/',
    };
  }
  if (seed.category === 'Erreur médicale') {
    return {
      label: 'la procédure CCI sur Justice.fr',
      url: 'https://www.justice.fr/fiche/saisir-commission-cci-cas-accident-medical-infection-nosocomiale',
    };
  }
  if (seed.category === 'Accident du travail' || seed.slug.includes('maladie-professionnelle')) {
    return {
      label: "l'indemnisation de l'accident du travail sur Service-Public.fr",
      url: 'https://www.service-public.fr/particuliers/vosdroits/F14840',
    };
  }
  if (seed.category === 'Agression') {
    return {
      label: "l'indemnisation des victimes d'infraction sur Justice.fr",
      url: 'https://www.justice.fr/fiche/victime-infraction-indemnisation-fonds-garantie-victimes',
    };
  }
  if (seed.slug.includes('conducteur-non-assure') || seed.slug.includes('civi')) {
    return {
      label: 'le Fonds de garantie des victimes',
      url: 'https://www.fondsdegarantie.fr/',
    };
  }
  return {
    label: "la fiche Justice.fr sur l'indemnisation du préjudice",
    url: 'https://www.justice.fr/fiche/indemnisation-prejudice',
  };
}

function seoLinks(seed: ArticleSeed) {
  const resource = authorityResource(seed);
  const pillarHref = seed.pillarSlug ? `/${seed.pillarSlug}` : '/indemnisation-dommage-corporel-toulouse';
  const pillarLabel = seed.pillarSlug ? pillarLabels[seed.pillarSlug] : "l'indemnisation du dommage corporel";
  const links = [
    { label: `notre page pilier sur ${pillarLabel}`, href: pillarHref },
    ...(internalLinksByCategory[seed.category] || []),
  ]
    .filter((link) => link.href !== `/blog/${seed.slug}`)
    .filter((link, index, all) => all.findIndex((candidate) => candidate.href === link.href) === index)
    .slice(0, 3);

  return `
    <h2>Ressources officielles et guides liés</h2>
    <p>Pour vérifier le cadre général, consultez aussi <a href="${resource.url}" target="_blank" rel="noopener">${resource.label}</a>. Cette source officielle ne remplace pas l'analyse d'un dossier, mais elle permet de comprendre les grands principes applicables.</p>
    <p>Pour continuer votre lecture sur ce site, vous pouvez consulter :</p>
    <ul>
      ${links.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
    </ul>
  `;
}

function buildContent(seed: ArticleSeed) {
  return `
    <p>${seed.excerpt}</p>
    <h2>Pourquoi ${seed.situation} doit être traité avec méthode</h2>
    <p>En dommage corporel, la question centrale n'est pas seulement de savoir qui a tort ou qui a raison. Il faut surtout prouver l'étendue du dommage, relier chaque conséquence à l'événement et transformer une situation médicale en demande d'indemnisation précise. Pour ${seed.audience}, cette méthode évite les oublis qui coûtent cher.</p>
    <p>${seed.localAngle}</p>
    <h2>Les premières démarches à effectuer</h2>
    <p>Un dossier solide commence avec des pièces simples, mais réunies au bon moment. Les preuves médicales, administratives et personnelles doivent raconter la même histoire : l'accident, les soins, les séquelles et les conséquences concrètes.</p>
    ${list(seed.checklist)}
    <h2>Le piège le plus fréquent</h2>
    <p>${seed.warning}</p>
    <p>Il est donc préférable de demander un avis avant de signer une transaction, d'accepter une expertise non préparée ou de répondre seul à un courrier technique. Une phrase maladroite, une pièce manquante ou une consolidation trop rapide peuvent réduire l'indemnisation finale.</p>
    <h2>Pourquoi faire intervenir un avocat en dommage corporel</h2>
    <p>Un avocat spécialisé défend la victime face aux assureurs, prépare l'expertise médicale, discute les responsabilités et chiffre les préjudices selon la nomenclature Dintilhac. Il peut aussi coordonner l'intervention d'un médecin de recours lorsque les séquelles sont importantes ou contestées.</p>
    <p>À Toulouse et en Occitanie, l'accompagnement local permet de suivre le dossier de près, d'organiser les rendez-vous utiles et de construire une stratégie adaptée aux juridictions, experts et assureurs concernés.</p>
    ${seoLinks(seed)}
    <div class="cta-block">
      <h3>Besoin d'un avis sur votre dossier ?</h3>
      <p>Le cabinet NA Avocats accompagne les victimes en dommage corporel à Toulouse. Une analyse rapide permet souvent d'éviter une offre trop basse ou une expertise mal préparée.</p>
      <a href="https://na-avocats.fr/" target="_blank" rel="noopener">Contacter NA Avocats</a>
    </div>
    <h2>À retenir</h2>
    <p>Chaque dossier dépend de ses preuves, de la gravité des blessures et de l'impact dans la vie de la victime. Plus le dossier est préparé tôt, plus la discussion avec l'assureur ou le responsable peut être équilibrée.</p>
  `;
}

export function getAllArticles(): Article[] {
  return seeds
    .map((seed) => ({ ...seed, content: buildContent(seed) }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const all = getAllArticles();
  const current = all.find((article) => article.slug === slug);
  if (!current) return all.slice(0, limit);

  const samePillar = all.filter((article) => article.slug !== slug && article.pillarSlug === current.pillarSlug);
  const sameCategory = all.filter(
    (article) => article.slug !== slug && article.category === current.category && article.pillarSlug !== current.pillarSlug
  );
  const others = all.filter(
    (article) => article.slug !== slug && article.category !== current.category && article.pillarSlug !== current.pillarSlug
  );

  return [...samePillar, ...sameCategory, ...others].slice(0, limit);
}

export function getArticlesByPillar(pillarSlug: string, limit = 6): Article[] {
  return getAllArticles().filter((article) => article.pillarSlug === pillarSlug).slice(0, limit);
}
