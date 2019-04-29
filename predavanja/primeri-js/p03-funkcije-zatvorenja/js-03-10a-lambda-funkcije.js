// пример дефиниције и позива функције - старији начин
let square = function(x){return x*x}
console.log(square(12))

let proizvod = function(x,y){z = x*y; return z; }
console.log(proizvod(3,2))

let proizvodKvadrata = function(x,y){return square(proizvod(x,y))}
console.log(proizvodKvadrata(3,2))

// пример дефиниције и позива функције - новији начин
let square2 = (x)=> {return x*x}
console.log(square2(12))

// пример дефиниције и позива функције - новији начин
let square3 = (x)=> x*x
console.log(square3(12))

let proizvod2 = (x,y)=>x*y
console.log(proizvod2(3,2))

let proizvodKvadrata2 = (x,y)=>square3(proizvod2(x,y))
console.log(proizvodKvadrata2(3,2))

let pamet = ()=> console.log("Sto sam pametan")

for(let i=0; i< 5; i++)
    pamet()