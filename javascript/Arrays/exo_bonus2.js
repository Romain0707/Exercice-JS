function myReplace(phrase, avant, apres) {
    let result = ''
    let arr = phrase.split(' ')
    for(i = 0; i <= arr.length -1 ; i++) {
        if (arr[i] == avant) {
            
            console.log(arr[i])
            arr[i] = apres
            result = arr[i]
        }
    }
    result = arr.join(' ') 
    return result
}




// console.log(myReplace("Let us go to the store", "store", "mall"))
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
// console.log(myReplace("I think we should look up there", "up", "Down"))
// console.log(myReplace("This has a spellngi error", "spellngi", "spelling"))
// console.log(myReplace("His name is Tom", "Tom", "john"))
// console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))



