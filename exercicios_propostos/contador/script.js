function contagem(){
    let inicio = window.document.getElementById('txtInicio')
    let fim = window.document.getElementById('txtFim')
    let passo = window.document.getElementById('txtPasso')
    let resultado = window.document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // VERIFICA SE HÁ ALGUMA INPUT DE ENTRADA VAZIA
        window.alert(`[ERRO] FALTAM VALORES! `)
    } else {
        let iNum = Number(inicio.value)
        let fNum = Number(fim.value)
        let pNum = Number(passo.value)

        if (pNum == 0) { // VERIFICA SE O PASSO DIGITADO FOI 0, CASO TENHA SIDO A VARIAVEL RECEBERA VALOR DO PASSO 1
            window.alert(`PASSO DIGITADO [${pNum}] SERÁ CONSIDERADO PASSO [1] `)
            pNum = 1}
        if (iNum > 999 || fNum > 999 || pNum > 999) {
            window.alert(`[ERRO] VALOR DIGITADO EXCEDE O LIMITE DE CARACTERES! `)
        } else if (iNum < fNum) { // VERIFICA SE O INICIO É MENOR QUE O FIM, SE TRUE A CONTAGEM SERA CRESCENTE
                resultado.innerHTML = `Contando... <br>`
                for (iNum; iNum <= fNum; iNum += pNum) { // CONTAGEM CRESCENTE
                    resultado.innerHTML += `\u{1F449} ${iNum} `
                }
                resultado.innerHTML += `\u{1F3C1}`
        } else if (iNum > fNum) { // VERIFICA SE O INICIO É MAIOR QUE O FIM, SE TRUE A CONTAGEM SERA DECRESCENTE
            resultado.innerHTML = `Contando: `
            for (iNum; iNum >= fNum; iNum -= pNum) { // CONTAGEM REGRESSIVA
                resultado.innerHTML += `\u{1F449} ${iNum} `
            }
            resultado.innerHTML += `\u{1F3C1}`
        } else {
            window.alert(`[ERRO] NÃO HÁ VALORES ENTRE ${iNum} E ${fNum}!`)
        }
    }
}   














