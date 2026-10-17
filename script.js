// 퀴즈 문제 데이터 (선생님이 수업 내용에 맞춰 자유롭게 수정하세요!)
const quizData = [
    {
        question: "세계 4대 문명 중 나일강 유역에서 발생하여 피라미드와 스핑크스를 남긴 문명은?",
        options: ["메소포타미아 문명", "이집트 문명", "인더스 문명", "황하 문명"],
        correct: 1 // 정답의 인덱스 (0부터 시작하므로 두 번째인 '이집트 문명'이 정답)
    },
    {
        question: "고대 그리스의 폴리스 중 하나로, 시민들이 직접 참여하는 '민주정'이 발달한 곳은?",
        options: ["스파르타", "마케도니아", "아테네", "트로이"],
        correct: 2
    },
    {
        question: "약 200년 동안 로마 제국이 전쟁 없이 평화와 번영을 누렸던 시기를 뜻하는 라틴어는?",
        options: ["팍스 로마나", "헬레니즘", "르네상스", "카르타고"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const quizEl = document.getElementById('quiz');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    optionsEl.innerHTML = '';
    const currentQuizData = quizData[currentQuestionIndex];
    questionEl.innerText = `Q${currentQuestionIndex + 1}. ${currentQuizData.question}`;

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestionIndex].correct) {
        score++;
        alert('정답입니다! 🎉');
    } else {
        alert('아쉽네요, 오답입니다. 🥲');
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizEl.classList.add('hide');
    resultEl.classList.remove('hide');
    scoreEl.innerText = `총 ${quizData.length}문제 중 ${score}문제를 맞혔습니다!`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizEl.classList.remove('hide');
    resultEl.classList.add('hide');
    loadQuestion();
}

// 초기 퀴즈 로드
loadQuestion();
