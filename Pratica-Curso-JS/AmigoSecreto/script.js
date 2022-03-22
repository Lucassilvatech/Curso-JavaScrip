let resposta = window.document.querySelector('#res')
let nomes = window.document.querySelector('#inputNome')
let listaDeNomes = []
let sec = window.document.querySelector('#sec')
function adicionarNomes(){
    if (nomes.value.length == 0){
        window.alert('[ERRO!] Verifique as informações')
        nomes.value = ''
        nomes.focus()
       
    }else {
        listaDeNomes.push(nomes.value)
        nomes.value = ''
        nomes.focus()
        resposta.innerHTML = `${listaDeNomes}`
    }
}
    // Função copida!
    // Função para randomizar array
    function shuffleArray(arr) {
            // Loop em todos os elementos
        for (let i = arr.length - 1; i > 0; i--) {
                // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
            // Reposicionando elemento
            [arr[i], arr[j]] = [arr[j], arr[i]];
        // Retornando array com aleatoriedade
        return arr;
    }
}

let confirmar_ipt = window.document.querySelector('#comf')
let adicionar = window.document.querySelector('#add')
const acumulador = []
const pairParticipant = []
function confirmar(){

    if (listaDeNomes.length < 3) {
        window.alert('[ERRO!] Digite no minimo 3 nomes!')
        nomes.value = ''
        nomes.focus()

    }else{
        nomes.disabled = true
        //adicionar.disabled = true
        confirmar_ipt.disabled = true
        adicionar.disabled = true
        

    // Cria uma copia da array listaDeNomes
    const copiaLista = listaDeNomes.slice()
    //  Embaralhadas listas/arrays
    let copiaList = shuffleArray(copiaLista)
    let listaDeNames = shuffleArray(listaDeNomes)
    console.log(listaDeNames[0])
    let cont = 0
    while(true){
        
        let lenParticipantes = listaDeNames.length
        const key = Math.floor(Math.random() * lenParticipantes)
        console.log(key)
        if (lenParticipantes == 2){
        console.log('certo_1')

            if ( copiaList[0] == listaDeNames[0] || copiaList[1] == listaDeNames[1]  ){
                console.log('certo_2')
                acumulador.push(copiaList[0])
                acumulador.push(listaDeNames[1])
                pairParticipant.push([...acumulador])
                acumulador.splice('start')
                copiaList.splice(0, 1)
                listaDeNames.splice(1, 1)

            }else if (copiaList[1] == listaDeNames[0] || copiaList[0] == listaDeNames[1]){
                console.log('certo_3')
                acumulador.push(copiaList[0])
                acumulador.push(listaDeNames[0])
                pairParticipant.push([...acumulador])
                acumulador.splice('start')
                copiaList.splice(0, 1)
                listaDeNames.splice(0, 1) 
            }else {
                console.log('certo_4')
                acumulador.push(copiaList[key])
                acumulador.push(listaDeNames[key])
                pairParticipant.push([...acumulador]) 
                acumulador.splice('start')
                copiaList.splice(key, 1)
                listaDeNames.splice(key, 1)
            }
                
        }else if (copiaList[key] != listaDeNames[key]){
            console.log('certo_5')
            acumulador.push(copiaList[key])
            acumulador.push(listaDeNames[key])
            pairParticipant.push([...acumulador])
            // splice() para deletar o conteudo da array
            acumulador.splice('start')
            copiaList.splice(key, 1)
            listaDeNames.splice(key, 1)

        }else{
            console.log('certo_6')
            acumulador.push(copiaList[key-1])
            acumulador.push(listaDeNames[key])
            pairParticipant.push([...acumulador])
            acumulador.splice('start')
            copiaList.splice(key-1, 1)
            listaDeNames.splice(key, 1)
        }



        cont++
        if(cont >=50){
            break
        }
        console.log(`${copiaList} | ${listaDeNames} | ${pairParticipant} | `)
        //resposta.innerHTML = `${pairParticipant}`
        if (lenParticipantes-1 == 0){
            prepararDocumento(pairParticipant)
                break
        }
    }
} 

} 

function prepararDocumento(){

    const botaoSaberNome = document.createElement('button')
    botaoSaberNome.textContent = 'confirmar'
    const fixo = document.querySelector('#fixo')
    let resultado = document.createElement('input')
    resultado.setAttribute('type', 'text')
    resultado.setAttribute('id', 'resultado')
    
    resposta.innerHTML = 'Digite seu nome para saber quem você tirou:'

    fixo.appendChild(resultado)
    fixo.appendChild(botaoSaberNome)
    botaoSaberNome.addEventListener('click', exibirResultado)
    
}
let cont = 0
let apagar = ''
function exibirResultado(){
  
    
    let final = window.document.createElement('div')
    final.setAttribute('id', 'finaly')
    for (let chave of pairParticipant){
        
        if (chave[0] == resultado.value){
            console.log(pairParticipant)
            final.innerHTML = `Você tirou ${chave[1]}` 
            sec.appendChild(final)
           
            apagar = document.createElement('button')
            apagar.setAttribute('id', 'apagar')
            apagar.textContent = 'Limpar dados'
            sec.appendChild(apagar)
            apagar.addEventListener('click', limpardados)
        } 
    }

}
function limpardados(){
    resultado.value = ''
    resultado.focus()
    finaly.innerHTML = ''
    document.remove('apagar')

}

// arrumar bug de looping e exibir resultado

    