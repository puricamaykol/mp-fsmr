'use strict'

let o1 = {a:1, b:1, c:1};
let o2 = {b:2, c:2};
let o3 = {c:3};

let res = Object.assign({}, o1, o2, o3);

console.log(res);

let arreglo = ['a', 'b', 'c', 'd', 'e'];
let arrayWithDups = ['a', 'b', 'c', 'd', 'e', 'e', 'e', 'e'];

console.log(arreglo.filter(x => x == 'e')[0]);

console.log(arreglo.find(x => x == 'e'), "find");
console.log(arreglo.findIndex(x => x == 'e'), "findindex");
console.log(arrayWithDups.findIndex(x => x == 'e'), "findindex");


let repeat = 'foo '.repeat(3);
console.log(repeat);

console.log(Math.sign(7));
console.log(Math.sign(-7));
console.log(Math.sign(-0));