//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let ListaNomes = [];

function adicionarAmigo() {
  let amigoAdicionado = document.getElementById("amigo").value;
  
  if (amigoAdicionado == '') {
      alert('Por favor, insira um nome válido no campo "Digite um nome"') }
  else {
    listaNomes.push(amigoAdicionado)}

    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    let i = 0;
    while (i < listaNomes.length) {
    let item = listaNomes[i]
    listaAmigos.innerHTML += `<li>${item}</li>`;
    i++};
    document.getElementById('amigo').value = '';
}

function sortearNomeAleatorio() {
    let indiceAleatorio = Math.floor(Math.random() * listaNomes.length);
    return listaNomes[indiceAleatorio];
}

function sortearAmigo() {
    let nomeSorteado = sortearNomeAleatorio();
    if (nomeSorteado) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        resultado.innerHTML = `<li>O amigo secreto sorteado é: ${nomeSorteado}</li>`;
    }
}
