function* Generator () {
   yield 1;
   yield 2;
   yield 3;
}
const gen = Generator();

console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next());
