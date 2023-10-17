
function carregar(){
    //crio uma variavel para poder manipular o qu esta no id msg
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes('');

    //var hora = 8;
    //atualizando o que esta dentro do msg    
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;

    //definindo as horas
    if(hora >= 0 && hora <= 12 ){
        //bom dia
        img.src = 'img/manha.png'; //mudando a imagem de fundo
        document.body.style.background = '#e2cd9f';//definindo cor do fundo do body
    }
    else if(hora > 12 && hora < 18 ){
        //boa tarde
        img.src = 'img/tarde.png';
        document.body.style.background = '#b9846f';
    }
    else{
        //boa noite
        img.src = 'img/noite.png';
        document.body.style.background = '#515154';

    }
}
