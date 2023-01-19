// Assignment code here


var passwordLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialCharacters;
var confirmNumbers;

  var LowerCase = [

    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
    
  ];
 

  var Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var SpecialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

  var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

function generatePassword() {

  // possible characters for the password
  
  passwordLength = prompt("Enter the password length you would like( Choose between 8-128 characters)");
  console.log("passwordLength" + passwordLength);
 
  // get the password length
  
  // validate password length

  if(!passwordLength) {
    alert("Required Value!");
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("This number is not valid. You must choose between 8 and 128!");
    console.log("passwordLength" + passwordLength);
  }

  

  
 
else{
  confirmLowerCase = confirm("Do you want to include lowercase characters?");
  console.log("Lower case" + confirmLowerCase);
  confirmUpperCase = confirm("Do you want uppercase characters?");
  console.log("Upper case" + confirmUpperCase);
  confirmNumbers = confirm("Do you want to include numbers?");
  console.log("Numbers" + confirmNumbers);
  confirmSpecialCharacters = confirm("Do you want to include special characters?");
  console.log("Special Characters" + confirmSpecialCharacters);
};

if (!confirmLowerCase && !confirmNumbers && !confirmSpecialCharacters && !confirmUpperCase) {
  userChoices = alert("You must make a selection!")
}
else if (confirmLowerCase && confirmNumbers && confirmSpecialCharacters && confirmUpperCase) {
  userChoices = LowerCase.concat(UpperCase, SpecialCharacters, Numbers);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmUpperCase && confirmNumbers) {
  userChoices = LowerCase.concat(UpperCase, Numbers);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmUpperCase && confirmspecialCharacters) {
  userChoices = LowerCase.concat(UpperCase, SpecialCharacters);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmNumbers && confirmSpecialCharacters) {
  userChoices = LowerCase.concat(SpecialCharacters, Numbers);
  console.log(userChoices);}
  else if (confirmUpperCase && confirmNumbers && confirmSpecialCharacters) {
    userChoices = LowerCase.concat(SpecialCharacters, Numbers);
    console.log(userChoices);}
    else if (confirmLowerCase && confirmUpperCase) {
      userChoices = LowerCase.concat(UpperCase);
      console.log(userChoices);}
      else if (confirmLowerCase && confirmNumbers) {
        userChoices = LowerCase.concat(Numbers);
        console.log(userChoices);}
        else if (confirmLowerCase && confirmspecialCharacters) {
          userChoices = LowerCase.concat(SpecialCharacters);
          console.log(userChoices);}
          else if (confirmUpperCase && confirmNumbers) {
            userChoices = LowerCase.concat(Numbers);
            console.log(userChoices);}
            else if (confirmUpperCase && confirmspecialCharacters) {
              userChoices = LowerCase.concat(SpecialCharacters);
              console.log(userChoices);}
              else if (confirmNumbers && confirmSpecialCharacters) {
                userChoices = LowerCase.concat(SpecialCharacters);
                console.log(userChoices);}
                else if (confirmLowerCase) {
                  userChoices = LowerCase;
                  console.log(userChoices);}
                  else if (confirmUpperCase) {
                    userChoices = blankUpperCase.concat(UpperCase);
                    console.log(userChoices);}
                    else if (confirmNumbers) {
                      userChoices = Numbers;
                      console.log(userChoices);
                    }
                    else if (confirmSpecialCharacters) {
                      userChoices = specialCharacters;
                      console.log(userChoices);
                    };

                    var passwordBlank = [];
                    for (var i = 0; i < passwordLength; i++) {
                      var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
                      passwordBlank.push(allChoices);
                      console.log(allChoices);
                    }
                                  

                    var password = passwordBlank.join("");
                    console.log("Your Pasword is: " + password);
                    return password;


}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
