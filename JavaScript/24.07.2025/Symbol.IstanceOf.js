// class AdminOnly {
//     static [Symbol.hasInstance](obj) {
//         return obj && obj.role == "admin";
//     }
// }

// const obj1 = {name:'Arman',role:'admin'}
// const obj2 = {name:'James',role:'manager'}

// console.log(obj1 instanceof AdminOnly);//true
// console.log(obj2 instanceof AdminOnly);//false


class AdminOnly {
    static [Symbol.hasInstance](obj) {
        return obj && obj.role == 'admin';
    }
}

let obj1 = {name: "Arman", role: 'admin'};
let obj2 = {name: "Artak", role: 'manager'};

console.log(obj1 instanceof AdminOnly);
console.log(obj2 instanceof AdminOnly);

