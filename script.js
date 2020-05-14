//sign-up
let fNameIp = document.getElementById("fName");
let dobIp = document.getElementById("dob");
let phoneIp = document.getElementById("phone");
let phonefb = document.getElementById("phonefb");
let emailip = document.getElementById("email");
let emailfb = document.getElementById("emailfb");
let pw = document.getElementById("password");
let pwfb = document.getElementById("pwfb");
let pw2 = document.getElementById("password2");
let pw2fb = document.getElementById("pw2fb");
//sign-in
let emailIpSignin = document.getElementById("emailIpSignin");
let emailFbSignin = document.getElementById("emailFbSignin");
let pwSignin = document.getElementById("pwSignin");
let pwFbSignin = document.getElementById("pwFbSignin");

// shadow effects
let x = document.getElementById("form");
function shadowEffectOn() {
    x.classList.add("shadow-lg");
}
function shadowEffectOff() {
    x.classList.remove("shadow-lg");
}

//sign-in validation
function signinValidate() {
    let regexpEmailSignin = /^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    let regexpPwSignin = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;
    if (emailIpSignin.value  == "") {
        emailFbSignin.style.display = "block";
        emailFbSignin.innerHTML = "Email address cannot be empty!";
        emailFbSignin.style.color = "red";
        emailIpSignin.onkeypress = function myMailSignin(){emailFbSignin.style.display = "none";}
        return false;
    }
    else if (regexpEmailSignin.test(emailIpSignin.value) == false) {
        emailFbSignin.style.display = "block";
        emailFbSignin.innerHTML = "Invalid Email address!";
        emailFbSignin.style.color = "red";
        emailIpSignin.onkeypress = function myMailSigninOne(){emailFbSignin.style.display = "none";}
        return false;
    }
    else if (pwSignin.value == "") {
        pwFbSignin.style.display = "block";
        pwFbSignin.innerHTML = "Password cannot be empty!";
        pwFbSignin.style.color = "red";
        return false;
    }
    else if (regexpPwSignin.test(pwSignin.value) == false) {
        pwFbSignin.style.display = "block";
        pwFbSignin.innerHTML = "Invalid password!";
        pwFbSignin.style.color = "red";
        return false;
    }
    else {
        return true;
    }
}

// Form Validation
function formValidate(){
    let regexpFname = /^(\w)+(\d|\s|\.|\-)*(\w)*$/gim;
    let regexpPhone = /^([0-9]){3}([\s|\-|\.]?)([0-9]){3}([\s|\-|\.]?)([0-9]){4}$/;
    let regexpEmail = /^([\w\.\-]+)@([\w\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    let regexpPw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;
    if (fNameIp.value == "") {
        fNamefb.style.display = "block";
        fNamefb.innerHTML = "Cannot be empty!";
        fNamefb.style.color = "red";
        fNameIp.style.border = "red solid 1px";
        fNameIp.onkeydown = function myFname(){fNamefb.style.display = "none";}
        return false;
    }
    else if (regexpFname.test(fNameIp.value) == false) {
        fNamefb.style.display = "block";
        fNamefb.innerHTML = "invalid!";
        fNamefb.style.color = "red";
        fNameIp.style.border = "red solid 1px";
        fNameIp.onkeydown = function myFname(){fNamefb.style.display = "none";fNameIp.removeAttribute("style");}
        return false;
    }
    else if (dobIp.value == "") {
        document.getElementById("dobfb").style.display = "block";
        document.getElementById("dobfb").innerHTML = "Cannot be empty!";
        document.getElementById("dobfb").style.color = "red";
        dobIp.onmousedown = function mydob(){document.getElementById("dobfb").style.display = "none";}
        return false;
    }
    else if (regexpPhone.test(phoneIp.value) == false){
        phonefb.style.display = "block";
        phonefb.innerHTML = "Must be 10 digits only!";
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
    else {
        return true;
    }
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
