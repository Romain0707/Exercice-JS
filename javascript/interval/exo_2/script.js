
const count = document.getElementById('countdown')

let number = 6

function countdown() {
    number = number - 1
    if(number == 0) {
        number = 'Go !'
    }
    count.textContent = `${number}`
}

const interval = setInterval(countdown, 1000)

setTimeout(function() {
    clearInterval(interval)
}, 6000)
    

