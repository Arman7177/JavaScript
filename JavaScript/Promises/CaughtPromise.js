new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Network Error"),1000});
})
.then(data => {
    console.log("Data:", data);
})
.catch((err) => {
    console.error("Caught:", err);
})
.finally(() => {
    console.log("Always runs");
});
