// parametri i opsezi
var x = "van";
let f1 = function() {
    let x = "unutar f1";
    console.log(x);
};
f1(); // prikazaće: unutar f1
console.log(x); // prikazaće: van

let f2 = function() {
    x = "unutar f2";
    console.log(x);
};
f2(); // prikazaće: unutar f2
console.log(x); // prikazaće: unutar f2
