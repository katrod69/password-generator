var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function generatePassword(){
  var numbas = ["1,2,3,4,5,6,7,8,9,0"]
  var characterz = ['!','@','#','$','%','^','&','*','(',')']
  var lettersUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var lettersLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var randomPass = "";
  var userChoice = "";

  var generatePass = prompt("Howdy, how many characters in your password? Limit 8-128.");



if (generatePass < 8) {
  alert("Hold your horses, password must be 8-128 characters");
  return;
}
if (generatePass > 128) {
  alert("Hold your horses, password must be 8-128 characters");
  return;
}

if (isNaN(generatePass)) {
  alert("Hold your horses and enter a number from 8-128");
  return;
}

else {
  var upperCase = confirm("Want some uppercase letters in here? Click ok to confirm or cancel to leave 'em out.")
  var lowerCase = confirm("Need some lowercase letters in here? Click ok to confirm or cancel to leave 'em out.")
  var numberz = confirm("Need some numbers in here? You know what to do.")
  var multichars = confirm("Special Characters in this password?")
}

if (upperCase) {userChoice += lettersUpper;}
if (lowerCase) {userChoice += lettersLower;}
if (numberz)      {userChoice += numbas;}
if (multichars)        {userChoice += characterz;}


for (var i = 0; i < generatePass; i++) { 

  randomPass += userChoice[Math.floor(Math.random() * userChoice.length)]
}
return(randomPass);
}


function writePassword(randomPass) {
  if (password.length === 0) {
    return;
  }
  passwordText.value = randomPass;
}

function theEnd(generateBtn) {
alert("Thanks for using")
  return;
}
generateBtn.addEventListener("dblclick", function() {theEnd()});
generateBtn.addEventListener("click", function () { writePassword(generatePassword()) });
