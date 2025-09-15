var a=10;
console.log(a);

declaration -> pss in var and let not poss in const
var a;
let b;
const c;


declaration, initialization
var a = 10;
let b = 20;
const c = 30;


reinitialization -> it is poss in var and let but not poss in const
var a = 10;
a =30;
console.log(a);

let b = 40;
c = 25;
consol.log(c);

const c = 10;
c = 25;
consol.log(c);

redecl -> poss in var but not poss in let and const

var a =10;
var a =20;

let b = 10;
let b =20;

const c = 30;
const c = 40;
