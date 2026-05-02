// 结果页面逻辑
document.addEventListener('DOMContentLoaded', () => {
  const resultPersonality = sessionStorage.getItem('quizResult');

  if (!resultPersonality || !personalityData[resultPersonality]) {
    // 如果没有结果，返回首页
    window.location.href = 'index.html';
    return;
  }

  const data = personalityData[resultPersonality];

  // 显示结果
  document.getElementById('result-icon').src = data.icon;
  document.getElementById('result-icon').alt = data.pet;
  document.getElementById('pet-name').textContent = data.pet;
  document.getElementById('personality-name').textContent = data.name;
  document.getElementById('personality-stats').textContent = data.stats;
  document.getElementById('personality-description').textContent = data.description;
  document.getElementById('personality-traits').textContent = data.traits;

  // 添加动画效果
  setTimeout(() => {
    document.querySelector('.result-container').classList.add('show');
  }, 100);
});

// 重新测试
function retakeQuiz() {
  sessionStorage.removeItem('quizResult');
  window.location.href = 'index.html';
}
