let animais = ['zebra', 'gato', 'leao', 'macaco', 'aranha', 'bode']
console.log(`Quantidade de animais no vetor: ${animais.length}`)
/* 
    Primeira forma de formatar os valores de um Array.

    for (let indice = 0; indice < animais.length; indice++){
    console.log(`Indice ${indice} tem o valor ${animais[indice]}`)
} */

// Segunda forma
animais.sort()
console.log(`Animais no Array em ordem alfabética: `)
for(let indice in animais){ // Para cada posição na variavel composta(Array) 
    
    console.log(`Animal indice ${indice}: (${animais[indice]})`)
}

