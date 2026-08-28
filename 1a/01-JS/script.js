// alert("Eu sou o script no arquivo .js")

////////////////////////////////////////////
// problema exemplo: ler duas notas e calcular a média

// infos e variáveis
// let nota1, nota2
// let media
// // ler dados
// nota1 = prompt('Digite a primeira nota:') // lido e armazenado como texto
// nota1 = Number(nota1)  // converte texto para número

// nota2 = Number(prompt('Digite a segunda nota:')) // lê, converte para número e armazena
// // processar
// media = (nota1 + nota2) / 2
// // saída
// alert("Média: " + media)


/*

// real nota1 = 2.1
float nota1 = 2.1
int contagem = 1
string nome = "Umberto"
*/

// {#0011}
// - {⚽} Peba e o campeonato de futebol
    
//     Peba está organizando um campeonato de futebol e solicitou um programa que leia o 
// - número de vitórias e 
// - empates de um time  
// - e calcule quantos pontos ele tem. 
// Obs: cada vitória vale 3 pontos e o empate vale um ponto.

function calcularPontos(){
    let vitorias, empates
    let pontos
    
    // entada de dados
    vitorias = Number(prompt("Digite o número de vitórias: "))
    empates = Number(prompt("Digite o número de empates: "))
    
    // processamento
    pontos = vitorias*3 + empates
    
    // saída
    alert('Pontos do seu time: ' + pontos)
}




function demonstrar(){
    let numero = Number(prompt("Digite um número que eu vou adivinhar qual é: "))

    alert("Eu falei que ia adivinhar, seu número é: " + numero)
}

// function criarFuncao