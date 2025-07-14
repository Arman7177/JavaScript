Array.prototype.myMap = function(callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    const res = [];
    for (let i = 0; i < this.length; ++i) {
        if (i in this) {
            res.push(callback(this[i],i,this));
        }
    }
    return res;
}
let arr = [1,2,3,4,5,6,7,8];
const result = arr.myMap((i) => i * 3);
console.log(result);
