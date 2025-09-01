const p1 = Promise.resolve(10);
const p2 = new Promise((resolve) => { setTimeout(() => resolve(20),2000)});
const p3 = Promise.resolve(30);

Promise.all([p1,p2,p3]).then((val) => console.log(val))