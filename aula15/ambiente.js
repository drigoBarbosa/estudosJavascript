let num1 = [3, 5, 2, 9, 7, 6]

// Pegando valor guardado no array pelo indice.
console.log(`Primeiro valor do array indice 0: ${num1[0]}`)

// Atributo length do array para mostrar quantidade de espaços.
console.log(`Quantidade de espaços no array num1: ${num1.length}`)

// Se eu mandar printar o array, ele lista tudo o que está guardado dentro do array.
console.log(`Valores dentro do array:  ${num1}`)


num1.sort() // Metódo sort() coloca os valores dentro do array em ordem crescente.
console.log(`Valores dentro do array em ordem crescente! ${num1}`)

// 2 arrays para não executar os metódos juntos.

let num2 = [3, 5, 2, 9, 7, 6]

let testarNumero = 9
let index = num2.indexOf(testarNumero) // O Metódo indexOf procura o valor que estiver entre parenteses no array, se não achar me retorna -1 por padrão, que significa que não tem aquele valor.

if (index == -1){
    (`Não foi encontrado o valor ${testarNUmero}`)/*  */
}
console.log(`Valor pedido está no indice: ${index}`)
