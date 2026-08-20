programa {
  funcao inicio() {
    // infos/variáveis
    inteiro numero
    // entrada de dados
    escreva("Número do dia: ")
    leia(numero)
    // processamento
    // saída
    se(numero == 1){
      escreva("Domingo")
    }senao se(numero == 2){
      escreva("Segunda")
    }senao se(numero == 3){
      escreva("Terça")
    }senao se(numero == 4){
      escreva("Quarta")
    }senao se(numero == 5){
      escreva("Quinta")
    }senao se(numero == 6){
      escreva("Sexta")
    }senao se(numero == 7){
      escreva("Sábado")
    }senao{
      escreva("Não viaja, táx tôlu")
    }
  }
}


// {⭐} Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida, mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.).