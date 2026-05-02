// 测试逻辑
let currentQuestionIndex = 0;
let answers = [];

// 初始化测试
function initQuiz() {
  currentQuestionIndex = 0;
  answers = [];
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'flex';
  displayQuestion();
}

// 显示当前题目
function displayQuestion() {
  const question = questions[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;

  document.getElementById('progress-bar').style.width = progressPercent + '%';
  document.getElementById('question-number').textContent = `第 ${currentQuestionIndex + 1} / ${questions.length} 题`;
  document.getElementById('question-text').textContent = question.text;

  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option.text;
    button.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(button);
  });

  // 更新导航按钮状态
  document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
}

// 选择答案
function selectAnswer(optionIndex) {
  const question = questions[currentQuestionIndex];

  // 保存答案
  answers[currentQuestionIndex] = {
    questionId: question.id,
    optionIndex: optionIndex,
    scores: question.options[optionIndex].scores
  };

  // 视觉反馈
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach((btn, idx) => {
    if (idx === optionIndex) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  // 自动进入下一题
  setTimeout(() => {
    nextQuestion();
  }, 150);
}

// 下一题
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    // 测试完成，计算结果
    calculateResult();
  }
}

// 上一题
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

// 计算结果
function calculateResult() {
  const personalityScores = {};

  // 初始化所有性格分数为0
  allPersonalities.forEach(p => {
    personalityScores[p] = 0;
  });

  // 累加分数
  answers.forEach(answer => {
    if (answer && answer.scores) {
      for (const [personality, points] of Object.entries(answer.scores)) {
        if (personalityScores.hasOwnProperty(personality)) {
          personalityScores[personality] += points;
        }
      }
    }
  });

  // 找出最高分的性格
  let maxScore = 0;
  let topPersonalities = [];

  for (const [personality, score] of Object.entries(personalityScores)) {
    if (score > maxScore) {
      maxScore = score;
      topPersonalities = [personality];
    } else if (score === maxScore && score > 0) {
      topPersonalities.push(personality);
    }
  }

  // 如果有多个最高分，随机选一个
  const resultPersonality = topPersonalities[Math.floor(Math.random() * topPersonalities.length)];

  // 保存结果并跳转
  sessionStorage.setItem('quizResult', resultPersonality);
  window.location.href = 'result.html';
}

// 重新开始
function restartQuiz() {
  currentQuestionIndex = 0;
  answers = [];
  document.getElementById('welcome-screen').style.display = 'flex';
  document.getElementById('quiz-screen').style.display = 'none';
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-btn').addEventListener('click', initQuiz);
  document.getElementById('prev-btn').addEventListener('click', prevQuestion);
});
