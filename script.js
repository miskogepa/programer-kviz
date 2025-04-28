document.addEventListener("DOMContentLoaded", () => {
  // All DOM-related initialization can go here
  // Get elements by their IDs
  const startBtn = document.getElementById("start-btn"); // Button to start the quiz
  const questionContainer = document.getElementById("question-container"); // Container for the question and choices
  const questionText = document.getElementById("question-text"); // Element to display the question text
  const choicesList = document.getElementById("choices-list"); // List to display answer choices
  const nextBtn = document.getElementById("next-btn"); // Button to go to the next question
  const resultContainer = document.getElementById("result-container"); // Container to display the quiz result
  const scoreDisplay = document.getElementById("score"); // Element to display the user's score
  const restartBtn = document.getElementById("restart-btn"); // Button to restart the quiz

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0; // Index of the current question
  let score = 0; // User's score

  startBtn.addEventListener("click", startQuiz); // Event listener for the start button

  function startQuiz() {
    startBtn.classList.add("hidden"); // Hide the start button
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }
});
