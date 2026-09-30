
let clientes = []

function cadastrarCliente(){
    clientes = JSON.parse(localStorage.getItem('clientes')) || []
    let cliente = {
        nome: document.getElementById('inp-nome').value,
        senha: document.getElementById('inp-senha').value,
        cpf: document.getElementById('inp-cpf').value,
        // data: document.getElementById('inp-data').value,
        data: new Date(document.getElementById('inp-data').value),
        codigo: Date.now()
    }
    console.log(cliente);

    clientes.push(cliente)
    localStorage.setItem('clientes', JSON.stringify(clientes))
    console.log(clientes);
    
    
}