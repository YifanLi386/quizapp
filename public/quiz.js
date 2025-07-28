
document.getElementById('startBtn').addEventListener('click', function() {
    const select = document.getElementById('questionCount');
    select.disabled = true; // Disable dropdown after start
    startQuiz(parseInt(select.value));
});

function startQuiz(totalQuestions) {
    document.getElementById('question-container').innerHTML = '<p>Quiz Started with ' + totalQuestions + ' questions.</p>';
    // Add your quiz logic here...
    setTimeout(() => {
        showResult(Math.floor(Math.random() * totalQuestions), totalQuestions);
    }, 5000);
}

function showResult(score, total) {
    const percentage = ((score / total) * 100).toFixed(2);
    let message = percentage >= 75 ? "Good Job!" : "Keep Going!";
    const resultDiv = document.getElementById('result');
    if(resultDiv){
        resultDiv.innerHTML = `
            <h2>Your Score: ${score}/${total} (${percentage}%)</h2>
            <h3>${message}</h3>
            <button id="restartBtn" class="neon-btn">Restart Quiz</button>
        `;
        document.getElementById('restartBtn').addEventListener('click', () => {
            location.reload();
        });
    } else {
        alert("Your Score: " + score + "/" + total + " - " + message);
    }
}/${total}</h2>
        <h3>${message}</h3>
    `;
}


let countdownInterval;
let timeLeft = 30; // example 30 seconds per quiz

function startCountdown() {
    const timerDiv = document.getElementById('timer');
    timeLeft = 30; // reset each quiz
    timerDiv.style.display = 'block';
    timerDiv.innerHTML = `Time Left: ${timeLeft}s`;
    timerDiv.classList.add('neon-timer');
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        timeLeft--;
        timerDiv.innerHTML = `Time Left: ${timeLeft}s`;
        if(timeLeft <= 5){
            timerDiv.classList.add('warning');
        }
        if(timeLeft <= 0){
            clearInterval(countdownInterval);
            showResult(Math.floor(Math.random() * 10), 10);
        }
    }, 1000);
}

function startQuiz(totalQuestions) {
    startCountdown();
    const questionContainer = document.getElementById('question-container');
    questionContainer.classList.add('fade-in');
    questionContainer.innerHTML = '<p>Quiz Started with ' + totalQuestions + ' questions.</p>';
    setTimeout(() => {
        questionContainer.classList.remove('fade-in');
        questionContainer.classList.add('fade-out');
        setTimeout(() => {
            questionContainer.classList.remove('fade-out');
            questionContainer.classList.add('fade-in');
            questionContainer.innerHTML = '<p>Next Question Here...</p>';
        }, 300);
    }, 3000);
    setTimeout(() => {
        showResult(Math.floor(Math.random() * totalQuestions), totalQuestions);
    }, 10000);
}
