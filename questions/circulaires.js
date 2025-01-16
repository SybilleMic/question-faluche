const reponseCirculaire = ['Velours rouge', 'Velours violet', 'Velours blanc', 'Velours bleu roy', 'Velours vert', 'Velours marron', 'Velours fuchsia', 'Velours bordeaux', "Matière et couleur suivant l'UFR de rattachement", 
'Satin vert clair', 'Satin bleu numérique', 'Satin marron', "Satin suivant l'UFR de rattachement", 'Satin rouge', 'Satin rouge & vert', 'Satin bleu & noir', "Satin aux couleurs du drapeau du pays de l'école",
'Satin gris', 'Satin vert foncé', 'Satin blanc', 'Satin aux couleurs de la discipline étudié', 'Satin jaune', 'Satin argenté', 'Satin saumon', 'Satin orange', 'Satin bleu & rouge', 'Satin violet', 'Velours rose'];

const circulairesQuestions = [
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
        wrongMessage: "Velours rose ! On prend soins de nous avec douceur, et le rose c'est doux :)",
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est attribuée aux étudiants en Pharmacie, préparateur en pharmacie',
        correctAnswer: 'Velours vert',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Velours vert ! Comme la couleur de la croix des pharmacies',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est associée à la filière Prépa santé',
        correctAnswer: 'Velours marron',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Velours marron ! Ils boivent du café pour tenir, marron comme le café',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est attribuée aux étudiants en Sage-femme',
        correctAnswer: 'Velours fuchsia',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Velours fuchsia ! Comme un bébé quand il nait',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Vétérinaire ?',
        correctAnswer: 'Velours bordeaux',
        possibleAnswers: reponseCirculaire,
        wrongMessage: "Velours bordeaux ! Imagine qu'ils boivent du vin de bordeaux dans leur campagne (faut bien essayer de trouver des tips :'))",
        image: ""
    },
    /*{ 
        question: 'Quelle couleur de circulaire est attribuée aux étudiants en DU',
        correctAnswer: "Matière et couleur suivant l'UFR de rattachement",
        possibleAnswers: reponseCirculaire,
        wrongMessage: "Matière et couleur suivant l'UFR de rattachement",
        image: ""
    },*/
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Administration Economique et Sociale (AES)',
        correctAnswer: 'Satin vert clair',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin vert clair ! Ils classent leur documents dans des dossiers vert clair',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Architecture; Arts du spectacle; Arts Audiovisuel; Beaux-Arts; Arts plastiques',
        correctAnswer: 'Satin bleu numérique',
        possibleAnswers: reponseCirculaire,
        wrongMessage: "Satin bleu numérique ! C'est de l'art, y a le ciel bleu, rajoute juste numérique",
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Classe préparatoires',
        correctAnswer: 'Satin marron',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin marron ! Ils boivent du café pour se tenir éveillé',
        image: ""
    },
    /*{
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Communication',
        correctAnswer: "Satin suivant l'UFR de rattachement",
        possibleAnswers: reponseCirculaire,
        wrongMessage: "Satin suivant l'UFR de rattachement",
        image: ""
    },*/
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Droit',
        correctAnswer: 'Satin rouge',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin rouge ! Comme les robes de magistrat ',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Ecoles de commerce, gestion, communication, journalisme',
        correctAnswer: 'Satin rouge & vert',
        possibleAnswers: reponseCirculaire,
        wrongMessage: "Satin rouge & vert ! Comme les graphiques qu'ils font",
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Ecoles d ingénieurs',
        correctAnswer: 'Satin bleu & noir',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin bleu & noir',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Ecoles nationales',
        correctAnswer: "Satin aux couleurs du drapeau du pays de l'école",
        possibleAnswers: reponseCirculaire,
        wrongMessage: "Satin aux couleurs du drapeau du pays de l'école",
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en MEEF 1er degré',
        correctAnswer: 'Satin gris',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin gris',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en MEEF 2nd degré',
        correctAnswer: 'Satin gris',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin gris',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Filières sportives',
        correctAnswer: 'Satin vert foncé',
        possibleAnswers: reponseCirculaire,
        wrongMessage: "Satin vert foncé ! Comme l'herbe sur laquelle on fait du sport",
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en BUT, DUT, BTS, Bachelor',
        correctAnswer: 'Satin blanc',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin blanc',
        image: ""
    },
    /*{
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en IUP',
        correctAnswer: 'Satin aux couleurs de la discipline étudié',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin aux couleurs de la discipline étudié',
        image: ""
    },*/
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Lettres, Langues, Sciences humaines et Sciences sociales',
        correctAnswer: 'Satin jaune',
        possibleAnswers: reponseCirculaire,
        wrongMessage: "Satin jaune, comme l'ampoule pour symboliser une idée brillante",
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Musique, Musicologie',
        correctAnswer: 'Satin argenté',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin argenté, comme le triangle',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Oenologie',
        correctAnswer: 'Satin saumon',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin saumon ! Toutes les couleurs de vins mélangées ça fait saumon (rouge + blanc = orange; orange + rosé = saumon)',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Sciences',
        correctAnswer: 'Satin violet',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin violet, pense a une galaxie',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Science économique, Gestion, IAE',
        correctAnswer: 'Satin orange',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin orange ! Comme une piece de monnaie qui est (un peu) orange',
        image: ""
    },
    {
        question: 'Quelle couleur de circulaire est utilisée pour les étudiants en Sciences politiques',
        correctAnswer: 'Satin bleu & rouge',
        possibleAnswers: reponseCirculaire,
        wrongMessage: 'Satin bleu & rouge, un peu comme le drapeau français (sans le blanc)',
        image: ""
    },
];

export default circulairesQuestions;