let number = [1,54,89,23,56,78,15,42,35,89,125]


function compareNumbers(a, b) {
  return a - b;
}

function isSorted(arr) {
    result = arr.sort(compareNumbers)
    return result   
}

console.log(isSorted(number))