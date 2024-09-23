let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
let isStopped = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (!isRunning && !isStopped) {
            startTimer();
        } else if (isRunning) {
            stopTimer();
        } else if (isStopped) {
            resetTimer();
        }
    }
});

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 50);
    isRunning = true;
    isStopped = false;

    const timerElement = document.getElementById('timer');
    timerElement.style.animation = 'none';

    document.getElementById('result').textContent = '';
    document.getElementById('result').className = '';
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isStopped = true;

    const timerElement = document.getElementById('timer');
    timerElement.style.animation = '';

    checkResult();
}

function resetTimer() {
    elapsedTime = 0;
    document.getElementById('timer').textContent = '0.00';
    isStopped = false;

    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
    resultElement.className = '';

    const timerElement = document.getElementById('timer');
    timerElement.style.animation = '';
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    const timeInSeconds = (elapsedTime / 1000).toFixed(2);
    document.getElementById('timer').textContent = timeInSeconds;
}

function checkResult() {
    const timeInSeconds = (elapsedTime / 1000).toFixed(2);
    const resultElement = document.getElementById('result');
    const targetTime = 11.11;
    const tolerance = 0.00; // 추가 시간

    if (Math.abs(timeInSeconds - targetTime) <= tolerance) {
        resultElement.textContent = '성공! 상품을 받아가세요!!!';
        resultElement.className = '';
        resultElement.classList.add('green-neon-text');
    } else {
        resultElement.textContent = `실패!!! ${timeInSeconds}초에 멈추셨네요ㅠㅠ`;
        resultElement.className = '';
        resultElement.classList.add('pink-neon-text');
    }
}