!!======================= Create -===============
//?  create element\
//- synbtax:document.createElement("TagName")
let h1 = document.createElement("h1");
let b = document.createElement("b");
let p = document.createElement("p");
console.log(h1);
console.log(b);
console.log(p);


//? add text
h1.innercontent = "I  am h1 tag - using text content";
h1.innertext = "iam h1 tag - using inner textt";
h1.innerHTML = "I am hi tag - using innerHTML";


p.innerHTML =

//? push into DOM Tree

//containername.appendChild(elementname)


let body = document.querySelector("body");
// body.appendChild(h1);
// body.appendChild(b);
// body.appendChild(p);

// body.append(h1);
// body.append(b);
// body.append(p);

body.append(h1, b, p);

// body.append("I am text");
// body. appendChild("I am text"); //

// ! ===================== Read ===========================
dom selectors
console.log(h1.attribute)

//! ================== Update =======================
// ? content update
h1.innerHTML = "I AM HARI";
b.innerText = "i am hari";
p.innerHTML = "i am alternative"
