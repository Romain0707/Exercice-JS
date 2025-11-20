const btnStart = document.getElementById('start')
const btnStop = document.getElementById('stop')
const btnReset = document.getElementById('reset')

let x;

let sec = 0
let min = 0
let hour = 0

let secOut = 0
let minOut = 0
let hourOut = 0

btnStart.addEventListener('click', function () {
    x = setInterval(timer, 1000)
})

function timer() {
    secOut = checkTime(sec)
    minOut = checkTime(min)
    hourOut = checkTime(hour)
    sec = ++sec

    if (sec == 60) {
        min = ++min
        sec = 0
    }

    if (min == 60) {
        hour = ++hour
        min = 0
    }

    document.getElementById('timerMain').innerHTML = `${hourOut} : ${minOut} : ${secOut}`
}

btnStop.addEventListener('click',function stop() {
    clearInterval(x)
})

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}

btnReset.addEventListener('click', function () {
    sec = 0
    min = 0
    hour = 0

    document.getElementById('timerMain').innerHTML = `00 : 00 : 00`
    clearInterval(x)
})