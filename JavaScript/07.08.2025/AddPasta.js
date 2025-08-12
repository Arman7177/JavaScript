function boilWater(callback){
    console.log('Boiling Water...');
    setTimeout(callback,2000)
}
function addPasta(callback){
    console.log('Adding Pasta...');
    setTimeout(callback,1000)
}
function cooking(){
    console.log('Pasta is Cooking...');
}

boilWater(() => {
    addPasta(() => {
        cooking();
    });
});
