let previousBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let progressTracker = document.querySelector(".progress-tracker");
let task = document.querySelectorAll(".track-task");
let trackLine = document.querySelector(".track-line");
let updateTrack = document.querySelector(".update-line-track");
let currentPoint = 0;
let taskLength = task.length;

previousBtn.disabled = true;

function updateProgress() {
    let width = (currentPoint / (taskLength - 1)) * 100;
    updateTrack.style.width = `${width}%`;
}

task[currentPoint].classList.add('update');

function trackNextTask() {
    if (currentPoint !== taskLength - 1) {
        currentPoint++;
        task[currentPoint].classList.add('update');
        updateProgress();
    }
    if (currentPoint === taskLength - 1) {
        task[currentPoint].classList.add('update');
        previousBtn.disabled = false;
        nextBtn.disabled = true;
    }
}
nextBtn.addEventListener("click", trackNextTask);

function trackPreviousTask() {
    if (currentPoint !== 0) {
        task[currentPoint].classList.remove("update");
        currentPoint--;
        updateProgress();
        console.log(currentPoint);
    }

    if (currentPoint === 0) {
        previousBtn.disabled = true;
        nextBtn.disabled = false;
    }

}
previousBtn.addEventListener("click", trackPreviousTask);

