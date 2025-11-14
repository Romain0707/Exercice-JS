let number = [30,1,23,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18]



function filterEven(arr) {
    let pair = []
    let impair = []

    arr.forEach((item) => {
        if( item % 2 === 0) {
            pair.push(item)
        } else {
            impair.push(item)
        }
    })

    return pair
}


console.log(filterEven(number))