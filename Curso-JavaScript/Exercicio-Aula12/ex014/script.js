function carregar(){
    var msg = window.document.querySelector('div#msg')
    //var png = window.document.querySelector('div#png')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12){
        msg.innerHTML += '<p>Bom dia</p>'
        document.body.style.background = 'yellow'
    }else if (hora < 18){
        msg.innerHTML += '<p>Boa tarde</p>'
        document.body.style.background = 'blue'
    }else {
        msg.innerHTML += '<p>Boa noite</p>'
        document.body.style.background = 'black'
    }

}

