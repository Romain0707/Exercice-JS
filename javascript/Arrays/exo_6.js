let fruits = ['apple', 'banana', 'orange','orange', 'cherry', 'pear', 'orange', 'orange'];

function mostFrequent(arr) {
    let most = arr[0]   
    let maxCount = 1

    for (let i = 0; i < arr.length; i++) {
        let count = 0    
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++
            }
        }
        if (count > maxCount) {
            maxCount = count
            most = arr[i]
        }
    }

    return most;
}


console.log(mostFrequent(fruits))

