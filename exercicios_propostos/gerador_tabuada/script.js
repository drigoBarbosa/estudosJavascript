function tabuada(){
    let txtNum = window.document.getElementById('txtnum') // Guarda o string digitado pelo úsuario
    let num = Number(txtNum.value)// Converte o String em Number
    let tabuada = window.document.getElementById('tabuada')
    tabuada.innerHTML = '' // O espaço que vai aparecer a tabuada começa vazio
    tabuada.style.padding = '1px'
    if (txtNum.value.length == 0) {
        window.alert(`[ERRO] É NECESSÁRIO DIGITAR UM VALOR! `)
    }else if (num > 10000) {
        tabuada.style.padding = '60px'
        tabuada.innerHTML = `[ERRO] <BR> <BR> VALOR DIGITADO MUITO GRANDE!`
    }else {
        let tabuada = window.document.getElementById('tabuada')
        let itemSelect = document.createElement('select')
        itemSelect.size = 11
        tabuada.appendChild(itemSelect)
        for (let cont = 0; cont <= 10; cont++){
            let item = document.createElement('option')
            item.text = `${ num} x ${cont} = ${num*cont}`
            itemSelect.appendChild(item)
            item.style.fontSize = 'larger'
            item.style.fontWeight = 'bold'
        }
    }
}

