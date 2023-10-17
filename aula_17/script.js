function tabuada(){
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!');
    }else{
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while(c <= 10){
            let item = document.createElement('option') //incluindo o item do select
            item.text = `${n} X ${c} = ${n*c}` //monta calculo
            item.value = `tab${c}` // serve para outras linguagem, para pegar a seleção
            tab.appendChild(item);//add no select o item
            c++;
        }
    }




}
