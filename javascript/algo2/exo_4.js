
const black = "⬛"
const white = "⬜"
const squarePattern = false;

let size = 25

for (let i = 0; i < size; i++) {
    let row = ""
    if(squarePattern == true) {
        for (let j = 0; j < size; j++) {
        
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                row += black
            } else if ( i === 1 || i === size - 2 || j === 1 || j === size -2 ) {
                row += white
            } else {
                row += black
            }
        }
    } else {
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                row += black
            } else if ( i == j || i == size - 1 - j) {
                row += black
            } else {
                row += white
            }
        }
    }
    console.log(row);
}


