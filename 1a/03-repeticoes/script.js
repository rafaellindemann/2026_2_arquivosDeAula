

// let contagem = 0
// while(contagem < 3){
//     alert(contagem)
//     contagem++
// }
// let contagem = 4
// while(contagem > 0){
//     alert(contagem)
//     contagem--
// }
// let contagem = 4
// while(contagem > 0){
//     contagem--
//     alert(contagem)
// }


// let i = 10
// while(i>3){
//     if(i==6){
//         alert(i)
//     }
//     console.log(i);
//     i--
// }


// let i = 1500
// while(i>0){
//     i--
//     if(i<1499)i=0
//     console.log(i+2);
// }



// =================================

// let i = 0
// while(i<3){
//     let produto = Number(prompt('Digite o preço do ' + i + 'o produto'))

//     i++
// }
// let i = 10
// while(i>0){
    //     let produto = Number(prompt('Digite o preço do ' + i + 'o produto'))
    
    //     i--
    // }
    
    
    // let qtd = Number(prompt('Quantos produtos?'))
    // let i = 0
    // while(i<qtd){
    //     let produto = Number(prompt('Digite o preço do ' + i + 'o produto'))
    
    //     i++
    // }
    
    // let qtd = 0
    // let total = 0
    // let produto = -1
    // while(produto != 0){
    //     // produto = Number(prompt('Digite o preço do ' + 'o produto'))
    //     produto = Number(prompt('Digite o preço do ' + (qtd+1) + 'o produto\n(0 para parar)'))
    //     if(produto != 0) qtd++
    //     total += produto
    // }
    // alert('Valor total: ' + total + '\nQuantidade: ' + qtd)


// if(produto != 0){
//     qtd++
// }


// #0065
// Parte 1

let resultado = document.getElementById('resultado')


// 5 x 1 = 5
// 5 x 2 = 10

function parte1ex4(){
    resultado.innerHTML = 'Parte 1, ex4<br>'

    let i = 1
    while(i<=10){
        let multiplicacao = i * 5
        resultado.innerHTML += '5 x ' + i + ' = ' + multiplicacao + '<br>'
        i++
    }
}

function parte1ex3(){
    resultado.innerHTML = 'Parte 1, ex3<br>'
    let soma = 0
    let i = 1
    while(i<=100){
        soma += i
        // resultado.innerHTML += i + ':' + soma + '<br>'
        i++
    }
    resultado.innerHTML += 'Soma dos números de 1 a 100: ' + soma
}

function parte1ex2(){
    resultado.innerHTML = 'Parte 1, ex2<br>'

    let i = 10
    while(i >= 0){
        resultado.innerHTML += i + '<br>'
        i--
    }
}


function parte1ex1(){
    // ex1
    document.getElementById('resultado').innerHTML = 'Parte 1, ex1<br>'
    let i = 0
    while(i<10){
        i++
        let quadrado = i*i
        console.log(i + ': ' + quadrado);
        document.getElementById('resultado').innerHTML += i + ': ' + quadrado + '<br>'
    }
}

// function calcularRaiz(){
//     let n = Number(prompt("Digite o número"))
//     let raiz = Math.sqrt(n)
//     alert(raiz)
// }

let totalCompra = 0
function somarCompra(){
    let compra = Number(document.getElementById('inputValor').value)
    totalCompra += compra

    document.getElementById('resultado').innerHTML = totalCompra
}