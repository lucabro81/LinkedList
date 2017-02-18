# Install
---

    npm install lucabro-linked-list --save

# Use

---

## Import

    import {LinkedList} from "lucabro-linked-list/package/LinkedList";
    
## Documentation

### Properties

#### start:T

Pointer to the head of the list

#### end:T

Pointer to the end of the list

#### cloned_list:LinkedList<T>

Reference to the cloned list

#### prev:T

Pointer to the previous element of the list with respect of the current element 

#### data:any

Value of the current element

#### next:T

Pointer to the next element of the list with respect of the current element 
    
### Methods

#### LinkedList();
   
    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    
Constructor
   
#### init(c: {new (data: any): T;}, init_data?: Array<any>): void

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType);
    
or

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    
Init list, with or without initial data

#### addElem(data: any, ll?: LinkedList<T>): LinkedList<T>`

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.addElem('data4');
    
Add an element at the right of the list, alias of `addElemRight`

#### addElemRight(data: any, ll?: LinkedList<T>): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.addElemRight('data4');
    
Add an element at the right of the list
    
#### addElemLeft(data: any, ll?: LinkedList<T>): LinkedList<T>
    
    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.addElemLeft('data4');

Add an element at the left of the list
    
#### removeElem(elem?: T): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var listElem:ElemenType = ll.get();
    ll.removeElem(listElem);
    //
    // or
    //
    ll.removeElem();
    
Remove current element or a specified one
    
#### removeElemByPos(pos: number): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.removeElemByPos(1);
    
Remove element by position in the list

#### removeElemByData(data: any): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.removeElemByData('data2');
    
Remove element by data
    
#### insertElem(data: any, pos?: number): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.insertElem('data2', 1);
    
Add element at the specified position, without position the element will be added at the start of the list like addElemLeft`
    
#### length(): number`

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.length(); // return 3
    
Return the length of the list
    
#### toStart(): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.toStart();
    
Move the internal pointer to the head of the list
    
#### toNext(): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.toNext();
    
Move the internal pointer to the next element with rispect to the current element
    
#### toPrev(): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.toPrev();
    
Move the internal pointer to the previous element with rispect to the current element

#### toEnd(): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.toEnd();
    
Move the internal pointer to the end of the list
    
#### get(): T

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.get();
    
Return the current element    
    
#### isStart(elem?: T): boolean

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var listElem:ElemenType = ll.toNext().get();
    ll.isStart(listElem);
    
Check if the passed element is the head of the list
    
#### isEnd(elem?: T): boolean

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var listElem:ElemenType = ll.toNext().get();
    ll.isStart(listElem);
    
Check if the passed element is the end of the list
    
#### clone(return_cloned?: boolean): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.clone();
    //
    // or
    //
    var ll_cloned:LinkedList<ElementType> = ll.clone(true);
    
Clones the list, by default the reference of the cloned list will be stored in the `cloned_list`, if true value will be passed the refence will return directly
    
#### concat(list_to_append: LinkedList<T>): LinkedList<T>

    var ll1:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll1.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var ll2:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll2.init(ElementType, ['data4', 'data5', 'data6']);
    //    
    ll1.concat(ll2);
    
Concatenate two lists
    
#### rMerge(list_to_merge: LinkedList<T>, func?: Function): LinkedList<T>

    var ll1:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll1.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var ll2:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll2.init(ElementType, ['data4', 'data5', 'data6']);
    //    
    ll1.rMerge(ll2);
    
Merge recursively two lists, a sorting func can be passed    

#### merge(list_to_merge: LinkedList<T>, func?: Function): LinkedList<T>

    var ll1:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll1.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var ll2:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll2.init(ElementType, ['data4', 'data5', 'data6']);
    //    
    ll1.merge(ll2);
    
Merge two lists, a sorting func can be passed  `// TODO`
    
#### toArray(): Array<any>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    var arr_to_list:Array<any> = ll.toArray();
    
Return an array with value from the list's elements    
    
#### rSort(sort_func?: Function, list?: LinkedList<T>): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, [7, 5, 3, 9, 12, 0]);
    ll.rSort();
    
Sort recursively the list, a sorting function an the list to sort can be passed    
        
#### sort(sort_func?: Function, list?: LinkedList<T>): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, [7, 5, 3, 9, 12, 0]);
    ll.rSort();
    
Sort the list, a sorting function an the list to sort can be passed `// TODO

#### isEqual(list: LinkedList<T>, equality_func?: (a: T, b: T) => boolean): boolean

    var ll1:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll1.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var ll2:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll2.init(ElementType, ['data1', 'data5', 'data3']);
    //    
    ll1.isEqual(ll2);
    
Check if the list is equal to another, compare function can be passed
    
#### destroy(): void
    
    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, [7, 5, 3, 9, 12, 0]);
    ll.destroy();
    
Destroy the list