/**
 * Created by mehdi on 17/03/17.
 */

var windowsWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var windowsHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

var enableDivMove=false;

var target;

updateEventsForElements();


function updateEventsForElements(){

    dragg=document.getElementsByClassName('draggableBox');      //Collecting all elements named 'draggableBox'

    for(var i=0;i<dragg.length;i++) {                           //And for each element..
        dragg[i].addEventListener('mousedown',function(e){      //We add a listener for mouse clic
            enableDivMove=true;
            target=e.target;
        }, false);

        document.addEventListener('mousemove',function(e){      //And another listener for mouse move

            if(enableDivMove){                                           //if the mouse moves and the button is down..

                var posX = e.clientX, posY = e.clientY;         //We move the div bloc

                var divHeight=parseInt(getComputedStyle(target,null).height)+10; //10 is for padding-top
                var divWidth=parseInt(getComputedStyle(target,null).width);
                if(parseInt(posY/divHeight)*divHeight>=0 && parseInt(posY/divHeight)*divHeight+divHeight<=windowsHeight){
                    target.style.top = parseInt(posY/divHeight)*divHeight + "px";
                }
                else if(parseInt(posY/divHeight)*divHeight<0){
                    target.style.top ="0px";
                }
                else{
                    target.style.top = windowsHeight-divHeight + "px";
                }
                if(parseInt(posX/divWidth)*divWidth>=0 && parseInt(posX/divWidth)*divWidth+divWidth<=windowsWidth){
                    target.style.left = parseInt(posX/divWidth)*divWidth + "px";
                }
                else if(parseInt(posX/divWidth)*divWidth<0){
                    target.style.left ="0px";
                }
                else{
                    target.style.left = windowsWidth-divWidth + "px";
                }



            }
        } , false);

        dragg[i].addEventListener('mouseup',function(e){        //and the last listener is to desactivate div's move when the button is up
            enableDivMove=false;
        },false);

    }
}


document.addEventListener('keypress',function(e) {                      //Listener that will wait for keypress to add a new div
    document.getElementById("instructions").style.visibility="hidden";  //Hiding the instructions bloc
    var saisi=e.keyCode;                                                //Getting the the key pressed's ASCII code

    if(saisi!=127 && saisi!=13){                                        //Creating new div with the character (different from 'del' and 'enter')
        var Div=document.createElement('div');
        Div.className="draggableBox";
        Div.innerHTML=String.fromCharCode(saisi);
        document.body.appendChild(Div);                                 //Inserting the new div in html code
        updateEventsForElements();                                      //Updating elements

    }

},false);


