Array.prototype.myIndexOf = function(searchElement,fromIndex) {
    if (fromIndex < 0) {fromIndex += this.length;}
    if (fromIndex < 0) {fromIndex = 0;}
    for (let i = fromIndex; i < this.length; ++i) {
        if (searchElement === this[i]) {
            return i;   
        }
    }
    return -1;
}
const arr = [1,2,3,4,5,6,7,8];
console.log(arr.myIndexOf(1,-5));
