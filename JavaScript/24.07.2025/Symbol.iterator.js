const iterator = {
    data: [1,2,3,4,5,6],

    [Symbol.iterator]() {
        let index = 0;
        let data = this.data;

        return {
            next() {
                if(index < data.length) {
                    return {value: data[index++], done: false}
                }else {
                    return {value: undefined, done: true}
                }
            },
            [Symbol.iterator]() {
                return this;
            }
        }
    }
}

for(const elem of iterator){
     console.log(elem)
}
