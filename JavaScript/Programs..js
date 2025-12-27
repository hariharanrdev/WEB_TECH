/*
//! Programs of numbers

//? wap to print numbers from 1 to 10
//! case-1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//! case-2
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ?wap to print even numbers from 1 to 10
//! case-1
for(let i=0;i<=10;i=i+2){
}
console.log(i);

//?wap to print sum of odd numbers from  1 to 10?
//! case-1
let sum=0;
for(let i=1;i<=10;i=i+2){
  sum=sum+i;
}
console.log("sum of odd numbers:",sum);

//?wap to print mulltiplication of numbers from 1 to 5?
let mul=1;
for(let i=1;i<=5;i++){
  mul=mul*i
}
console.log(mul);
*/



//! Programs of strings

//? palindrome or reverse a string
let s = "javascript";
let res = s.split("").reverse().join("");
console.log(res);  

//? palindrome or reverse a string using array methods

let s = "javascript";
let ar = s.split("");
console.log(ar);

ar = ar.reverse();
console.log(ar);

let rev = ar.join("");
console.log(rev);

if (s == rev) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}

//! Programs of Arrays