let form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

let genPass = document.getElementById("genPass");

let generate = () => {
  var passLen = document.getElementById("passLength");
  var uppercaseCheck = document.getElementById("uppercaseCheck");
  var lowercaseCheck = document.getElementById("lowercaseCheck");
  var numbersCheck = document.getElementById("numbersCheck");
  var symbolsCheck = document.getElementById("symbolsCheck");

  genPass.value = generatePass(
    passLen.value,
    uppercaseCheck.checked,
    lowercaseCheck.checked,
    numbersCheck.checked,
    symbolsCheck.checked
  );
};

function passwordLength(len) {
  document.getElementById("passLengthLabel").innerHTML =
    "Password Length: " + len;
}

function generatePass(len, upper, lower, num, sym) {
  var temp = "";
  for (let i = 0; i < len; i++) {
    let rand = Math.floor(Math.random() * 4);
    if (rand == 0 && upper) {
      temp = temp.concat(getRandomUpper());
    } else if (rand == 1 && lower) {
      temp = temp.concat(getRandomLower());
    } else if (rand == 2 && num) {
      temp = temp.concat(getRandomNumber());
    } else if (rand == 3 && sym) {
      temp = temp.concat(getRandomSymbol());
    } else {
      i--;
    } //if we get random but other is not true then un-interate
  }
  return temp;
}

function getRandomUpper() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function getRandomLower() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function getRandomSymbol() {
  return String.fromCharCode(33 + Math.floor(Math.random() * 15));
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function copyPassword() {
  genPass.select();
  // document.execCommand("copy");
  navigator.clipboard.writeText(genPass.value);
}
