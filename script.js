let numeroSecreto = parseInt(Math.random() * 11);
let contador = 3;

function Chutar() {
    let chute = parseInt(document.getElementById("valor").value);
    let resultadoChute = document.getElementById("resultado");
    let elementoContador = document.getElementById("contador");
    let elementoReiniciar = document.getElementById("reiniciar");

    if (chute == numeroSecreto) {
        resultadoChute.innerHTML = "Logicamente, " + chute + " é o número correto.";
        elementoReiniciar.style.display = "block";
    } else if (chute > 10 || chute < 0) {
        resultadoChute.innerHTML = "Leia as instruções novamente, Watson.";
    } else {
        if (chute > numeroSecreto) {
            resultadoChute.innerHTML = "Pense mais abaixo que " + chute + ", Watson.";
            contador--;
        } else if (chute < numeroSecreto) {
            resultadoChute.innerHTML = "Pense mais alto que " + chute + ", Watson.";
            contador--;
        }
    }
    if (contador === 3) {
        elementoContador.innerHTML = `Numero de Tentativas: ${contador}`;
    } else if (contador === 2) {
        elementoContador.innerHTML = `Numero de Tentativas: ${contador}`;
    } else if (contador === 1) {
        elementoContador.innerHTML = `Numero de Tentativas: ${contador}`;
    } else if (contador === 0) {
        elementoContador.innerHTML = `Você deduziu errado, o número era ${numeroSecreto}`;
        elementoReiniciar.style.display = "block";
    }
}

function Reiniciar() {
    let chute = parseInt(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");
    let elementoContador = document.getElementById("contador");
    let elementoReiniciar = document.getElementById("reiniciar");

    let novoNumeroSecreto = parseInt(Math.random() * 11);
    let novoNumeroSecretoN = (chute = novoNumeroSecreto);
    chute.innerHTML = "";
    resultado.innerHTML = "";
    resultado.innerHTML = "";
    let somar = (contador = 3);
    elementoContador.innerHTML = `Número de tentativas: ${contador}`;
    elementoReiniciar.style.display = "none";
}
