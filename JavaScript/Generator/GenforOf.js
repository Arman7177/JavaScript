function* foo () {
    yield 'Arman';
    yield 'Abrahamyan'
    yield 25;
};
for(const elem of foo()) {
    console.log(elem);
}