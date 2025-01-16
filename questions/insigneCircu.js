const reponseEmbleme = ['Administration Économique et Sociale', 'Architecture', 'Archéologie', 'Arts du spectacle', 'Arts numériques', 'Audiovisuel', 'Bachelor (RNCP)', 'Beaux-arts, Arts plastiques', 'BTS', 'Chirurgie dentaire', 
'Classes préparatoires', 'Écoles de commerce, gestion, journalisme, communication', 'Droit', 'DU', 'BUT', 'Écoles d’ingénieurs', 'Études courtes de santé', 'Filières sportives', 'Géographie', 
'Histoire', 'Histoire de l’art et Archéologie', 'Infirmier', 'IAE', 'IUP', 'Kiné', 'LAS, majoritaire', 'Langues/lettres', 'Médecine', 'MEEF', 'Musique, Musicologie', 'Œnologie', 'Ostéopathie', 
'Paramédical', 'PASS', 'Pharmacie', 'Philosophie', 'Préparateurs en pharmacie', 'Psychologie', 'Sage-femme', 'Sciences', 'Sciences économiques, Gestion', 'Sciences politiques', 'Sciences sociales', 'Sociologie', 'Vétérinaire'];


const reponseInsigneCircu = ['année commencée', 'major de promotion', 'année redoublée', 'année blanche/sabbatique/année de césure', 'fin de cycle, pas de diplôme correspondant', 
'diplôme obtenu', 'échec aux examens et réussite aux rattrapages', 'abandon ou réorientation', 'validées par équivalence', 'années en alternance', 'service militaire ou service civique', 
'cursus exemplaire', 'perte ou vol de la faluche']

const insigneCircuQuestions = [
    {
        question: 'Sur le ruban circulaire, à quel bac correspond "Ɣ"',
        correctAnswer: 'Bac général',
        possibleAnswers: ['Bac général', 'Bac International', 'Autres bacs', 'Capacitaire', 'DAEU'],
        wrongMessage: 'Bac général',
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quel bac correspond la lettre "i" après le bac principal',
        correctAnswer: 'Bac International',
        possibleAnswers: ['Bac général', 'Bac International', 'Autres bacs', 'Capacitaire', 'DAEU'],
        wrongMessage: 'Bac International',
        image: ""
    },
    {
        question: "Sur le ruban circulaire, quel bac a t'on fait quand il n'y a que des lettres ou initiales",
        correctAnswer: 'Autres bacs',
        possibleAnswers: ['Bac général', 'Bac International', 'Autres bacs', 'Capacitaire', 'DAEU'],
        wrongMessage: 'Autres bacs',
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quel bac correspond la lettre "C"',
        correctAnswer: 'Capacitaire',
        possibleAnswers: ['Bac général', 'Bac International', 'Autres bacs', 'Capacitaire', 'DAEU'],
        wrongMessage: 'Capacitaire',
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quel bac correspond les lettres DAEU',
        correctAnswer: 'DAEU',
        possibleAnswers: ['Bac général', 'Bac International', 'Autres bacs', 'Capacitaire', 'DAEU'],
        wrongMessage: "DAEU (Diplôme d'accès aux études universitaires)",
        image: ""
    },
    
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspondent les lettres "AES" ',
        correctAnswer: 'Administration Économique et Sociale',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Administration Économique et Sociale",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Équerre & Compas"',
        correctAnswer: 'Architecture',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Architecture",
        image: "images/insigne-equerre-et-compas.jpg"
    },
    
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Masque de comédie"',
        correctAnswer: 'Arts du spectacle',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Arts du spectacle",
        image: "images/insigne-masque.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "@"',
        correctAnswer: 'Arts numériques',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Arts numériques",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Clap de cinéma"',
        correctAnswer: 'Audiovisuel',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Audiovisuel",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "β"',
        correctAnswer: 'Bachelor (RNCP)',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Bachelor (RNCP)",
        image: "images/insigne-beta.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Palette & Pinceau"',
        correctAnswer: 'Beaux-arts, Arts plastiques',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Beaux-arts, Arts plastiques",
        image: "images/insigne-pallette.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspondent les lettres "BTS" ',
        correctAnswer: 'BTS',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "BTS",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Molaire"',
        correctAnswer: 'Chirurgie dentaire',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Chirurgie dentaire",
        image: "images/insigne-molaire.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Chouette bicéphale"',
        correctAnswer: 'Classes préparatoires',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Classes préparatoires",
        image: "images/insigne-chouette-2-faces.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Caducée de Mercure" sur satin rouge & vert',
        correctAnswer: 'Écoles de commerce, gestion, journalisme, communication',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Écoles de commerce, gestion, journalisme, communication",
        image: "images/insigne-caducee-commerce.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Glaive & Balance"',
        correctAnswer: 'Droit',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Droit",
        image: "images/insigne-balance.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspondent les lettres "DU" ',
        correctAnswer: 'DU',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "DU",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspondent les lettres "BUT" ',
        correctAnswer: 'BUT',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "BUT",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Étoile & Foudre"',
        correctAnswer: 'Écoles d’ingénieurs',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Écoles d’ingénieurs",
        image: "images/insigne-etoile-et-foudre.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Squelette"',
        correctAnswer: 'Études courtes de santé',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Études courtes de santé",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Coq"',
        correctAnswer: 'Filières sportives',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Filières sportives",
        image: "images/insigne-coq.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Globe"',
        correctAnswer: 'Géographie',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Géographie",
        image: "images/insigne-globe-1.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Casque de Périclès"',
        correctAnswer: 'Histoire',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Histoire",
        image: "images/insigne-pericles.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Tête de Sphinx"',
        correctAnswer: 'Histoire de l’art et Archéologie',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Histoire de l’art et Archéologie",
        image: "images/insigne-sphynx.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Caducée infirmier"',
        correctAnswer: 'Infirmier',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Infirmier",
        image: "images/insigne-infirmier.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspondent les lettres "IAE" ',
        correctAnswer: 'IAE',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "IAE",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspondent les lettres "IUP" ',
        correctAnswer: 'IUP',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "IUP",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Caducée de Mercure" sur velours rose',
        correctAnswer: 'Kiné',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Kiné",
        image: "images/insigne-caducee-commerce.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond Emblème de la discipline ',
        correctAnswer: 'LAS, majoritaire',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "LAS, majoritaire",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Livre ouvert & Plume"',
        correctAnswer: 'Langues/lettres',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Langues/lettres",
        image: "images/insigne-livre-ouvert-plume.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Caducée médecine" ',
        correctAnswer: 'Médecine',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Médecine",
        image: "images/insigne-caducee-commerce.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Plume" ',
        correctAnswer: 'MEEF',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "MEEF",
        image: "images/insigne-plume.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Lyre" ',
        correctAnswer: 'Musique, Musicologie',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Musique, Musicologie",
        image: "images/insigne-lyre.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Grappe de raisin" ',
        correctAnswer: 'Œnologie',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Œnologie",
        image: "images/insigne-grappe-raisin.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Sphénoïde" ',
        correctAnswer: 'Ostéopathie',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Ostéopathie",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Ciseaux" ',
        correctAnswer: 'Paramédical',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Paramédical",
        image: "images/insigne-cisseau.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Tête de mort sur fémurs croisés" ',
        correctAnswer: 'PASS',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "PASS",
        image: "images/insigne-tete-mort-croise-femurs.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Caducée de pharmacie" ',
        correctAnswer: 'Pharmacie',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Pharmacie",
        image: "images/caducee-pharmacie-1.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Ɣ" ',
        correctAnswer: 'Philosophie ',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Philosophie ",
        image: "images/insigne-psi.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Mortier & Pilon" ',
        correctAnswer: 'Préparateurs en pharmacie',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Préparateurs en pharmacie",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "ψ" ',
        correctAnswer: 'Psychologie',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Psychologie",
        image: "images/insigne-psy.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Croix d’Ânkh" ',
        correctAnswer: 'Sage-femme',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Sage-femme",
        image: "images/insigne-croix-de-ankh.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Palmes croisées de chêne & de laurier" + initiales de la discipline ',
        correctAnswer: 'Sciences',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Sciences",
        image: "images/insigne-palme-des-sciences.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Caducée de Mercure" sur satin orange ',
        correctAnswer: 'Sciences économiques, Gestion',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Sciences économiques, Gestion",
        image: "images/insigne-caducee-commerce.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Parapluie" ',
        correctAnswer: 'Sciences politiques',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Sciences politiques",
        image: "images/insigne-parapluie.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspondent les initiales de la discipline sur satin jaune ',
        correctAnswer: 'Sciences sociales',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Sciences sociales",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Grenouille" ',
        correctAnswer: 'Sociologie',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Sociologie",
        image: "images/insigne-grenouille.jpg"
    },
    {
        question: 'Sur le ruban circulaire, à quelle discipline correspond l’emblème "Tête de cheval" ',
        correctAnswer: 'Vétérinaire',
        possibleAnswers: reponseEmbleme,
        wrongMessage: "Vétérinaire",
        image: "images/insigne-tete-de-cheval.jpg"
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "étoile dorée" ',
        correctAnswer: 'année commencée',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "année commencée",
        image: "images/insigne-etoile-or-B.jpg"
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "large palme" placée à côté de l’étoile de l’année et/ou des palmes de diplôme ',
        correctAnswer: 'major de promotion',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "major de promotion",
        image: "images/insigne-palme-major.jpg"
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "étoile argentée" ',
        correctAnswer: 'année redoublée',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "année redoublée",
        image: "images/insigne-etoile-argent-B.jpg"
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "zéro" ',
        correctAnswer: 'année blanche/sabbatique/année de césure',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "année blanche/sabbatique/année de césure",
        image: ""
    },
    {
        question: 'Quel est le support sur lequel est placée la première étoile pour les étudiants inscrits dans une faculté ou un établissement public ?',
        correctAnswer: 'moivre bleu',
        possibleAnswers: ['moivre bleu', 'moivre blanc', 'moivre noir'],
        wrongMessage: "moivre bleu",
        image: ""
    },
    {
        question: 'Quel est le support sur lequel est placée la première étoile pour les étudiants inscrits dans une faculté ou un établissement privé ?',
        correctAnswer: 'moivre blanc',
        possibleAnswers: ['moivre bleu', 'moivre blanc', 'moivre noir'],
        wrongMessage: "moivre blanc",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "simple palme" à la fin d’un cycle ?',
        correctAnswer: 'fin de cycle, pas de diplôme correspondant',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "fin de cycle, pas de diplôme correspondant",
        image: "images/insigne-palme-lycee.jpg"
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "double palme croisée de lauriers" ',
        correctAnswer: 'diplôme obtenu',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "diplôme obtenu",
        image: "images/insigne-palme-diplome.jpg"
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "tête de vache" à côté de l’étoile de l’année ',
        correctAnswer: 'échec aux examens et réussite aux rattrapages',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "échec aux examens et réussite aux rattrapages",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "tête de mort" à côté de l’étoile de l’année ',
        correctAnswer: 'abandon ou réorientation',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "abandon ou réorientation",
        image: "images/insigne-tete-vache.jpg"
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond la lettre "e" remplaçant l’étoile. ',
        correctAnswer: 'validées par équivalence',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "validées par équivalence",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond la lettre "a" en dessous de l’étoile correspondante. ',
        correctAnswer: 'années en alternance',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "années en alternance",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, que place t on sous l’étoile de l’année d’étude si une partie quelconque de celle-ci se déroule à l’étranger." ',
        correctAnswer: 'drapeau du pays',
        possibleAnswers: ['drapeau du pays', 'la lettre "e"', 'rien'],
        wrongMessage: "drapeau du pays",
        image: ""
    },
    {
        question: 'Sur le ruban circulaire, que veux dire une quille qui pend du ruban à un endroit du cursus ?',
        correctAnswer: 'service militaire ou service civique',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "service militaire ou service civique",
        image: "images/insigne-quille.jpg"
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "abeille" ',
        correctAnswer: 'cursus exemplaire',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "cursus exemplaire",
        image: "images/insigne-abeille-222x300.jpg"
    },
    {
        question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond le moivre noir sous une étoile?',
        correctAnswer: 'perte ou vol de la faluche',
        possibleAnswers: reponseInsigneCircu,
        wrongMessage: "perte ou vol de la faluche",
        image: ""
    },
    /*
    {
        question: "",
        correctAnswer: "",
        possibleAnswers: ["",],
        wrongMessage: "" ,
        image: ""
    },
    
    */
];

export default insigneCircuQuestions;