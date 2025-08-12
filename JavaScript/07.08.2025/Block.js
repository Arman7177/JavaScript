function block(seconds) {
    const end = Date.now() + seconds * 1000;
    while(Date.now() < end) {
        //Busy Wait
    }
}

console.log("Start");
block(3);
console.log("End");