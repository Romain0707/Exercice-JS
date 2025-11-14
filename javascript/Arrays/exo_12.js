let fruits = ['apple', 'banana', 'orange','orange', 'cherry', 'pear', 'orange', 'orange'];

 

function capitalize(arr) {
    return arr.map(word => word[0].toUpperCase() + word.slice(1))
}


console.log(capitalize(fruits))