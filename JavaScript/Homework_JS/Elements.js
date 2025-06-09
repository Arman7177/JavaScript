function sum(arr){
    let res = 0;
    for(let i = 0; i < arr.length;++i){
        res += arr[i];
    }
    return res;
}

let arr = [10,20,30,40];

console.log(sum(arr));