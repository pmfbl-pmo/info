// пример декларације и позива функције
function kvadrat(x) {
    return x * x;
};
console.log(kvadrat(12));

// пример дефиниције и позива функције 
let square = function(x){return x*x}
console.log(square(12))

let proizvod = function(x,y){z = x*y; return z; }
console.log(proizvod(3,2))

let proizvodKvadrata = function(x,y){return square(proizvod(x,y))}
console.log(proizvodKvadrata(3,2))
