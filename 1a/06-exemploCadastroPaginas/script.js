let servicos = [];

function cadastrarServico() {
  servicos = JSON.parse(localStorage.getItem("servicos")) || [];

  let novoServico = {
    nome: document.getElementById("nome").value,
    valor: Number(document.getElementById("valor").value),
    imagem: document.getElementById("inputImagem").files[0].name,
  };

  servicos.push(novoServico);

  localStorage.setItem("servicos", JSON.stringify(servicos));

  console.log(servicos);
}
