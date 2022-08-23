const textInput = document.querySelector(".input-text");
const textOutput = document.querySelector(".output-text");

function hidePlaceholders() {
  const placeholders = document.querySelector(".toggle");
  placeholders.style.display = "none";
}

function showOutput() {
  textOutput.style.display = "none";
}

function btnEncrypt() {
  var textToBeEncrypted = encrypt(textInput.value);
  textOutput.innerHTML = textToBeEncrypted;
}

function btnDecrypt() {
  var textToBeDecrypted = decrypt(textOutput.innerHTML);
  textOutput.innerHTML = textToBeDecrypted;
}

function btnCopy() {
  var copyText = textOutput.value;
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
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
