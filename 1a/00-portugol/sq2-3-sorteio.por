programa {
  inclua biblioteca Util --> u
  funcao inicio() {
    // infos e variáveis
		inteiro valor_sorteado, numero_digitado
    // leitura de dados
    valor_sorteado = u.sorteia(1, 10)
    escreva("Digite seu número: ")
    leia(numero_digitado)
    // processamento e saída
    se(numero_digitado == valor_sorteado){
      escreva("Acertô miseravi")
    }senao{
      escreva("Faustão: ERRROOUUUuuuuu")
      escreva("\nO número era : " + valor_sorteado)
    }

  }
}
