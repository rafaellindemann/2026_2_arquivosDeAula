programa {
  funcao inicio() {
    inteiro ano
    escreva("Digite o ano: ")
    leia(ano)
    se(ano%400==0 ou (ano%4==0 e ano%100!=0)){
      escreva("Bisexto")
    }senao{
      escreva("Não é bisexto")
    }

    fim()
  }

  funcao fim(){
    escreva("\n\n\nacabou")
  }
}


// Ano de Teste	Saída Esperada	Motivo / Caso de Teste
// 2023	Não bissexto	Caso comum: não é divisível por 4.
// 2024	Bissexto	Caso base: é divisível por 4 e não termina em 00.
// 1900	Não bissexto	Pegadinha do 100: É divisível por 4 e por 100, mas não por 400.
// 2000	Bissexto	Exceção da exceção: É divisível por 100, mas também é por 400.
// 2100	Não bissexto	Outro teste de fim de século que não é bissexto.
// 1600	Bissexto	Outro ano secular antigo divisível por 400.

