const questoes = [
    {
        questao: "quantos paises tem a angola?",
        respostas: [
            22,
            26,
            32,
            12
        ],
        respostaCorreta: 32
    },
    {
        questao: "como que tanka o Bostil?",
        respostas: [
            "tankando",
            "simplesmente intankavel o Bostil",
            "deixe o Bostil",
            "Essas horas eu me pergunto o por quê de Deus ter me feito brasileiro. Nunca maltratei criança, chutei velho, passei a rasteira em grávida e afins pra merecer tamanho sofrimento."
        ],
        respostaCorreta: "simplesmente intankavel o Bostil"
    },
    {
        questao: "o que fazendo agora",
        respostas: [
            "أفكر في امرأة جميلة",
            "estou atrás de você",
            "bo muçá",
            "eu te amo mãe"
        ],
        respostaCorreta: "أفكر في امرأة جميلة"
    },
    {
        questao: "Bem, você é gay?",
        respostas: [
            "yes",
            "hohoho",
            "no",
            "desliga o telefone*"
        ],
        respostaCorreta: "no"
    },
]

let radio = $('.radio')
let erro = true;
let questao = 0;

$(".enviar").click(() => {
    let massa = []
    let c = 0
    for(let i = 0; i < 4; i++){
        massa.push(radio[i].checked)
        if(radio[i].checked){
            for(let a = 0; a < 4; a++){
                if(radio[i].value == questoes[a].respostaCorreta){
                    erro = false
                }
            }
        }
        if(massa[i] == false){
            c++
        } 
    }
    if(c == 4){
        alertify.warning("marque alguma das opçoes!")
    } else {
        if(erro){
            alertify.error("respota incorreta!")
        } else if(erro == false){
            alertify.success("resposta correta!")
            questao++
            gerarQuestao(questao, questoes)
        }
    }
    erro = true
});

function gerarQuestao(questao, arr){
    if(questao != 4){
        for(key = 0; key<=questao; key++){
            $('.nQuestao').text(key+1)
            $('.pergunta').text(arr[key].questao);
            
            for(let i=0; i<4; i++){
                $('.questao-p')[i].textContent = (arr[key].respostas[i])
                radio[i].value = (arr[key].respostas[i])
            }
        }
    } else {
        document.write("cabo")
    }
}

gerarQuestao(questao, questoes)