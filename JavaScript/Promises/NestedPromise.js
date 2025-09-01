new Promise(resolve => {
    setTimeout(() => {resolve(5)},1000)
}).then((value) => {
    console.log("First",value);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value * 2);
        },1000)
    })
}).then(val => console.log("Second",val));