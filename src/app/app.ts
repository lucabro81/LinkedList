import {LinkedList} from "../core/LinkedList";
var ll = new LinkedList();
ll.init();
ll.addElem("data1");
ll.addElem("data2");
ll.addElem("data3");
console.log(ll);
ll.destroy();
console.log(ll);

