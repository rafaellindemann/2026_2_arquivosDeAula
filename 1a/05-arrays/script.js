let nomes = ["Daniel", "Marcos", "Jean", "Felipe", "Astolfo", "Gustavo", "Dona Bete"]

function escreverNomes(){
    for(let i=0; i<nomes.length; i++){
        document.getElementById('listaNomes').innerHTML += '<p>' + nomes[i] + '</p>'        
    }
}

function testar1(){
    // let nomes = 'não tem mais nomes'
    console.log(nomes);
    
}

function testar(){
    
    // let usuario = nomes[1]
    // console.log(usuario);

    for(let i=0; i<6; i++){
        console.log(nomes[i]);
        
    }
    

    
}