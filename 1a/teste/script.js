

const estoqueCelulares = [
  {
    id: 1,
    nome: "Galaxy S24 Ultra",
    marca: "Samsung",
    preco: 6999.00,
    imagem: 'celular.png'
  },
  {
    id: 2,
    nome: "iPhone 15 Pro Max",
    marca: "Apple",
    preco: 8499.00,
    imagem: 'celular.png'
  },
  {
    id: 3,
    nome: "Redmi Note 13 Pro",
    marca: "Xiaomi",
    preco: 2199.90,
    imagem: 'celular.png'
  },
  {
    id: 4,
    nome: "Edge 50 Ultra",
    marca: "Motorola",
    preco: 4999.00,
    imagem: 'celular.png'
  },
  {
    id: 5,
    nome: "POCO X6 Pro",
    marca: "Xiaomi",
    preco: 2599.00,
    imagem: 'celular.png'
  }
];

function adicionarAoCarrinho(id){
    alert(id)
    // encontrar o produto que tem esse id
    // adicionar esse produto ao array carrinho
    // salvar
}

function gerarCatalogo(){
    
    for(let i=0; i<estoqueCelulares.length; i++){
        document.getElementById('catalogo').innerHTML += `
            <div class='card-produto'>
                <img class='imagem-card' src='${estoqueCelulares[i].imagem}' />
                <p class='nome-card'>${estoqueCelulares[i].nome}</p>
                <p>${estoqueCelulares[i].marca}</p>
                <p>${estoqueCelulares[i].preco.toFixed(2).replace('.', ',')}</p>
                <button onclick='adicionarAoCarrinho(${estoqueCelulares[i].id})'>🛒</button>
            </div>
        `
    }
}


gerarCatalogo()