const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

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

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

// ... código anterior ...
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
// ... código posterior ...
