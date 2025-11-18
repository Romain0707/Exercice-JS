function sumAll([a, b]) {
    if ( a > b ) {
        let sum = 0
        for (let i = b; i <= a; i++) {
            sum += i
        }
        return sum
    } else if ( a < b ) {
        let sum = 0
        for(let i = a; i <= b; i++) {
            sum += i
        }
        return sum
    }
}



console.log(sumAll([1, 4]))
console.log(sumAll([4, 1]))
console.log(sumAll([5, 10]))
console.log(sumAll([10, 5]))