const p1 = new Promise((resolve) => {setTimeout(() => resolve("First"),1)});
const p2 = new Promise((resolve) => {setTimeout(() => resolve("Second"),0)});

Promise.race([p1,p2]).then(val => console.log(val));
