function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var resposta = window.document.getElementById('resposta')
    var imagem = window.document.getElementById('imagem')


    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ' )
    } else {
        var idade = ano - Number(fano.value)
        var genero = ''
        if (document.getElementById('masc').checked) {
            genero = 'Homem'
        } else if (document.getElementById('femi').checked) {
            genero = 'Mulher'
        }
        resposta.style.textAlign = 'center'


        if (idade == 0){ // VERIFICAR SE É UM BEBÊ, SE ELE NASCEU EM 2023 A IDADE VAI FICAR COM VALOR 0 PORQUE O MÊS DE NASCIMENTO NÃO ESTÁ SENDO CALCULADO, LOGO ELE TEM MENOS DE 1 ANO MAS TEM MESES OU DIAS DE NASCIDO. 
            if(genero == 'Homem'){
                resposta.innerHTML = ` Um menininho de poucos meses ou dias! `
                document.body.style.background = 'blue'
                imagem.src = '/projeto_verificador_idade/imagens/bebe_menino.png'
            } else if (genero == 'Mulher') {
                resposta.innerHTML = `Uma menininha de poucos meses ou dias! `
                document.body.style.background = 'rgb(243, 47, 80)'
                imagem.src = '/projeto_verificador_idade/imagens/bebe_menina.png'
            } 
        } else if (idade > 0 && idade <= 12) { // VERIFICAR SE É UMA CRIANÇA COM IDADE ATÉ 12 ANOS
            if (genero == 'Homem') {
                genero = 'Menino'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = '/projeto_verificador_idade/imagens/menino_crianca.png'
            } else if (genero == 'Mulher') {
                genero = 'Menina'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = '/projeto_verificador_idade/imagens/menina_crianca.png'
            }
        } else if (idade > 12 && idade < 18 ) { // VERIFICAR SE É UM/UMA ADOLESCENTE COM IDADE ATÉ 18 ANOS
            if (genero == 'Homem') {
                genero = 'Jovem Rapaz'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = '/projeto_verificador_idade/imagens/jovem_rapaz.png'
            } else if (genero = 'Mulher') {
                genero = 'Jovem Moça'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = '/projeto_verificador_idade/imagens/jovem_moca.png'
            }
        } else if (idade > 17 && idade <= 30) { // VERIFICAR SE É UM ADULTO JOVEM COM IDADE ATÉ 30 ANOS
            if (genero == 'Homem') {
                genero = 'Homem jovem'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = '/projeto_verificador_idade/imagens/homem_jovem.png'
            } else if (genero = 'Mulher') {
                genero = 'Mulher jovem'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = '/projeto_verificador_idade/imagens/mulher_jovem.png'
            }
        } else if (idade > 30 && idade <= 50) { // VERIFICAR SE É ADULTO COM IDADE MENOR QUE 50 ANOS
            if (genero == 'Homem') {
                genero = 'Homem'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = '/projeto_verificador_idade/imagens/homem_30mais.png'
            } else if (genero = 'Mulher') {
                genero = 'Mulher'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = '/projeto_verificador_idade/imagens/mulher_30mais.png'
            }
        } else if (idade > 50 && idade <= 120) { // VERIFICAR SE É UM IDOSO COM IDADE ATÉ 120 ANOS
            if (genero == 'Homem') {
                genero = 'Homem Idoso'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = '/projeto_verificador_idade/imagens/idoso_homem.png'
            } else if (genero = 'Mulher') {
                genero = 'Mulher Idosa'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = '/projeto_verificador_idade/imagens/idosa_mulher.png'
            }
        } else if (idade > 120) {
            if (genero == 'Homem') {
                genero = 'Homem'
                resposta.innerHTML = `${genero} de ${idade} anos! A ESSA ALTURA JÁ MORREU!`
                imagem.src = '/projeto_verificador_idade/imagens/cruz_morte.png'
            } else if (genero = 'Mulher') {
                genero = 'Mulher'
                resposta.innerHTML = `${genero} de ${idade} anos! A ESSA ALTURA JÁ MORREU!`
                imagem.src = '/projeto_verificador_idade/imagens/cruz_morte.png'
            }   
        }
    }
}