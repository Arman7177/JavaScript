let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [];

for(let i = 0; i < arr1.length;++i){
    arr3 += arr1[i];
}
for(let i = 0; i < arr2.length;++i){
    arr3 += arr2[i];
}
console.log(arr3);