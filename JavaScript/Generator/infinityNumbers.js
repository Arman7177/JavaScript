function* infinityNumbes () {
    let i = 1;
    while(true) {
        yield i++;
    }
}
const num = infinityNumbes();
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

