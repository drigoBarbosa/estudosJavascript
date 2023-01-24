let inputTxt = window.document.getElementById('num')
let lista = document.getElementById('listaNum')
let resp = document.querySelector('div#resposta')
let listaValores = []


/* let num = Number(inputTxt.value)
 */
function adicionar(){
    
    

    if (inputTxt.value.length < 1 ){
        window.alert('[ERRO] VALOR MENOR QUE INAVALIDO')
        // Para ser terminado
        
        let option = document.createElement('option')
        lista.appendChild(option)
        option.text = `O valor digitado: ${num}` 
    }
}

function finalizar(){
    listaValores.push(num)
    window.alert
}
