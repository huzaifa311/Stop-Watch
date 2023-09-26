let startTime;
let isRunning = false;

function startStop() {
    if (isRunning) {
        clearInterval(startTime);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = setInterval(updateTime, 1);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(startTime);
    document.getElementById("display").textContent = "00:00:00";
    isRunning = false;
    document.getElementById("startStop").textContent = "Start";
}

function updateTime() {
    const display = document.getElementById("display");
    const currentTime = display.textContent.split(":");
    let hours = parseInt(currentTime[0]);
    let minutes = parseInt(currentTime[1]);
    let seconds = parseInt(currentTime[2]);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    hours = padTime(hours);
    minutes = padTime(minutes);
    seconds = padTime(seconds);

    display.textContent = `${hours}:${minutes}:${seconds}`;
}

function padTime(time) {
    return (time < 10 ? "0" : "") + time;
}