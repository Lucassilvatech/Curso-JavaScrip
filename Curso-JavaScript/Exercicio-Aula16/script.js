function verificar() {
    var txtini = document.getElementById('txtini')
    var txtfim = document.getElementById('txtfim')
    var txtpas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0){
        res.innerHTML = 'Impossivel contar. Lembre-se de preencher todos os campos!'
    }else{
     var inicio = Number(txtini.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpas.value)
    if (passo == 0){
        window.alert('Passo invàlido considerando PASSO 1')
        passo = 1
    }
    if (inicio > fim){
        while(inicio >= fim){
        res.innerHTML += `${inicio}`
        inicio -= passo
        if(inicio >= fim)
        res.innerHTML += `\u{1f449}`
        }
    }else{
        while(inicio <= fim){
        res.innerHTML += `${inicio}`
        inicio += passo
        if(inicio <= fim)
        res.innerHTML += `\u{1f449}` 
    }
}
    res.innerHTML += `\u{1f3c1}` 
}

}