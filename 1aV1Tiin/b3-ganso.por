programa {
  funcao inicio() {

    real gastos, venda_ingressos, venda_itens
    real lucro_reais, lucro_percentual

    escreva("Valor dos gastos: R$")
    leia(gastos)
    escreva("Valor de venda de ingressos: R$")
    leia(venda_ingressos)
    escreva("Valor de venda de itens: R$")
    leia(venda_itens)

    lucro_reais = venda_itens + venda_ingressos - gastos
    lucro_percentual = (lucro_reais/gastos) * 100
    escreva("Lucro de hoje: R$" + lucro_reais)
    escreva("\nLucro percentual: " + lucro_percentual)

  }
}
