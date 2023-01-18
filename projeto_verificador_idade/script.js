function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formNasc = window.document.getElementById('txtano')
    var resposta = window.document.getElementById('resposta')

    if (formNasc.value.length == 0 || Number(formNasc.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ' )

    } else {
        var formSex = document.getElementsByTagName('radsex')
        var idade = ano - Number(formNasc.value)
        var genero = ''
        if (formSex[0].checked){
            genero = 'Homem'
        } else if (formSex[1].checked){
            genero = 'Mulher'
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}