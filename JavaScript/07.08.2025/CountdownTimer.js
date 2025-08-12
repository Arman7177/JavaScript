function countDown(seconds) {
    const interval = setInterval(() => {
        console.log(seconds--);
    if(seconds < 0){
       clearInterval(interval);
    }
    },1000)
}
countDown(10);