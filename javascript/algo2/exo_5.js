
let black = "⬛"
let white = "⬜"

let size = 25
let n = 2

for (let i = 0; i < size; i++) {
    let row = ""

    for (let j = 0; j < size; j++) {
    
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1 ) {
            row += black
        } else if ( i === n - 1|| i === size - n || j === n - 1 || j === size - n ) {
            row += white
        } else {
            row += black
        }
        
    }
    console.log(row)
}