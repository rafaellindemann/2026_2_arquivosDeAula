let alunos = ['Daniel', 'Jean', 'Felipe']

function sortearComRepeticao(){

let aluno = alunos[Math.floor(Math.random()*alunos.length)]

console.log(aluno);
}

function sortearSemRepeticao(){
    if(alunos.length == 0){
        document.getElementById("aluno").innerHTML = "Já foi todo mundo!"
        return
    }

let aluno = alunos[Math.floor(Math.random()*alunos.length)]

console.log(aluno);
document.getElementById("aluno").innerHTML = aluno
alunos.splice(alunos.indexOf(aluno), 1)
}

// if(){
    
// }

// if(){

// }else{

// }

