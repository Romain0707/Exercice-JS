let fruits = ['apple', 'banana', 'cherry', 'pear', 'orange'];

function reverseArray(arr) {
    let result = []
    for ( let i = arr.length - 1 ; i >= 0 ; i--) {
        result.push(arr[i])
    }
    return result
}


console.log(fruits)
fruits = reverseArray(fruits)
console.log(fruits)