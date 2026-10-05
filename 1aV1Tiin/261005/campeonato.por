programa {
  funcao inicio() {
    // entendimento do problema
      // calcular os pontos com base em vitórias e empates
    // infos e variáveis
    inteiro vitorias, empates, pontos
    // entrada de dados
    escreva("Digite o número de vitórias: ")
    leia(vitorias)
    escreva("Digite o número de empates: ")
    leia(empates)
    // processamento
    pontos = vitorias * 3 + empates
    // saída
    escreva("Seu time tem: ")
    escreva(pontos)
  }
}
