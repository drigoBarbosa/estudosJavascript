//Teste Lógico para saber se a pessoa pode votar pela sua idade.

var idade = 15
if (idade < 16){
    console.log('Não pode Votar')
}else if (idade < 18 || idade >= 65){
    console.log('Voto opcional')
}else{
    console.log('VOTO OBRIGATÓRIO! ')
}