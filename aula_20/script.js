/**
 * functions
 * objetos
 * modularização
 * Regex
 * json
 * ajax
 * nodejs
 * 
 * 
 */

let amigo = {
    nome:'Felipe',
    sexo: 'M',
    peso: '80.0',
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}

amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)