function fetchData(url) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(Math.random() > 0.2) {
                resolve(`Data from ${url}`);
            } else {
                reject(`Failed to fetch ${url}`);
            }
        },1000)
    });
}

Promise.allSettled([
    fetchData("https://api.site1.com"),
    fetchData("https://api.site2.com"),
    fetchData("https://api.site3.com")
]).then((data) => {
    console.log("Data",data);
}).catch((err) => {
    console.log(err);
});