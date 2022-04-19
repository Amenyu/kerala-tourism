var loginpwd = document.getElementById("login-pwd");
var loginpwdlbl = document.getElementById("login-pwd-lbl");

var loginmail = document.getElementById("login-email");
var loginmaillbl = document.getElementById("login-email-lbl");

function loginPwdVal() {
  let pwdregexp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
  if (!loginpwd.value.match(pwdregexp) && loginpwd.value.length != 0) {
    loginpwd.style.borderColor = "red";
    loginpwd.style.borderWidth = "medium";
    loginpwdlbl.textContent = "Invalid Password Format";
    loginpwdlbl.style.color = "red";
  } else {
    loginpwd.style.borderColor = "lightgrey";
    loginpwd.style.borderWidth = "thin";
    loginpwdlbl.textContent = "Password";
    loginpwdlbl.style.color = "white";
  }
}

function loginMailVal() {
  let mailregexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (loginmail.value.match(mailregexp) || loginmail.value.length == 0) {
    loginmail.style.borderColor = "lightgrey";
    loginmail.style.borderWidth = "thin";
    loginmaillbl.textContent = "Email address";
    loginmaillbl.style.color = "white";
  } else {
    loginmail.style.borderColor = "red";
    loginmail.style.borderWidth = "medium";
    loginmaillbl.textContent = "Invalid Email Format";
    loginmaillbl.style.color = "red";
  }
}
