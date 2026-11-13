
const movimentacoes = [
  { id: 1, descricao: "Venda de produto", valor: 350, tipo: "entrada", categoria: "Vendas", data: "2026-09-02" },
  { id: 2, descricao: "Pagamento de aluguel", valor: 1800, tipo: "saida", categoria: "Infraestrutura", data: "2026-09-05" },
  { id: 3, descricao: "Serviço de manutenção", valor: 650, tipo: "entrada", categoria: "Serviços", data: "2026-09-08" },
  { id: 4, descricao: "Conta de energia", valor: 280, tipo: "saida", categoria: "Contas", data: "2026-09-10" },
  { id: 5, descricao: "Venda de produtos", valor: 920, tipo: "entrada", categoria: "Vendas", data: "2026-09-12" },
  { id: 6, descricao: "Compra de materiais", valor: 430, tipo: "saida", categoria: "Fornecedores", data: "2026-09-15" },
  { id: 7, descricao: "Consultoria técnica", valor: 1200, tipo: "entrada", categoria: "Serviços", data: "2026-09-18" },
  { id: 8, descricao: "Internet empresarial", valor: 150, tipo: "saida", categoria: "Contas", data: "2026-09-20" },
  { id: 9, descricao: "Venda de produtos", valor: 780, tipo: "entrada", categoria: "Vendas", data: "2026-09-24" },
  { id: 10, descricao: "Campanha de anúncios", valor: 300, tipo: "saida", categoria: "Marketing", data: "2026-09-28" },

  { id: 11, descricao: "Venda de produtos", valor: 1450, tipo: "entrada", categoria: "Vendas", data: "2026-10-01" },
  { id: 12, descricao: "Pagamento de aluguel", valor: 1800, tipo: "saida", categoria: "Infraestrutura", data: "2026-10-05" },
  { id: 13, descricao: "Desenvolvimento de site", valor: 2400, tipo: "entrada", categoria: "Serviços", data: "2026-10-07" },
  { id: 14, descricao: "Conta de energia", valor: 310, tipo: "saida", categoria: "Contas", data: "2026-10-10" },
  { id: 15, descricao: "Venda de produtos", valor: 680, tipo: "entrada", categoria: "Vendas", data: "2026-10-12" },
  { id: 16, descricao: "Compra de equipamentos", valor: 1250, tipo: "saida", categoria: "Equipamentos", data: "2026-10-14" },
  { id: 17, descricao: "Consultoria técnica", valor: 950, tipo: "entrada", categoria: "Serviços", data: "2026-10-17" },
  { id: 18, descricao: "Internet empresarial", valor: 150, tipo: "saida", categoria: "Contas", data: "2026-10-20" },
  { id: 19, descricao: "Venda de produtos", valor: 1120, tipo: "entrada", categoria: "Vendas", data: "2026-10-24" },
  { id: 20, descricao: "Campanha de anúncios", valor: 450, tipo: "saida", categoria: "Marketing", data: "2026-10-28" },

  { id: 21, descricao: "Venda de produtos", valor: 1750, tipo: "entrada", categoria: "Vendas", data: "2026-11-01" },
  { id: 22, descricao: "Pagamento de aluguel", valor: 1800, tipo: "saida", categoria: "Infraestrutura", data: "2026-11-03" },
  { id: 23, descricao: "Desenvolvimento de sistema", valor: 3200, tipo: "entrada", categoria: "Serviços", data: "2026-11-04" },
  { id: 24, descricao: "Conta de energia", valor: 295, tipo: "saida", categoria: "Contas", data: "2026-11-05" },
  { id: 25, descricao: "Venda de produtos", valor: 890, tipo: "entrada", categoria: "Vendas", data: "2026-11-06" },
  { id: 26, descricao: "Compra de materiais", valor: 570, tipo: "saida", categoria: "Fornecedores", data: "2026-11-07" },
  { id: 27, descricao: "Consultoria técnica", valor: 1350, tipo: "entrada", categoria: "Serviços", data: "2026-11-08" },
  { id: 28, descricao: "Internet empresarial", valor: 150, tipo: "saida", categoria: "Contas", data: "2026-11-09" },
  { id: 29, descricao: "Venda de produtos", valor: 1250, tipo: "entrada", categoria: "Vendas", data: "2026-11-09" },
  { id: 30, descricao: "Campanha de anúncios", valor: 380, tipo: "saida", categoria: "Marketing", data: "2026-11-10" }
];

let filtrados = movimentacoes
let painel = document.getElementById('painel')



function calcularTotalEntradas(){
    let totalEntradas = movimentacoes
    .filter((m) => m.tipo == 'entrada')
    .reduce((total, mov) => total + mov.valor, 0);
    
    painel.innerHTML = `Total de entradas: R$${totalEntradas}`
}

function mostrarEntradas(){
    filtrados = movimentacoes.filter((m) => m.tipo == "entrada")
    mostrarArray(filtrados)
}

function mostrarTudo(){
    filtrados = movimentacoes

    mostrarArray(filtrados)
}



function mostrarArray(a){
    painel.innerHTML = ''

    for(let i=0; i<a.length; i++){
        painel.innerHTML += `
            <div class="card">
                <h3>${a[i].descricao}</h3>
                <p>Valor: R$${a[i].valor}</p>
                <p>Tipo: ${a[i].tipo}</p>
                <p>Categoria: ${a[i].categoria}</p>
                <p>Data: ${a[i].data}</p>
            </div>
        `
    }
}