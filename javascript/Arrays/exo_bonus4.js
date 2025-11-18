function smallestCommons([min, max]) {
    let arr = [min, max]
    if(min > max) {
        arr.reverse()
    }
    min = arr[0]
    max= arr[1]

    function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }
    
    var multiple = min;
    range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });
    return multiple;
}

console.log(smallestCommons([1, 5]))
console.log(smallestCommons([5, 1])) 
console.log(smallestCommons([2, 10])) 
console.log(smallestCommons([1, 13])) 
console.log(smallestCommons([23, 18])) 
