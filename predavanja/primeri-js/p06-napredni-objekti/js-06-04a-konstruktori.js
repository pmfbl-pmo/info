/*
Calling a function with the new keyword in front of it causes it to be treated as a constructor. 

The constructor will have its this variable bound to a fresh object, and unless it explicitly returns 
another object value, this new object will be returned from the call.

An object created with new is said to be an instance of its constructor.

It is a convention to capitalize the names of constructors so that they are easily distinguished 
from other functions.

Here is a simple constructor for rabbits. 
*/

function Rabbit(type, skok = 10) {
    this.type = type;
    this.duzinaSkoka = skok;
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black", 7);

console.log(blackRabbit.type);
// → black

