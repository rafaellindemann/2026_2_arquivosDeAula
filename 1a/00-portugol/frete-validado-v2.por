// versão mais simples de implementar, mas não tão gostosinha pro usuário
programa {
  funcao inicio() {
    // identificar infos e variáveis
    real peso, distancia, volume
    real frete
    // ler os dados
    escreva("Peso: ")
    leia(peso)
    escreva("Distância: ")
    leia(distancia)
    escreva("Volume: ")
    leia(volume)

    se(peso > 0 e distancia > 0 e volume > 0){
      // processar
      frete=15+(2*peso)+(0.05*distancia)+(10*volume)
      // saída do resultado
      escreva("Valor do frete: R$" + frete)
    }senao{
      escreva("Dados inválidos")
    }


  }
}
