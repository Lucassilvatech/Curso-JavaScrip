function verificar(){
    var atano = new Date()
    var anoat = atano.getFullYear()
    var anotx = window.document.querySelector('input#txtano')
    var ano = Number(anotx.value)
    
    if (anotx.value.length == 0 || anotx.value > anoat){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sexx = window.document.getElementsByName('sex')
        var gen = ""
        if (sexx[0].checked){
            gen = 'Homem'
        }else if (sexx[1].checked){
            gen = 'Mulher'
        }
        var idade = anoat - ano
        //var mas = window.document.querySelector('input#masc') 
        //var fem = window.document.querySelector('input#femi')
        var resu = window.document.querySelector('div#res')
        var imagem = window.document.querySelector('img#img')
        
        if (idade < 12 &&  gen == 'Homem'){
            resu.innerHTML = `Detectamos um(a) ${gen}  com ${idade} anos` 
            imagem.src = 'menino.jpg'
        }else if (idade < 12 && gen == 'Mulher'){
            resu.innerHTML = `Detectamos um(a) ${gen}  com ${idade} anos`
            imagem.src = 'menina.jpg'
        }else if (idade < 30 && gen == 'Homem'){
            resu.innerHTML = `Detectamos um(a) ${gen}  com ${idade} anos`
            imagem.src = 'garoto.jpg'
        }else if ( idade < 30 && gen == 'Mulher'){
            resu.innerHTML = `Detectamos um(a) ${gen}  com ${idade} anos`
            imagem.src = 'girl.jpg'
        }else if ( idade < 60 && gen == 'Homem'){
            resu.innerHTML = `Detectamos um(a) ${gen}  com ${idade} anos`
            imagem.src = 'adulto.jpg'
        }else if ( idade < 60 && gen == 'Mulher'){
            resu.innerHTML = `Detectamos um(a) ${gen}  com ${idade} anos`
            imagem.src = 'adulta.jpg'
        }else if ( idade > 60 && gen == 'Homem'){
            resu.innerHTML = `Detectamos um(a) ${gen}  com ${idade} anos`
            imagem.src = 'senhor_cachaceiro.jpg'
        }else if (idade > 60 && gen == 'Mulher'){
            resu.innerHTML = `Detectamos um(a) ${gen}  com ${idade} anos`
            imagem.src = 'senhora.jpg '
        }
    }

   


}