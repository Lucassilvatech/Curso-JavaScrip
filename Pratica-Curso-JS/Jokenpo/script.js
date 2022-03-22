// vareavel no escopo global para não serem resetadas quando a function for chamada novamente
var empate = 0
var derrota = 0
var vitoria = 0
var cont = 0
var dados = document.querySelector('#dados')

function jogar(){

    var comparar = document.querySelector('#com')
    var jog = document.querySelector('#jogador')
    var jogador = jog.value.toLowerCase()

    // verifica se o texto é válido
    if (jogador == 'papel' || jogador == 'pedra' || jogador == 'tesoura'){
        cont++
    var res = document.querySelector('#res')

    //gera um numero aleatorio entre 1 e 3
    var maq = Math.floor(Math.random() * (4 - 1)) + 1;

    // gera uma resposta referente ao numero gerado acima
    if(maq == 1){
        var maquina = 'pedra'

    }else if(maq == 2){
        var maquina = 'papel'

    }else if (maq == 3){
        var maquina ='tesoura'
    }
    comparar.innerHTML = `Eu joguei<strong> ${maquina}</strong> e você jogou<strong> ${jogador}</strong>`
    // verivica se o jogador ganhou, perdeu ou empatou
    if (jogador == 'pedra' && maquina == 'tesoura'){
        res.innerHTML = 'Voçê venceu! Parabéns'
        res.style.background = 'green'
        var contv = 0
        contv++

    }else if (jogador == 'papel' && maquina == 'pedra'){
        res.innerHTML = 'Voçê venceu! Parabéns'
        res.style.background = 'green'
        var contv = 0
        contv++

    }else if (jogador == 'tesoura' && maquina == 'papel'){
        res.innerHTML = 'Voçê venceu! Parabéns'
        res.style.background = 'green'
        var contv = 0
        contv++
        
    }else if (maquina == 'pedra' && jogador == 'tesoura'){
        res.innerHTML = 'Eu te venci! Não fique chateado(a), vamos jogar novamente!'
        res.style.background = 'red'
        var contd = 0
        contd++

    }else if (maquina == 'papel' && jogador == 'pedra'){
        res.innerHTML = 'Eu te venci! Não fique chateado(a), vamos jogar novamente!'
        res.style.background = 'red'
        var contd = 0
        contd++

    }else if ( maquina == 'tesoura' && jogador == 'papel'){
        res.innerHTML = 'Eu te venci! Não fique chateado(a), vamos jogar novamente!'
        res.style.background = 'red'
        var contd = 0
        contd++

    }else{
        res.innerHTML = 'Empatamos! tente novamente'
        res.style.background = 'yellow'
        var cont_em = 0
        cont_em++
        
    }
    // gerencia a contagem de vitorias, derrotas e empates
    if (contv == 1){
        vitoria++
    }else if (contd == 1){
        derrota++
    }else if (cont_em == 1){
        empate++
    }
    dados.innerHTML = `Partidas: ${cont} Empates: ${empate} Vitorias: ${vitoria} Derrotas: ${derrota} `
    jog.value = ''
    jog.focus()

    // se o texto não for válido
}else{
    window.alert('[ERRO!] Dados invalidos ou incompletos.')
    jog.value = ''
    jog.focus()
}
}
