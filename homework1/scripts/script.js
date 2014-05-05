// // console
// var console = document.createElement("div");

// document.body.appendChild(console);

// console.log = function(line) {
//     var tCh = document.createElement('p');
//     tCh.innerHTML = line;
//     this.appendChild(tCh);
// }

// Assign all the posible JS literals to different variables.
var cars = ['lada', 'audi', 'bmw', 'nissan', 'porshe', 'ferrari', 'honda']; // array literals
var isLogged = true; // boolean literals
var PI = Math.PI; // floating-point literals
var students = 5; // integers
var a = new Object(6); // object literals
var name = 'Ivan' + ' ' + 'Ivanov'; // string literals

// Create a string variable with quated text in it. For example: 'How u doin'?', Joey said.
var str = '\'How u doin\'?\', Joey said.';
console.log(str);

// Try typeof on all variables u created
console.log(typeof cars); // object
console.log(typeof isLogged); // boolean
console.log(typeof PI); // number
console.log(typeof students); // number
console.log(typeof a); // object
console.log(typeof name); // string
console.log(typeof str); // string

// Create a null, undefined variables and try typeof on them.
var n = null;
var u;

console.log(typeof n); // object
console.log(typeof u); // undefined