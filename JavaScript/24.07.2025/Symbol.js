let s1 = Symbol('name');
let s2 = Symbol('name');

let obj = {
    [s1]: 'Bob',
    [s2]: 'James',
    name: "Charlie",
};

console.log(s1 == s2);//false

console.log(obj[s1]);//Bob
console.log(obj[s2]);//James

for(let key in obj){
    console.log(key);// name
}


console.log(Object.getOwnPropertySymbols(obj));//[ Symbol(name), Symbol(name) ]
console.log(Object.getOwnPropertyNames(obj));//['name']
console.log(Object.keys(obj));//['name']
console.log(Object.entries(obj));//[ [ 'name', 'Charlie' ] ]



