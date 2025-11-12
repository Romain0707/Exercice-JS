for (let i = 1; i <= 100; i++ ) {
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i, "foobar")
    } else if(i % 5 === 0) {
        console.log(i, "bar")
    } else if(i % 3 === 0 ) {
        console.log(i, "foo")
    }
}