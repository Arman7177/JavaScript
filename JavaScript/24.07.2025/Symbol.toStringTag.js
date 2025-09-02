const user = {
  name: "Arman",
  age: 25,
  [Symbol.toStringTag]: "UserObject"
};

console.log(Object.prototype.toString.call(user)); 

