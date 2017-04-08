import {ListElement} from "./ListElement";

// TODO: create and test merge
// TODO: create and test sort
// TODO: test contain
// TODO: test pos
// TODO: test getElemAtPos
// TODO: test map
// TODO: create and test reduce
// TODO: create and test slice
// TODO: create and test spice
// TODO: test forEach
// TODO: optimize sort function

class LinkedList<T extends ListElement>{

    public start:T;
    public end:T;

    public cloned_list:LinkedList<T>;

    // current elem props
    public prev:T;
    public data:any;
    public next:T;

    private _prev_elem:T;
    private _curr_elem:T;
    private _elem_class:{new(data:any):T;};
    private _sort_func:Function;
    private _length_num:number;
    private _is_ouroboros:boolean;

    /**
     *
     */
    public constructor() {}

////////////////////////////////////////////////
//////////////////// PUBLIC ////////////////////
////////////////////////////////////////////////

    /**
     *
     */
    public init(c: {new(data:any): T; }, init_data:Array<any> = []):void {
        this._elem_class = c;

        this.start = null;
        this.end = null;
        this._prev_elem = null;
        this._curr_elem = null;
        this._sort_func = this._defaultSortFunc();
        this._length_num = 0;

        this.prev = null;
        this.data = null;
        this.next = null;
        this.cloned_list = null;

        this._is_ouroboros = false;

        this._setUpList(init_data);
    }

    /**
     *
     * @param data
     * @param ll
     * @returns {LinkedList<T>}
     */
    public addElem(data:any, ll:LinkedList<T> = null):LinkedList<T> {
        return this.addElemRight(data, ll);
    }

    /**
     *
     * @param data
     * @param ll
     * @returns {LinkedList<T>}
     */
    public addElemRight(data:any, ll:LinkedList<T> = null):LinkedList<T> {

        //let list: LinkedList<T> = this._getContext(ll);

        let new_elem: T = new this._elem_class(data);

        if (!this._isFirstElem(new_elem)) {
            new_elem.prev = this.end;
            this.end.next = new_elem;
            this.end = this.end.next;
        }

        this._curr_elem = this.end;
        this._prev_elem = this.end;
        this._length_num++;

        return this._setCurrentProps();
    }

    /**
     *
     * @param data
     * @param ll
     * @returns {LinkedList<T>}
     */
    public addElemLeft(data:any, ll:LinkedList<T> = null):LinkedList<T> {

        let list: LinkedList<T> = this._getContext(ll);

        let new_elem:T = new list._elem_class(data);

        if (!list._isFirstElem(new_elem)) {
            new_elem.next = list.start;
            list.start.prev = new_elem;
            list.start = list.start.prev;
        }

        list._curr_elem = list.start;
        list._prev_elem = list.start;
        this._length_num++;

        return list._setCurrentProps();
    }

    /**
     *
     * @param elem
     */
    public removeElem(elem:T = null):LinkedList<T> {

        if (elem === null) {
            elem = this._curr_elem;
        }

        if (this.isStart(elem)) {
            this._removeStart();
            this._curr_elem = this.start;
        }
        else if (this.isEnd(elem)) {
            this._removeEnd();
            this._curr_elem = this.end;
        }
        else {
            let _prev_elem:T = elem.prev;
            let next_elem:T = elem.next;

            if (_prev_elem) {
                _prev_elem.next = next_elem;
            }
            if (next_elem) {
                next_elem.prev = _prev_elem;
            }

            this._curr_elem = next_elem;
            this._length_num--;
        }

        elem = null;

        return this._setCurrentProps();
    }

    /**
     *
     * @param pos
     */
    public removeElemByPos(pos:number):LinkedList<T> {

        if (pos === 0) {
            this._removeStart();
            this._curr_elem = this.start;

            return this._setCurrentProps();
        }

        let i:number = 0;
        let current:T = this.start;

        while (current !== null) {
            if (i === pos) {
                this._curr_elem = current.prev;
                this.removeElem(current);
                break;
            }
            i++;
            current = current.next;
        }

        //this._length_num--;
        return this._setCurrentProps();
    }

    /**
     *
     * @param data
     */
    public removeElemByData(data:any):LinkedList<T> {
        let current:T = this.start;

        while (current !== null) {
            if (current.data === data) {
                this._curr_elem = current.prev;
                this.removeElem(current);
                break;
            }
            current = current.next;
        }

        //this._length_num--;
        return this._setCurrentProps();
    }

    /**
     *
     * @param data
     * @param pos
     * @returns {LinkedList}
     */
    public insertElem(data:any, pos:number = -1):LinkedList<T> {

        let elem:T = new this._elem_class(data);

        if (pos == 0 ||
            (pos <= -1 && (this._curr_elem && this._curr_elem.prev === null)) ||
            this._curr_elem === null) {
            // new start elem
            this.addElemLeft(data);
        }
        else if (pos >= this.length()) {
            // new end elem
            this.addElemRight(data);
        }
        else if ((pos < this.length()) && (pos > 0)) {
            // insert at position
            let i:number = 0;
            this.toStart();
            while (i < pos) {
                this.toNext();
                i++;
            }
            this._insertBeforeCurrent(elem);
        }
        else {
            // insert before current
            this._insertBeforeCurrent(elem);
        }

        return this._setCurrentProps();
    }

    /**
     *
     * @returns {number}
     */
    public length():number {

        /*let i:number = 0;
         let current:T = this.start;

         while (current) {
         i++;
         current = current.next;
         }

         return i;*/
        return this._length_num;
    }

    /**
     *
     * @returns {LinkedList<T>}
     */
    public toStart(ll:LinkedList<T> = null):LinkedList<T> {
        let list: LinkedList<T> = this._getContext(ll);
        list._curr_elem = list.start;
        return list._setCurrentProps();
    }

    /**
     *
     * @returns {LinkedList<T>}
     */
    public toNext():LinkedList<T> {
        //let list: LinkedList<T> = this._getContext(ll);
        //list._curr_elem = (list._curr_elem.next) ? list._curr_elem.next : list.end;
        //this._curr_elem = (this._curr_elem.next) ? this._curr_elem.next : null;

        this._curr_elem = this._curr_elem.next;
        //this._curr_elem = (this._curr_elem.next) ? this._curr_elem.next : null;
        return this._setCurrentProps();
    }

    /**
     *
     * @returns {LinkedList<T>}
     */
    public toPrev():LinkedList<T> {
        //let list: LinkedList<T> = this._getContext(ll);
        //list._curr_elem = (list._curr_elem.prev) ? list._curr_elem.prev : list.start;
        this._curr_elem = (this._curr_elem.prev) ? this._curr_elem.prev : null;
        return this._setCurrentProps();
    }

    /**
     *
     * @returns {LinkedList<T>}
     */
    public toEnd(ll:LinkedList<T> = null):LinkedList<T> {
        let list: LinkedList<T> = this._getContext(ll);
        list._curr_elem = list.end;
        return list._setCurrentProps();
    }

    /**
     *
     * @returns {T}
     */
    public get():T {
        //return (this._curr_elem) ? this._curr_elem : this._prev_elem;
        return (this._curr_elem) ? this._curr_elem : null;
    }

    /**
     *
     */
    public destroy():void {

        while (this.start !== null) {
            this._removeStart();
        }

        this.end = null;
        this._curr_elem = null;
        this._prev_elem = null;
        this.prev = null;
        this.data = null;
        this.next = null;
        this._sort_func = null;
        this._length_num = 0;
        this._is_ouroboros = false;
    }

    /**
     * Is passed elem the first of the list?
     *
     * @param elem
     * @returns {boolean}
     */
    public isStart(elem:T = null):boolean {
        let elem_to_test:T = (elem) ? elem : this._curr_elem;
        return elem_to_test === this.start;
    }

    /**
     * Is passed elem the last of the list?
     *
     * @param elem
     * @returns {boolean}
     */
    public isEnd(elem:T = null):boolean {
        let elem_to_test:T = (elem) ? elem : this._curr_elem;
        return elem_to_test === this.end;
    }

    /**
     *
     * @param return_cloned
     * @returns {LinkedList<T>}
     */
    public clone(return_cloned:boolean = false):LinkedList<T> {

        // init
        let ll:LinkedList<T> = new LinkedList<T>();
        ll.init(this._elem_class);

        // add elems
        let current:T = this.start;
        while(current) {
            ll.addElem(current.data);
            current = current.next;
        }

        this.cloned_list = ll;

        if (return_cloned) {
            return ll;
        }

        return this._setCurrentProps();
    }

    /**
     *
     * @param list_to_append
     * @returns {LinkedList}
     */
    public concat(list_to_append:LinkedList<T>):LinkedList<T> {

        let current:T = list_to_append.start;

        while(current) {
            this.addElem(current.data);
            current = current.next;
        }

        return this;
    }

    /**
     *
     * @param list_to_merge
     * @param func
     * @returns {LinkedList<T>}
     */
    public rMerge(list_to_merge:LinkedList<T>, func:Function = null):LinkedList<T> {
        return this.concat(list_to_merge).rSort(func);
    }

    /**
     * TODO: merge list without recoursion
     *
     * @param list_to_merge
     * @param func
     * @returns {LinkedList<T>}
     */
    public merge(list_to_merge:LinkedList<T>, func:Function = null):LinkedList<T> {
        return this.concat(list_to_merge).sort(func);
    }

    /**
     *
     * @returns {Array}
     */
    public toArray():Array<any> {

        let current:T = this.start;
        let arr_to_return:Array<any> = [];

        while (current) {
            arr_to_return.push(current.data);
            current = current.next;
        }

        return arr_to_return;
    }

    /**
     *
     * @param _sort_func
     * @param list
     */
    public rSort(_sort_func:Function = null, list:LinkedList<T> = null):LinkedList<T> {
        if (_sort_func !== null) {
            this._sort_func = _sort_func;
        }
        return this._setState(this._rMergeSort(list));
    }

    /**
     *
     * @param _sort_func
     * @param list
     */
    public sort(_sort_func:Function = null, list:LinkedList<T> = null):LinkedList<T> {
        if (_sort_func !== null) {
            this._sort_func = _sort_func;
        }
        return this._setState(this._mergeSort(list));
    }

    /**
     *
     * @param list
     * @param equality_func
     * @returns {boolean}
     */
    public isEqual(list:LinkedList<T>, equality_func:(a:T, b:T) => boolean = null):boolean {

        let current_list_elem:T = list.start;
        let current_this_elem:T = this.start;

        if (list.length() !== this.length()) {
            return false;
        }

        if (equality_func === null) {
            equality_func = (a:T, b:T):boolean => {
                return a.data === b.data;
            }
        }

        while (current_list_elem) {

            if (equality_func(current_list_elem, current_this_elem)) {
                return false;
            }

            current_list_elem = current_list_elem.next;
            current_this_elem = current_this_elem.next;
        }

        return true;
    }

    /**
     * Does the list contain the data?, eventualy return the first element
     *
     * @param data
     * @returns {any}
     */
    public contain(data:any):T|null {
        let current:T = this.start;

        while(current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }

        return null;
    }

    /**
     * Return an array of positions of elements matching with the specified data
     *
     * @param data
     * @returns {Array<number>}
     */
    public pos(data:any):Array<number> {

        let current:T = this.start;
        let i:number = 0;
        let pos_arr:Array<number> = [];

        while(current) {
            if (current.data === data) {
                pos_arr.push(i);
            }
            i++;
            current = current.next;
        }

        return pos_arr;
    }

    /**
     * Return the elements at the specified position
     *
     * @param pos
     */
    public getElemAtPos(pos:number):T {

        let current:T = this.start;
        let i:number = 0;

        while(current) {
            if (i === pos) {
                return current
            }
            i++;
            current = current.next;
        }

        return null;

    }

    /**
     * TODO: pass the elements to shift?
     * @returns {LinkedList<T>}
     */
    public shiftLeft():LinkedList<T> {

        let new_end:T = this.start;

        this.start = new_end.next;
        if (!this._is_ouroboros) {
            this.start.prev = null;
        }

        new_end.prev = this.end;
        this.end.next = new_end;

        this.end = new_end;
        if (!this._is_ouroboros) {
            this.end.next = null;
        }

        return this._setCurrentProps();
    }

    /**
     * TODO: pass the elements to shift?
     * @returns {LinkedList<T>}
     */
    public shiftRight():LinkedList<T> {

        let new_start:T = this.end;

        this.end = new_start.prev;
        if (!this._is_ouroboros) {
            this.end.next = null;
        }

        new_start.next = this.start;
        this.start.prev = new_start;

        this.start = new_start;
        if (!this._is_ouroboros) {
            this.start.prev = null;
        }

        return this._setCurrentProps();
    }

    /**
     *
     * @returns {LinkedList<T>}
     */
    public doOuroboros():LinkedList<T> {
        this.start.prev = this.end;
        this.end.next = this.start;
        this._is_ouroboros = true;
        return this._setCurrentProps();
    }

    /**
     *
     * @returns {LinkedList<T>}
     */
    public undoOuroboros():LinkedList<T> {
        this.start.prev = null;
        this.end.next = null;
        this._is_ouroboros = false;
        return this._setCurrentProps();
    }

    /**
     *
     * @returns {boolean}
     */
    public isOuroborusActive():boolean {
        return this._is_ouroboros;
    }

    /**
     *
     * @param callback
     * @param new_list
     * @returns {LinkedList<T>}
     */
    public map(callback:(current, index, list) => any, new_list:boolean = true):LinkedList<T> {

        let list:LinkedList<T>;

        if (new_list) {
            list = this.clone(true);
        }
        else {
            list = this;
        }

        this._accrossList(callback, list, false, true);

        return list;
    }

    /**
     *
     * @param callback
     * @param recursive
     * @param context
     * @returns {LinkedList<T>}
     */
    public forEach(callback:(current:T,
                             index:number,
                             list:LinkedList<T>) => void,
                   recursive:boolean = false,
                   context:LinkedList<T> = null):LinkedList<T> {

        if (context !== null) {
            context = this;
        }

        this._accrossList(callback, context, recursive, false);


        return context._setCurrentProps();
    }

    /**
     *
     * @param start
     * @param delete_count
     * @param items_to_add
     * @returns {LinkedList<T>}
     */
    public slice(start:number,
                 delete_count:number,
                 ...items_to_add:Array<any>):LinkedList<T> {

        let i:number = 0;

        return this._setCurrentProps();
    }

    /**
     *
     */
    /*public splice():LinkedList<T> {

    }*/


/////////////////////////////////////////////////
//////////////////// PRIVATE ////////////////////
/////////////////////////////////////////////////

    /**
     *
     * @param callback
     * @param list
     * @param recursive
     * @param modify
     * @private
     */
    private _accrossList(callback:(item:LinkedList<T>|T, i:number, context:LinkedList<T>) => any,
                         list:LinkedList<T>,
                         recursive:boolean,
                         modify:boolean):void {

        let i:number = 0;

        list.toStart();
        while (list.get()) {
            list._forEachCallbackContainer(callback, list.get(), i, recursive, modify);
            i++;
            list.toNext();
        }
    }

    /**
     *
     * @param callback
     * @param current
     * @param index
     * @param recursive
     * @param modify
     * @private
     */
    private _forEachCallbackContainer(callback:(current:LinkedList<T>|T, index:number, list:LinkedList<T>) => any,
                                      current:any,
                                      index:number,
                                      recursive:boolean,
                                      modify:boolean):void {
        if (modify) {
            current.data = callback(current, index, this);
        }
        else {
            callback(current, index, this);
        }

        if (recursive && current.start !== undefined) {
            this.forEach(callback, recursive, current);
        }
    }

    /**
     *
     * @param ll
     * @returns {LinkedList<T>}
     * @private
     */
    private _getContext(ll:LinkedList<T>):LinkedList<T> {
        let list:LinkedList<T>;

        if (ll) {
            list = ll;
        }
        else {
            list = this;
        }

        return list
    }

    /**
     *
     * @returns {(a:T, b:T)=>boolean}
     * @private
     */
    private _defaultSortFunc() {
        return (a:T, b:T):boolean => {
            return a <= b;
        }
    }

    /**
     * TODO: destroy sub lists?
     *
     * @param ll
     * @returns {any}
     * @private
     */
    private _rMergeSort(ll:LinkedList<T>):LinkedList<T> {

        let list:LinkedList<T>;

        if (ll) {
            list = ll;
        }
        else {
            list = this;
        }

        let l:number = list.length();

        if (l <= 1) {
            return list;
        }

        let sub_list_left:LinkedList<T> = new LinkedList<T>();
        let sub_list_right:LinkedList<T> = new LinkedList<T>();
        let i:number = 0;
        let current:T = list.start;

        sub_list_left.init(this._elem_class);
        sub_list_right.init(this._elem_class);

        // TODO: try to refactor using pointers and moving functions
        while (current) {
            if (i < l/2) {
                sub_list_left.addElem(current.data);
            }
            else {
                sub_list_right.addElem(current.data);
            }
            current = current.next;
            i++;
        }

        sub_list_left = this._rMergeSort(sub_list_left);
        sub_list_right = this._rMergeSort(sub_list_right);

        return this._mergeMethod(sub_list_left, sub_list_right);
    }

    /**
     * TODO: merge sort without recoursion
     *
     * @param list
     * @returns {LinkedList}
     * @private
     */
    private _mergeSort(list:LinkedList<T>):LinkedList<T> {
        return this;
    }

    /**
     *
     * @param sub_list_left
     * @param sub_list_right
     * @returns {LinkedList}
     * @private
     */
    private _mergeMethod(sub_list_left:LinkedList<T>,
                         sub_list_right:LinkedList<T>):LinkedList<T> {

        let sub_list_result:LinkedList<T> = new LinkedList<T>();
        sub_list_result.init(this._elem_class);

        let current_left:T = sub_list_left.start;
        let current_right:T = sub_list_right.start;

        while (current_left != null && current_right != null) {
            if (this._sort_func(sub_list_left.start.data, sub_list_right.start.data)) {
                sub_list_result.addElem(current_left.data);
                sub_list_left.removeElem(current_left);
            }
            else {
                sub_list_result.addElem(current_right.data);
                sub_list_right.removeElem(current_right);
            }

            current_left = sub_list_left.start;
            current_right = sub_list_right.start;
        }

        while (current_left != null) {
            sub_list_result.addElem(current_left.data);
            sub_list_left.removeElem(current_left);
            current_left = sub_list_left.start;
        }

        while (current_right != null) {
            sub_list_result.addElem(current_right.data);
            sub_list_right.removeElem(current_right);
            current_right = sub_list_right.start;
        }

        return sub_list_result;
    }

    /**
     *
     * @param arr
     * @private
     */
    private _destroyArray(arr:Array<any>) {
        let l:number = arr.length;
        for (let i = l - 1; i >= 0; i--) {
            arr.pop();
        }
    }

    /**
     *
     * @private
     */
    private _setUpList(init_data:Array<any>):void {

        let l:number = init_data.length;

        for (let i = 0; i < l; i++) {
            let data:any = init_data[i];
            this.addElem(data);
        }
    }

    /**
     *
     * @param elem
     * @private
     */
    private _insertBeforeCurrent(elem:T):void {
        let before_elem:T = this._curr_elem.prev;
        let after_elem:T = this._curr_elem;

        elem.prev = before_elem;
        elem.next = after_elem;
        before_elem.next = elem;
        after_elem.prev = elem;
        this._length_num++;

        this._curr_elem = elem;
    }

    /**
     *
     * @returns {LinkedList}
     * @private
     */
    private _setCurrentProps():LinkedList<T> {

        this.prev = (this._curr_elem) ? this._curr_elem.prev : null;
        this.data = (this._curr_elem) ? this._curr_elem.data : null;
        this.next = (this._curr_elem) ? this._curr_elem.next : null;

        return this;
    }

    /**
     *
     * @param context
     * @returns {LinkedList}
     * @private
     */
    private _setState(context:LinkedList<T>):LinkedList<T> {

        this._prev_elem = context._prev_elem;
        this._curr_elem = context._curr_elem;
        this._elem_class = context._elem_class;
        this._sort_func = context._sort_func;

        this.start = context.start;
        this.end = context.end;

        this.cloned_list = context.cloned_list;

        // current elem props
        this.prev = context.prev;
        this.data = context.data;
        this.next = context.next;

        return this;
    }

    /**
     *
     * @private
     */
    private _removeStart():void {
        this.start = this.start.next;
        if (this.start) {
            this.start.prev = null;
        }
        this._length_num--;
    }

    /**
     *
     * @private
     */
    private _removeEnd():void {
        this.end = this.end.prev;
        if (this.end) {
            this.end.next = null;
        }
        this._length_num--;
    }

    /**
     * There's an empty list?
     *
     * @param new_elem
     * @returns {boolean}
     * @private
     */
    private _isFirstElem(new_elem:T):boolean {
        if (this.start === null) {
            this._startList(new_elem);
            return true;
        }
        return false;
    }

    /**
     * Put the first elem in the list
     *
     * @param new_elem
     * @private
     */
    private _startList(new_elem:T):void {
        this.start = new_elem;
        this.end = this.start;
    }

} export {LinkedList};