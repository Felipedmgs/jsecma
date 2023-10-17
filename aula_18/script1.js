function parimpar(n){
    if(n%2 == 0){
        return 'par';
    }
    else{
        return 'impar';
    }
}

let ixi = parimpar(10);
console.log(ixi);

//colocando o 0, se não for passado valor ele considera zero
//legal que podemos deixar como padrão qualquer valor
function soma(n1=0, n2=0){
    return n1+n2;
}
console.log(soma(1));

//function na criação da variavel
let y = function(x){
    return x*2;
}

console.log(y(2));

//funções recursivas

function recur(rec){

    if(rec > 10){
        console.log('fim');
        return rec;                
    }else{
        console.log(rec);
        rec++;
        recur(rec);
    }
}
recur(1);
