let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#resposta')
let valores = []

function isNumero(verNum){ // Testa se o Número digitado pelo úsuario está dentro das regras no caso entre 1 e 100.
    if(Number(verNum) >= 1 && Number(verNum) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){ // Testa se o número está na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}   

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){ // O programa será executado se for um número valido(entre 1 e 100) e se não estiver na lista.
        valores.push(Number(num.value)) // O valor é colocado dentro do array valores
        let item = document.createElement('option') // Cria um elemento option e coloca dentro da váriavel item
        item.style = 'font-weight: bolder;' // Estilo do elemento option
        item.text = `Valor ${num.value} adicionado! ` // Em option vai ser add esse text
        lista.appendChild(item) // O select que está em lista recebera um filho que será um option que está em item
        res.innerHTML = '' // div da resposta começa sempre limpa
    } else { // Caso não seja uma valor valido dara erro
        window.alert('[ERRO] VALOR INVALIDO OU JÁ ENCONTRADO NA LISTA! ')
    }
    num.value = '' // Limpar o input 
    num.focus() // O foco voltara para o input sempre depois que adicionei um valor a lista, não preciso clicar de novo na caixa para digitar.
    res.innerHTML = '' // Div da resposta será limpa, ajudara quando finalizado, se voce querer add valores novos a lista com valores será limpa.
}

function finalizar(){ // Me retorna dados do array
    res.innerHTML = ''
    if (valores.length == 0){ // verifica se o array está vazio
        window.alert(`[ERRO] Nenhum valor foi digitado! `)
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){ // verificara todo o array, indece por indice...
            soma += valores[pos] // soma recebera cada valor que estiver no array e somara ao que já estiver dentro do array
            if (valores[pos] > maior){ 
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        res.innerHTML += `<p>Quant de Valores digitados: ${valores.length}</p>`
        res.innerHTML += `<p>Maior valor digitado: ${maior}</p>`
        res.innerHTML += `<p>Menor valor digitado: ${menor}</p>`
        res.innerHTML += `<p>Soma de todos os valores: ${soma}</p>`
        res.innerHTML += `<p>Média dos valores digitados: ${media}</p>`
    }
    
}




