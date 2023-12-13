let timer;
let countdown;
let totalSeconds;

function startTimer() {
    const minutesInput = document.getElementById('minutes');
    const minutes = parseInt(minutesInput.value);
    if (isNaN(minutes) || minutes <= 0) {
        alert('Please enter a valid number of minutes.');
        return;
    }

    totalSeconds = minutes * 60;
    updateTimerDisplay();

    
    minutesInput.disabled = true;
    document.querySelector('button').disabled = true;

    countdown = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            document.getElementById('timer').innerText = '00:00';
        } else {
            totalSeconds--;
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hoursDisplay = Math.floor(totalSeconds / 3600)
    const minutesDisplay = Math.floor((totalSeconds % 3600)/60);
    const secondsDisplay = totalSeconds % 60;
    document.getElementById('timer').innerText =
        `${hoursDisplay.toString().padStart(2, '0')}:${minutesDisplay.toString().padStart(2, '0')}:${secondsDisplay.toString().padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(countdown);
    document.getElementById('timer').innerText = '00:00';
    document.getElementById('minutes').disabled = false;
    document.querySelector('button').disabled = false;
}

function pauseTimer() {
    clearInterval(countdown);
}