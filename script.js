const textInput = document.querySelector(".input-text");
const textOutput = document.querySelector(".text-output-field");
const textOutputDiv = document.querySelector(".output-text");

function hidePlaceholders() {
  const placeholders = document.querySelector(".toggle");
  placeholders.style.display = "none";
}

function showOutput() {
  textOutputDiv.style.display = "block";
}

function hideOutput(){
  textOutputDiv.style.display = "none";
}

hideOutput();

function btnEncrypt() {
  var textToBeEncrypted = encrypt(textInput.value);
  textOutput.innerHTML = textToBeEncrypted;
}

function btnDecrypt() {
  var textToBeDecrypted = decrypt(textInput.value);
  textOutput.innerHTML = textToBeDecrypted;
}

function btnCopy() {
  navigator.clipboard.writeText(textOutput.value);
}

function encrypt(text) {
  hidePlaceholders();
  showOutput();

  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  text = text.toLowerCase();

  for (var i = 0; i < matrizCodigo.length; i++) {
    if (text.includes(matrizCodigo[i][0])) {
      text = text.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }

  return text;
}

function decrypt(text) {
  hidePlaceholders();
  showOutput();

  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  text = text.toLowerCase();

  for (var i = 0; i < matrizCodigo.length; i++) {
    if (text.includes(matrizCodigo[i][1])) {
      text = text.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return text;
}
