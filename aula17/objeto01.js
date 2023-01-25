let pessoa = {
    nome: 'Rodrigo',
    sexo: 'M',
    idade: '20',
    peso: 168.5,
    Nacionalidade: 'BR',
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
pessoa.engordar(2)
console.log(`${pessoa.nome} engordou e está com ${pessoa.peso}`)
