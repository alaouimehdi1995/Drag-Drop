import {Position} from "./BlocCreator/EventTrigger";
/**
 * Created by mehdi on 05/11/17.
 */

export {Bloc};
class Bloc{


    constructor(private element, private cssClassName:string, private HTMLTagName:string,private content?:string, private position?:Position){

    }
    public getElement(){
        return this.element;
    }
    public setElement(element):void{
        this.element=element;
    }
    public setContent(content:string):void{
        this.content=content;
    }
    public setPosition(position:Position):void{
        this.position=position;
    }
}