let contador = 0;

function aumentar(){
    contador++;
    document.getElementById("contador").innerText = contador;
}

function diminuir(){
    contador--;
    document.getElementById("contador").innerText = contador;
}