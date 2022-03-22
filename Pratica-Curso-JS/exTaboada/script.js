function calcular(){
    var txtnum = document.querySelector('input#txtnum')
    var select = document.querySelector('select#lista')
    if (txtnum.value.length == 0){
        window.alert('[ERRO!] E preciso preencher o campo a baixo')
    }else{
        var num = Number(txtnum.value)
        var cont = 1
        select.innerHTML = ''
        while (cont <=  10){
            var item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            select.appendChild(item)
            cont++
        }

    }
}