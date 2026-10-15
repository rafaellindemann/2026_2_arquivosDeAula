

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

// CASO CLÁSSICO DE WHILE (repete enquanto algo (não) acontece)
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

// let sorteado = Math.ceil(Math.random() * 100)
// 0.54387468736
// 54.387468736
// 55

function parte2ex4(){
    let n = Number(prompt('Digita aí:'))
    for(let i=n; i<=1; i--){

    }
}
function parte2ex3(){
    let item = 'vazio'
    resultado.innerHTML = ''
    while(item != '0'){
        item = prompt("Digite um ítem pra lista:")
        if(item != '0'){
            resultado.innerHTML += `<p>${item}</p>`
        }
    }
}


function parte2ex2(){
// Somando números pares
// Peça ao usuário para inserir um número e, em seguida, exiba a soma dos números pares de 2 até o número inserido.
    resultado.innerHTML = ''
    let soma = 0
    let n = Number(prompt("Digite um número:"))
    for(let i=2; i<=n; i++){
        if(i%2 == 0){
            soma += i
            console.log(i);
            
        } 
    }
    resultado.innerHTML = soma

}

function parte2ex1(){
//     🐱‍🏍Aclamação repetida
// Peça ao usuário para digitar uma palavra e repita essa palavra 10 vezes na tela.
    resultado.innerHTML = ''
    let n = Number(prompt("Quantas vezes?"))

    let palavra = prompt("Digite uma palavra:")
    for(let i=0; i<n; i++){
        resultado.innerHTML += `<p>${palavra}</p>`
    }
}


function parte1ex6(){
    
    resultado.innerHTML = ''
    for(let i = 1; i<=20; i++){
        if(i%2 != 0){
            resultado.innerHTML += '<p class="numeros">' + i + '</p>'
        }
    }
    // let i = 0
    // while(i<10){
    //     // trampo
    //     console.log(i)
    //     i++
    // } 
}

function testar(){
    let valor = -1
    valor = Number(prompt("Digite o preço do produto:"))

}

let produtosCont = document.getElementById('produtos')
function demoSpoiler(){
    let produtos = [
        {
            id: 0,
            img: '🚴',
            nome: "Bicicleta",
            preco: 1000
        },
        {
            id: 1,
            img: '🏍️',
            nome: "Moto",
            preco: 10000
        },
        {
            id: 2,
            img: '🚗',
            nome: "Carro",
            preco: 100000
        },
    ]

    produtosCont.innerHTML = ''
    for(let i=0; i<produtos.length; i++){
        produtosCont.innerHTML += `
            <div class="produto">
                <h2>${produtos[i].img}</h2>
                <p>${produtos[i].nome}</p>
                <p>R$${produtos[i].preco}</p>
                <button onclick="alert('Você comprou o ${produtos[i].nome}')">Comprar</button>
            </div>
        `
    }
}

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



    // for(let i=0; i<n; i++){
    //     resultado.innerHTML += `<p>${palavra}</p>`
    // }
    // for(variavel de controle; condicao de repetição; increcemento da contagem){
    //     resultado.innerHTML += `<p>${palavra}</p>`
    // }