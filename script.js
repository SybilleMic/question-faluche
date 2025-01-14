let currentTheme = '';
let currentDifficulty = '';
let currentQuestionIndex = 0;
let questions = [];
let score = 0;

const reponseCirculaire = ['Velours rouge', 'Velours violet', 'Velours blanc', 'Velours bleu roy', 'Velours vert', 'Velours marron', 'Velours fushia', 'Velours bordeaux', 'Matière et couleur suivant l UFR de rattachement', 
'Satin vert clair', 'Satin bleu numérique', 'Satin marron', 'Satin suivant l UFR de rattachement', 'Satin rouge', 'Satin rouge & vert', 'Satin bleu & noir', 'Satin aux couleurs du drapeau du pays de l école',
'Satin gris', 'Satin vert foncé', 'Satin blanc', 'Satin aux couleurs de la dicipline étudié', 'Satin jaune', 'Satin argenté', 'Satin saumon', 'Satin orange', 'Satin bleu & rouge', 'Satin violet', 'Velours rose'];

const reponseEmbleme = ['Administration Économique et Sociale', 'Architecture', 'Archéologie', 'Arts du spectacle', 'Arts numériques', 'Audiovisuel', 'Bachelor (RNCP)', 'Beaux-arts, Arts plastiques', 'BTS', 'Chirurgie dentaire', 
'Classes préparatoires', 'Écoles de commerce, gestion, journalisme, communication', 'Droit', 'DU', 'BUT', 'Écoles d’ingénieurs', 'Études courtes de santé', 'Filières sportives', 'Géographie', 
'Histoire', 'Histoire de l’art et Archéologie', 'Infirmier', 'IAE', 'IUP', 'Kiné', 'LAS*;majoritaire*', 'Langues/lettres', 'Médecine', 'MEEF', 'Musique, Musicologie', 'Œnologie', 'Ostéopathie', 
'Paramédical', 'PASS', 'Pharmacie', 'Philosophie', 'Préparateurs en pharmacie', 'Psychologie', 'Sage-femme', 'Sciences', 'Sciences économiques, Gestion', 'Sciences politiques', 'Sciences sociales', 'Sociologie', 'Vétérinaire'];


const reponseInsigneCircu = ['année commencée', 'major de promotion', 'année redoublée', 'année blanche/sabbatique/année de césure', 'fin de cicle, pas de diplôme correspondant', 
'diplôme obtenu', 'échec aux examens et réussite aux rattrapages', 'abandon ou réorientation', 'validées par équivalence', 'années en alternance', 'service militaire ou service civique', 
'cursus exemplaire', 'perte ou vol de la faluche']

// Liste de toutes les questions et réponses
const allQuestions = {
    circulaires: [
        {
            question: 'Quelle couleur de circulaire est attribuée aux étudiants en Chirurgie Dentaire ?',
            correctAnswer: 'Velours violet',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Velours violet ! Imagine des instruments dentaires de couleur violette.',
            image: ""
        },
        {
            question: 'Quelle couleur de circulaire qui représente des études courtes de santé ?',
            correctAnswer: 'Velours blanc',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Velours blanc ! Comme les blouses',
            image: ""
        },
        {
            question: 'Quelle couleur de circulaire est associée à la filière Médecine ?',
            correctAnswer: 'Velours rouge',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Velours rouge ! Pense au sang qui est rouge aussi',
            image: ""
        },
        {
            question: 'Quelle couleur de circulaire est attribuée aux étudiants en Ostéopathie ?',
            correctAnswer: 'Velours bleu roy',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Velours bleu roy ! (j ai pas de tips pour celui la)',
            image: ""
        },
        {
            question: 'Quelle couleur de circulaire est attribuée aux étudiants en Paramédical',
            correctAnswer: 'Velours rose',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Velours rose !',
            image: ""
        },
        {
            question: 'Quelle couleur de circulaire est attribuée aux étudiants en Pharmacie, préparateur en pharmacie',
            correctAnswer: 'Velours vert',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Velours vert ! Comme la couleur de la croix des pharmacie',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est associée à la filière Prépa santé',
            correctAnswer: 'Velours marron',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Velours marron !',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est attribuée aux étudiants en Sage-femme',
            correctAnswer: 'Velours fushia',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Velours fushia ! Comme un bébé quand il nait',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Vétérinaire ?',
            correctAnswer: 'Velours bordeaux',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Velours bordeaux !',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est attribuée aux étudiants en DU',
            correctAnswer: 'Matière et couleur suivant l UFR de rattachement',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Matière et couleur suivant l UFR de rattachement',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Administration Economique et Sociale (AES)',
            correctAnswer: 'Satin vert clair',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin vert clair',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Architecture; Arts du spectacle; Arts Audiovisuel; Beaux-Arts; Arts plastiques',
            correctAnswer: 'Satin bleu numérique',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin bleu numérique',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Classe préparatoires',
            correctAnswer: 'Satin marron',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin marron',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Communication',
            correctAnswer: 'Satin suivant l UFR de rattachement',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin suivant l UFR de rattachement',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Droit',
            correctAnswer: 'Satin rouge',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin rouge',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Ecoles de commerce, gestion, communication, journalisme',
            correctAnswer: 'Satin rouge & vert',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin rouge & vert',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Ecoles d ingénieurs',
            correctAnswer: 'Satin bleu & noir',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin bleu & noir',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Ecoles nationales',
            correctAnswer: 'Satin aux couleurs du drapeau du pays de l école',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin aux couleurs du drapeau du pays de l école',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en MEEF 1er degré',
            correctAnswer: 'Satin gris',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin gris',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en MEEF 2nd degré',
            correctAnswer: 'Satin gris',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin gris',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Filières sportives',
            correctAnswer: 'Satin vert foncé',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin vert foncé ! Comme l herbe sur laquelle on fait du sport',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en BUT, DUT, BTS, Bachelor',
            correctAnswer: 'Satin blanc',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin blanc',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en IUP',
            correctAnswer: 'Satin aux couleurs de la dicipline étudié',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin aux couleurs de la dicipline étudié',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Lettres, Langues, Sciences humaines et Sciences sociales',
            correctAnswer: 'Satin jaune',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin jaune',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Musique, Musicologie',
            correctAnswer: 'Satin argenté',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin argenté',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Oenologie',
            correctAnswer: 'Satin saumon',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin saumon ! Toutes les couleurs de vins mélangées ça fait saumon (rouge + blanc = orange; orange + rosé = saumon)',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Sciences',
            correctAnswer: 'Satin violet',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin violet',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Science économique, Gestion, IAE',
            correctAnswer: 'Satin orange',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin orange ! Comme une piece de monnaie qui est (un peu) orange',
            image: "images/chameau2.jpg"
        },
        {
            question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Sciences politiques',
            correctAnswer: 'Satin bleu & rouge',
            possibleAnswers: reponseCirculaire,
            wrongMessage: 'Satin bleu & rouge',
            image: "images/chameau2.jpg"
        },
    ],

    insigneCircu: [
        {
            question: 'Sur le ruban circulaire, à quel bac correspond "Ɣ"',
            correctAnswer: 'Bac général',
            possibleAnswers: ['Bac général', 'Bac International', 'Autres bacs', 'Capacitaire', 'DAEU'],
            wrongMessage: 'Bac général'
        },
        {
            question: 'Sur le ruban circulaire, à quel bac correspond la lettre "i" après le bac principal',
            correctAnswer: 'Bac International',
            possibleAnswers: ['Bac général', 'Bac International', 'Autres bacs', 'Capacitaire', 'DAEU'],
            wrongMessage: 'Bac International'
        },
        {
            question: "Sur le ruban circulaire, quel bac a t'on fait quand il n'y a que des lettres ou initiales",
            correctAnswer: 'Autres bacs',
            possibleAnswers: ['Bac général', 'Bac International', 'Autres bacs', 'Capacitaire', 'DAEU'],
            wrongMessage: 'Autres bacs'
        },
        {
            question: 'Sur le ruban circulaire, à quel bac correspond la lettre "C"',
            correctAnswer: 'Capacitaire',
            possibleAnswers: ['Bac général', 'Bac International', 'Autres bacs', 'Capacitaire', 'DAEU'],
            wrongMessage: 'Capacitaire'
        },
        {
            question: 'Sur le ruban circulaire, à quel bac correspond les lettres DAEU',
            correctAnswer: 'DAEU',
            possibleAnswers: ['Bac général', 'Bac International', 'Autres bacs', 'Capacitaire', 'DAEU'],
            wrongMessage: "DAEU (Diplôme d'accès aux études universitaires)"
        },
        
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspondent les lettres "AES" ',
            correctAnswer: 'Administration Économique et Sociale',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Administration Économique et Sociale"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Équerre & Compas"',
            correctAnswer: 'Architecture',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Architecture"
        },
        
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Masque de comédie"',
            correctAnswer: 'Arts du spectacle',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Arts du spectacle"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "@"',
            correctAnswer: 'Arts numériques',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Arts numériques"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Clap de cinéma"',
            correctAnswer: 'Audiovisuel',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Audiovisuel"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "β"',
            correctAnswer: 'Bachelor (RNCP)',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Bachelor (RNCP)"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Palette & Pinceau"',
            correctAnswer: 'Beaux-arts, Arts plastiques',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Beaux-arts, Arts plastiques"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspondent les lettres "BTS" ',
            correctAnswer: 'BTS',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "BTS"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Molaire"',
            correctAnswer: 'Chirurgie dentaire',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Chirurgie dentaire"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Chouette bicéphale"',
            correctAnswer: 'Classes préparatoires',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Classes préparatoires"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Caducée de Mercure" sur satin rouge & vert',
            correctAnswer: 'Écoles de commerce, gestion, journalisme, communication',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Écoles de commerce, gestion, journalisme, communication"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Glaive & Balance"',
            correctAnswer: 'Droit',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Droit"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspondent les lettres "DU" ',
            correctAnswer: 'DU',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "DU"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspondent les lettres "BUT" ',
            correctAnswer: 'BUT',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "BUT"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Étoile & Foudre"',
            correctAnswer: 'Écoles d’ingénieurs',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Écoles d’ingénieurs"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Squelette"',
            correctAnswer: 'Études courtes de santé',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Études courtes de santé"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Coq"',
            correctAnswer: 'Filières sportives',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Filières sportives"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Globe"',
            correctAnswer: 'Géographie',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Géographie"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Casque de Périclès"',
            correctAnswer: 'Histoire',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Histoire"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Tête de Sphinx"',
            correctAnswer: 'Histoire de l’art et Archéologie',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Histoire de l’art et Archéologie"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Caducée infirmier"',
            correctAnswer: 'Infirmier',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Infirmier"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspondent les lettres "IAE" ',
            correctAnswer: 'IAE',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "IAE"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspondent les lettres "IUP" ',
            correctAnswer: 'IUP',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "IUP"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Caducée de Mercure" sur velour rose',
            correctAnswer: 'Kiné',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Kiné"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond Emblème de la discipline ',
            correctAnswer: 'LAS*, majoritaire*',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "LAS*, majoritaire*"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Livre ouvert & Plume"',
            correctAnswer: 'Langues/lettres',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Langues/lettres"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Caducée médecine" ',
            correctAnswer: 'Médecine',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Médecine"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Plume" ',
            correctAnswer: 'MEEF',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "MEEF"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Lyre" ',
            correctAnswer: 'Musique, Musicologie',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Musique, Musicologie"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Grappe de raisin" ',
            correctAnswer: 'Œnologie',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Œnologie"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Sphénoïde" ',
            correctAnswer: 'Ostéopathie',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Ostéopathie"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Ciseaux" ',
            correctAnswer: 'Paramédical',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Paramédical"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Tête de mort sur fémurs croisés" ',
            correctAnswer: 'PASS',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "PASS"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Caducée de pharmacie" ',
            correctAnswer: 'Pharmacie',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Pharmacie"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Ɣ" ',
            correctAnswer: 'Philosophie ',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Philosophie "
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Mortier & Pilon" ',
            correctAnswer: 'Préparateurs en pharmacie',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Préparateurs en pharmacie"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "ψ" ',
            correctAnswer: 'Psychologie',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Psychologie"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Croix d’Ânkh" ',
            correctAnswer: 'Sage-femme',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Sage-femme"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Palmes croisées de chêne & de laurier" + initiales de la discipline ',
            correctAnswer: 'Sciences',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Sciences"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Caducée de Mercure" sur satin orange ',
            correctAnswer: 'Sciences économiques, Gestion',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Sciences économiques, Gestion"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Parapluie" ',
            correctAnswer: 'Sciences politiques',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Sciences politiques"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspondent les initiales de la discipline sur satin jaune ',
            correctAnswer: 'Sciences sociales',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Sciences sociales"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Grenouille" ',
            correctAnswer: 'Sociologie',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Sociologie"
        },
        {
            question: 'Sur le ruban circulaire, à quelle dicipline correspond l’emblème "Tête de cheval" ',
            correctAnswer: 'Vétérinaire',
            possibleAnswers: reponseEmbleme,
            wrongMessage: "Vétérinaire"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "étoile dorée" ',
            correctAnswer: 'année commencée',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "année commencée"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "large palme" placée à côté de l’étoile de l’année et/ou des palmes de diplôme ',
            correctAnswer: 'major de promotion',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "major de promotion"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "étoile argentée" ',
            correctAnswer: 'année redoublée',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "année redoublée"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "zéro" ',
            correctAnswer: 'année blanche/sabbatique/année de césure',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "année blanche/sabbatique/année de césure"
        },
        {
            question: 'Quel est le support sur lequel est placée la première étoile pour les étudiants inscrits dans une faculté ou un établissement public ?',
            correctAnswer: 'moivre bleu',
            possibleAnswers: ['moivre bleu', 'moivre blanc', 'moivre noir'],
            wrongMessage: "moivre bleu"
        },
        {
            question: 'Quel est le support sur lequel est placée la première étoile pour les étudiants inscrits dans une faculté ou un établissement privé ?',
            correctAnswer: 'moivre blanc',
            possibleAnswers: ['moivre bleu', 'moivre blanc', 'moivre noir'],
            wrongMessage: "moivre blanc"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "simple palme" à la fin d’un cycle ?',
            correctAnswer: 'fin de cicle, pas de diplôme correspondant',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "fin de cicle, pas de diplôme correspondant"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "double palme croisée de lauriers" ',
            correctAnswer: 'diplôme obtenu',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "diplôme obtenu"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "tête de vache" à côté de l’étoile de l’année ',
            correctAnswer: 'échec aux examens et réussite aux rattrapages',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "échec aux examens et réussite aux rattrapages"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "tête de mort" à côté de l’étoile de l’année ',
            correctAnswer: 'abandon ou réorientation',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "abandon ou réorientation"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond la lettre "e" remplaçant l’étoile. ',
            correctAnswer: 'validées par équivalence',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "validées par équivalence"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond la lettre "a" en dessous de l’étoile correspondante. ',
            correctAnswer: 'années en alternance',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "années en alternance"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, que place t on sous l’étoile de l’année d’étude si une partie quelconque de celle-ci se déroule à l’étranger." ',
            correctAnswer: 'drapeau du pays',
            possibleAnswers: ['drapeau du pays', 'la lettre "e"', 'rien'],
            wrongMessage: "drapeau du pays"
        },
        {
            question: 'Sur le ruban circulaire, que veux dire une quille qui pend du ruban à un endroit du cursus ?',
            correctAnswer: 'service militaire ou service civique',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "service militaire ou service civique"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond l’insigne "abeille" ',
            correctAnswer: 'cursus exemplaire',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "cursus exemplaire"
        },
        {
            question: 'Sur le ruban circulaire, sur le cursus universitaire, à quoi correspond correspond le moivre noir sous une étoile?',
            correctAnswer: 'perte ou vol de la faluche',
            possibleAnswers: reponseInsigneCircu,
            wrongMessage: "perte ou vol de la faluche"
        },
    ],

    insignePP: [
        {
            question: '',
            correctAnswer: '',
            possibleAnswers: [],
            wrongMessage: ""
        },

    ],


    histoire: [
        {
            question: 'Depuis quand la faluche existe-elle ?',
            correctAnswer: '1888',
            possibleAnswers: ['1888', '1999', '1898', '1765', '2000'],
            wrongMessage: 'Le noir représente les ostéopathes.'
        },
        {
            question: 'D’où la faluche a-t-elle été rapportée ? (ville d’origine)',
            correctAnswer: 'Bologne',
            possibleAnswers: ['Bologne', 'Chartres', 'Orléans', 'Paris', 'Limoge'],
            wrongMessage: 'Le bleu est associé aux professions paramédicales.'
        },
        {
            question: 'A quoi ressemble une faluche ?',
            correctAnswer: 'béret français',
            possibleAnswers: ['béret français', 'casquette', 'chaise', 'rien', 'béret italien'],
            wrongMessage: 'Le bleu est associé aux professions paramédicales.'
        },
        {
            question: 'Devant qui doit-on enlever sa faluche ?',
            correctAnswer: 'le recteur',
            possibleAnswers: ['le recteur', 'le président', 'Maman', 'le maire', 'les profs'],
            wrongMessage: 'Le bleu est associé aux professions paramédicales.'
        },
        {
            question: 'Quand est-ce que la faluche a vu ses porteurs diminuer, les trois grand déclins de la faluche ?',
            correctAnswer: 'Grande GM, seconde GM, et mai 68',
            possibleAnswers: ['Bleu', 'Rose', 'Orange', 'Vert', 'Rouge'],
            wrongMessage: 'Le bleu est associé aux professions paramédicales.'
        },
        {
            question: 'Quand doit-être portée la faluche ?',
            correctAnswer: 'évent étudiant',
            possibleAnswers: ['Bleu', 'Rose', 'Orange', 'Vert', 'Rouge'],
            wrongMessage: 'Le bleu est associé aux professions paramédicales.'
        },
        {
            question: 'Quels sont les 3 A de la faluche ?',
            correctAnswer: 'Appartisane, asyndical et aconfessionelle',
            possibleAnswers: ['Bleu', 'Rose', 'Orange', 'Vert', 'Rouge'],
            wrongMessage: 'Le bleu est associé aux professions paramédicales.'
        },
        {
            question: 'Que s est-il passé le 8 mars 1976 ?',
            correctAnswer: 'création du premier code national de la faluche',
            possibleAnswers: ['création du premier code national de la faluche', 'Naissance de katana', '', '', ''],
            wrongMessage: ''
        },
        {
            question: '',
            correctAnswer: '',
            possibleAnswers: ['', '', '', '', ''],
            wrongMessage: ''
        },
    ],

};

// Fonction pour choisir le thème
function chooseTheme(theme) {
    currentTheme = theme;
    
    // Mélange des questions pour le thème général
    if (theme === 'general') {
        questions = shuffleQuestions([
            ...allQuestions.circulaires,
            ...allQuestions.insigneCircu,
            ...allQuestions.insignePP,
            ...allQuestions.histoire
        ]);
    } else {
        questions = shuffleQuestions(allQuestions[theme]);
    }

    // Limite le nombre de questions à 10
    questions = questions.slice(0, 10);
    
    document.getElementById('theme-selection').style.display = 'none';
    document.getElementById('difficulty-selection').style.display = 'block';
}

// Fonction pour mélanger les questions de manière aléatoire
function shuffleQuestions(questionsArray) {
    return questionsArray.sort(() => Math.random() - 0.5);
}

// Fonction pour choisir la difficulté
function chooseDifficulty(difficulty) {
    currentDifficulty = difficulty;
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';

    // Afficher la zone de progression
    document.getElementById('question-progress').style.display = 'block';

    currentQuestionIndex = 0;
    score = 0; // Réinitialiser le score
    loadQuestion();
}

// Fonction pour charger une question
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        document.getElementById('question').textContent = questionData.question;

        // Réinitialisation de la zone de texte pour éviter qu'elle reste visible
        document.getElementById('text-input-container').style.display = 'none';  // Masquer la zone de texte

        const currentQuestion = questions[currentQuestionIndex];
    
    // Mettre à jour le texte de la question
    document.getElementById("question").textContent = currentQuestion.question;

    // Mettre à jour l'image associée (si elle existe)
    const questionImage = document.getElementById("question-image");
    if (currentQuestion.image) {
        questionImage.src = currentQuestion.image;
        questionImage.style.display = "block"; // Affiche l'image
    } else {
        questionImage.style.display = "none"; // Cache l'image s'il n'y en a pas
    }

        if (currentDifficulty === 'Quiz') {
            const answers = generateQuizAnswers(
                questionData.correctAnswer,
                questionData.possibleAnswers
            );
            displayQuizAnswers(answers, questionData.correctAnswer, questionData.wrongMessage);
        } else {
            displayTextAnswer();
        }

        // Afficher l'avancement (question actuelle sur nombre total de questions)
        document.getElementById('current-question').textContent = currentQuestionIndex + 1;
        document.getElementById('total-questions').textContent = questions.length;

        // Afficher le bouton "Valider"
        document.getElementById('validate-btn').style.display = 'block';
        document.getElementById('next-btn').style.display = 'none'; // Cacher le bouton "Suivant"
        document.getElementById('feedback').textContent = ''; // Réinitialiser le feedback
    } else {
        showScore();
    }
}



// Fonction pour générer trois réponses, dont une correcte
function generateQuizAnswers(correctAnswer, possibleAnswers) {
    const incorrectAnswers = possibleAnswers.filter(ans => ans !== correctAnswer);
    const shuffledIncorrect = incorrectAnswers.sort(() => Math.random() - 0.5);
    const selectedAnswers = shuffledIncorrect.slice(0, 2);
    selectedAnswers.push(correctAnswer);
    return selectedAnswers.sort(() => Math.random() - 0.5);
}

// Fonction pour afficher les réponses en mode quiz (choix multiples)
function displayQuizAnswers(answers, correctAnswer, wrongMessage) {
    document.getElementById('answers').innerHTML = '';
    answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('btn');
        button.onclick = () => {
            handleAnswer(answer, correctAnswer, wrongMessage);
            disableButtons();
        };
        document.getElementById('answers').appendChild(button);
    });
}

// Fonction pour afficher l'input pour la réponse textuelle
function displayTextAnswer() {
    document.getElementById('text-input-container').style.display = 'block'; // Afficher la zone de texte
    document.getElementById('answers').innerHTML = ''; // Réinitialiser les réponses du quiz
}

// Fonction pour gérer la réponse donnée par l'utilisateur
function handleAnswer(answer, correctAnswer, wrongMessage) {
    const feedback = document.getElementById('feedback');
    if (answer === correctAnswer) {
        feedback.textContent = 'Bonne réponse ! 🎉';
        score++;
    } else {
        feedback.textContent = `Mauvaise réponse. ${wrongMessage}`;
    }
    // Afficher le bouton "Suivant"
    document.getElementById('next-btn').style.display = 'block';
}

// Fonction pour désactiver tous les boutons après une réponse
function disableButtons() {
    const buttons = document.querySelectorAll('#answers .btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Fonction pour valider la réponse textuelle et passer à la question suivante
function validateTextAnswer() {
    const userAnswer = document.getElementById('text-answer').value.trim();
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const wrongMessage = questions[currentQuestionIndex].wrongMessage;

    // Vérifier si la réponse est correcte
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        document.getElementById('feedback').textContent = 'Bonne réponse ! 🎉';
    } else {
        document.getElementById('feedback').textContent = `Mauvaise réponse. ${wrongMessage}`;
    }

    // Réinitialiser la zone de texte
    document.getElementById('text-answer').value = '';

    // Masquer le bouton "Valider"
    document.getElementById('validate-btn').style.display = 'none';

    // Afficher le bouton "Suivant"
    document.getElementById('next-btn').style.display = 'block';
}

// Fonction pour passer à la question suivante
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Fonction pour afficher le score final
function showScore() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
    document.getElementById('score').textContent = `Votre score est : ${score} / ${questions.length}`;
}

// Fonction pour revenir à l'accueil
function backToHome() {
    document.getElementById('theme-selection').style.display = 'block';
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'none';
    document.getElementById('feedback').textContent = '';
    document.getElementById('question-progress').style.display = 'none'; // Cacher l'avancement

    currentTheme = '';
    currentDifficulty = '';
    currentQuestionIndex = 0;
    score = 0;
}

// Écouteurs d'événements pour les boutons
document.getElementById('theme-circulaires').addEventListener('click', () => chooseTheme('circulaires'));
document.getElementById('theme-insigneCircu').addEventListener('click', () => chooseTheme('insigneCircu'));
document.getElementById('theme-insignePP').addEventListener('click', () => chooseTheme('insignePP'));
document.getElementById('theme-histoire').addEventListener('click', () => chooseTheme('histoire'));

document.getElementById('theme-general').addEventListener('click', () => chooseTheme('general'));
document.querySelectorAll('.difficulty-button').forEach(button => {
    button.addEventListener('click', () => chooseDifficulty(button.textContent));
});
document.getElementById('validate-btn').addEventListener('click', validateTextAnswer); // Écouteur pour le bouton Valider
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('back-home-btn').addEventListener('click', backToHome);

