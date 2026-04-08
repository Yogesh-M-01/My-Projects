const quiz = [
    {
        question: "What is HTML?",
        answers: ["Programming Language", "Markup Language", "Database"],
        correct: 1
    },
    {
        question: "Which is JavaScript framework?",
        answers: ["React", "HTML", "CSS"],
        correct: 0
    },
    {
        question: "Which is backend language?",
        answers: ["CSS", "Python", "HTML"],
        correct: 1
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    const q = quiz[current];
    document.getElementById("question").innerText = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach((ans, index) => {
        let btn = document.createElement("div");
        btn.classList.add("answer");
        btn.innerText = ans;
        btn.onclick = () => selectAnswer(index);
        answersDiv.appendChild(btn);
    });
}

function selectAnswer(index) {
    if (index === quiz[current].correct) {
        score++;
    }
}

function nextQuestion() {
    current++;
    if (current < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Finished!";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("score").innerText = "Score: " + score;
    }
}

loadQuestion();
