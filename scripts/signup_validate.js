const indicator = document.querySelector(".indicator");
const input = document.querySelector(".sign-pwd");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".pwd-msg");

pwdlbl=document.getElementById("pswdlbl");
var rePwd = document.getElementById("re-pwd");
var rePwdLbl = document.getElementById("re-pwd-lbl");

var mob = document.getElementById("mob");
var mobLbl = document.getElementById("mob-lbl");

var signUpMail = document.getElementById("signup_mail");
var signUpMailLbl = document.getElementById("signup_mail-lbl");

var myname = document.getElementById("myname");
var namelbl = document.getElementById("name-lbl");

var termslbl=document.getElementById("terms-lbl");
var terms=document.getElementById("terms");


let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
// let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
let regExpStrong =/[A-Z]/;

function pwdVal() {
  if (input.value != "") {
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if (
      input.value.length <= 3 &&
      (input.value.match(regExpWeak) ||
        input.value.match(regExpMedium) ||
        input.value.match(regExpStrong))
    )
      no = 1;
    if (
      input.value.length >= 6 &&
      ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
        (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
        (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
    )
      no = 2;
    if (
      input.value.length >= 8 &&
      input.value.match(regExpWeak) &&
      input.value.match(regExpMedium) &&
      input.value.match(regExpStrong)
    )
      no = 3;

    if (no == 1) {
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too week";
      text.classList.add("weak");
    }
    if (no == 2) {
      medium.classList.add("active");
      text.textContent = "Your password is medium";
      text.classList.add("medium");
    } else {
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if (no == 3) {
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    } else {
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
  } else {
    indicator.style.display = "none";
    text.style.display = "none";
  }
}
pwdVal();
var flag1=false;
var flag2=false;
var flag3=false;
var flag4=false;
var flag5=false;

function nameVal(){
  let nameregexp= /^[a-zA-Z\s]+$/;
  if(myname.value.match(nameregexp)){
    namelbl.textContent = "Your Name *";
    namelbl.style.color = "black";
    namelbl.style.fontWeight = "normal";
    myname.style.borderColor = "lightgrey";
    flag1=true;
  }
  else if(myname.value.length==0){
    namelbl.textContent = "Name is required";
    namelbl.style.color = "red";
    namelbl.style.fontWeight = "bold";
    myname.style.borderColor = "red";
    flag1=false;
  }
  else{
      namelbl.textContent = "Invalid Data";
      namelbl.style.color = "red";
      namelbl.style.fontWeight = "bold";
      myname.style.borderColor = "red";
      flag1=false;
  }
}


function mailVal() {
  let mailregexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (signUpMail.value.match(mailregexp) ) {
    signUpMailLbl.textContent = "Your Email *";
    signUpMailLbl.style.color = "black";
    signUpMailLbl.style.fontWeight = "normal";
    signUpMail.style.borderColor = "lightgrey";
    flag2=true;
    
  } 
  else if(signUpMail.value.length == 0){
    signUpMailLbl.textContent = "Email is required";
    signUpMailLbl.style.color = "red";
    signUpMailLbl.style.fontWeight = "bold";
    signUpMail.style.borderColor = "red";
    flag2=false;
  }
  else {
    signUpMailLbl.textContent = "Invalid Email Format";
    signUpMailLbl.style.color = "red";
    signUpMailLbl.style.fontWeight = "bold";
    signUpMail.style.borderColor = "red";
    flag2=false;
  }
}

function mobVal() {
  var mobRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (mob.value.match(mobRegExp)) {
    mobLbl.textContent = "Your Mobile *";
    mobLbl.style.color = "black";
    mobLbl.style.fontWeight = "normal";
    mob.style.borderColor = "lightgrey";
    flag3=true;
  }
  else if( mob.value.length == 0){
    mobLbl.textContent = "Mobile is required";
    mobLbl.style.color = "red";
    mobLbl.style.fontWeight = "bold";
    mob.style.borderColor = "red";
    flag3=false;
  }
   else {
    mobLbl.textContent = "Invalid Format (It should be XXXXXXXXXX,XXX-XXX-XXXX,XXX.XXX.XXXX,XXX XXX XXXX)";
    mobLbl.style.color = "red";
    mobLbl.style.fontWeight = "bold";
    mob.style.borderColor = "red";
    flag3=false;
  }
}

function pwdMatch() {
  if (rePwd.value === input.value && rePwd.value.length !== 0) {
    rePwdLbl.textContent = "Repeat your password *";
    rePwdLbl.style.color = "black";
    rePwdLbl.style.fontWeight = "normal";
    rePwd.style.borderColor = "lightgrey";
    flag4=true;
  } 
  else if(rePwd.value.length == 0){
    rePwdLbl.textContent = "Password confirmation required";
    rePwdLbl.style.color = "red";
    rePwdLbl.style.fontWeight = "bold";
    rePwd.style.borderColor = "red";
    flag4=false;
  }
  else {
    rePwdLbl.textContent = "Password does not match";
    rePwdLbl.style.color = "red";
    rePwdLbl.style.fontWeight = "bold";
    rePwd.style.borderColor = "red";
    flag4=false;
  }
}

function pwdChk(){
  if(input.value.length==0){
    pwdlbl.textContent = "Password is required";
    pwdlbl.style.color = "red";
    pwdlbl.style.fontWeight = "bold";
    input.style.borderColor = "red";
    flag5=false;
  }
  else if(text.textContent !== "Your password is strong" && input.value.length !==0){
    pwdlbl.textContent = "Password should contain at least one uppercase, one lower case and one number having minimum length 8";
    pwdlbl.style.color = "red";
    pwdlbl.style.fontWeight = "bold";
    input.style.borderColor = "red";
    flag5=false;
  }
  else{
    pwdlbl.textContent = "Password *";
    pwdlbl.style.color = "black";
    pwdlbl.style.fontWeight = "normal";
    input.style.borderColor = "lightgrey";
    flag5=true;
  }
}


function validateForm(){

  nameVal();
  mailVal();
  mobVal();
  pwdMatch();
  pwdChk();
 if(flag1&&flag2&&flag3&&flag4&&flag5){
  if (!terms.checked){
   alert("Agree the terms & conditions");
 }
  else{ 
    alert("Account created Successfully");
  }
 
}
else{
  return false;
}
}