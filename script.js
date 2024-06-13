const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "A IA se tornará uma parte indispensável de nossas vidas, moldando todos os aspectos da sociedade, desde a saúde até o entretenimento.",
        alternativas: [
            {
                texto: "Escolas estão utilizando sistemas de tutoria inteligente baseados em IA para fornecer suporte individualizado aos alunos, adaptando o conteúdo de aprendizagem de acordo com suas necessidades e ritmo de aprendizagem.",
                afirmacao: "A IA continuará a se tornar mais integrada à sociedade, influenciando aspectos como transporte, saúde, educação e entretenimento.."
            },
            {
                texto: "Plataformas educacionais online estão empregando algoritmos de IA para analisar o desempenho dos alunos, fornecendo feedback imediato e sugestões personalizadas para melhorar o aprendizado.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "A aplicação da IA na medicina revolucionará a forma como tratamos doenças, permitindo diagnósticos mais precisos e tratamentos personalizados.",
        alternativas: [
            {
                texto: "Sistemas de IA estão sendo desenvolvidos para analisar grandes volumes de dados médicos, incluindo históricos de pacientes, exames laboratoriais e imagens médicas, para auxiliar os médicos na identificação precoce de doenças e na tomada de decisões clínicas mais precisas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "A IA está sendo empregada no desenvolvimento de terapias personalizadas, utilizando algoritmos para analisar o perfil genético de um paciente e identificar tratamentos específicos que sejam mais eficazes e tenham menos efeitos colaterais.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "A integração da IA na mobilidade urbana levará ao desenvolvimento de sistemas de transporte autônomos, reduzindo congestionamentos e acidentes nas estradas.",
        alternativas: [
            {
                texto: "Empresas de tecnologia e fabricantes de automóveis estão investindo pesadamente no desenvolvimento de veículos autônomos, que são capazes de operar de forma segura e eficiente em ambientes urbanos, contribuindo para a redução do congestionamento nas estradas.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Sistemas de IA estão sendo implementados em infraestruturas de transporte, como semáforos e sinais de trânsito inteligentes, para otimizar o fluxo de tráfego, minimizando atrasos e melhorando a segurança viária nas cidades.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
