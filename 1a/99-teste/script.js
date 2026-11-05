

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

function adicionarAoCarrinho(id) {
  alert(id)
  // encontrar o produto que tem esse id
  // adicionar esse produto ao array carrinho
  // salvar
}


function gerarCatalogo(){

    for(let i=0; i<estoqueCelulares.length; i++){
        document.getElementById('catalogo').innerHTML += `
        <!-- From Uiverse.io by SachinKumar666 --> 
        <div class="card">
          <div class="card__shine"></div>
          <div class="card__glow"></div>
          <div class="card__content">
            <div class="card__badge">NEW</div>
            <div style="--bg-color: #a78bfa" class="card__image"></div>
            <div class="card__text">
              <p class="card__title">Premium Design</p>
              <p class="card__description">Hover to reveal stunning effects</p>
            </div>
            <div class="card__footer">
              <div class="card__price">$49.99</div>
              <div class="card__button">
                <svg height="16" width="16" viewBox="0 0 24 24">
                  <path
                    stroke-width="2"
                    stroke="currentColor"
                    d="M4 12H20M12 4V20"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        `
    }
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


function gerarCatalogo() {

  for (let i = 0; i < estoqueCelulares.length; i++) {
    document.getElementById('catalogo').innerHTML += `
            <div class='card-produto'>
                <img class='imagem-card' src='${estoqueCelulares[i].imagem}' />
                <p class='nome-card'>${estoqueCelulares[i].nome}</p>
                <p>${estoqueCelulares[i].marca}</p>
                <p>${estoqueCelulares[i].preco.toFixed(2).replace('.', ',')}</p>
                
                <!-- From Uiverse.io by chase2k25 --> 
              <button class="wooden-cart-button">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 21.42 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                  ></path>
                </svg>
                <span class="button-text">Add to cart</span>
              </button>

            </div>
        `
  }
}


// function gerarCatalogo() {

//   for (let i = 0; i < estoqueCelulares.length; i++) {
//     document.getElementById('catalogo').innerHTML += `
//             <div class='card-produto'>
//                 <img class='imagem-card' src='${estoqueCelulares[i].imagem}' />
//                 <p class='nome-card'>${estoqueCelulares[i].nome}</p>
//                 <p>${estoqueCelulares[i].marca}</p>
//                 <p>${estoqueCelulares[i].preco.toFixed(2).replace('.', ',')}</p>

//                 <!-- From Uiverse.io by Pankaj-Meharchandani --> 
//                 <button class="button">
//                   <div class="wrap">
//                     <div class="state state--default">
//                       <div class="icon-cart">
//                         <svg
//                           stroke-linejoin="round"
//                           stroke-linecap="round"
//                           stroke-width="2"
//                           stroke="currentColor"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           height="1em"
//                           width="1em"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <circle r="1" cy="21" cx="8"></circle>
//                           <circle r="1" cy="21" cx="19"></circle>
//                           <path
//                             d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div class="icon">
//                         <svg
//                           stroke-linejoin="round"
//                           stroke-linecap="round"
//                           stroke-width="2"
//                           stroke="currentColor"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           height="1em"
//                           width="1em"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M5 12h14"></path>
//                           <path d="M12 5v14"></path>
//                         </svg>
//                       </div>
//                       <p>
//                         <span style="--i: 0">A</span>
//                         <span style="--i: 1">d</span>
//                         <span style="--i: 2">d</span>
//                         <span style="--i: 3">t</span>
//                         <span style="--i: 4">o</span>
//                         <span style="--i: 5">c</span>
//                         <span style="--i: 6">a</span>
//                         <span style="--i: 7">r</span>
//                         <span style="--i: 8">t</span>
//                       </p>
//                     </div>
//                     <div class="state state--added">
//                       <div class="icon">
//                         <svg
//                           stroke-linejoin="round"
//                           stroke-linecap="round"
//                           stroke-width="2"
//                           stroke="currentColor"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           height="1em"
//                           width="1em"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M20 6 9 17l-5-5"></path>
//                         </svg>
//                       </div>
//                       <p>
//                         <span style="--i: 5">A</span>
//                         <span style="--i: 6">d</span>
//                         <span style="--i: 7">d</span>
//                         <span style="--i: 8">e</span>
//                         <span style="--i: 9">d</span>
//                       </p>
//                     </div>
//                   </div>
//                   <div class="bg"></div>
//                   <div class="bg-spin"></div>
//                   <div class="bg-gradient"></div>
//                 </button>


//             </div>
//         `
//   }
// }


gerarCatalogo()