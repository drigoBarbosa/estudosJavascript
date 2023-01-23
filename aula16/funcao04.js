// Exemplo para funções: Calcular Fatorial.

function fatorial(num){
    let fat = 1
    for (let c = num; c > 1; c--){
        fat *= c
    }
        return fat
}

console.log(fatorial(5))



