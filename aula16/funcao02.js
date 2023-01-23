/* 

function soma(n1, n2){
    return n1 + n2
}

console.log(soma(5, 3))  Os parâmetros que passei na chamada da função serão jogados para os parâmetros da função: 5 para n1 e 3 para n2.

*/

// No caso de apenas um parâmetro na hora da chamada e mais de um parâmetro na função

function soma(n1=0, n2=0){ // Caso n1 não seja chamado vale 0, Caso n2 não seja chamado vale 0; 
    return n1+n2
}

console.log(soma(3)) // Se na chamada da função eu não passar parâmetros para todos os parâmetros na função, parâmetros vazios valeram undefined(indefinido), um número + undefined no JavaScript == NuN(Não é um número), para resolver eu posso atribuir valor padrão ao parâmetro na função.