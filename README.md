# Install
---

    npm install lucabro-linked-list --save

# Use

---

## Import

    import {LinkedList} from "lucabro-linked-list/package/LinkedList";
    
## Documentation

### Index

 * Properties
   * <a href="#start">start</a>
   * <a href="#end">end</a>
   * <a href="#cloned_list">cloned_list</a>
   * <a href="#prev">prev</a>
   * <a href="#data">data</a>
   * <a href="#next">next</a>
 * Methods
   * <a href="#init">init(c: {new (data: any): T;}, init_data?: Array* <any>): void</a>
   * <a href="#addElem">addElem(data: any, ll?: LinkedList<T>): LinkedList<T></a>
   * <a href="#addElemRight">addElemRight(data: any, ll?: LinkedList<T>): LinkedList<T></a>
   * <a href="#addElemLeft">addElemLeft(data: any, ll?: LinkedList<T>): LinkedList<T></a>
   * <a href="#removeElem">removeElem(elem?: T): LinkedList<T></a>
   * <a href="#removeElemByPos">removeElemByPos(pos: number): LinkedList<T></a>
   * <a href="#removeElemByData">removeElemByData(data: any): LinkedList<T></a>
   * <a href="#insertElem">insertElem(data: any, pos?: number): LinkedList<T></a>
   * <a href="#length">length(): number</a>
   * <a href="#toStart">toStart(ll?: LinkedList<T>): LinkedList<T></a>
   * <a href="#toNext">toNext(ll?: LinkedList<T>): LinkedList<T></a>
   * <a href="#toPrev">toPrev(ll?: LinkedList<T>): LinkedList<T></a>
   * <a href="#toEnd">toEnd(ll?: LinkedList<T>): LinkedList<T></a>
   * <a href="#get">get(): T</a>
   * <a href="#destroy">destroy(): void</a>
   * <a href="#isStart">isStart(elem?: T): boolean</a>
   * <a href="#isEnd">isEnd(elem?: T): boolean</a>
   * <a href="#clone">clone(return_cloned?: boolean): LinkedList<T></a>
   * <a href="#concat">concat(list_to_append: LinkedList<T>): LinkedList<T></a>
   * <a href="#rMerge">rMerge(list_to_merge: LinkedList<T>, func?: Function): LinkedList<T></a>
   * <a href="#merge">merge(list_to_merge: LinkedList<T>, func?: Function): LinkedList<T></a>
   * <a href="#toArray">toArray(): Array* <any></a>
   * <a href="#rSort">rSort(sort_func?: Function, list?: LinkedList<T>): LinkedList<T></a>
   * <a href="#sort">sort(sort_func?: Function, list?: LinkedList<T>): LinkedList<T></a>
   * <a href="#isEqual">isEqual(list: LinkedList<T>, equality_func?: (a: T, b: T) => boolean): boolean</a>

### Properties

#### <a name="start"></a>start:T

Pointer to the head of the list

#### <a name="end"></a>end:T

Pointer to the end of the list

#### <a name="cloned_list"></a>cloned_list:LinkedList<T>

Reference to the cloned list

#### <a name="prev"></a>prev:T

Pointer to the previous element of the list with respect of the current element 

#### <a name="data"></a>data:any

Value of the current element

#### <a name="next"></a>next:T

Pointer to the next element of the list with respect of the current element 
    
### Methods

#### LinkedList();
   
    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    
Constructor
   
#### <a name="init"></a>init(c: {new (data: any): T;}, init_data?: Array<any>): void

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType);
    
or

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    
Init list, with or without initial data

#### <a name="addElem"></a>addElem(data: any, ll?: LinkedList<T>): LinkedList<T>`

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.addElem('data4');
    
Add an element at the right of the list, alias of `addElemRight`

#### <a name="addElemRight"></a>addElemRight(data: any, ll?: LinkedList<T>): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.addElemRight('data4');
    
Add an element at the right of the list
    
#### <a name="addElemLeft"></a>addElemLeft(data: any, ll?: LinkedList<T>): LinkedList<T>
    
    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.addElemLeft('data4');

Add an element at the left of the list
    
#### <a name="removeElem"></a>removeElem(elem?: T): LinkedList<T>

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
    
#### <a name="removeElemByPos"></a>removeElemByPos(pos: number): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.removeElemByPos(1);
    
Remove element by position in the list

#### <a name="removeElemByData"></a>removeElemByData(data: any): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.removeElemByData('data2');
    
Remove element by data
    
#### <a name="insertElem"></a>insertElem(data: any, pos?: number): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.insertElem('data2', 1);
    
Add element at the specified position, without position the element will be added at the start of the list like addElemLeft`
    
#### <a name="length"></a>length(): number`

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.length(); // return 3
    
Return the length of the list
    
#### <a name="toStart"></a>toStart(): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.toStart();
    
Move the internal pointer to the head of the list
    
#### <a name="toNext"></a>toNext(): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.toNext();
    
Move the internal pointer to the next element with rispect to the current element
    
#### <a name="toPrev"></a>toPrev(): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.toPrev();
    
Move the internal pointer to the previous element with rispect to the current element

#### <a name="toEnd"></a>toEnd(): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.toEnd();
    
Move the internal pointer to the end of the list
    
#### <a name="get"></a>get(): T

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.get();
    
Return the current element    
    
#### <a name="isStart"></a>isStart(elem?: T): boolean

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var listElem:ElemenType = ll.toNext().get();
    ll.isStart(listElem);
    
Check if the passed element is the head of the list
    
#### <a name="isEnd"></a>isEnd(elem?: T): boolean

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var listElem:ElemenType = ll.toNext().get();
    ll.isStart(listElem);
    
Check if the passed element is the end of the list
    
#### <a name="clone"></a>clone(return_cloned?: boolean): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.clone();
    //
    // or
    //
    var ll_cloned:LinkedList<ElementType> = ll.clone(true);
    
Clones the list, by default the reference of the cloned list will be stored in the `cloned_list`, if true value will be passed the refence will return directly
    
#### <a name="concat"></a>concat(list_to_append: LinkedList<T>): LinkedList<T>

    var ll1:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll1.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var ll2:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll2.init(ElementType, ['data4', 'data5', 'data6']);
    //    
    ll1.concat(ll2);
    
Concatenate two lists
    
#### <a name="rMerge"></a>rMerge(list_to_merge: LinkedList<T>, func?: Function): LinkedList<T>

    var ll1:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll1.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var ll2:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll2.init(ElementType, ['data4', 'data5', 'data6']);
    //    
    ll1.rMerge(ll2);
    
Merge recursively two lists, a sorting func can be passed    

#### <a name="merge"></a>merge(list_to_merge: LinkedList<T>, func?: Function): LinkedList<T>

    var ll1:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll1.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var ll2:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll2.init(ElementType, ['data4', 'data5', 'data6']);
    //    
    ll1.merge(ll2);
    
Merge two lists, a sorting func can be passed  `// TODO`
    
#### <a name="toArray"></a>toArray(): Array<any>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    var arr_to_list:Array<any> = ll.toArray();
    
Return an array with value from the list's elements    
    
#### <a name="rSort"></a>rSort(sort_func?: Function, list?: LinkedList<T>): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, [7, 5, 3, 9, 12, 0]);
    ll.rSort();
    
Sort recursively the list, a sorting function an the list to sort can be passed    
        
#### <a name="sort"></a>sort(sort_func?: Function, list?: LinkedList<T>): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, [7, 5, 3, 9, 12, 0]);
    ll.rSort();
    
Sort the list, a sorting function an the list to sort can be passed `// TODO

#### <a name="isEqual"></a>isEqual(list: LinkedList<T>, equality_func?: (a: T, b: T) => boolean): boolean

    var ll1:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll1.init(ElementType, ['data1', 'data2', 'data3']);
    //
    var ll2:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll2.init(ElementType, ['data1', 'data5', 'data3']);
    //    
    ll1.isEqual(ll2);
    
Check if the list is equal to another, compare function can be passed
    
#### <a name="destroy"></a>destroy(): void
    
    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, [7, 5, 3, 9, 12, 0]);
    ll.destroy();
    
Destroy the list