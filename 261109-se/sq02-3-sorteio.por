programa {
  inclua biblioteca Util --> u
  funcao inicio() {
		inteiro valor_sorteado, chute
			valor_sorteado = u.sorteia(1, 3)

      escreva("Chute um número ente 1 e 10: ")
      leia(chute)

      se(chute == valor_sorteado){
        escreva("Acertou!")
      }senao{
        escreva("Ler com voz do Faustao: ERRRRRRROU!!")
        escreva("\nO número era: " + valor_sorteado)
      }			
  }
}
