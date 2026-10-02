let diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
console.log('1: ', diasDaSemana);


diasDaSemana.push('Feriado')
console.log('3: ', diasDaSemana);

diasDaSemana.pop()
console.log('4: ', diasDaSemana);

let pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log('5:', pares);

pares[2] = 12
console.log('6:', pares);

let frutas = ['banana', 'maça', 'uva' ]
frutas.push('morango')
console.log('7:', frutas);

// ['banana', 'maça', 'uva', 'morango' ]

let j = frutas.indexOf('uva')
frutas.splice(j, 2)
console.log('j: ', j);
console.log('splice:', frutas);

// frutas.splice(frutas.indexOf('uva'), 2)

// Number(prompt("Pergunta"))

// resposta = prompt('Pergunta')
// resposta = Number(resposta)

let amigos = ['Alice', 'Bob', 'Charlie']
let conhecidos = ['Joaquim', 'Papino']

// let todos = amigos.concat(conhecidos)
// console.log('concat ' , todos);

// while(conhecidos.length > 0){
//     amigos.push( conhecidos.splice(0, 1)[0] )
// }


let todos = [...amigos, ...conhecidos]

console.log(todos);

