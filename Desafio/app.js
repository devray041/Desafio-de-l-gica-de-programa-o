//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let ListaNomes[];

function AdicionarAmigo() {
  let amigoAdicionado = document.getElementById("amigo").value;
  
  if (amigoAdicionado == '') {
      alert('Por favor, insira um nome válido no campo "Digite um nome"')};
  else {
    listaNomes.push(amigoAdicionado)};

    let listaAmigos = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    let i = 0;
    while (i < listaNomes.length) {
    let item = listaNomes[i]
    listaAmigos.innerHTML += `<li>${item}</li>`;
    i++};
    document.getElementById('amigo').value = '';
}

