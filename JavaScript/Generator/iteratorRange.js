function* range (start,end,step = 1) {
    for(let i = start; i <= end; i += step){
        yield i;
    }
}
for(const elem of range(2,20,2)){
    console.log(elem)
}
