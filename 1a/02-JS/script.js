// let nomeUsuario = 'Umberto Doisberto'

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
    // infos e variáveis
    // leitura de dados
    // processamento
    // saída
}
