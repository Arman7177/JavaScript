const obj = {
    name: 'Arman',
    age: 25,
    isStudent: true,

    [Symbol.toPrimitive](hint){
        if(hint === 'string') {
            return this.name;
        }else if (hint === 'number') {
            return this.age;
        } else {
            return this.isStudent
        }
    }
}

console.log(+obj);
console.log(String(obj));
console.log(!obj);


