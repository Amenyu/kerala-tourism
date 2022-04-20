var loginpwd = document.getElementById("login-pwd");
var loginpwdlbl = document.getElementById("login-pwd-lbl");

var loginmail = document.getElementById("login-email");
var loginmaillbl = document.getElementById("login-email-lbl");
var flag1=false;
var flag2=false
function loginPwdVal() {
  // let pwdregexp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
  if (loginpwd.value.length > 0 && loginpwd.value.length < 8) {
    loginpwd.style.borderColor = "red";
    loginpwd.style.borderWidth = "medium";
    loginpwdlbl.textContent = "Password must be at least 8 characters";
    loginpwdlbl.style.color = "red";
    flag1=false;
  }
  else if(loginpwd.value.length ==0){
    loginpwd.style.borderColor = "red";
    loginpwd.style.borderWidth = "medium";
    loginpwdlbl.textContent = "Password is required";
    loginpwdlbl.style.color = "red";
    flag1=false;
  } 
  else {
    loginpwd.style.borderColor = "lightgrey";
    loginpwd.style.borderWidth = "thin";
    loginpwdlbl.textContent = "Password *";
    loginpwdlbl.style.color = "white";
    flag1=true;
  }
}

function loginMailVal() {
  let mailregexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (loginmail.value.match(mailregexp)) {
    loginmail.style.borderColor = "lightgrey";
    loginmail.style.borderWidth = "thin";
    loginmaillbl.textContent = "Email address *";
    loginmaillbl.style.color = "white";
    flag2=true;
  }
  else if(loginmail.value.length == 0){
    loginmail.style.borderColor = "red";
    loginmail.style.borderWidth = "medium";
    loginmaillbl.textContent = "Email is required";
    loginmaillbl.style.color = "red";
    flag2=false;
  }
   else {
    loginmail.style.borderColor = "red";
    loginmail.style.borderWidth = "medium";
    loginmaillbl.textContent = "Invalid Email Format";
    loginmaillbl.style.color = "red";
    flag2=false;
  }
}

function loginValidate(){
  loginPwdVal();
  loginMailVal();
  if(flag1&&flag2)
  {
    alert("Login Successful");
  }
}