const nestedArray = [1,[2,[3,4],5],6];

const obj = {
    data: nestedArray,

    *[Symbol.iterator]() {
        function* flaten(array) {
            for(const elem of array) {
                if(Array.isArray(elem)) {
                    yield * flaten(elem);
                } else {
                    yield elem;
                }
            }
        }
        yield* flaten(this.data);
    }
}

for(const elem of obj) {
    console.log(elem);
}