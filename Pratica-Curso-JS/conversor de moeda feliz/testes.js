const teste = {
    nome: 'karen',
    idade: 17,
    peso: 48,
}
const copia = teste
teste.personalidade = 'boa'
 if(teste.personalidade == 'boa'){
     console.log('tudo okay')
 }
console.log(copia)
