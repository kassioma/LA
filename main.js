const letters = ['A', 'B', 'C', 'D'];
let current = 0;
let answers = [];
let answered = false;

function render() {
  const q = questions[current];
  answered = false;

  document.getElementById('question-num').textContent = `Questão ${String(current+1).padStart(2,'0')} de ${questions.length}`;
  document.getElementById('question-text').textContent = q.question;
  document.getElementById('progress-label').textContent = `${current+1} / ${questions.length}`;
  document.getElementById('progress-fill').style.width = `${(current / questions.length) * 100}%`;

  const hintBox = document.getElementById('hint-box');
  hintBox.classList.remove('visible');
  const hintToggle = document.getElementById('hint-toggle');
  hintToggle.classList.remove('open');
  document.getElementById('btn-next').classList.remove('visible');

  const optionsEl = document.getElementById('options');
  optionsEl.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.onclick = () => selectOption(i, btn);
    optionsEl.appendChild(btn);
  });

  // Animate card
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'fadeUp 0.35s ease both';
}

function selectOption(idx, btn) {
  if (answered) return;
  answered = true;

  const q = questions[current];
  const allBtns = document.querySelectorAll('.option');
  allBtns.forEach(b => b.disabled = true);

  const isCorrect = idx === q.correct;
  answers.push({ correct: isCorrect, question: q.question });

  btn.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) {
    allBtns[q.correct].classList.add('correct');
  }

  document.getElementById('hint-text').textContent = q.hint;

  const nextBtn = document.getElementById('btn-next');
  nextBtn.textContent = current < questions.length - 1 ? 'Próxima questão →' : 'Ver resultado →';
  nextBtn.classList.add('visible');
}

document.getElementById('btn-next').onclick = () => {
  current++;
  if (current < questions.length) {
    render();
  } else {
    showResult();
  }
};

function showResult() {
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('progress-wrap').style.display = 'none';
  const rs = document.getElementById('result-screen');
  rs.style.display = 'block';

  const score = answers.filter(a => a.correct).length;
  const pct = Math.round((score / questions.length) * 100);

  document.getElementById('score-circle').style.setProperty('--pct', pct);
  document.getElementById('score-number').textContent = `${score}/${questions.length}`;

  let title, msg;
  if (pct >= 90) {
    title = '🏆 Excelente!';
    msg = 'Domínio exemplar da Lei nº 9.609/1998. Você está bem preparado para provas e concursos.';
  } else if (pct >= 70) {
    title = '✅ Muito bom!';
    msg = 'Bom conhecimento da lei. Revise os pontos que errou para fixar melhor.';
  } else if (pct >= 50) {
    title = '📚 Em progresso';
    msg = 'Conhecimento parcial. Vale reler os artigos da Lei 9.609/98 com atenção.';
  } else {
    title = '📖 Continue estudando';
    msg = 'A lei tem muitas nuances. Revise o material da Aula 06 e tente novamente!';
  }

  document.getElementById('result-title').textContent = title;
  document.getElementById('result-msg').textContent = msg;

  // Summary
  const summaryEl = document.getElementById('summary');
  summaryEl.innerHTML = `<div class="summary-title">Desempenho por questão</div>`;
  answers.forEach((a, i) => {
    const row = document.createElement('div');
    row.className = 'summary-row';
    const short = a.question.length > 70 ? a.question.substring(0, 70) + '…' : a.question;
    row.innerHTML = `
      <div class="dot ${a.correct ? 'ok' : 'fail'}"></div>
      <span class="summary-q">Q${String(i+1).padStart(2,'0')} — ${short}</span>
      <span class="summary-tag ${a.correct ? 'ok' : 'fail'}">${a.correct ? 'certo' : 'errado'}</span>
    `;
    summaryEl.appendChild(row);
  });
}

function toggleHint() {
  const box = document.getElementById('hint-box');
  const btn = document.getElementById('hint-toggle');
  const q = questions[current];
  document.getElementById('hint-text').textContent = q.hint;
  const isOpen = box.classList.toggle('visible');
  btn.classList.toggle('open', isOpen);
  btn.querySelector('.arrow').textContent = isOpen ? '▼' : '▶';
}

function restart() {
  current = 0;
  answers = [];
  answered = false;
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById('progress-wrap').style.display = 'flex';
  render();
}

render();
