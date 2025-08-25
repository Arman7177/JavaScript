function* interactiveGen () {

    const x = yield "First yield";
    console.log('Go Back',x);

    const y = yield "Second yield";
    console.log('Go back',y);
}
const g = interactiveGen();
console.log(g.next());      
console.log(g.next(42));     
console.log(g.next("hello")); 
