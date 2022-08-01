let video= document.querySelector(".videoHC");
let duracion= document.querySelector(".duracion")

function comenzar(){
    video.play()
    video.duration
    duracion.textContent=`La Duracion del video es de:  ${video.duration}`
}

function parar(){
    video.pause()

}
/*juego de cartas*/
let menu= document.querySelector('.menu');
let flag=false;



function iniciar(){
    var imagenes=document.querySelectorAll('#rectangulos_2 img');
     soltar_1=document.getElementById('caja_1');  
     soltar_2  =document.getElementById('caja_2'); 
     soltar_3 = document.getElementById('caja_3'); 

    for(var i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener('dragstart', arrastrado, false);
    imagenes[i].addEventListener('dragend', finalizado, false);
    }

    soltar_1.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar_1.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar_1.addEventListener('drop', soltado1, false);


    soltar_2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar_2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar_2.addEventListener('drop', soltado2, false);


    soltar_3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar_3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar_3.addEventListener('drop', soltado3, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}
function finalizado(e){
    elemento=e.target;
    elemento.style.visibility='hidden';
} 

function soltado1(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    soltar_1.innerHTML='<img src="'+src+'" height="400px" width="275px">';
    }else{
    soltar_1.innerHTML='Error, imagen no es admitida!';
    }
}

function soltado2(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    soltar_2.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
    soltar_2.innerHTML='Error, imagen no es admitida!';
    }
}
function soltado3(e){
    e.preventDefault();
    var id=e.dataTransfer.getData('Text');
    if(id!="imagen4"){
        var src=document.getElementById(id).src;
    soltar_3.innerHTML='<img src="'+src+'"height="400px" width="275px">';
    }else{
    soltar_3.innerHTML='Error, imagen no es admitida!';
    }
}

function reinicio() {
    window.location.reload();
}
iniciar()