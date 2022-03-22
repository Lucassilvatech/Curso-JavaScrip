function carregar(){
    var msg = window.document.querySelector('div#msg')
    var png = window.document.querySelector('img#foto')
    var data = new Date()
    var hora = data.getHours()
   // var hora = 5

     
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12){
        png.src ='manha.jpg'
        msg.innerHTML += '<p>Bom dia</p>'
        
        document.body.style.background = '#f2c96d'
    }else if (hora < 18){
        png.src = 'tarde.jpg'
        msg.innerHTML += '<p>Boa tarde</p>'
        
        document.body.style.background = '#fd9a25'
    }else {
        png.src = 'noite.jpg'
        msg.innerHTML += '<p>Boa noite</p>'
        
        document.body.style.background = '#464544'
    }

}

