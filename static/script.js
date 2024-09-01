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
    timerInterval = setInterval(updateTimer, 10);
    isRunning = true;
    isStopped = false;
    document.getElementById('result').textContent = '';
    document.getElementById('result').className = '';
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isStopped = true;
    checkResult();
}

function resetTimer() {
    elapsedTime = 0;
    document.getElementById('timer').textContent = '0.00';
    isStopped = false;
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    const timeInSeconds = (elapsedTime / 1000).toFixed(2);
    document.getElementById('timer').textContent = timeInSeconds;
}

function checkResult() {
    const timeInSeconds = (elapsedTime / 1000).toFixed(2);
    const resultElement = document.getElementById('result');
    const targetTime = 5.5;
    const tolerance = 1.00;

    if (Math.abs(timeInSeconds - targetTime) <= tolerance) {
        resultElement.textContent = '성공! 상품을 받아가세요!!!';
        resultElement.classList.remove('fail');
        resultElement.classList.add('success');
    } else {
        resultElement.textContent = `실패! ${timeInSeconds}초에 멈추셨네요ㅠㅠ`;
        resultElement.classList.remove('success');
        resultElement.classList.add('fail');
    }
}
