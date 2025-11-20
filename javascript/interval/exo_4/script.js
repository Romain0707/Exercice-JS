const clock = document.getElementById('clock')

function clocked() {
    const now = new Date()
    let hours = now.getHours()
    if(hours < 10) {
        hours ='0' + now.getHours()
    }
    let minutes = now.getMinutes()
    if(minutes < 10) {
        minutes ='0' + now.getMinutes()
    }
    let seconds = now.getSeconds()
    if(seconds < 10) {
        seconds ='0' + now.getSeconds()
    }
    let totalHours = `${hours}h${minutes}m${seconds}s`
    clock.style.fontSize = '200px'
    clock.textContent = totalHours
}

const interval = setInterval(clocked, 1000)