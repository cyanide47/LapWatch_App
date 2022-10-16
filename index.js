const startBtn = document.querySelector('.startBtn');
const mainStartBtn = document.querySelector('.mainStartbtn');

const lapResetBtn = document.querySelector('.lapResetBtn');
const mainLapBtn = document.querySelector('.mainlapBtn');

const laps = document.querySelector('.laps');

let milisec = 0;
let sec = 0;
let min = 0;

let m = 0;
let s = 0;
let ms = 0 ;

let time = document.querySelector('.time');
let int = null;

let isTimerStarted = false;

startBtn.addEventListener('click', () => {
    if(isTimerStarted === false) {
        int = setInterval(displayTimer, 10);
    }else {
        clearInterval(int);
    }
})

function displayTimer(){
    milisec++;

    if(milisec >= 99){
        sec++;
        milisec = 0;
    }
    if(sec >= 60){
        min++;
        sec = 0;
    }

    m = min < 10 ? "0" + min : min;
    s = sec < 10 ? "0" + sec : sec;
    ms = milisec < 10 ? "0" + milisec : milisec;

    time.innerHTML = `${m}:${s}:${ms}`;
}