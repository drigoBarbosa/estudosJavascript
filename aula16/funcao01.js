// Função com 1 parâmetro

function parImpar(num){ // parImpar == nome da função e o que estiver dentro de () são parâmetros ou argumentos.
    if (num%2 == 0){
        return `${num} é PAR! `
    }else{
        return `${num} é IMPAR! ` 
    }
}

console.log(parImpar(9)) // Valor 9 será jogado lá para o parâmetro num, os comandos da função serão executados com num valendo 9.