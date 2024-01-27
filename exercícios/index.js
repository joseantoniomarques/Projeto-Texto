function transformaParaMaiuscula() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.toUpperCase();
    document.getElementById('outputText').innerText = outputText;
}

function transformaParaMinuscula() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.toLowerCase();
    document.getElementById('outputText').innerText = outputText;
}

function transformaPrimeiraLetra() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.charAt(0).toUpperCase() + inputText.slice(1);
    document.getElementById('outputText').innerText = outputText;
}
