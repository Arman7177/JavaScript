function wait(ms,callback) {
    const start = Date.now();
    while(Date.now() - start < ms){
        //Busy Wait
    }
    callback()
}
wait(2000, () => console.log('Waited 2 seconds'))