/**
 * Created by mehdi on 17/03/17.
 */

 var wwidth = window.innerWidth
 || document.documentElement.clientWidth
 || document.body.clientWidth;

 var wheight = window.innerHeight
 || document.documentElement.clientHeight
 || document.body.clientHeight;

 var move=false;
 var target;
 updateElements();

 function updateElements()
 {
    dragg=document.getElementsByClassName('draggableBox'); //On récupère les éléments ayant 'draggableBox' comme name

    for(var i=0; i<dragg.length; i++) {                       //Pour chaque élement
        dragg[i].addEventListener('mousedown', function(e){  //On active l'événement lors su clic..
            move=true;
            target=e.target;
        }, false);

        document.addEventListener('mousemove', function(e){  //Lors du déplacement du curseur
            if(move){
                var posX = e.clientX, posY = e.clientY;
                var height=parseInt(getComputedStyle(target, null).height) +10,
                    width=parseInt(getComputedStyle(target, null).width);

                if(parseInt(posY/height)*height >= 0 && parseInt(posY/height)*height+height <= wheight){
                    target.style.top = parseInt(posY/height)*height + "px";
                }
                else if(parseInt(posY/height)*height < 0){
                    target.style.top ="0px";
                }
                else {
                    target.style.top = wheight-height + "px";
                }
                
                if(parseInt(posX/width)*width>=0 && parseInt(posX/width)*width+width <= wwidth){
                    target.style.left = parseInt(posX/width)*width + "px";
                }
                else if(parseInt(posX/width)* width < 0){
                    target.style.left ="0px";
                }
                else {
                    target.style.left = wwidth-width + "px";
                }
            }
        }, false);

        dragg[i].addEventListener('mouseup', function(e){ //.. et lors du relâchement du bouton de la souris
            move=false;
        }, false);
    }
}

document.addEventListener('keypress', function(e) //On ajoute aussi l'évenement qui lit du clavier et insère les éléments
{ 
    document.getElementById("instructions").style.visibility="hidden"; //On cache les instructions
    var saisi=e.keyCode;

    if(saisi!=127 && saisi!=13){
        var Div=document.createElement('div');
        Div.className="draggableBox";
        Div.innerHTML=String.fromCharCode(saisi)
        document.body.appendChild(Div);
        updateElements();
    }
}, false);
