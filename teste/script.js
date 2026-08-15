
let usuario = {
    nome: 'rafa',
    senha: '1234'
}

document.getElementById('nome0').value = usuario.nome
document.getElementById('senha0').value = usuario.senha

function editar(id){
    let inputNome = document.getElementById('nome'+id)
    let inputSenha = document.getElementById('senha'+id)

    console.log('card'+id);
    inputNome.disabled = false    
    inputSenha.disabled = false    
    
    inputNome.value = usuario.nome
    inputSenha.value = usuario.senha
    
    
}
function salvar(id){
    let inputNome = document.getElementById('nome'+id)
    let inputSenha = document.getElementById('senha'+id)
    
    usuario.nome = inputNome.value
    usuario.senha = inputSenha.value
    
    inputNome.value = ''
    inputSenha.value = ''
    
    inputNome.disabled = true  
    inputSenha.disabled = true    
    
}