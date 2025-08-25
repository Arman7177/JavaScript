function* fib () {
    let a = 0, b = 1;
    while (true) {
       yield a;
       [a,b] = [b, a + b];
    }
}

const res = fib();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());


