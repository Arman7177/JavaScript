function timer(seconds){
    setTimeout(() => {
        console.log(`Printing after ${seconds} seconds`);
    }, seconds * 1000);
}

timer(3);
timer(1);
timer(5)