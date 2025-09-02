function range(start,end,step = 1) {
    if(step == 0){throw new Error("The step can't be zero")};

    this.start = start;
    this.end = end;
    this.step = step;

    this[Symbol.iterator] = function* (){
        if(step > 0) {
            for(let i = start; i < end; i += step) {
                yield i;
            } 
        }else {
            for(let i = start; i > end; i += step) {
            yield i;
            }
        }
    }
}

console.log("To Up")
for(elem of new range(1,10,2)) {
    console.log(elem)
}

console.log("To Down")
for(elem of new range(10,1,-2)) {
    console.log(elem)
}