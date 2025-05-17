// Array of quiz questions
const questions = [
    {
        question: "What is the main goal of SDG 16?",
        options: ["Eliminate poverty", "Promote peace, justice, and strong institutions", "Ensure quality education", "End hunger"],
        answer: 1
    },
    {
        question: "Which of the following is a major consequence of war?",
        options: ["Increased biodiversity", "Economic growth", "Displacement of people", "Stronger global unity"],
        answer: 2
    },
    {
        question: "What does SDG stand for?",
        options: ["Sustainable Development Goals", "Social Development Goals", "Scientific Discovery Goals", "Systematic Design Goals"],
        answer: 0
    },
    {
        question: "How can individuals help promote peace?",
        options: ["By ignoring conflicts", "By spreading misinformation", "By promoting dialogue and understanding", "By avoiding global issues"],
        answer: 2
    },
    {
        question: "Which organization is primarily responsible for maintaining international peace?",
        options: ["World Health Organization", "United Nations", "NASA", "International Red Cross"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = Array(questions.length).fill(null); // Store user answers

// Function to display the current question
function displayQuestion() {
    const quizContainer = document.getElementById("quiz-questions");
    quizContainer.innerHTML = ""; // Clear previous content

    const questionData = questions[currentQuestionIndex];

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-block");

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;

    const optionsList = document.createElement("ul");
    optionsList.classList.add("options-list");

    questionData.options.forEach((option, i) => {
        const optionItem = document.createElement("li");
        optionItem.textContent = option;
        optionItem.classList.add("option");

        // Restore previously selected answer
        if (selectedAnswers[currentQuestionIndex] === i) {
            optionItem.style.backgroundColor = (i === questionData.answer) ? "green" : "red";
            optionItem.style.color = "white";
        }

        optionItem.addEventListener("click", () => {
            selectAnswer(i, optionItem, optionsList);
        });

        optionsList.appendChild(optionItem);
    });

    questionDiv.appendChild(questionTitle);
    questionDiv.appendChild(optionsList);
    quizContainer.appendChild(questionDiv);

    updateButtons();
}

// Function to handle answer selection
function selectAnswer(selectedIndex, selectedOption, optionsList) {
    const questionData = questions[currentQuestionIndex];
    selectedAnswers[currentQuestionIndex] = selectedIndex; // Store answer

    // Disable all options after selection
    optionsList.querySelectorAll(".option").forEach(option => {
        option.style.pointerEvents = "none";
    });

    if (selectedIndex === questionData.answer) {
        selectedOption.style.backgroundColor = "green"; // Correct answer
        selectedOption.style.color = "white";
    } else {
        selectedOption.style.backgroundColor = "red"; // Incorrect answer
        selectedOption.style.color = "white";

        // Highlight the correct answer in green
        optionsList.children[questionData.answer].style.backgroundColor = "green";
        optionsList.children[questionData.answer].style.color = "white";
    }
}

// Function to update navigation buttons
function updateButtons() {
    document.getElementById("prev-btn").style.display = (currentQuestionIndex > 0) ? "inline-block" : "none";
    document.getElementById("next-btn").style.display = (currentQuestionIndex < questions.length - 1) ? "inline-block" : "none";
    document.getElementById("submit-btn").style.display = (currentQuestionIndex === questions.length - 1) ? "inline-block" : "none";
}

// Function to move to the next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Function to move to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Function to calculate and display the final score with a message
function submitQuiz() {
    score = selectedAnswers.filter((answer, index) => answer === questions[index].answer).length;

    let message = "";
    if (score <= 2) {
        message = "Try again next time!";
    } else if (score === 3) {
        message = "A little more practice!";
    } else if (score === 4) {
        message = "You're pretty good!";
    } else {
        message = "YOU'RE VERY INTELLIGENT!";
    }

    const quizContainer = document.getElementById("quiz-questions");
    quizContainer.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2><p>${message}</p>`;

    // Add retry button
    const retryButton = document.createElement("button");
    retryButton.textContent = "Retry Quiz";
    retryButton.classList.add("retry-btn");
    retryButton.addEventListener("click", retryQuiz);

    quizContainer.appendChild(retryButton);

    document.getElementById("prev-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
}

// Function to reset the quiz
function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = Array(questions.length).fill(null); // Reset answers
    displayQuestion(); // Restart the quiz
}

// Load the first question when the page loads
document.addEventListener("DOMContentLoaded", displayQuestion);
