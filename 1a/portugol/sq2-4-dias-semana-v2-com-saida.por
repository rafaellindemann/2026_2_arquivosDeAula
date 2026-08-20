programa {
  funcao inicio() {
    // infos/variáveis
    inteiro numero
    cadeia dia
    // entrada de dados
    escreva("Número do dia: ")
    leia(numero)
    // processamento
    se(numero == 1){
      dia = "Domingo"
    }senao se(numero == 2){
      dia ="Segunda"
    }senao se(numero == 3){
      dia ="Terça"
    }senao se(numero == 4){
      dia ="Quarta"
    }senao se(numero == 5){
      dia ="Quinta"
    }senao se(numero == 6){
      dia ="Sexta"
    }senao se(numero == 7){
      dia ="Sábado"
    }senao{
      dia ="Não viaja, táx tôlu"
    }
    // saída
    escreva("Dia da semana: " + dia)
  }
}


// {⭐} Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida, mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.).