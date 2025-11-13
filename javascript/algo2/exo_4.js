
let black = "⬛"; 
let white = "⬜";
let carrePattern = false;

let size = 25;

for (let i = 0; i < size; i++) {
    let row = "";

    for (let j = 0; j < size; j++) {
        if(carrePattern == true) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                row += black;
            } else if ( i === 1 || i === size - 2 || j === 1 || j === size -2 ) {
                row += white;
            } else {
                row += black;
            }
        } else {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                row += black;
            } else if ( i % 2 !== 0 && j % 2 !== 0) {
                row += white;
            } 

        }
    }
    console.log(row);
}


