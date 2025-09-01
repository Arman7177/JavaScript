const p1 = Promise.resolve('First');
const p2 = Promise.resolve('Second');
const p3 = Promise.resolve('Third');

Promise.allSettled([p1,p2,p3]).then((val) => console.log(val));
