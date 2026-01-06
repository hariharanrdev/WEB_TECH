// ! function: is a block of code, it will execute whenever we call it.
/*
syntax:
function functionname(){
    block of code 
}
functionname(); // calling the function
*/

//? example 1:
function greet() {
  console.log("hello world");
}
greet(); // calling the function

//? example 2: 
function sayhello(name){
    console.log('hello ${name}');
}
sayhello("hari"); // calling the function with argument
sayhello("sita"); // calling the function with argument

//? example 3:
function fan_actor(name, movie) {
  console.log("my favorite actor is", name, "from the movie", movie);
}
fan_actor("ram", "rrr");
fan_actor("anil", "leo");

//! named function
// ? A function which is declared with a specific name is called as named function.

function add(a, b,c) {
  return a + b + c;
}

add(10,20,30);
add(5,15,25);

console.log(sum(10,20));

//!example 2:
function bestfriends(friend1, friend2) {
  return friend1 + " and " + friend2 + " are best friends";
}
console.log(bestfriends("hari", "ram"));
console.log(bestfriends("sita", "gita"));

//! anonymous function
// ? A function which is declared without any name is called as anonymous function.





