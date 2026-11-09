programa {
  funcao inicio() {
    inteiro idade
    cadeia nome
    escreva("Sua idade: ")
    leia(idade)
    escreva("Seu nome: ")
    leia(nome)

    se(idade < 18){
      escreva("Você é menor, pode entrar.")
    }

    se(idade >= 18){
      escreva("Você não é menor, não pode entrar.")
      escreva("\nEncontre um menor responsável.")
    }

    se(nome == "Rafael"){
      escreva("\nVocê pode entrar escondido...")
    }
    se(nome != "Rafael"){
      escreva("\nVoce não aparece nos créditos.")
    }

    se(idade > 50){
      escreva("Aqui não pod, mas tenho um site de dorama...")
    }

    se(idade <= 25){
      escreva("\nSe voce estiver com fantasia de cachorro, pode entrar")
    }


    se(idade == 30){
      escreva("\nVoce pode criar uma banda hoje")
    }senao{
      escreva("\nVolte semana que vem")
    }




  }
}
