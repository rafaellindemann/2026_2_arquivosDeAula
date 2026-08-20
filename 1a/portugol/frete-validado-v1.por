// versão mais completinha...
programa {
  funcao inicio() {
    // identificar infos e variáveis
    real peso, distancia, volume
    real frete
    // ler os dados
    escreva("Peso: ")
    leia(peso)

    se(peso > 0){
      // continua...
      escreva("Distância: ")
      leia(distancia)
      se(distancia > 0){
        // continua
        escreva("Volume: ")
        leia(volume)
        se(volume > 0){
          // continua
          // processar
          frete=15+(2*peso)+(0.05*distancia)+(10*volume)
          // saída do resultado
          escreva("Valor do frete: R$" + frete)
        }senao{
          escreva("Volume inválido")
        }
      }senao{
        escreva("Distância inválida")
      }
    }senao{
      escreva("Peso inválido.")
    }

  }
}
