const display  = document.getElementById('display');

function add(val){
    display.value += val;
}
function calc() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
function clearDisplay(){
    display.value = '';
}