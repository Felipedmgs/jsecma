function contar(){
    var ini = document.getElementById('txti'); //assim ja pego o numero do input
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var retorno = window.document.getElementById('res');
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }
    else{
        res.innerHTML = 'Contando '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f){
            //contagem crescente
            for(let c=i; c<f; c += p){
                res.innerHTML += `${c}  \u{1F449}`
            }
        }else{
            //contagem decrescente
            for(let c = i; c >= f ; c-= p){
                res.innerHTML += `${c}  \u{1F449}`
            }
        }
        retorno.innerHTML += `\u{1F3C1}`;
    }

}



for (i=0; i<3; i++){
    console.log('oi');
}

var j=0
do{
    console.log('j: '+j);
    j++
}while(j<3)