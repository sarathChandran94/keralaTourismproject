let phoneIp = document.getElementById("phone");
let phonefb = document.getElementById("phonefb");
let emailip = document.getElementById("email");
let emailfb = document.getElementById("emailfb");
let pw = document.getElementById("password");
let pwfb = document.getElementById("pwfb");
let pw2 = document.getElementById("password2");
let pw2fb = document.getElementById("pw2fb");

// shadow effects
let x = document.getElementById("form");
function shadowEffectOn() {
    x.classList.add("shadow-lg");
}
function shadowEffectOff() {
    x.classList.remove("shadow-lg");
}

// Form Validation
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
    else if (regexpPw.test(pw.value) == ""){
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

// Password input hidden details
pw.onblur = function myBlur() {
    document.getElementById("message").style.display = "none";
}
pw.onfocus = function myFocus() {
    document.getElementById("message").style.display = "block";
}


// Password strength meter
let strength = document.getElementById("password-strength-meter");
let strengthText = document.getElementById("password-strength-text");
pw.addEventListener("input",myFunction);
function  myFunction(){
    let regexpPw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;

    if (regexpPw.test(pw.value) == false && pw.value.length <= 7){
        strength.value = "5";
        strengthText.innerText = "Poor";
        strengthText.style.color = "red";
    }
    if (regexpPw.test(pw.value) == true && 8 <= pw.value.length){
        strength.value = "10";
        strengthText.innerHTML = "Medium";
        strengthText.style.color = "orange";
    }
    if (regexpPw.test(pw.value) == true && pw.value.length >= 12) {
        strength.value = "15";
        strengthText.innerHTML = "Strong";
        strengthText.style.color = "green";
    }
    if (regexpPw.test(pw.value) == "" && pw.value.length == ""){
        strength.value = "0";
        strengthText.innerHTML = "";
    }

}

