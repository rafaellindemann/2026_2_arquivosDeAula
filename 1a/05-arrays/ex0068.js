// exercícios do doc {#0068}

function executar_68_1_2() {
  const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
  personagens.unshift("Dona Bete");

  console.log(personagens);
}
function executar_68_1_1() {
  const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
  personagens.push("Gill Bates");

  console.log(personagens);
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

function mostrarArray(a) {
  document.getElementById("resultado").innerHTML = "";
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    document.getElementById("resultado").innerHTML += `<p>${a[i]}</p>`;
  }
}

// `<p>Nominho</p>`;

// "<p>" + a[i] + "</p>"

// `<p>${a[i]}</p>`

// "Seu time conquistou " + pontos + " pontos"
// "Seu time conquistou 10 pontos"
// `Seu time conquistou ${pontos} pontos`
