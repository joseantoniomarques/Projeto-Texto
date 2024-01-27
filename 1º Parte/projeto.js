function converterParaMaiusculas() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.toUpperCase();
    document.getElementById('outputText').innerText = outputText;
}

function converterParaMinusculas() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.toLowerCase();
    document.getElementById('outputText').innerText = outputText;
}

function converterParaPrimeira() {
    var inputText = document.getElementById('inputText').value;
    var outputText = inputText.charAt(0).toUpperCase() + inputText.slice(1);
    document.getElementById('outputText').innerText = outputText;
}