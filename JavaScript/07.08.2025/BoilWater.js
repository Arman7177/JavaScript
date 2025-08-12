// Option 1
function boilWater(callback){
    console.log('Boiling water...');
    setTimeout(callback,3000);
}
function waterReady(){
    console.log("Water Ready...");
}

boilWater(waterReady);


// Option 2

function boilWater(callback){
    console.log('Boiling water...');
    setTimeout(function waterReady() {
        console.log("Water Ready...")
    },3000);
}

boilWater();


