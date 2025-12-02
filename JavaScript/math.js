console.log(Math);

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

console.log("====== round ======")

console.log(Math.round(4.7));  // 5
console.log(Math.round(4.4));  // 4
console.log(Math.round(-4.7)); // -5
console.log(Math.round(-4.4)); // -4
console.log(Math.round(4.5));  // 5

// ceil
console.log("====== ceil ======")

console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(4.9));  // 5
console.log(Math.ceil(-4.1)); // -4
console.log(Math.ceil(-4.9)); // -4
console.log(Math.ceil(4.0));  // 4

// floor
console.log("====== floor ======")

console.log(Math.floor(4.1));  // 4
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(-4.1)); // -5
console.log(Math.floor(-4.9)); // -5
console.log(Math.floor(4.0));  // 4

// cbrt
console.log("====== cbrt ======")

console.log(Math.cbrt(27));   // 3
console.log(Math.cbrt(-27)); // -3
console.log(Math.cbrt(8));    // 2
console.log(Math.cbrt(-8));  // -2
console.log(Math.cbrt(0));    // 0

// pow
console.log("====== power ======")

console.log(Math.pow(2, 3));  // 8
console.log(Math.pow(5, 2));  // 25
console.log(Math.pow(3, 4));  // 81
console.log(Math.pow(7, 0));  // 1
console.log(Math.pow(4, -1)); // 0.25
console.log(Math.pow(-2, 3)); // -8

// min
console.log("====== min ======")

console.log(Math.min(4, 1, 7, -3, 9)); // -3
console.log(Math.min(0, 5, -1, 3));     // -1
console.log(Math.min(10, 20, 5, 15));   // 5
console.log(Math.min(-10, -20, -5, -15)); // -20
console.log(Math.min(3.5, 2.1, 4.8, 1.9)); // 1.9

// max
console.log("====== max ======")

console.log(Math.max(4, 1, 7, -3, 9)); // 9
console.log(Math.max(0, 5, -1, 3)); //5
console.log(Math.max(10, 20, 5, 15));   // 20
console.log(Math.max(-10, -20, -5, -15)); // -5

// random
console.log("====== random ======") 
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*100);
console.log(Math.random()*1000);


console.log(Math.trunc(Math.random()*10));
console.log(Math.trunc(Math.random()*100));
console.log(Math.trunc(Math.random()*1000));
console.log(Math.trunc(Math.random()*10000));
console.log(Math.trunc(Math.random()*100000));