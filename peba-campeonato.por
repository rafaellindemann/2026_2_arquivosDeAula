programa {
  funcao inicio() {
    // dados - variáveis
    inteiro vitorias, empates, pontos
    cadeia time
    // receber valor para estes dados
    escreva("Nome do time: ")
    leia(time)
    escreva("Digite o número de vitórias: ")
    leia(vitorias)
    escreva("Digite o número de empates: ")
    leia(empates)
    // processamento/cálculos
    pontos = vitorias*3 + empates
    // apresentação dos resultados - saída
    // escreva("Seu time tem " + pontos + " pontos")
    escreva(time + ": " + pontos + " pontos")
    // escreva("Quantidade de pontos: " + pontos)
  }
}
