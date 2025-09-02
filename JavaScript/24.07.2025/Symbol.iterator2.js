let myIterator = {
    data: [1,2,3,4,5,6],

    [Symbol.iterator](){
        this._index = this.data.length - 1;
        return {
            next: () => {
                if (this._index >= 0){
                    return {value: this.data[this._index--], done: false}
                } else {
                    return {done: true}
                }
            }
        }
    },
   
}


for(let elem of myIterator){
    console.log(elem)
}
