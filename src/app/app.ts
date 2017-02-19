import {LinkedList} from "../core/LinkedList";
import {ListElement} from "../core/ListElement";

let ll = new LinkedList<ListElement>();
ll.init(ListElement, [2,4,9,5,12,0]);

// Create list

let create_list:string = "";

ll.toStart();
let current:ListElement = ll.get();
while (current) {
    create_list += current.data + " <--> ";
    current = current.next;
}
create_list = create_list.slice(0, create_list.length-6);
document.getElementById('create_list').innerHTML = create_list;

// Add left element

let add_left_list:string = "";

ll.addElemLeft(3).addElemLeft(78);

ll.toStart();
current = ll.get();
while (current) {
    add_left_list += current.data + " <--> ";
    current = current.next;
}
add_left_list = add_left_list.slice(0, add_left_list.length-6);
document.getElementById('add_left_list').innerHTML = add_left_list;

// Add right element

let add_right_list:string = "";

ll.addElemRight(18).addElemRight(34);

ll.toStart();
current = ll.get();
while (current) {
    add_right_list += current.data + " <--> ";
    current = current.next;
}
add_right_list = add_right_list.slice(0, add_right_list.length-6);
document.getElementById('add_right_list').innerHTML = add_right_list;

// Remove elem by pos

let remove_elem_by_pos:string = "";

ll.removeElemByPos(5).removeElemByPos(8);

ll.toStart();
current = ll.get();
while (current) {
    remove_elem_by_pos += current.data + " <--> ";
    current = current.next;
}
remove_elem_by_pos = remove_elem_by_pos.slice(0, remove_elem_by_pos.length-6);
document.getElementById('remove_elem_by_pos').innerHTML = remove_elem_by_pos;

// Remove elem by data

let remove_elem_by_data:string = "";
ll.removeElemByData(9);

ll.toStart();
current = ll.get();
while (current) {
    remove_elem_by_data += current.data + " <--> ";
    current = current.next;
}
remove_elem_by_data = remove_elem_by_data.slice(0, remove_elem_by_data.length-6);
document.getElementById('remove_elem_by_data').innerHTML = remove_elem_by_data;

// Insert elem

let insert_elem:string = "";
ll.insertElem(102, 4);

ll.toStart();
current = ll.get();
while (current) {
    insert_elem += current.data + " <--> ";
    current = current.next;
}
insert_elem = insert_elem.slice(0, insert_elem.length-6);
document.getElementById('insert_elem').innerHTML = insert_elem;

// Length

document.getElementById('length').innerHTML = ll.length().toString();

// Clone list

let clone_list:string = "";
let cloned_list:LinkedList<ListElement> = ll.clone().cloned_list;

cloned_list.toStart();
current = cloned_list.get();
while (current) {
    clone_list += current.data + " <--> ";
    current = current.next;
}
clone_list = clone_list.slice(0, clone_list.length-6);
document.getElementById('clone_list').innerHTML = clone_list;

// Concat lists

let concat_lists:string = "";
let list_to_concat:LinkedList<ListElement> = new LinkedList();
list_to_concat.init(ListElement, [-23, 123, 99]);

ll.concat(list_to_concat);

ll.toStart();
current = ll.get();
while (current) {
    concat_lists += current.data + " <--> ";
    current = current.next;
}
concat_lists = concat_lists.slice(0, concat_lists.length-6);
document.getElementById('concat_lists').innerHTML = concat_lists;

// Recursive merge

let rmerge_lists:string = "";
let list_to_rmerge:LinkedList<ListElement> = new LinkedList();
list_to_rmerge.init(ListElement, [-25, 120, 76]);

ll.rMerge(list_to_rmerge);

ll.toStart();
current = ll.get();
while (current) {
    rmerge_lists += current.data + " <--> ";
    current = current.next;
}
rmerge_lists = rmerge_lists.slice(0, rmerge_lists.length-6);
document.getElementById('rmerge_lists').innerHTML = rmerge_lists;

// List to array

let list_to_array:string = "";
let array:Array<any> = ll.toArray();
for (let i = 0; i < array.length; i++) {
    list_to_array += array[i] + ", ";
}
list_to_array = "[ " + list_to_array.slice(0, list_to_array.length-2) + " ]";
document.getElementById('list_to_array').innerHTML = list_to_array;

// Recursive sort

let recursive_sort:string = "";

ll.rSort((a:any, b:any) => { return !(a <= b); });

ll.toStart();
current = ll.get();
while (current) {
    recursive_sort += current.data + " <--> ";
    current = current.next;
}
recursive_sort = recursive_sort.slice(0, recursive_sort.length-6);
document.getElementById('recursive_sort').innerHTML = recursive_sort;

ll.destroy();

