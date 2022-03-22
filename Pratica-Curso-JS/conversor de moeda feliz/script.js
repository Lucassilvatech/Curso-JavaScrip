
const $converter = document.querySelector('#sec_1')
let id = ''
const moedas ={
    'valor_1': 0,
    'valor_2': 0,
}
$converter.addEventListener("input", (event) => {
     const $origin = event.target

     id = $origin.getAttribute('id')

    //console.log(id)

    let valorEmDolar = $origin.value*5.01
    let valorEmReal = $origin.value*0.20

    let teste = document.querySelector('#teste')

    //teste.innerHTML = `O valor em U$ é ${valorEmDolar.toFixed(2)} | ${moedas[id] =$origin.value} | ${$origin.getAttribute('id')}`

     let valor1 = document.querySelector('#valor_1')
     let valor2 = document.querySelector('#valor_2')
    

    if(id =='valor_1'){
        // document.body.style.backgroundColor = 'white'
        // document.body.style.color = 'black'

        valor2.value = valorEmReal.toFixed(2)
        
    }else{

        valor1.value = valorEmDolar.toFixed(2)
        // document.body.style.backgroundColor = 'black'
        // document.body.style.color = 'white'  
        
        }

})

const $mudanca = document.querySelector('#sec_2')

$mudanca.addEventListener('input', (event) =>{
    const origem = event.target

    console.log('.')
    
    const idd = origem.getAttribute('id')
    const moedaReal = document.querySelector('#selecao_1')
    const moedaYen = document.querySelector('#selecao_2')
    console.log(id)
    if(idd == 'selecao_1' || idd == 'selecao_2'){
        if(moedaReal.value === moedaYen.value){
            
            if(idd === 'selecao_1'&& moedaReal.value == 'real' ||moedaReal.value == 'yene'){
                moedaYen.value = 'euro'

            }else if(idd === 'selecao_1'&& moedaReal.value == 'euro'){
                moedaYen.value = 'yene'

            }else if(idd === 'selecao_2'&& moedaYen.value == 'euro' || moedaYen.value == 'yene'){
                moedaReal.value = 'real'

            }else if(idd === 'selecao_2'&& moedaYen.value == 'real'){
                moedaReal.value = 'yene'
            }
                
            
    }

   
   
    }
    
    // const realEmYene = $origin.value*23.11

    //  const realEmEuro = k

    //  const yeneEmReal = $origin.value*0.043

    //  const yeneEmEuro =l

    //  const euroEmReal =l

    //  const euroEmYene =k
    
})

// pegar ids , fazer laços para ca id se o id dea seção 1 for iqual a seção 2 apartir da origem alterar o select diferente da origem
