var agora = new Date()
var hora = agora.getHours()
console.log(`agora são extamente ${hora}`)
if (hora < 4){
    console.log('boa madrugada!')
}else if ( hora < 18){
    console.log('Boa tarde!')
}else if (hora < 12) {
    console.log('Bom dia!')
}else {
    console.log('boa noite!')
}