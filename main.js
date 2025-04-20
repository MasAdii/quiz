const questions = [
  {
      question: "Apa ibukota Indonesia?",
      options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
      answer: 0
  },
  {
      question: "Siapa presiden pertama Indonesia?",
      options: ["Soekarno", "Soeharto", "Jokowi", "Habibie"],
      answer: 0
  },
  {
      question: "Apa nama pulau terbesar di Indonesia?",
      options: ["Sumatra", "Jawa", "Kalimantan", "Sulawesi"],
      answer: 1
  },
  {
      question: "Apa mata uang Indonesia?",
      options: ["Dollar", "Rupiah", "Ringgit", "Baht"],
      answer: 1
  },
  {
      question: "Gunung apa yang tertinggi di Indonesia?",
      options: ["Gunung Everest", "Gunung Merapi", "Gunung Semeru", "Puncak Jaya"],
      answer: 3
  },
  {
      question: "Apa nama lagu kebangsaan Indonesia?",
      options: ["Indonesia Raya", "Mars Pancasila", "Hari Merdeka", "Garuda Pancasila"],
      answer: 0
  },
  {
      question: "Siapa penulis buku 'Max Havelaar'?",
      options: ["Pramoedya Ananta Toer", "Multatuli", "Andrea Hirata", "Ronggeng Dukuh Paruk"],
      answer: 1
  },
  {
      question: "Apa nama tarian tradisional dari Bali?",
      options: ["Tari Kecak", "Tari Legong", "Tari Pendet", "Tari Barong"],
      answer: 1
  },
  {
      question: "Apa nama hewan nasional Indonesia?",
      options: ["Harimau Sumatra", "Gajah Sumatra", "Badak Jawa", "Orangutan"],
      answer: 0
  },
  {
      question: "Apa nama bunga nasional Indonesia?",
      options: ["Mawar", "Melati", "Anggrek", "Lili"],
      answer: 1
  },
  {
      question: "Siapa nama pahlawan nasional yang berjulukan 'Panglima Besar'?",
      options: ["Sudirman", "Diponegoro", "Gadjah Mada", "Patih Gajah Mada"],
      answer: 0
  },
  {
      question: "Apa nama danau terbesar di Indonesia?",
      options: ["Danau Toba", "Danau Maninjau", "Danau Kerinci", "Danau Sembuluh"],
      answer: 0
  },
  {
      question: "Apa nama sungai terpanjang di Indonesia?",
      options: ["Sungai Kapuas", "Sungai Mahakam", "Sungai Barito", "Sungai Musi"],
      answer: 0
  },
  {
      question: "Siapa nama ilmuwan yang menemukan teori evolusi?",
      options: ["Charles Darwin", "Albert Einstein", "Isaac Newton", "Galileo Galilei"],
      answer: 0
  },
  {
      question: "Apa nama planet terdekat dengan Matahari?",
      options: ["Merkurius", "Venus", "Bumi", "Mars"],
      answer: 0
  },
  {
      question: "Siapa nama penulis buku 'Laskar Pelangi'?",
      options: ["Andrea Hirata", "Pramoedya Ananta Toer", "Eka Kurniawan", "Ayu Utami"],
      answer: 0
  },
  {
      question: "Apa nama film Indonesia yang paling terkenal di tahun 2023?",
      options: ["Satanic", "KKN di Desa Penari", "Pengabdi Setan", "Warkop DKI Reborn"],
      answer: 1
  },
  {
      question: "Siapa nama musisi Indonesia yang terkenal dengan lagu 'Hari Merdeka'?",
      options: ["H. Mutahar", "Iwan Fals", "Rhoma Irama", "A. Riyanto"],
      answer: 0
  },
  {
      question: "Apa nama acara televisi Indonesia yang paling populer?",
      options: ["Indonesian Idol", "Raffi, Nagita, dan Syarief", "Bukan Empat Mata", "Lapor Pak!"],
      answer: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.add('hidden');
  resultElement.classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;
      button.classList.add('option-button');
      button.addEventListener('click', () => selectOption(index, button));
      optionsElement.appendChild(button);
  });
}

function selectOption(selectedIndex, button) {
  const currentQuestion = questions[currentQuestionIndex];
  
  
  if (selectedIndex === currentQuestion.answer) {
      button.classList.add('correct');
      score++;
  } else {
      button.classList.add('incorrect');
  }

  
  const allButtons = optionsElement.querySelectorAll('button');
  allButtons.forEach(btn => btn.disabled = true);
  
  nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion();
      nextButton.classList.add('hidden');
  } else {
      showResult();
  }
});

function showResult() {
  questionElement.classList.add('hidden');
  optionsElement.classList.add('hidden');
  resultElement.classList.remove('hidden');
  scoreElement.innerText = `${score} dari ${questions.length}`;
}

restartButton.addEventListener('click', startQuiz);


startQuiz();
