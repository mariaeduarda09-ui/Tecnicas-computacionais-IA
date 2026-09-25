import {aleatorio, nome} from './aleatorio.js';
import {aleatorio} from './aleatorio.js';
import {perguntas} from './perguntas.js';
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

const perguntas = [
    {
        enunciado: "Sua primeira pergunta?",
        alternativas: [
            {
                texto: "Alternativa 1",
                afirmacao: [
                    "Sua primeira afirmação.",
                    "Outra afirmação relacionada à alternativa 1."
                ]
            },
            {
                texto: "Alternativa 2",
                afirmacao: [
                    "Sua segunda afirmação.",
                    "Mais uma afirmação para a alternativa 2."
                ]
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";
botaoIniciar.addEventListener('click', iniciaJogo);

substituiNome();

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049, ${nome}";
    textoResultado.textContent historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar"); // Esta linha deve ser adicionada
    botaoJogarNovamente.addEventListener("click", jogaNovamente); // Esta linha deve ser corrigida (removendo os parênteses de jogaNovamente)
}
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    
    if (opcaoSelecionada.proxima != undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }

    mostraPergunta();
}

function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar"); // Esta linha deve ser adicionada
    mostraPergunta();
}

 function substituiNome(){
    for(const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
    
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

function aleatorio (lista){
        const posicao = Math.floor(Math.random()* lista.length);
        return lista[posicao];
}

function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
        atual++;
substituiNome();
}

