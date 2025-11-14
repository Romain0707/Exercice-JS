let fruits = ['apple', 'banana', 'orange','orange', 'cherry', 'pear', 'orange', 'orange'];


function removeDuplicates(arr) {
    return [...new Set(arr)];
}


console.log(removeDuplicates(fruits))