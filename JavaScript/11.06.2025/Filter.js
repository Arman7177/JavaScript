Array.prototype.myFilter = function(callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback is not function');
    }
    let res = [];
    for (let i = 0; i < this.length; ++i) {
        if (i in this) {
            if (callback(this[i],i,this)) {
                res.push(this[i]);
            }
        }
    }
    return res;
}
let arr = [1,2,3,4,5,6,7,8];
const result = arr.myFilter((i) => i > 4 && i % 2 == 0);
console.log(result); // [ 6, 8 ]
