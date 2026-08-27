programa {
  	inclua biblioteca Texto --> tx
  funcao inicio() {
    inteiro tamanho 
    cadeia senha

    cadeia senha_usuario

    escreva("Digite a senha: ")
    leia(senha)    
    
    tamanho = tx.numero_caracteres(senha)

    se(tamanho >= 8){
      escreva("Senha BOA")
    }senao{
      escreva("Senha RUIM")
    }

    escreva("\nCadastro efetuado!\n")
    escreva("Digite sua senha: ")
    leia(senha_usuario)

    se(senha == senha_usuario){
      escreva("Login efetuado com sucesso!")
    }senao{
      escreva("Falha no login")
    }

  }
}
