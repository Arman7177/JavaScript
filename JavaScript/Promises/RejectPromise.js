const promise = new Promise((reject) => {
    reject('Something went wrong');
});

promise.then((result) => {
    console.log(result);
}).catch((val) => {
    console.log(val);
});
