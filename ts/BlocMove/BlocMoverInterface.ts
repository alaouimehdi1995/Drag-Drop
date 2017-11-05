import {Bloc} from "../Bloc";
/**
 * Created by mehdi on 05/11/17.
 */


interface Mover{

    startMoveTrigger():void;
    whileMoveTrigger():void;
    endMoveTrigger():void;
}

 abstract class BlocMover implements Mover{

     constructor(private blocToMove:Bloc){
        console.log("kda");
     }
     abstract startMoveTrigger():void;
     abstract whileMoveTrigger():void;
     abstract endMoveTrigger():void;

}

