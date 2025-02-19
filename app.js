let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document. querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Femele", {rate:1.2});
}

function exibirMensagemmInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemmInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    
 if( chute == numeroSecreto) {
    exibirTextoNaTela("h1","Acertou!")
    let palavratentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemtentativas = `você descobriu o número secreto com ${tentativas} ${palavratentativa}!`;
    exibirTextoNaTela("p", mensagemtentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
 } else {
    if (chute > numeroSecreto) {
    exibirTextoNaTela ("p", " O número é menor");
    } else {
        exibirTextoNaTela("p", " O número secreto é maior");
    }
    tentativas++;
    limparcampo();
 }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosnaLista = listaDeNumerosSorteados.length;

if (quantidadeElementosnaLista == 3) {
    listaDeNumerosSorteados = []
} 

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido; 
    }
}

function limparcampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarjogo() {
    numerosecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    exibirMensagemmInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}