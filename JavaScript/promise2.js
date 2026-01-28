//! Async
/*
Async is a Kevword 
- we have to use just before a function. 
- So that sync function will convert into async function.
- async function will always return a promise.
*/

//? function ---> normal data ---> wraps into a promise --->PROMISE

async function getData() {
    return "hello arun";
}
console.log(getData());


//! Await

//? function ---> promise data ---> wraps into a promise ---> PROMISE

let p = new Promise((resolve, reject) => {
    resolve("hello everyone");
});

async function getData2() {
    let d = await p;
    console.log(d);
}
getData2();