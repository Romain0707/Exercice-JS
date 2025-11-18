
const button = document.getElementById('button')
const input = document.getElementById('userInput')
const message = document.getElementById('message')


const bonjour = "Bonjour"
const bye = "Au revoir"

button.addEventListener('click', function() {
    if(input.value == bonjour) {
        message.textContent = "Bonne journée !"
        if(message.classList.contains('text-red')) {
            message.classList.remove('text-red')
            message.classList.add('text-green')
        } 
    } else if(input.value == bye) {
        message.textContent = 'À la prochaine !'
        if(message.classList.contains('text-red')) {
            message.classList.remove('text-red')
            message.classList.add('text-green')
        }
    } else {
        message.textContent = "Je ne comprends pas"
        if(message.classList.contains('text-green')) {
            message.classList.remove('text-green')
            message.classList.add('text-red')
        }
    }
})

