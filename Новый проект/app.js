let conteiner =document.querySelector('.conteiner');



conteiner.addEventListener('click',(event)=>{

  if(conteiner.classList.contains('box')){
    conteiner.classList.remove('box');
  }else{
    conteiner.classList.add('box')
  }




})


