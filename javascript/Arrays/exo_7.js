function reverseWords(sentence) {
    let tempArray = sentence.split(" ")
    let tempReversedArray = tempArray.reverse()
    let result = tempReversedArray.join(" ")
    return result
}

let sentence = "I love programming"
console.log(reverseWords(sentence))