const alunos = ['Daniel', 'Jean', 'Felipe']

function sortearComRepeticao(){

let aluno = alunos[Math.floor(Math.random()*alunos.length)]

console.log(aluno);
}

function sortearSemRepeticao(){

let aluno = alunos[Math.floor(Math.random()*alunos.length)]

console.log(aluno);
alunos.splice(alunos.indexOf(aluno), 1)
}