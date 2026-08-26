programa {
  inclua biblioteca Texto --> tx
  funcao inicio() {
    cadeia palavra, aumentada

    escreva("Digita aí: ")
    leia(palavra)

    aumentada = tx.caixa_alta(palavra)

    se(palavra == aumentada){
      escreva("A palavra está em caixa alta")
    }senao{
      escreva("Não está em caixa alta")
    }
  }
}
