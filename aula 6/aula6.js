function somar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = num1 + num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function subtrair() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado = num1 - num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 * num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function dividir() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (num2 == 0) {
        document.getElementById("resultado").innerText = "Erro: Divisão por zero não é permitida.";
        return;
    }

    let resultado = num1 / num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
