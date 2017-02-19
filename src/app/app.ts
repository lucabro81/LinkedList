import {LinkedList} from "../core/LinkedList";
import {ListElement} from "../core/ListElement";

let ll = new LinkedList<ListElement>();
ll.init(ListElement, [2,4,9,5,12,0]);

// create list

let create_list:string = "";

ll.toStart();
let current:ListElement = ll.get();
while (current) {
    create_list += current.data + " <--> ";
    current = current.next;
}
create_list = "\t" + create_list.slice(0, create_list.length-6);
document.getElementById('create_list').innerHTML = create_list;

// add left element

let add_left_list:string = "";

ll.addElemLeft(3).addElemLeft(78);

ll.toStart();
current = ll.get();
while (current) {
    add_left_list += current.data + " <--> ";
    current = current.next;
}
add_left_list = "\t" + add_left_list.slice(0, add_left_list.length-6);
document.getElementById('add_left_list').innerHTML = add_left_list;

// add right element

let add_right_list:string = "";

ll.addElemRight(3);

ll.toStart();
current = ll.get();
while (current) {
    add_right_list += current.data + " <--> ";
    current = current.next;
}
add_right_list = "\t" + add_right_list.slice(0, add_right_list.length-6);
document.getElementById('add_right_list').innerHTML = add_right_list;

//ll.destroy();

