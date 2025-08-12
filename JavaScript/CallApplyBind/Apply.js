Function.prototype.myApply = function (context,args) {
    context = context || globalThis;
    context = Object(context);
    const symb = Symbol('tmp');
    context[symb] = this;
    let res;
    if (Array.isArray(args)) {
       res = context[symb](...args);
    } else {
        res = context[symb]();
    }
    delete context[symb];
    return res;
}

function greet (msg,from) {
   console.log(msg + this.name, 'from',from);
}

const person = {
    name: 'Arman',
    age: 25,
}

greet.myApply(person,['Hello ','Yerevan'])