// let nomeUsuario = 'Umberto Doisberto'


// pair programming: programação em pares

// {} chaves ==> blocos de código e objetos
// () parênteses ==> argumentos de função
// [] colchetes ==> índices em arrays



function verificarRegexSenha(){
    const senha = prompt('Digite a senha:')

// Regex com Lookahead
const regexSenha = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;

if (regexSenha.test(senha)) {
  console.log("Senha válida!");
} else {
  console.log("Senha inválida. Deve conter ao menos uma letra maiúscula, uma minúscula e um símbolo.");
}
}


// {⭐} Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida, mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.).
function encontrarDiaDaSemana(){
// entendimento
    // receber um número de 1 a 7 e mostrar o dia da semana correspondente

// infos e variáveis
    let numero
// entrada de dados
    numero = Number(prompt(`Digite um número de 1 a 7:`))
// processamento
// saída    
    if(numero == 1){
        alert('Domingo')
    }else if(numero == 2){
        alert('Segunda')
    }else if(numero == 3){
        alert('Terça')
    }else if(numero == 4){
        alert('Quarta')
    }else if(numero == 5){
        alert('Quinta')
    }else if(numero == 6){
        alert('Sexta')
    }else if(numero == 7){
        alert('Sábado')
    }else{
        alert("Leia com voz do Faustão: \nERRRRRRRRRRRROOOUUUUUUU")
    }
}
function encontrarDiaDaSemana2(){
// entendimento
    // receber um número de 1 a 7 e mostrar o dia da semana correspondente

// infos e variáveis
    let numero
// entrada de dados
    numero = Number(prompt(`Digite um número de 1 a 7:`))
// processamento
// saída  

    switch(numero){
        case 1:
            alert('Domingo')
            break
        case 2:
            alert('Segunda')
            break
        case 3:
            alert('Terça')
            break
        case 4:
            alert('Quarta')
            break
        case 5:
            alert('Quinta')
            break
        case 6:
            alert('Sexta')
            break
        case 7:
            alert('Sábado')
            break
        default:
            alert('Erro 404, dia não encontrado!')
    }


    // if(numero == 1){
    // }else if(numero == 2){
    //     alert('Segunda')
    // }else if(numero == 3){
    //     alert('Terça')
    // }else if(numero == 4){
    //     alert('Quarta')
    // }else if(numero == 5){
    //     alert('Quinta')
    // }else if(numero == 6){
    //     alert('Sexta')
    // }else if(numero == 7){
    //     alert('Sábado')
    // }else{
    //     alert("Leia com voz do Faustão: \nERRRRRRRRRRRROOOUUUUUUU")
    // }
}
function encontrarDiaDaSemana3(){
// entendimento
    // receber um número de 1 a 7 e mostrar o dia da semana correspondente

// infos e variáveis
    let numero
// entrada de dados
    numero = Number(prompt(`Digite um número de 1 a 7:`))
// processamento
// saída    
    if(numero == 1) alert('Domingo')
    else if(numero == 2) alert('Segunda')
    else if(numero == 3) alert('Terça')
    else if(numero == 4) alert('Quarta')
    else if(numero == 5) alert('Quinta')
    else if(numero == 6) alert('Sexta')
    else if(numero == 7) alert('Sábado')
    else alert("Leia com voz do Faustão: \nERRRRRRRRRRRROOOUUUUUUU")
}


// rotação de estações:
// Jean, 2
// Daniel, 3
// Felipe, 4
// Marcos, 5
// Rafael, 6

// sorteado = Math.ceil(Math.random()*10)

function exemplo(){
// entendimento
// infos e variáveis
// entrada de dados
// processamento
// saída    
}

function verificarParidade(){
// entendimento
    // Rafael
    // este programa lê um número digitado pelo usuário e verifica se ele é par ou ímpar
// infos e variáveis
     let numero
// entrada de dados
//felipe
numero = Number(prompt("digite o numero: "))

// processamento
// saída    
//daniel
if(numero % 2 == 0){
    alert("É PAR!!  ❤️")
    document.getElementById('resultadoParidade').showModal()
}else{
    alert("É IMPAR!!! 😎")
}

}


function verificarMaioridade(){
// entendimento
    // o programa deve ler a idade de uma pessoa e informar se ela é maior de idade ou não.
// infos e variáveis
    let idade
// entrada de dados
    idade = Number(prompt("Digite sua idade:"))
// processamento
// saída 
    if(idade >= 18){
        alert("Maior de idade")
    }else{
        alert("NÃO é maior de idade")
    }
}


function calcularLucroGanso(){
    // entendimento
        // O programa deve ler gastos, faturamento em ingressos e faturamento na loja e calcular o lucro em reais e o lucro percentual.

    // infos e variáveis
    let gastos, faturamentoIngressos, faturamentoLoja
    let lucroReais, lucroPercentual

    // entrada de dados
    gastos = Number(prompt('Digite o gasto de hoje:'))
        // gastos = Number('100')
        // gastos = 100
    faturamentoIngressos = Number(prompt('Faturamento em ingressos:'))
    faturamentoLoja = Number(prompt('Faturamento na loja de itens:'))

    // processamento
    let faturamentoTotal = faturamentoIngressos + faturamentoLoja 
    lucroReais = faturamentoTotal - gastos
    
    // gastos       --  100%
    // lucroReais   --  x% (lucroPercentual)
    // gastos*lucroPercentual = lucroReais*100
    // lucroPercentual = (lucroReais*100)/gastos
    lucroPercentual = (lucroReais/gastos)*100

    // saída
    alert('Lucro: R$' + lucroReais.toFixed(2) + ' ou ' + lucroPercentual + '%')
}

// v68.4
// git add . // manda o git procurar e listar todas as alterações
// git commit -m "feat/ v68.5 login do pokemon" // oficializa uma nova versão local
// git push // envia essa nova versão para o github


function calcularPrecoDoPrompt(){
    // entendimento
        // ler o tamanho do texto do prompt e calcular o seu custo. 
        // o custo é calculado por: 5 tokens fixos + 1 token por caracter do prompt.

    // infos e variáveis
    let textoPrompt
    let tamanhoPrompt 
    let totalDeTokens
    // leitura de dados
    // tamanhoPrompt = Number(prompt('Quantos caracteres tem seu prompt?'))
    textoPrompt = prompt('Digite seu prompt')
    // processamento
    tamanhoPrompt = textoPrompt.length
    totalDeTokens = 5 + tamanhoPrompt
    // saída
    alert("Seu prompt vai consumir " + totalDeTokens + ' tokens')
    alert(`Seu prompt vai consumir ${totalDeTokens} tokens`)
}
