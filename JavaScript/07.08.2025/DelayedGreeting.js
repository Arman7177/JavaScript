function greetLater(name) {
    setTimeout(() => console.log(`Hello ${name}`),2000);
}

console.log('Start');
greetLater('Arman');
console.log('End');

