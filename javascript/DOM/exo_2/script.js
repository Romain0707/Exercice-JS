const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const button = document.getElementById('calculate')
const result = document.getElementById('result')


button.addEventListener('click', function() {
    let total = parseInt(number1.value) + parseInt(number2.value)
    result.textContent = `Résultat : ${total}`
})