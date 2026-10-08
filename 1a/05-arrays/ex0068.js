// exercícios do doc {#0068}

function executar_68_1_2() {
  const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
  personagens.unshift("Dona Bete");

  //   console.log(personagens);
  mostrarArray(personagens);
}
function executar_68_1_1() {
  const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
  personagens.push("Gill Bates");

  //   console.log(personagens);
  mostrarArray(personagens);
}

const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
function testar() {
  personagens.push(personagens.shift());
  console.log(personagens);

  //   let removido = personagens.pop();
  //   alert(removido + " foi removido com sucesso");

  //   console.log("Removido: ", removido);
}

function testar2(){
  let n = Math.floor(Math.random() * 201) - 100


  console.log(n);
  
}

function testarArredondamentos(){
  let c = [0,0,0,0,0]                   
  let f = [0,0,0,0,0]                   
  let r = [0,0,0,0,0]                   

  for(let i=0; i<10000; i++){
    let n = Math.random()*4

    c[Math.ceil(n)]++
    f[Math.floor(n)]++
    r[Math.round(n)]++
  }
  console.log('ceil', c);
  console.log('floor', f);
  console.log('round', r);
  

// ceil (5)   [0, 2468, 2430, 2532, 2570]
// floor (5)  [2468, 2430, 2532, 2570, 0]
// round (5)  [1228, 2446, 2485, 2562, 1279]

}


function mostrarArray(a) {
  document.getElementById("resultado").innerHTML = "";

  for (let i = 0; i < a.length; i++) {
    document.getElementById("resultado").innerHTML += `<p>${a[i]}</p>`;
  }
}

// `<p>Nominho</p>`;

// "<p>" + a[i] + "</p>"

// `<p>${a[i]}</p>`

// "Seu time conquistou " + pontos + " pontos"
// "Seu time conquistou 10 pontos"
// `Seu time conquistou ${pontos} pontos`
