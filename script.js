var textOutput = document.getElementById("output-text");

var encryptButton = document.getElementById("encrypt");
encryptButton.addEventListener("click", encryptText);

var decryptButton = document.getElementById("decrypt");
decryptButton.addEventListener("click", decryptText);

var newMessage;

function encryptText() {
  var textInput = Array.from(document.getElementById("text-input").value);
  for (var i = 0; i < textInput.length; i++) {
    if (textInput[i] === "e") {
      textInput[i] = "enter";
    }
    if (textInput[i] === "i") {
      textInput[i] = "imes";
    }
    if (textInput[i] === "a") {
      textInput[i] = "ai";
    }
    if (textInput[i] === "o") {
      textInput[i] = "ober";
    }
    if (textInput[i] === "u") {
      textInput[i] = "ufat";
    }
  }
  textOutput.innerHTML = textInput.join("");
  textInput.innerHTML = "";
  var hidePlaceholders = document.getElementById("toggle");
  if (hidePlaceholders.classList.contains("hide")) {
    return;
  } else {
    hidePlaceholders.classList.add("hide");
  }
}

function decryptText() {
  var textInput = document.getElementById("text-input").value;

  var newString = textInput.replaceAll("enter", "e");
  var newString = newString.replaceAll("imes", "i");
  var newString = newString.replaceAll("ai", "a");
  var newString = newString.replaceAll("ober", "o");
  var newString = newString.replaceAll("ufat", "u");

//   var newString1 = textInput.replaceAll("enter", "e");
//   var newString2 = newString1.replaceAll("imes", "i");
//   var newString3 = newString2.replaceAll("ai", "a");
//   var newString4 = newString3.replaceAll("ober", "o");
//   var newString5 = newString4.replaceAll("ufat", "u");
  textOutput.innerHTML = newString;
}
