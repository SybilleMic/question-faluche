const reponseInsignePP = ["Amour de la photographie", "Personne abstème", "Amour de l’Histoire", "Célibataire", "Cœur pris dans l’antichambre du mariage", "Amour de la bonne bière",
    "Oiseau de nuit", "n’a pas été intégré(e)", "a été intégré(e)", "Amour des grands espaces", "Radin", "Chanceux aux examens", 
    "Amour des nouvelles technologies, de l’informatique et/ou des sciences", "Chanceux", "Perte de la virginité", "Amour des plaisirs de la table", "Amour de la géographie",
    "Amour du bon vin", "Amour des arts musicaux", "Amour des arts de la scène et du cinéma", "Gros dormeur", "Amour des arts plastiques", "Marié(e) ou pacsé(é)", 
    "Amour des arts littéraires", "Polyglotte", "Fin⸱e baiseu⸱r⸱se", "Éjaculateur précoce", "Acte laborieux et difficile", "Excellence sportive universitaire", 
    "Dignité dans l’ivresse", "Cuite certifiée", "Coma éthylique certifié", "Digne chanteur de paillarde", "Grande gueule sachant l’ouvrir", "Grand charmeur devant l’éternel", 
    "BT imposé", "Cordon bleu", "Prise de guerre", "Gardien des traditions", "Personne lourde", "A vomi dans sa faluche", "A vomi dans sa faluche et l’a remise sur sa tête", 
    "Personne très chaude", "Quémandeur d’insignes", "Nuit passée au poste pour motif étudiant", "Grand hébergeur", "Conducteur de fin de soirée", "Travail et minutie associative",
];

const insignePPQuestions = [
    {
        question: "Que signifie cet insigne : appareil photo",
        correctAnswer: "Amour de la photographie",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Amour de la photographie",
        image: ""
    },
    {
        question: "Que signifie l'insigne bacchus troué ?",
        correctAnswer: "Personne abstème",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Personne abstème",
        image: ""
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Amour de l’Histoire",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Casque de Périclès : Amour de l’Histoire",
        image: "images/insigne-pericles.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Célibataire",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Chameau à l'endroit : Célibataire",
        image: "images/chameau1.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Cœur pris dans l’antichambre du mariage",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Chameau à l'envers : Cœur pris dans l’antichambre du mariage",
        image: "images/chameau2.jpg"
    },
    {
        question: "Que signifie l'insigne choppe de bière ?",
        correctAnswer: "Amour de la bonne bière",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Amour de la bonne bière",
        image: ""
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Oiseau de nuit",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Oiseau de nuit",
        image: "images/insigne-chouette.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "n’a pas été intégré(e)",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "n’a pas été intégré(e)",
        image: "images/insigne-cochon.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "a été intégré(e)",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "a été intégré(e)",
        image: "images/cochon2.jpg"
    },
    {
        question: "Que signifie l'insigne épervier ?",
        correctAnswer: "Amour des grands espaces",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Amour des grands espaces",
        image: ""
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Radin",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Radin",
        image: "images/insigne-epi-de-ble.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Chanceux aux examens",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Chanceux aux examens",
        image: "images/insigne-faucille-epi-ble.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Amour des nouvelles technologies, de l’informatique et/ou des sciences",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Amour des nouvelles technologies, de l’informatique et/ou des sciences",
        image: "images/insigne-etoile-et-foudre.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Chanceux",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Chanceux",
        image: "images/insigne-fer-a-cheval.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Perte de la virginité",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Perte de la virginité",
        image: "images/insigne-feuille-de-vigne.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Amour des plaisirs de la table",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Amour des plaisirs de la table",
        image: "images/insigne-fourchette.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Amour de la géographie",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Amour de la géographie",
        image: "images/insigne-globe-1.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Amour du bon vin",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Amour du bon vin",
        image: "images/insigne-grappe-raisin.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Amour des arts musicaux",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Lyre : Amour des arts musicaux",
        image: "images/insigne-lyre.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Amour des arts de la scène et du cinéma",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Masque de comédie : Amour des arts de la scène et du cinéma",
        image: "images/insigne-masque.jpg"
    },
    {
        question: "Que signifie l'insigne nounours ?",
        correctAnswer: "Gros dormeur",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Gros dormeur",
        image: ""
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Amour des arts plastiques",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Palette vernie : Amour des arts plastiques",
        image: "images/insigne-pallette.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Marié(e) ou pacsé(é)",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Pendu : Marié(e) ou pacsé(é)",
        image: "images/insigne-pendue.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Amour des arts littéraires",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Plume : Amour des arts littéraires",
        image: "images/insigne-plume.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Polyglotte",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Tête de sphinx : Polyglotte",
        image: "images/insigne-sphynx.jpg"
    },
    {
        question: "Que signifient ces insignes ?",
        correctAnswer: "Fin⸱e baiseu⸱r⸱se",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "épée/pensée : Fin⸱e baiseu⸱r⸱se",
        image: "images/épée-pensée.jpg",
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Éjaculateur précoce",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Éjaculateur précoce",
        image: "images/insigne-fleche.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Acte laborieux et difficile",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Lime : Acte laborieux et difficile",
        image: "images/insigne-lime.jpg"
    },
    {
        question: "Que signifie l'insigne anneaux olympiques ?",
        correctAnswer: "Excellence sportive universitaire",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Excellence sportive universitaire",
        image: ""
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Dignité dans l’ivresse",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Bacchus : Dignité dans l’ivresse",
        image: "images/insigne-bacchus.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Cuite certifiée",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Bouteille de Bordeaux : Cuite certifiée",
        image: "images/insigne-bouteille.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Coma éthylique certifié",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Coma éthylique certifié",
        image: "images/insigne-bouteille-champagne.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Digne chanteur de paillarde",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Clé de sol : Digne chanteur de paillarde",
        image: "images/insigne-cle-de-sol-B-189x300.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Grande gueule sachant l’ouvrir",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Grande gueule sachant l’ouvrir",
        image: "images/insigne-coq.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Grand charmeur devant l’éternel",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Cor de chasse : Grand charmeur devant l’éternel",
        image: "images/insigne-cor-de-chasse.jpg"
    },
    {
        question: "Que signifie l'insigne entonnoir ?",
        correctAnswer: "BT imposé",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "BT imposé",
        image: ""
    },
    {
        question: "Que signifie cet insigne sur un ruban bleu ?",
        correctAnswer: "Cordon bleu",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Cordon bleu",
        image: "images/insigne-fourchette.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Prise de guerre (acte exceptionnel sans vandalisme)",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Prise de guerre (acte exceptionnel sans vandalisme)",
        image: "images/insigne-hache.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Gardien des traditions",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Mammouth : Gardien des traditions",
        image: "images/insigne-mammouth.gif"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Personne lourde",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Pachyderme : Personne lourde",
        image: "images/insigne-pachyderme.gif"
    },
    {
        question: "Que signifie l'insigne Parapluie ouvert ?",
        correctAnswer: "A vomi dans sa faluche",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "A vomi dans sa faluche",
        image: ""
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "A vomi dans sa faluche et l’a remise sur sa tête",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "A vomi dans sa faluche et l’a remise sur sa tête",
        image: "images/insigne-parapluie.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Personne très chaude",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Personne très chaude",
        image: "images/insigne-poule-1.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Quémandeur d’insignes",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Quémandeur d’insignes",
        image: "images/insigne-singe-1-300x294.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Nuit passée au poste pour motif étudiant",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Nuit passée au poste pour motif étudiant",
        image: "images/insigne-sou-troue.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Grand hébergeur",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Grand hébergeur",
        image: "images/insigne-tortue-or.jpg"
    },
    {
        question: "Que signifie cet insigne ?",
        correctAnswer: "Conducteur de fin de soirée",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Conducteur de fin de soirée",
        image: "images/insigne-volant.jpg"
    },
    {
        question: "Quelle est la particularité de l'insigne singe ?",
        correctAnswer: "Empêche de recevoir tout autre insigne et oblige à retirer tous les insignes sur la partie officielle.",
        possibleAnswers: ['Rien', 'Doit faire le singe quand on lui demande', 'Doit chanter la musique de Toobo le bonobo (météo de Gulli)'],
        wrongMessage: "Décerné par le GM, il empêche de recevoir tout autre insigne, et le faluchard doit retirer tous les insignes sur la partie officielle.",
        image: "images/insigne-singe-1-300x294.jpg"
    },
    {
        question: "Que signifie cet insigne sur un ruban d’association?",
        correctAnswer: "Travail et minutie associative",
        possibleAnswers: reponseInsignePP,
        wrongMessage: "Travail et minutie associative",
        image: "images/insigne-abeille-222x300.jpg"
    },


    
];

export default insignePPQuestions;
