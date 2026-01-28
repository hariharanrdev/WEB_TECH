let form = document.querySelector("form");
let username = document.getElementsByName("username")[0];
let useremail = document.getElementsByName("useremail")[0]
let userno = document.getElementsByName("userno")[0];

form.onsubmit = e => {
    e.preventDefault();
    console.log({
        userName: username.value,
        userEmail: useremail.value,
        userNo: userno.value,
    });
};