const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "De que forma a inteligencia artificial pode ser usada para beneficio proprio?",
        alternativas: [
            {
                texto: "Usando de maneira preguicosa e deixando ela trabalhar por voce!",
                afirmacao: "ERRADA"
            },
            {
                texto: "utilizar para auxilio em pesquisas e assistencia em problemas, porem ainda fazendo o trabalho sem depender totalmente dela!",
                afirmacao: "CERTA"
            }
        ]
    },
    {
        enunciado: "Como usar de maneira etica as inteligencias artificiais!",
        alternativas: [
            {
                texto: "Colocando elas para fazer suas atividades escolares ou trabalhos facultativos!",
                afirmacao: "ERRADA"
            },
            {
                texto: "Pedir auxilio e pesquisas sobre dado contexto para a melhor aprendizagem de si mesmo!",
                afirmacao: "CERTA"
            }
        ]
    },
    {
        enunciado: "A inteligencia artificial consegue programar para voce?",
        alternativas: [
            {
                texto: "Claro, consegue fazer com exatidao qualquer ideia que a for pedida",
                afirmacao: "ERRADO"
            },
            {
                texto: "Sim, porem limitado pois ela nunca consiguira fazer com exatidao ideias humanas",
                afirmacao: "CERTA"
            }
        ]
    },
    {
        enunciado: "Quais funcoes uma IA pode executar?",
        alternativas: [
            {
                texto: "Utilizada somente para coisas banais e resolucoes de problemas simples",
                afirmacao: "ERRADA"
            },
            {
                texto: "Auxilio na resolucao de problemas complexos e diversas outras funcoes",
                afirmacao: "CERTA"
            }
        ]
    },
    {
        enunciado: "No meio academico qual o principal uso que atulmente os alunos tem usado as IA?",
        alternativas: [
            {
                texto: "Para pesquisa e auxilio nos estudos?",
                afirmacao: "CERTA"
            },
            {
                texto: "Fazendo com que elas facam suas avalaliacoes e respondendo suas atividades",
                afirmacao: "ERRADA"
            }
        ]
    },
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
