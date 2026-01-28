let p = new Promise((resolve,reject)=> {
    let isplaced = true;
    if (isplaced){
        resolve({
            ename:"Suvvi",
            companyName:"Zoho",
            salary:"10LPA",
            location:"hyderabad",
        });
    } else {
        reject("No,Practice more!!");    
    }
});

console.log(p);

let vishnu = new Promise((resolve, reject) => {
    let isPlaced = true;
    if (isPlaced) {
        resolve("Vishnu got Job ... ");
    } else {
        reject("Vishnu is practicing more ... ");

});

let sabariAbishek = new Promise((resolve, reject) => {
     let isPlaced = false;
    if (isPlaced) {
        resolve("sabariAbishek got Job ... ");
    else {
        reject("sabariAbishek is practicing more ... ");

});

let niranj = new Promise((resolve, reject) => {
    let isPlaced = true;
    if (isPlaced) {
        resolve("niranj got Job ... ");
}   else {
        reject("niranj is practicing more ... ");

});