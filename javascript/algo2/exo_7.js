let pierre = "pierre"
let feuille = "feuille"
let ciseau = "ciseau"
let choice = "pierre"

let number = Math.floor(Math.random() * 3) + 1;

if (number === 1) {
    number = pierre
} else if (number === 2) {
    number = feuille
} else if (number === 3) {
    number = ciseau
} else {
    console.log("Erreur")
}

console.log("Ordi :", number)

if (choice === number) {
    console.log("match nul")
} else if (choice === feuille && number === ciseau) {
    console.log("Vous avez choisit feuille, vous perdez contre le ciseau")
} else if (choice === feuille && number === pierre) {
    console.log("Vous avez choisit feuille, vous gagnez contre la pierre")
} else if (choice === ciseau && number === pierre) {
    console.log("Vous avez choisit ciseau, vous perdez contre la pierre")
} else if (choice === ciseau && number === feuille) {
    console.log("Vous avez choisit ciseau, vous gagnez contre la feuille")
} else if (choice === pierre && number === feuille) {
    console.log("Vous avez choisit pierre, vous perdez contre la feuille")
} else if (choice === pierre && number === ciseau) {
    console.log("Vous avez choisit pierre, vous gagnez contre le ciseau")
} else {
    console.log("choisissez pierre, feuille ou ciseau")
}