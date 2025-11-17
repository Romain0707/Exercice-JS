let fruits = ['apple', 'banana', 'orange','orange', 'cherry', 'pear', 'orange', 'orange'];

function mostFrequent(arr) {
    let most = arr[0]   
    let maxCount = 1

    for (let i = 0; i < arr.length; i++) {
        let count = countOccurances(arr, arr[i])    

        if (count > maxCount) {
            maxCount = count
            most = arr[i]
        }
    }

    return most;
}

function countOccurances(arr, value) {
    return arr.filter(element => element === value).length
}

console.log(mostFrequent(fruits))

