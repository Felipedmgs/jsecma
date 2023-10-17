
function verificar(){
   var data = new Date();
   var ano = data.getFullYear(); //get data atual
   var fano = document.getElementById('txtano');
   var res = document.querySelector('div#res');

   if(fano.value.length == 0 || Number(fano.value) > ano){
      window.alert('[erro] Verifique os dados e tente novamente');
   } else{
      var fsex = document.getElementsByName('radsex');
      var idade = ano - Number(fano.value);//calculando ano da pessoa
      var genero = ''

      //variaveis para criação de img pelo js
      var img = document.createElement('img');
      img.setAttribute('id', 'foto'); //neste momento criamos a mesma tag do html img com o id  = foto => <img id='foto'>

      var ge = '';
      //verificando qual radio esta selecionado
      if(fsex[0].checked){
         genero = 'Homem';
         ge = 'h';        
      }else{
         ge = 'm';   
         genero = 'Mulher';
      }

      //definindo imagem da pessoa
      if(idade >=0 && idade < 10){
         //bb
         img.setAttribute('src', 'img/'+ge+'_bebe.png'); //inserindo o caminho da foto
      }else if(idade < 21){
         //crianca
         img.setAttribute('src', 'img/'+ge+'_crianca.png');
      }else if(idade < 50){
         //adulto
         img.setAttribute('src', 'img/'+ge+'_jovem.png');
      }else{
         //idoso
         img.setAttribute('src', 'img/'+ge+'_velho.png');
      }


      res.style.textAlign = 'center'; //deixa ocentralizado quando executar o js
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

      //ajuste de css da imagem
      img.style.borderRadius='50%';
      img.style.overflow='hidden';
      img.style.width='150px';
      img.style.height='150px';
      img.style.margin='15px';

      res.style.padding='30px';
      
      //incluindo foto dentro  da div
      res.appendChild(img);



   }


}
