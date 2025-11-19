const blink = document.getElementById('blink')

function blinked() {
    if(blink.textContent == 'Clignotant...') {
        blink.textContent = ''
    } else {
        blink.textContent = 'Clignotant...'
    }
}

const interval = setInterval(blinked, 500)

