// Timer
let timerInterval;
let timerRunning = false;
let timerSeconds = 0;

function startTimer() {
  if (!timerRunning) {
    timerInterval = setInterval(incrementTimer, 1000);
    timerRunning = true;
  }
}

function pauseTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = 0;
  document.getElementById('timerDisplay').textContent = formatTime(timerSeconds);
}

function incrementTimer() {
  timerSeconds++;
  document.getElementById('timerDisplay').textContent = formatTime(timerSeconds);
}



function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;

  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(num) {
  return String(num).padStart(2, '0');
}

// Event listeners
document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);

