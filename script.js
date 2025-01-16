import circulairesQuestions from './questions/circulaires.js';
import insigneCircuQuestions from './questions/insigneCircu.js';
import insignePPQuestions from './questions/insignePP.js';
import histoireQuestions from './questions/histoire.js';

let currentTheme = '';
let currentDifficulty = '';
let currentQuestionIndex = 0;
let questions = [];
let score = 0;

// Centralise toutes les questions dans un objet
const allQuestions = {
    circulaires: circulairesQuestions,
    insigneCircu: insigneCircuQuestions,
    insignePP: insignePPQuestions,
    histoire: histoireQuestions,
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
        const answersContainer = document.getElementById('answers');
        answersContainer.innerHTML = ''; // Réinitialise les réponses

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

    const buttons = document.querySelectorAll('#answers .btn');

    buttons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct'); // Marque la bonne réponse en vert
        } else if (button.textContent === answer) {
            button.classList.add('incorrect'); // Marque la réponse sélectionnée en rouge si elle est incorrecte
        }
        button.classList.add('disabled'); // Désactive tous les boutons
    });

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

console.log("Le fichier script.js est chargé !");


