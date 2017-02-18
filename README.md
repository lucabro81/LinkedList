# LinkedList

## Install

    npm install lucabro-linked-list --save

## Use

### Import

    import {LinkedList} from "lucabro-linked-list/package/LinkedList";
    
### Documentation

#### Properties

##### start:T

Pointer to the head of the list

##### end:T

Pointer to the end of the list

##### cloned_list:LinkedList<T>

Reference to the cloned list

##### prev:T

Pointer to the previous element of the list with respect of the current element 

##### data:any

Value of the current element

##### next:T

Pointer to the next element of the list with respect of the current element 
    
#### Methods

##### LinkedList();
   
    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    
Constructor
   
##### init(c: {new (data: any): T;}, init_data?: Array<any>): void

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType);
    
or

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    
Init list, with or without initial data

#####addElem(data: any, ll?: LinkedList<T>): LinkedList<T>`

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.addElem('data4');
    
Add an element at the right of the list, alias of `addElemRight`

#####addElemRight(data: any, ll?: LinkedList<T>): LinkedList<T>

    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.addElemRight('data4');
    
Add an element at the right of the list
    
#####addElemLeft(data: any, ll?: LinkedList<T>): LinkedList<T>
    
    var ll:LinkedList<ElementType> = new LinkedList<ElementType>();
    ll.init(ElementType, ['data1', 'data2', 'data3']);
    ll.addElemLeft('data4');

Add an element at the left of the list
    
#####removeElem(elem?: T): LinkedList<T>
#####removeElemByPos(pos: number): LinkedList<T>
#####removeElemByData(data: any): LinkedList<T>
#####insertElem(data: any, pos?: number): LinkedList<T>
#####length(): number
#####toStart(ll?: LinkedList<T>): LinkedList<T>
#####toNext(ll?: LinkedList<T>): LinkedList<T>
#####toPrev(ll?: LinkedList<T>): LinkedList<T>
#####toEnd(ll?: LinkedList<T>): LinkedList<T>
#####get(): T
#####destroy(): void
#####isStart(elem?: T): boolean
#####isEnd(elem?: T): boolean
#####clone(return_cloned?: boolean): LinkedList<T>
#####concat(list_to_append: LinkedList<T>): LinkedList<T>
#####rMerge(list_to_merge: LinkedList<T>, func?: Function): LinkedList<T>
#####merge(list_to_merge: LinkedList<T>, func?: Function): LinkedList<T>
#####toArray(): Array<any>
#####rSort(sort_func?: Function, list?: LinkedList<T>): LinkedList<T>
#####sort(sort_func?: Function, list?: LinkedList<T>): LinkedList<T>
#####isEqual(list: LinkedList<T>, equality_func?: (a: T, b: T) => boolean): boolean
