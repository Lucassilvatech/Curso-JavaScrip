let num = [4, 5, 4]
num[3] = 7 // vai criar uma chave 3 e vai add o valor 7
num.push(1) // vai add o valor no final da lista
//num.length // contar quantos objetos tem ne vareavel
num.sort() // vai colocar os elementos da array em ordem cresente
let poss = num.indexOf(5) // vai mostrar se o valor 5 existe ou não dentro da array se tiver retorna a chave se não retorna -1
for(let pos in num){
    console.log(num[pos])
}
