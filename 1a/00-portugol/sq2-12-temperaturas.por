programa {
  funcao inicio() {
    real c, f
    escreva("Temperatura em celcius:")
    leia(c)

    f = c*1.8 + 32
    escreva("Temperatura em fahrenheit: " + f)
    se(f > 68){
      escreva("Tá super calor!")
    }
  }
}
