function cleanInput(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function palindrome(str) {
    str = cleanInput(str)
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}


console.log(palindrome("eye"))
console.log(palindrome("eye"))
console.log(palindrome("_eye"))
console.log(palindrome("race car"))
console.log(palindrome("not a palindrome"))
console.log(palindrome("A man, a plan, a canal, Panama"))
console.log(palindrome("never odd or even"))
console.log(palindrome("nope"))
console.log(palindrome("almostomla"))
console.log(palindrome("My age is 0, 0 si ega ym."))
console.log(palindrome("1 eye for of 1 eye."))
console.log(palindrome("00(:/-\:)0-0"))
console.log(palindrome("five|/|four"))
