const promise = new Promise((resolve) => {
    resolve('Hello World');
});

promise.then((val) => {
    console.log(val);
});