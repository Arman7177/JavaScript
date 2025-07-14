let numList = [3,6,9,12];
let found = false;

for(let i = 0; i < numList.length;++i){
    if(numList[i] === 9){
        console.log(i);
        found = true;
        break;
    }
}    
    if(!found){
        console.log('There is no such a number in array');
    }