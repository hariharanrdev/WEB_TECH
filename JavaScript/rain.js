let form = document.querySelector("form");

let Username = document.getElementById("Username");
let Useremail = document.getElementById("Useremail");
let UserNo = document.getElementById("Userno");


form.addEventListener("submit",e =>{
 e.preventDefault();
 console.log("Form is submitted");

 if (Username.value.trim()==""){
  console.log("Enter Valid Username");
  return;
 }
 if (Useremail.value.trim()==""){
  console.log("Enter Valid Email");
  return;
 }
 if (UserNo.value.trim()==""){
  console.log("Enter Valid Mobile No");
  return;
 }
 let result = {
  Username:Username.value,
  Useremail:Useremail.value,
  UserNo:UserNo.value
 };

 console.log(result); 
});