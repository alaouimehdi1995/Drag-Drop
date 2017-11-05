/**
 * Created by mehdi on 05/11/17.
 */

import {Position} from "./EventTrigger";
export {Observer,Observable};

interface Observable{

    addObserver(observer:Observer):void;
    deleteObserver(observer:Observer):boolean;
    notifyAll(blocContent:string,position?:Position):void;
}


interface Observer{
    trigger(blocContent:string,position?:Position);
}