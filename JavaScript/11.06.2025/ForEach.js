Array.prototype.myForEach = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function');
    }
    for (let i = 0; i < this.length; ++i) {
        if (i in this) {
            if(callback(this[i],i,this)) {

            }
        }
    }
}
let arr = [1,2,3,4,5,6,7,8];
arr.myForEach((i) => console.log(i * 2));

