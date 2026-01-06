let salaries = [100, 150, 260, 120, 850, 420, 130];
console.log(salaries);
}

// ? Without Map
let newSalaries = [];

for (let i = 0; i < salaries.length; i++) {
console.log(i, salaries[i]);

newSalaries.push(salaries[i] + 50);

console.log(newSalaries);

// iterator - i
// updation - salaries[i] + 50
// new Array - newSalaries

// ? With Map
// Map is Higher Order Function.
// Map Requires a Callback Function as an Argument.
// The callback can be Named Function or Anonymous Function or Arrow Function.
// The Callback Should Contain 2 Paramters
// First for values.
// Second for Indexes.
// Parameters are Optional.
// The Callback Function should Return Updation.
// New Array will be created Automatically, It will not effect the original Array.

}

console.log(salaries);
console.log(salaries.map(value => value + 50));
console.log(salaries.map(value => value - 50));
console.log(salaries.map(value => value* 2));
console.log(salaries.map(value => value * 5));

// ! Reduce()
// ? without reduce
let thamuCrushCount = [2, 7, 61, 22, 9];
let sum = 0;

for (let i = 0; i < thamuCrushCount.length; i++) {
sum += thamuCrushCount[i];

console.log(sum);

// container - sum
// iterator - i
// SingleValue

// ? with reduce
// Reduce is a Higher Order Function.
// It requires a Callback function and initialValue.
// Callback Function should have 2 Parameters
// First one for Container (accumulator)
// second one for Iterator
// It will return a single value.

console. log(thamuCrushCount); // [2, 7, 61, 22, 9]

// ~ Case 1: using Named Function:
function getCount(sum, i) {
console.log(sum, i);

return sum + i;
}

console.log(thamuCrushCount.reduce(getCount));

// ? Example 2:
let MadhanMarks = [45, 78, 96, 100, 80, 60];
console.log(MadhanMarks);

console.log(
    MadhanMarks.reduce((sum, i) => {
        return sum + i;

    })

);

console.log(MadhanMarks.reduce((sum, i)=> sum+i, 10));

// ? Example 3:
let ar = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

console.log(ar.reduce((str, i) =>str+i));