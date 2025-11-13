
const black = "⬛"
const white = "⬜"

const size = 25
const interval = 2
const spiralPattern = true


for (let i = 0; i < size; i++) {
    let row = ""
    if(spiralPattern == false) {
        for (let j = 0; j < size; j++) {
            let x = Math.min(i, j, size - 1 - i, size - 1 - j);
        
            if (x % interval === 0 ) {
                row += black
            } else {
                row += white
            }
        }
    } else {
        for (let j = 0; j < size; j++) {
        if ((i % 2 === 0 && j >= i && i < size - j) || (i % 2 === 0 && i >= j && j > size - i) || (j % 2 === 0 && j >= i && i > size - j - 1) || (j % 2 === 0 && i >= j && j < size - i + 1 )) {
            row += black;
        } else {
            row += white;
        }
    }
    }
    console.log(row)
}