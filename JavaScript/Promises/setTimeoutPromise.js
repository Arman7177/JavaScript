function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World");
        },ms * 1000)
    })
}

delay(4).then((val) => {
    console.log(val);
});