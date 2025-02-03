let currentQuestionIndex = 0;
const questions = [
  {
    question: "What is the capital of England?",
    options: ["London", "Paris", "Rome", "Berlin"],
    correctAnswer: "A"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "D"
  },
  {
    question: "What is the currency of the United States?",
    options: ["Euro", "Yen", "Pound", "Dollar"],
    correctAnswer: "D"
  }
];

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;

  const options = document.querySelectorAll(".options button");
  options.forEach((button, index) => {
    button.textContent = `${String.fromCharCode(65 + index)}. ${question.options[index]}`;
  });

  document.getElementById("feedback").textContent = "";
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (selectedOption === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
    document.getElementById("feedback").style.color = "green";
  } else {
    document.getElementById("feedback").textContent = "Oops! Try again.";
    document.getElementById("feedback").style.color = "red";
  }
}

function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  displayQuestion();
}

// Initial call to display the first question
displayQuestion();