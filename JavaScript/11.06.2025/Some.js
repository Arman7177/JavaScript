Array.prototype.mySome = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    for (let i = 0; i < this.length; ++i) {
        if (i in this) {
            if (callback(this[i],i,this)) {
                return true;
            }
        }
    }
    return false;
}
const arr = [1,2,3,4,5,6,7,8];
console.log(arr.mySome((i) => i > 7)); //true
