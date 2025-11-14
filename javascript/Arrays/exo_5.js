let fruits = ['apple', 'banana', 'orange','orange', 'cherry', 'pear', 'orange', 'orange'];



function countOccurances(arr, value) {
    return arr.filter(element => element === value).length
}


console.log(countOccurances(fruits, "orange"))
