programa {
  funcao inicio() {
    // infos e variáveis
    real gasto, faturamento_ingressos, faturamento_itens
    real lucro_reais, lucro_percentual
    // leitura de dados
    escreva("Gasto: R$")
    leia(gasto)
    escreva("Faturamento em ingressos: R$")
    leia(faturamento_ingressos)
    escreva("Faturamento em ítens: R$")
    leia(faturamento_itens)
    // processamento
    real faturamento_total = faturamento_ingressos + faturamento_itens
    lucro_reais = faturamento_total - gasto
    lucro_percentual = (lucro_reais * 100) / gasto
    // saída
    escreva("Lucro: R$" + lucro_reais + ", ou " + lucro_percentual + "%")
  }
}

// real => pá numoro quebrado
// inteiro => pra números sem parte decimal, ou seja, os inteiros 
// cadeia => pra textos, palavras, vulgo strings
// logico => para verdadeiro/falso
