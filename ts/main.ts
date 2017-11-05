import {KeyboardEventTrigger} from "./BlocCreator/ConcreteCreatorTriggers";
import {BlocCreator} from "./BlocCreator/BlocCreator";
import {Bloc} from "./Bloc";
/**
 * Created by mehdi on 05/11/17.
 */


var blocList:Bloc[]=[];
var trigger=new KeyboardEventTrigger(document);
var blocCreator=new BlocCreator(trigger,document.body);
blocCreator.setBlocList(blocList);


//TODO:Create Bloc Object, so that it could encapsulate more information than a simple HTML element