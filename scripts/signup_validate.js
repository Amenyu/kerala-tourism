const indicator = document.querySelector(".indicator");
const input = document.querySelector(".sign-pwd");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".pwd-msg");

var rePwd = document.getElementById("re-pwd");
var rePwdLbl = document.getElementById("re-pwd-lbl");

var mob = document.getElementById("mob");
var mobLbl = document.getElementById("mob-lbl");

var signUpMail = document.getElementById("signup_mail");
var signUpMailLbl = document.getElementById("signup_mail-lbl");

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;

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
      input.value.length >= 6 &&
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

function mailVal() {
  let mailregexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (signUpMail.value.match(mailregexp) || signUpMail.value.length == 0) {
    signUpMailLbl.textContent = "Your Email *";
    signUpMailLbl.style.color = "black";
    signUpMailLbl.style.fontWeight = "normal";
    signUpMail.style.borderColor = "lightgrey";
  } else {
    signUpMailLbl.textContent = "Invalid Format";
    signUpMailLbl.style.color = "red";
    signUpMailLbl.style.fontWeight = "bold";
    signUpMail.style.borderColor = "red";
  }
}

function mobVal() {
  var mobRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (mob.value.match(mobRegExp) || mob.value.length == 0) {
    mobLbl.textContent = "Your Mobile *";
    mobLbl.style.color = "black";
    mobLbl.style.fontWeight = "normal";
    mob.style.borderColor = "lightgrey";
  } else {
    mobLbl.textContent = "Invalid Format";
    mobLbl.style.color = "red";
    mobLbl.style.fontWeight = "bold";
    mob.style.borderColor = "red";
  }
}

function pwdMatch() {
  if (rePwd.value === input.value || rePwd.value.length == 0) {
    rePwdLbl.textContent = "Repeat your password *";
    rePwdLbl.style.color = "black";
    rePwdLbl.style.fontWeight = "normal";
    rePwd.style.borderColor = "lightgrey";
  } else {
    rePwdLbl.textContent = "Password does not match";
    rePwdLbl.style.color = "red";
    rePwdLbl.style.fontWeight = "bold";
    rePwd.style.borderColor = "red";
  }
}
