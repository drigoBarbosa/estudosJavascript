function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 5){
        // Madrugada
        img.src = '/projeto_hora_do_dia/imagens/madrugada.png'
        document.body.style.background = '#001240'
    } else if (hora > 5 && hora < 12) {
        // Bom dia!
        img.src = '/projeto_hora_do_dia/imagens/manha.png'
        document.body.style.background = '#bbe4fd' 
    } else if (hora >= 12 && hora < 18){
        // Boa tarde!
        img.src = '/projeto_hora_do_dia/imagens/tarde.png'
        document.body.style.background = '#ea7512'
    } else {
        // Boa noite!
        img.src = '/projeto_hora_do_dia/imagens/noite.png'
        document.body.style.background = '#292f2f'
    }
}
