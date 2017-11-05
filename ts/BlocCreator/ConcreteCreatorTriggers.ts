
import {EventTrigger} from "./EventTrigger";

export {KeyboardEventTrigger};

class KeyboardEventTrigger extends EventTrigger{
    activateEvent(){


        /*
         * Here the code to add The event Listener, we could implement it after extend
         * */



        this.concernedElement.addEventListener('keypress',
            (e) =>{
                console.log("Triggered");
                var saisi=e.keyCode;                                                //Getting the the key pressed's ASCII code

                if(saisi!=127 && saisi!=13){                                        //Creating new div with the character (different from 'del' and 'enter')
                    var blocContent=String.fromCharCode(saisi);
                    this.notifyAll(blocContent);
                }

            },false);
    }
}


//TODO: Create a TouchScreenTrigger, and MouseTrigger, but they require positions
