let module1 = {};
module1.shared = Symbol.for('session');
module1[module1.shared] = 'Module 1 data';

let module2 = {};
module2.shared = Symbol.for('session');
module2[module2.shared] = "Module  2 data";

console.log(module1.shared === module2.shared);//true
console.log(Symbol.keyFor(module1.shared));//session
console.log(Symbol.keyFor(module2.shared));//session
console.log(module1[module1.shared]);//'Module 1 data'
console.log(module2[module2.shared]);//'Module 2 data'








