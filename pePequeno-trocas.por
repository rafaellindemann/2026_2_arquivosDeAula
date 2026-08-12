programa {
  funcao inicio() {
    // dados - variáveis
    inteiro qtd_pares
    real preco, valor_troca 
    // entradas - leituras
    escreva("Quantidade de pares: ")
    leia(qtd_pares)
    escreva("Preço por par: R$")
    leia(preco)
    // processamentos
    valor_troca = preco * qtd_pares
    // saídas
    escreva("Vai receber: R$" + valor_troca)
  }
}
