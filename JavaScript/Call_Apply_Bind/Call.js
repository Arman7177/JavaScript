Function.prototype.myCall = function (context,...args) {
    context = context || globalThis;
    context = Object(context);
    const symb = Symbol('tmp');
    context[symb] = this;
    const result = context[symb](...args);
    delete context[symb];
    return result;
}

function greet (msg) {
    console.log(msg + this.name);
}

const person = {
    name: 'Arman',
    age: 25,
}

greet.myCall(person,'Hello ');
