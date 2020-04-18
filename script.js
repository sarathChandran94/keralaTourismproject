let phoneIp = document.getElementById("phone");
let phonefb = document.getElementById("phonefb");
let emailip = document.getElementById("email");
let emailfb = document.getElementById("emailfb");
let pw = document.getElementById("password");
let pwfb = document.getElementById("pwfb");
let pw2 = document.getElementById("password2");
let pw2fb = document.getElementById("pw2fb");

function formValidate(){
    let regexpPhone = /^([0-9]){10}$/;
    let regexpEmail = /^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    let regexpPw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;
    if (regexpPhone.test(phoneIp.value) == false){
        phonefb.style.display = "block";
        phonefb.innerHTML = "Must be 10 digits!";
        phonefb.style.color = "red";
        phoneIp.onkeypress = function myPhone(){phonefb.style.display = "none";}
        return false;
    }
    else if (regexpEmail.test(emailip.value) == false){
        emailfb.style.display = "block";
        emailfb.innerHTML = "Invalid Email address!";
        emailfb.style.color = "red";
        emailip.onkeypress = function myMail(){emailfb.style.display = "none";}
        return false;
    }
    else if (regexpPw.test(pw.value) == false){
        pwfb.style.display = "block";
        pwfb.innerHTML = "Password cannot be empty!";
        pwfb.style.color = "red";
        pw.onkeypress = function myPw(){pwfb.style.display = "none";}
        return false;
    }
    else if (pw.value != pw2.value){
        pw2fb.style.display = "block";
        pw2fb.innerHTML = "Password does not match!";
        pw2fb.style.color = "red";
        pw2.onkeypress = function myPw2(){pw2fb.style.display = "none";}
        return false;
    }

    return true;
}
pw.onblur = function myBlur(){document.getElementById("message").style.display = "none";}
pw.onfocus = function myFocus(){document.getElementById("message").style.display = "block";}


// function validateMail(){
//     let regexpEmail = /^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
//     if (regexpEmail.test(email.value)){


//     }
//     else {
//         email.style.borderColor = "red";
//         feed.innerHTML = "invalid";
//         feed.style.color = "red";
//         return false;
//     }
// }
// function validatePw(){
//     let regexpPw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;
//     let regexpPw2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;
//     if (regexpPw.test(pw.value)){

//         return true;
//     }
//     if (pw.value == "" || pw2.value == ""){
//         document.getElementById("pwfb").innerHTML = "Password cannot be empty!";
//         return false;
//     }
//     if (pw.value != pw2.value){
//         document.getElementById("pwfb2").innerHTML = "Password does not match!";
//         return false;
//     }
//     else {
//         return false;
//     }
// }
// pw.onblur = function myBlur(){document.getElementById("message").style.display = "none";}
// pw.onfocus = function myFocus(){document.getElementById("message").style.display = "block";}

// function validatePhone(){
//     let regexpPhone = /^([0-9]){10}$/;
//     if (regexpPhone.test(phone.value)){
//         return true;
//     }
//     else {
//         document.getElementById("phonefb").innerHTML = "Must be 10 digits!";
//         phone.style.borderColor = "red";
//         return false;
//     }
// }
