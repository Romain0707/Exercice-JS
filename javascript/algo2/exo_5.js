
let black = "⬛"
let white = "⬜"

let size = 25

for (let i = 0; i < size; i++) {
    let row = ""

    for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
            row += black
        } else {
            row += white
        }
    }
    console.log(row)
}