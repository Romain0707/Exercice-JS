function mergArrays(arr1, arr2) {
    let result = []
    arr1.forEach((item) => { result.push(item) })
    arr2.forEach((item) => { result.push(item) })
    return result
}



let number = [30,1,23,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18]

let fruits = ['apple', 'banana', 'cherry', 'pear', 'orange'];


console.log(mergArrays(number, fruits))