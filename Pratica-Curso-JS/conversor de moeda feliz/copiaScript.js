
const $converter = document.querySelector('#conteiner')

const valorMoeda ={
    'valor_1': 0,
    'valor_2': 0,
}
const moedas ={
    'seletor_1': 'real',
    'seletor_2': 'yene',
}
$converter.addEventListener("input", (event) => {
     const $origin = event.target

     const id = $origin.getAttribute('id')
    //  console.log(id)


     valorMoeda[id] = Number($origin.value)

    moedas[id] = $origin.value


     let resposta = document.querySelector('#teste')


     let valor1 = document.querySelector('#valor_1')
     let valor2 = document.querySelector('#valor_2')
     const realEmYene = $origin.value*23.11
     const euroEmYene = $origin.value*127.98
     const euroEmReal = $origin.value*5.54
     const realEmEuro = $origin.value*0.18
     const yeneEmEuro = $origin.value*0.0078
     const yeneEmReal = $origin.value*0.043

    if(id == 'valor_1'){
        if(moedas.seletor_1 == 'real'&& moedas.seletor_2 == 'yene'){
            valor2.value = realEmYene.toFixed(2)
            resposta.innerHTML = `${ valorMoeda.valor_1} R$ em yene é ${realEmYene} &yen;`
        }else if (moedas.seletor_1 == 'euro' && moedas.seletor_2 == 'yene'){
            valor2.value = euroEmYene.toFixed(2)
            resposta.innerHTML = `${ valorMoeda.valor_1} &euro; em yene é ${euroEmYene} &yen;`
        }else if (moedas.seletor_1 == 'euro' && moedas.seletor_2 == 'real'){
            valor2.value = euroEmReal.toFixed(2)
            resposta.innerHTML = `${ valorMoeda.valor_1} &euro; em real é ${euroEmReal} R$`
        }else if (moedas.seletor_1 == 'real' && moedas.seletor_2 == 'euro'){
            valor2.value = realEmEuro.toFixed(2)
            resposta.innerHTML = `${ valorMoeda.valor_1} R$ em euro é ${realEmEuro} &euro;`
        }else if (moedas.seletor_1 == 'yene' && moedas.seletor_2 == 'euro'){
            valor2.value = yeneEmEuro.toFixed(4)
            resposta.innerHTML = `${ valorMoeda.valor_1} &yen; em euro é ${yeneEmEuro} &euro;`
        }else if (moedas.seletor_1 == 'yene' && moedas.seletor_2 == 'real'){
            valor2.value = yeneEmReal.toFixed(3)
            resposta.innerHTML = `${ valorMoeda.valor_1} &yen; em real é ${yeneEmReal} R$`
        }

    }else if(id == 'valor_2'){
        if(moedas.seletor_2 == 'real'&& moedas.seletor_1 == 'yene'){
            valor1.value = realEmYene.toFixed(2)
            resposta.innerHTML = `${ valorMoeda.valor_2} R$ em yene é ${realEmYene} &yen;`
        }else if (moedas.seletor_2 == 'euro' && moedas.seletor_1 == 'yene'){
            valor1.value = euroEmYene.toFixed(2)
            resposta.innerHTML = `${ valorMoeda.valor_2} &euro; em yene é ${euroEmYene} &yen;`
        }else if (moedas.seletor_2 == 'euro' && moedas.seletor_1 == 'real'){
            valor1.value = euroEmReal.toFixed(2)
            resposta.innerHTML = `${ valorMoeda.valor_2} &euro; em real é ${euroEmReal} R$`
        }else if (moedas.seletor_2 == 'real' && moedas.seletor_1 == 'euro'){
            valor1.value = realEmEuro.toFixed(2)
            resposta.innerHTML = `${ valorMoeda.valor_2} R$ em euro é ${realEmEuro} &euro;`
        }else if (moedas.seletor_2 == 'yene' && moedas.seletor_1== 'euro'){
            valor1.value = yeneEmEuro.toFixed(4)
            resposta.innerHTML = `${ valorMoeda.valor_2} &yen; em euro é ${yeneEmEuro} &euro;`
        }else if (moedas.seletor_2 == 'yene' && moedas.seletor_1 == 'real'){
            valor1.value = yeneEmReal.toFixed(3)
            resposta.innerHTML = `${ valorMoeda.valor_2} &yen; em real é ${yeneEmReal} R$`
        }
        
    }     
  
    const sec1 = document.querySelector('#seletor_1')
    const sec2 = document.querySelector('#seletor_2')
    if(id == 'seletor_1' || id == 'seletor_2'){
        if(moedas.seletor_1 === moedas.seletor_2){
            
            if(id === 'seletor_1'&& moedas.seletor_1 == 'real' || moedas.seletor_1 == 'yene'){
                moedas.seletor_2 = 'euro'
                sec2.value = 'euro'
            }else if(id === 'seletor_1'&& moedas.seletor_1 == 'euro'){
                moedas.seletor_2 = 'yene'
                sec2.value = 'yene'
            }else if(id === 'seletor_2'&& moedas.seletor_2 == 'euro' || moedas.seletor_2 == 'yene'){
                moedas.seletor_1 = 'real'
                sec1.value = 'real'
            }else if(id === 'seletor_2'&& moedas.seletor_2 == 'real'){
                moedas.seletor_1 = 'yene'
                sec1.value = 'yene'
            }
                
            
        }

   
   
    }
})
    


