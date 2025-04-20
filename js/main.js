const questions = [
  {
    question: "Apa itu JavaScript?",
    answer: [
      { text: "Bahasa pemrograman untuk server", correct: false },
      { text: "Bahasa markup untuk desain", correct: false },
      { text: "Bahasa pemrograman untuk web", correct: true },
      { text: "Framework CSS", correct: false },
    ],
  },
  {
    question: "Apa kegunaan dari git?",
    answer: [
      { text: "Mengatur layout website", correct: false },
      { text: "Mengelola versi kode", correct: true },
      { text: "Menjalankan program JavaScript", correct: false },
      { text: "Mendesain UI aplikasi", correct: false },
    ],
  },
  {
    question: "Manakah yang termasuk bahasa backend?",
    answer: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: false },
      { text: "Node.js", correct: true },
      { text: "Figma", correct: false },
    ],
  },
  {
    question: "Apa itu API?",
    answer: [
      { text: "Aplikasi editing foto", correct: false },
      { text: "Framework JavaScript", correct: false },
      { text: "Antarmuka komunikasi antar sistem", correct: true },
      { text: "Bahasa pemrograman", correct: false },
    ],
  },
  {
    question: "Apa fungsi dari console.log() di JavaScript?",
    answer: [
      { text: "Menampilkan teks ke HTML", correct: false },
      { text: "Menampilkan pesan ke console", correct: true },
      { text: "Membuat perulangan", correct: false },
      { text: "Mengambil data dari API", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const quiz = document.getElementById("quiz-container");
const question = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const restart = document.getElementById("restart");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  nextBtn.style.display = "none";
  result.style.display = "none";
  quiz.style.display = "block";

  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  question.textContent = currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);

    answerBtn.appendChild(button);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerBtn.firstChild) {
    answerBtn.remove(answerBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) {
    score++;
    selectedBtn.style.color = "#4caf50";
  } else {
    selectedBtn.style.color = "#f44336";
  }
  Array.from(answerBtn.children).forEach((button) => {
    button.disabled = true;

    if (button.dataset.correct) {
      button.style.backgroundColor = "#4caf50";
    }
  });
  if (currentQuestionIndex < questions.length) {
    nextBtn.style.display = "inline-block";
  } else {
    showResult();
  }
}

function showResult() {
  quiz.style.display = "none";
  result.style.display = "block";
  scoreElement.textContent = `Skor kamu : ${score} / ${questions.length}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});


startQuiz();
