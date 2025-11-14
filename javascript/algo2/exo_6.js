const numberRandom = Math.floor(Math.random()*100)

let userNumber = 70

if (userNumber < numberRandom) {
    console.log('Le nombre est plus petit que le nombre à trouver')
} else if (userNumber == numberRandom) {
    console.log('Tu as trouvé le bon nombre !')
} else {
    console.log('Le nombre est plus grand que le nombre à trouver')
}