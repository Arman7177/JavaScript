function* asyncStyle() {
    const data1 = yield 'Get user';
    const data2 = yield 'Get post for' + data1;
    return "Done with" + data2;
}
let a = asyncStyle();
console.log(a.next());
console.log(a.next(' Arman'));
console.log(a.next(' Post 1'));

