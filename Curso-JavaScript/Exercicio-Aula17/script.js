function calcular(){
    
    var txtnum = window.document.querySelector('input#txtnum')
    var sel = window.document.querySelector('select#lista')
    if (txtnum.value.length == 0){
        window.alert('[ERRO!] É preciso preencher o campo a baixo!')
    }else{
        var num = Number(txtnum.value)
        var cont = 1
        sel.innerHTML = ''
        while (cont <= 10){
            var item = document.createElement('option')
            var mult = num*cont
            item.text = `${num} x ${cont} = ${mult}`
            item.value = `${cont}`
            sel.appendChild(item)
            cont++
           
        }

        
        
    }
    }
    
