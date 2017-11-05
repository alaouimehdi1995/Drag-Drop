/**
 * Created by mehdi on 05/11/17.
 */


import {Observable, Observer} from "./PatternObserver";
export {Position,EventTrigger};

class Position{
    constructor(private x:number,private y:number){

    }
    public setX(x:number):void{
        this.x=x;
    }
    public setY(y:number):void{
        this.y=y;
    }
    public setXY(x:number,y:number):void{
        this.x=x;
        this.y=y;
    }
    public getX():number{
        return this.x;
    }
    public getY():number{
        return this.y;
    }

}


interface EventActivator{
    activateEvent(HTMLElement);
}

abstract class EventTrigger implements Observable,EventActivator{

    protected observers:Observer[];


    constructor(protected concernedElement){
        this.observers=[];
        this.activateEvent();
    }

    abstract activateEvent();


    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    deleteObserver(observer: Observer): boolean {
        for(var i=0;i<this.observers.length;i++){
            if(this.observers[i]==observer){
                 this.observers.splice(i,1);
                return true;
            }
        }

        return false;
    }

    notifyAll(blocContent:string,position?:Position): void {
        if(position){
            for(var o of this.observers)
                o.trigger(blocContent,position);
        }
        else{
            for(var o of this.observers)
                o.trigger(blocContent);
        }
    }

}

class ConcreteEventTrigger extends EventTrigger{ //This is just an example of a concrete Trigger
    activateEvent(){

        /*
         * Here the code to add The event Listener, we could implement it after extend
         *
         *
         * */
    }
}