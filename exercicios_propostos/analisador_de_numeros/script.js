let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#resposta')
let valores = []

function isNumero(verNum){
    if(Number(verNum) >= 1 && Number(verNum) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}   

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.style = 'font-weight: bolder;'
        item.text = `Valor ${num.value} adicionado! `
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] VALOR INVALIDO OU JÁ ENCONTRADO NA LISTA! ')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finalizar(){
    res.innerHTML = ''
    if (valores.length == 0){
        window.alert(`[ERRO] Nenhum valor foi digitado! `)
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
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




