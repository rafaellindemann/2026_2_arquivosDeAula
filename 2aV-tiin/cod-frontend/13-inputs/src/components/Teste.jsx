import React from 'react'

function Teste() {

    function testar(){
        let pums = Number(prompt("Pums?"))
        let i = 1
        let texto = ''
        let cont  = 0
        while(cont < pums){
            if(i%4 != 0){
                texto += i + ' '
            }else{
                texto += 'pum\n'
                cont++
            }
            i++
        }
        console.log(texto);
        
    }
  return (
    <div>
        <h2>Teste</h2>
        <button onClick={testar}>Testar</button>
    </div>
  )
}

export default Teste