import {KeyboardEventTrigger} from "./ConcreteCreatorTriggers";
import {BlocCreator} from "./BlocAdder";
/**
 * Created by mehdi on 05/11/17.
 */

var trigger=new KeyboardEventTrigger(document);
var blocCreator=new BlocCreator(trigger,document.body);