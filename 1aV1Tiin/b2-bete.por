programa {
  funcao inicio() {
    // entendimento
      // calcular o lucro que a dona bete teve no dia
    // infos e variáveis
    real bruto, presentes, premiacoes, comissoes
    real lucro
    // entrada de dados

    escreva("Digite o valor bruto de hoje: R$")
    leia(bruto)
    escreva("Digite o valor dos presentes: R$")
    leia(presentes)
    escreva("Digite o valor das premiações: R$")
    leia(premiacoes)
    escreva("Digite o valor das comissões: R$")
    leia(comissoes)

    // processamento
    lucro = bruto - (presentes + premiacoes + comissoes)
    // apresentar resultados
    escreva("Lucro de hoje: R$" + lucro)
  }
}
