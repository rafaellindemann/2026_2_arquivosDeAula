programa {
  funcao inicio() {
    // dados e variáveis
    inteiro qtd_inicial, qtd_final, qtd_vendida
    // leitura dos dados
    escreva("Com quantas laranjas você começou o dia? ")
    leia(qtd_inicial)
    escreva("Com quantas laranjas você terminou o dia? ")
    leia(qtd_final)
    // processamento
    qtd_vendida = qtd_inicial - qtd_final
    // apresento o resultado
    escreva("Você vendeu " + qtd_vendida + " laranjas hoje!")
  }
}

// Heitor Tuga, CEO da Trajeto Pomar, quer um programa que tenha:

// - Quantidade inicial de laranjas;
// - Quantidade final de laranjas;
// - Calcule, com base nos dados acima, quantas laranjas foram vendidas no dia.