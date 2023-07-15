function square() {
    var x = parseFloat(document.frm.answer.value);
    var res = x * x;
    document.frm.answer.value = x + "\u00B2" + " = " +res;
}

function SquareRoot() {
var x = parseFloat(document.frm.answer.value);
var res = Math.sqrt(x);
document.frm.answer.value ='\u221A'+ x +" = "+ res;
}

function calculateCube() {
var x = parseFloat(document.frm.answer.value);
var res = x*x*x;
document.frm.answer.value =x+'\u00B3' + ' = '+ res;
}

function factorial() {
var x = parseInt(document.frm.answer.value);
var res = 1;
for (var i = x; i > 0; i--) {
    res *= i;
}
document.frm.answer.value =x+"!"+ "=" + res;
}


function log() {
const x = parseFloat(document.frm.answer.value);
const base = 10;
const res = Math.log(x) / Math.log(base);
document.frm.answer.value ='log('+ x +')' + ' = '+ res;
}
