

// Globale variables

const startPauseBtn = document.querySelector('#startPauseBtn');

const resetBtn = document.querySelector('#resetBtn');

// Variables for time values

let seconds = 0;
let  minutes = 0;
let hours = 0;

// Variable for leading zero

let leadingSeconds = 0;
let  leadingMinutes = 0;
let leadingHours = 0;


// Variables to store the interval & evaluate the status of the timer

let timerInterval = null;

let timerStatus = "stopped";


// Stop Watch Function

function stopWatch(){

    seconds++;

    if (seconds / 60 === 1) {
        
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {

            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        
        leadingSeconds = "0" + seconds.toString();
    }else{
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        
        leadingMinutes = "0" + minutes.toString();
    }else{
        leadingMinutes = minutes;
    }
    
    if (hours < 10) {
        
        leadingHours = "0" + hours.toString();
    }else{
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;

}


startPauseBtn.addEventListener('click', function(){

    if (timerStatus === "stopped") {
        
        //  The setInterval calls the stopWatch function every 100 milliseconds (0.1 seconds)
        timerInterval = window.setInterval(stopWatch, 100);

        document.getElementById('startPauseBtn').innerHTML = '<img src="images/pauseBtn.svg" alt="pauseButton" id="pause">';

        timerStatus = 'started';
    }else{

        // Stopping the timer using clearInterval() method
        window.clearInterval(timerInterval);

        document.getElementById('startPauseBtn').innerHTML = '<img src="images/playBtn.svg" alt="playButton" id="play">';

        timerStatus = 'stopped';

    }
})

resetBtn.addEventListener('click', function(){

    window.clearInterval(timerInterval);
    timerStatus = 'stopped';
    document.getElementById('startPauseBtn').innerHTML = '<img src="images/playBtn.svg" alt="playButton" id="play">';
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    
})