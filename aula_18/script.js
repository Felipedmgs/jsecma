let vet = []; //criando vetor vazio

let num = [5,8,4];
num[3]=6;
num.push(7); //add na ultima coluna
num.length; //mostra tamanho do vetor
//num.sort(); //coloca elementos em ordem crescente.

console.log(num)
console.log(num.length)
console.log(num[0])

console.log(num.sort());//ordena o vetor

for(let pos=0; pos < num.length; pos++){
   // console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

for(let poss in num){
    console.log(`A posição ${poss} tem o valor ${num[poss]}`);
}


//buscar valor no vetor
console.log(num.indexOf(7));