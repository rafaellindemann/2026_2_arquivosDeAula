

let numeros = []
function executar_8_5(){
  for(let i=0; i<50; i++){
    let n = Math.floor(Math.random() * 201) - 100
    numeros.push(n)
  }
  console.log(numeros);
    mostrarArray(numeros)  
}

function executar_8_6(){
    for(let i=0; i<numeros.length; i++){
        if(numeros[i] < 0){
            numeros[i] = 0
        }
    }
    mostrarArray(numeros)
}

function executar_8_7(){
    while(numeros.includes(0)){
        let i = numeros.indexOf(0)
        numeros.splice(i, 1)
    }
    mostrarArray(numeros)

}