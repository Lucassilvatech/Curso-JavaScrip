var lista = []
var res = document.querySelector('#res')
function add(){
    res.innerHTML = ''
    var sel = document.querySelector('#sel')
    var txtnum = document.querySelector('#txtnum')
    if (txtnum.value.length == 0){
        window.alert('[ERRO] É preciso preencher o campo abaixo')
            
    }else{
    var num = Number(txtnum.value)
    var vali = 0
    if (num > 0 && num <=100 ){
        for (var pos in lista){
            if (lista[pos] == num){
                vali++
            }
        }
        if (vali != 0){
            window.alert('[ERRO] Valor invalido ou já adicionado')
        }else{
            lista.push(num) 
            
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado!`
        sel.appendChild(item)
        
    }
}else{
    window.alert('[ERRO] Valor invalido ou já adicionado')
}

}
txtnum.value = ''
txtnum.focus()
}
function verificar(){
    var total = lista.length
    if (total == 0){
        window.alert('Adicione valores para finalizar!')
    }else{
        var soma = 0
        for (pos in lista ){
        soma += lista[pos]
        if (pos == 0){
            var maior = lista[pos]
            var menor = lista[pos]
        }else{
            if (maior < lista[pos]){
                maior = lista[pos]
            }
            if (menor > lista[pos]){
                menor = lista[pos]
            }
        }
        }
        var media = soma / total
        res.innerHTML = `<p>Ao todo temos ${total} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor cadastrado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor cadastrado é o ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media entre os valores cadastrados é de ${media}</p>`
    }
}
