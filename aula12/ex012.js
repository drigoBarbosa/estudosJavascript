// var agora = new Date()
// var horaAtual = agora.getHours()

var horaAtual = 1
console.log(`Agora são exatamente ${horaAtual} hrs`)

if (horaAtual > 4 && horaAtual <= 12){
    console.log('Bom dia! ')
}else if (horaAtual > 12 && horaAtual < 18){
    console.log('Boa tarde! ')
}else if (horaAtual >= 18 && horaAtual < 0){}