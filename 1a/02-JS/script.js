// let nomeUsuario = 'Umberto Doisberto'



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
}
