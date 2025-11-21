// ! String

/* string is a collection of Charactees which` are enclosed in single qoutes('') or double qoutes("") or back ticks(``)` */ 

var s = 'Javscript';
console.log(s);
console.log(typeof s); 
// prints the JavaScript type name of the value stored in s (a string like "string", "number", "object", etc.).


// ? String concatenation

var  mname = 'hari';
var  msalary = "87654";
var mjob = `frontend`;
var message = "hello " + mname + " you got  selcted as" + mjob + "with the salary of " + salary;
console.log(message);


// ? String interpollation

/* It allows us to use the varaible inside a String.
Rule 1: We have to use back ticks only.
Rule 2: We have to use ${variable name}. */

var sname = 'haran';
var salary = "90000";
var job = `dev`;

console.log(`Hi ${sname} u got ${job} role and salaray of ${salary}`);


// ? Length Property

/* Length as property --> s.length
length as method --> s.length()
In Javascript  length is a proprty. */

var s = "JavaScript";
console.log(s.length);
