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



//! Programs of strings

//? palindrome or reverse a string - comprehensive way!.
let s = "javascript";
let res = s.split("").reverse().join("");
console.log(res);  
*/
//? palindrome or reverse a string using array methods
/*
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

let s = "I love you chellam";
let res = "";

for(let char of s){
  if (char == "") {
    res = res + "@";
  } else {
    res  = res + char;
  }
}
console.log(res);


let s = "I love you chellam";
let res = s.replaceAll(" ","@");
console.log(res);

let s = "I love you chellam";
let res = "";


//? PRINT FINAL STRING AFTER SKIPPING REPEATED CHARACTERS.
let s = "hariharan";
let res = "";
for(let char of s){
  if (res.indexOf(char) === -1){
      res = res + char;
  }
}
console.log(res);
*/

//! Programs of Arrays

//?maximum number in a  array
// input:[]

let ar = [10, 20, 5, 40, 15, 25, 60, 30, 80, 70, 90];

let max = 0;
for (let num of ar){
  if (num > max){
    max = num;
  }
}
console.log("maximum number:", max);

//? minimum number in a array
let ar1 = [10, 20, 5, 40, 15, 25, 60, 30, 80, 70, 90];
let min = ar1[0];
for (let num of ar1){
  if (num < min){
    min = num;
  }
}
console.log("minimum number:", min);

//?marks greater than or equal to 35
let marks = [10, 45, 78, 32, 89, 90, 23, 67, 54, 12, 38];
res=[];
for (let mark of marks){
  if (mark >= 35){
    res.push(mark);
  }
}
console.log("passed marks:",res);



//?remove duplicates from an array
let ar2 = [10, 20, 5, 40, 15, 25, 60, 30, 80, 70, 90, 10, 20, 5, 40];
let unique = [];
for (let num of ar2)
{
  if (unique.indexOf(num) === -1){
    unique.push(num);
  }
}
console.log("unique array:", unique);

//! Programs of Objects