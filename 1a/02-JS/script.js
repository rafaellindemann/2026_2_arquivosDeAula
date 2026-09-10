
function calcularFrete2(){
    let peso, distancia, volume
    let frete
    
    peso = Number(prompt('Digite o peso da encomenda:'))
    distancia = Number(prompt('Digite a distância do frete:'))
    volume = Number(prompt('Digite o volume da encomenda:'))
    
    frete=15+(2*peso)+(0.05*distancia)+(10*volume)

    alert("Valor do frete: R$" + frete.toFixed(2).replace('.',','))

}

function calcularPrecoMacas(){
// entendimento

// infos e variáveis
// leitura de dados
// processamento
// if(){

// }
// saída
}

function calcularContaDaPousada(){
// entendimento
    // o programa deve ler o número de dias que vai ficar no albergue e apresentar o valor final da conta e sua composição. O valor da diária depende de quantos dias ficou. Tem descontos e multa.

// infos e variáveis
    let qtd_dias, valorDaDiaria
    let totalBruto, desconto10, desconto15, totalPagar
    let multa=150    

// entrada de dados
    qtd_dias = Number(prompt("Quantos dias?"))
// processamento
    if(qtd_dias <= 5){
        valorDaDiaria = 100
    }else if(qtd_dias <= 10){
        valorDaDiaria = 90
    }else{
        valorDaDiaria = 80
    }

    totalBruto = qtd_dias * valorDaDiaria
    desconto10 = totalBruto * 10/100
    desconto15 = totalBruto * 15/100
    totalPagar = totalBruto - (desconto10 + desconto15) + multa

// saída
    alert("Total bruto: R$" + totalBruto.toFixed(2) + 
        "\nDesconto emocional: R$" + desconto10.toFixed(2) +
        "\nDesconto Uber: R$" + desconto15.toFixed(2) +
        "\nMulta: R$" + multa.toFixed(2) +
        "\n===============================" +
        "\nTotal a pagar: R$" + totalPagar.toFixed().replace('.', ','))

}



function automatizarJaulas(){
//
    if(visitantes==0 && (hora<8 || hora>18)){}
    
    // visitantes=0, hora=10
    if(visitantes==0 && (hora<8 || hora>18)){}
    if(0==0 && (10<8 || 10>18)){}
    if(v && (f || f)){}
    if(v && f){}
    if(f){}
    
    // visitantes=0, hora=20
    if(visitantes==0 && (hora<8 || hora>18)){}
    if(0==0 && (20<8 || 20>18)){}
    if(v && (f || v)){}
    if(v && v){}
    if(v){}
    
    // visitantes=10, hora=6
    if(visitantes==0 && (hora<8 || hora>18)){}
    if(10==0 && (6<8 || 6>18)){}
    if(f && (v || f)){}
    if(f && v){}
    if(f){}


    
    // if(visitantes==0){
    //     if(hora<8 || hora>18){
    //         alert('pode entrar')
    //     }else{
    //         alert('Não pode')
    //     }
    // }else{
    //     alert('Não pode')
    // }

}


// 4x5+1

function  controladorDeAcesso(){
// entendimento
    // verificar se o usuário tem crachá válido e digital cadastrada para poder liberar o acesso ao centro de comando.
// infos e variáveis
    let crachaValido, digitalReconhecida
// entradas de dados
    crachaValido = confirm("Tem crachá válido?")   
    digitalReconhecida = confirm("Tem digital reconhecida?") 
// processamento
// saídas
    // if(crachaValido==true && digitalReconhecida==true){
    if(crachaValido && digitalReconhecida){
        alert("Acesso liberado")
    }else{
        alert("Acesso negado")
    }
}
function  controladorDeAcesso2(){
// entendimento
    // verificar se o usuário tem crachá válido e digital cadastrada para poder liberar o acesso ao centro de comando.
// infos e variáveis
    let crachaValido, digitalReconhecida
// entradas de dados
    // crachaValido = prompt("Tem crachá válido (s/n)?")   
    // digitalReconhecida = prompt("Tem digital reconhecida (s/n)?") 

    crachaValido = prompt("Tem crachá válido?\n1: sim\n2: não")   
    digitalReconhecida = prompt("Tem digital reconhecida?\n1: sim\n2: não") 
// processamento
// saídas
    // if(crachaValido==true && digitalReconhecida==true){
    if(crachaValido=='1' && digitalReconhecida=='1'){
        alert("Acesso liberado")
    }else{
        alert("Acesso negado")
    }
}




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


// if(marujos >= 10 && comidaPorMarujo >= 1.5)