// -------------------Default Exports-----------------
// import name from './module2.mjs';
// console.log(name);------>default name i.e c value Anik

// --------------------Named Exports------------------
import name,{a,b} from './module2.mjs';
console.log(name);
console.log(a);     //same name is needed
console.log(b);     //same name is needed as in module2