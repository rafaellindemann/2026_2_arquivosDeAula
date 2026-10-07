let servicos = JSON.parse(localStorage.getItem("servicos")) || [];

console.log(servicos);

document.getElementById("listaServicos").innerHTML = "";
for (let i = 0; i < servicos.length; i++) {
  document.getElementById("listaServicos").innerHTML += `
    <div class='card-produto'>
        <img src="${servicos[i].imagem}" alt="">
        <p>${servicos[i].nome}</p>
        <p>${servicos[i].valor}</p>
    </div>
    `;
}
