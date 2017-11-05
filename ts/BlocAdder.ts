/**
 * Created by mehdi on 05/11/17.
 */

import {Observer} from "./PatternObserver";
import {EventTrigger, Position} from "./EventTrigger";
export {BlocCreator};




class BlocCreator implements Observer{

    //Define the HTML tag and css classname of our block, so that we could customize them later
    private cssClassName:string='draggableBox';
    private HTMLtagName:string='div';

    constructor(private eventTrigger:EventTrigger,private fatherElement){

        this.eventTrigger.addObserver(this);    //Implementing the Observer pattern


    }

    public setCSSClassName(cssClassName:string):void{
        this.cssClassName=cssClassName;
    }
    public setHTMLTagName(HTMLTagName:string):void{
        this.HTMLtagName=HTMLTagName;
    }

    trigger(blocContent:string,position?:Position) {    //When our creation event is triggered, this method will be executed to create a new bloc
        var Div=document.createElement(this.HTMLtagName);
        Div.className=this.cssClassName;
        Div.innerHTML=blocContent;
        this.fatherElement.appendChild(Div);
        /*
        * We should add the move event trigger here
        * */
    }




}