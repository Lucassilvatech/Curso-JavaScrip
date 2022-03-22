const Karen = {
    nome:'Karen', Partidas:0, Derrotas:0, Vitorias:0, Empates:0
}
const Lucia = {
    nome:'Lucia', Partidas:0, Derrotas:0, Vitorias:0, Empates:0
}
const Bianka = {
    nome:'Bianka', Partidas:0, Derrotas:0, Vitorias:0, Empates:0
}
const Jogadores =[Karen, Lucia, Bianka]

function exibirResultado(Jogadores){
    console.log('Okay')
    let tabela = ''
    for (let i = 0; i < Jogadores.length; i++){
        tabela +=`<tr>
        <td>${Jogadores[i].nome}</td>`
       tabela += `<td>${Jogadores[i].Partidas}</td>`
       tabela += `<td>${Jogadores[i].Derrotas}</td> `
       tabela += `<td>${Jogadores[i].Vitorias}</td>`
      tabela += `<td>${Jogadores[i].Empates}</td>
    </tr>` 
    }
    let resultado = document.querySelector('#chamar')
    resultado.innerHTML = tabela
}
exibirResultado(Jogadores)


