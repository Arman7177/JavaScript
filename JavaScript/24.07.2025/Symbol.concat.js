let arr1 = [1,2,3];
let arr2 = [4,5,6];
arr2[Symbol.isConcatSpreadable] = false;

console.log(arr1.concat(arr2));//[ 1, 2, 3, [4,5,6] ];


let obj = {
    0: 'a',
    1: 'b',
    length: 2,
    [Symbol.isConcatSpreadable]: true,
}


console.log(arr1.concat(obj));//[ 1, 2, 3, 'a', 'b' ]


