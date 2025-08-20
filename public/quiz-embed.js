// Interactive Quiz - Standalone JavaScript
// Can be included with: <script src="quiz-embed.js"></script>

// Quiz Data
const quizQuestions = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2,
        explanation: "Paris is the capital and most populous city of France. It has been the political and cultural center of France for centuries.",
        type: "multiple-choice"
    },
    {
        id: 2,
        question: "The Earth is flat.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "The Earth is actually an oblate spheroid, meaning it's roughly spherical but slightly flattened at the poles due to its rotation. This has been proven through scientific evidence including satellite imagery, physics, and space exploration.",
        type: "true-false"
    },
    {
        id: 3,
        question: "Which programming language is known for its use in web development and has a name that refers to a type of coffee?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correctAnswer: 2,
        explanation: "JavaScript is the programming language named after coffee (specifically Java coffee). Despite its name, JavaScript is completely different from Java. JavaScript is essential for web development, running in browsers to make websites interactive.",
        type: "multiple-choice"
    },
    {
        id: 4,
        question: "Photosynthesis occurs in animals.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "Photosynthesis is the process by which plants, algae, and some bacteria convert light energy (usually from the sun) into chemical energy. Animals cannot perform photosynthesis as they lack chlorophyll and the necessary cellular structures.",
        type: "true-false"
    },
    {
        id: 5,
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Earth"],
        correctAnswer: 1,
        explanation: "Jupiter is the largest planet in our solar system. It's a gas giant with a mass more than twice that of all other planets combined. Its Great Red Spot is a storm larger than Earth itself.",
        type: "multiple-choice"
    }
];

// Quiz State
let quizState = {
    currentQuestion: 0,
    score: 0,
    totalQuestions: quizQuestions.length,
    selectedAnswer: null,
    showFeedback: false,
    isComplete: false
};

// DOM Elements
let progressSection, questionSection, completionSection;
let currentQuestionEl, totalQuestionsEl, currentScoreEl, progressFillEl;
let questionTitleEl, optionsContainerEl, feedbackContainerEl;
let nextButtonEl, finalScoreEl, completionMessageEl, restartButtonEl;

// Initialize DOM elements
function initializeDOMElements() {
    progressSection = document.getElementById('progress-section');
    questionSection = document.getElementById('question-section');
    completionSection = document.getElementById('completion-section');
    currentQuestionEl = document.getElementById('current-question');
    totalQuestionsEl = document.getElementById('total-questions');
    currentScoreEl = document.getElementById('current-score');
    progressFillEl = document.getElementById('progress-fill');
    questionTitleEl = document.getElementById('question-title');
    optionsContainerEl = document.getElementById('options-container');
    feedbackContainerEl = document.getElementById('feedback-container');
    nextButtonEl = document.getElementById('next-button');
    finalScoreEl = document.getElementById('final-score');
    completionMessageEl = document.getElementById('completion-message');
    restartButtonEl = document.getElementById('restart-button');
}

// Initialize Quiz
function initializeQuiz() {
    initializeDOMElements();
    totalQuestionsEl.textContent = quizState.totalQuestions;
    renderCurrentQuestion();
    
    // Event Listeners
    nextButtonEl.addEventListener('click', handleNextQuestion);
    restartButtonEl.addEventListener('click', restartQuiz);
}

// Render Current Question
function renderCurrentQuestion() {
    const question = quizQuestions[quizState.currentQuestion];
    
    // Update progress
    currentQuestionEl.textContent = quizState.currentQuestion + 1;
    currentScoreEl.textContent = quizState.score;
    const progressPercentage = ((quizState.currentQuestion + 1) / quizState.totalQuestions) * 100;
    progressFillEl.style.width = progressPercentage + '%';

    // Update question
    questionTitleEl.textContent = question.question;

    // Clear and render options
    optionsContainerEl.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-button';
        optionButton.onclick = () => handleAnswerSelect(index);

        const optionLetter = document.createElement('div');
        optionLetter.className = 'option-letter';
        
        if (question.type === 'true-false') {
            optionLetter.textContent = index === 0 ? 'T' : 'F';
        } else {
            optionLetter.textContent = String.fromCharCode(65 + index); // A, B, C, D
        }

        const optionText = document.createElement('span');
        optionText.textContent = option;

        optionButton.appendChild(optionLetter);
        optionButton.appendChild(optionText);
        optionsContainerEl.appendChild(optionButton);
    });

    // Hide feedback and next button
    feedbackContainerEl.classList.add('hidden');
    nextButtonEl.classList.add('hidden');
}

// Handle Answer Selection
function handleAnswerSelect(answerIndex) {
    if (quizState.showFeedback) return;

    const question = quizQuestions[quizState.currentQuestion];
    const isCorrect = answerIndex === question.correctAnswer;
    
    quizState.selectedAnswer = answerIndex;
    quizState.showFeedback = true;
    
    if (isCorrect) {
        quizState.score++;
    }

    // Update UI
    const optionButtons = optionsContainerEl.querySelectorAll('.option-button');
    
    optionButtons.forEach((button, index) => {
        button.classList.add('disabled');
        
        if (index === answerIndex) {
            button.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (index === question.correctAnswer) {
            button.classList.add('correct');
        }
    });

    // Show feedback
    showFeedback(isCorrect, question.explanation, question.options[question.correctAnswer]);
    
    // Show next button
    nextButtonEl.classList.remove('hidden');
    nextButtonEl.innerHTML = quizState.currentQuestion === quizQuestions.length - 1 
        ? 'Finish Quiz <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"></polyline></svg>'
        : 'Next Question <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"></polyline></svg>';
}

// Show Feedback
function showFeedback(isCorrect, explanation, correctAnswer) {
    feedbackContainerEl.innerHTML = '';
    feedbackContainerEl.className = `feedback-container ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;

    const feedbackTitle = document.createElement('div');
    feedbackTitle.className = 'feedback-title';
    feedbackTitle.innerHTML = isCorrect 
        ? '✓ Correct! Well done!' 
        : `✗ Incorrect. The correct answer is: ${correctAnswer}`;

    const feedbackExplanation = document.createElement('div');
    feedbackExplanation.className = 'feedback-explanation';
    feedbackExplanation.textContent = explanation;

    feedbackContainerEl.appendChild(feedbackTitle);
    feedbackContainerEl.appendChild(feedbackExplanation);
    feedbackContainerEl.classList.remove('hidden');
}

// Handle Next Question
function handleNextQuestion() {
    const isLastQuestion = quizState.currentQuestion === quizQuestions.length - 1;
    
    if (isLastQuestion) {
        showCompletion();
    } else {
        quizState.currentQuestion++;
        quizState.selectedAnswer = null;
        quizState.showFeedback = false;
        renderCurrentQuestion();
    }
}

// Show Completion
function showCompletion() {
    quizState.isComplete = true;
    
    progressSection.classList.add('hidden');
    questionSection.classList.add('hidden');
    nextButtonEl.classList.add('hidden');
    completionSection.classList.remove('hidden');

    const percentage = Math.round((quizState.score / quizState.totalQuestions) * 100);
    finalScoreEl.textContent = `${quizState.score}/${quizState.totalQuestions}`;
    
    let message = '';
    if (percentage >= 80) {
        message = `Excellent! You scored ${percentage}% on this quiz.`;
    } else if (percentage >= 60) {
        message = `Good job! You scored ${percentage}% on this quiz.`;
    } else {
        message = `You scored ${percentage}%. Keep practicing to improve!`;
    }
    
    completionMessageEl.textContent = message;
}

// Restart Quiz
function restartQuiz() {
    quizState = {
        currentQuestion: 0,
        score: 0,
        totalQuestions: quizQuestions.length,
        selectedAnswer: null,
        showFeedback: false,
        isComplete: false
    };

    progressSection.classList.remove('hidden');
    questionSection.classList.remove('hidden');
    completionSection.classList.add('hidden');

    renderCurrentQuestion();
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeQuiz);
} else {
    initializeQuiz();
}