import {ListElement} from "./ListElement";

// TODO: insert method

class LinkedList {

    private prev_elem:ListElement;
    private curr_elem:ListElement;

    public start:ListElement;
    public end:ListElement;

    // current elem props
    public left:ListElement;
    public data:any;
    public right:ListElement;

    /**
     *
     */
    public constructor() {}

    /**
     *
     */
    public init():void {
        this.start = null;
        this.end = null;
    }

    /**
     *
     * @param data
     */
    public addElem(data:any):LinkedList {
        return this.addElemRight(data);
    }

    /**
     *
     * @param data
     */
    public addElemRight(data:any):LinkedList {

        var new_elem:ListElement = new ListElement(data);

        if (!this.isFirstElem(new_elem)) {
            new_elem.left = this.end;
            this.end.right = new_elem;
            this.end = this.end.right;
        }

        this.curr_elem = this.end;
        this.prev_elem = this.end;

        return this.setCurrentProps();
    }

    /**
     *
     * @param data
     */
    public addElemLeft(data:any):LinkedList {

        var new_elem:ListElement = new ListElement(data);

        if (!this.isFirstElem(new_elem)) {
            new_elem.right = this.start;
            this.start.left = new_elem;
            this.start = this.start.left;
        }

        this.curr_elem = this.start;
        this.prev_elem = this.start;

        return this.setCurrentProps();
    }

    /**
     *
     * @param elem
     */
    public removeElem(elem:ListElement):LinkedList {

        if (this.isStart(elem)) {
            this.removeStart();
            this.curr_elem = this.start;
        }
        else if (this.isEnd(elem)) {
            this.removeEnd();
            this.curr_elem = this.end;
        }
        else {
            var left_elem:ListElement = elem.left;
            var right_elem:ListElement = elem.right;

            left_elem.right = right_elem;
            right_elem.left = left_elem;
            this.curr_elem = right_elem;
        }

        elem = null;

        return this.setCurrentProps();
    }

    /**
     *
     * @param pos
     */
    public removeElemByPos(pos:number):LinkedList {

        if (pos === 0) {
            this.removeStart();
            this.curr_elem = this.start;

            return this.setCurrentProps();
        }

        var i:number = 0;
        var current:ListElement = this.start;

        while (current !== null) {
            if (i === pos) {
                this.curr_elem = current.left;
                this.removeElem(current);
                return;
            }
            i++;
            current = current.right;
        }

        return this.setCurrentProps();
    }

    /**
     *
     * @param data
     */
    public removeElemByData(data:any):LinkedList {
        var current:ListElement = this.start;

        while (current !== null) {
            if (current.data === data) {
                this.curr_elem = current.left;
                this.removeElem(current);
                return;
            }
            current = current.right;
        }

        return this.setCurrentProps();
    }

    /**
     *
     * @param data
     * @param pos
     * @returns {LinkedList}
     */
    public insertElem(data:any, pos:number = -1):LinkedList {

        var elem:ListElement = new ListElement(data);

        if (pos == 0 || (pos <= -1 && this.curr_elem.left == null)) {
            // new start elem
            this.addElemLeft(data);
        }
        else if (pos >= this.length()) {
            // new end elem
            this.addElemRight(data);
        }
        else if ((pos < this.length()) && (pos > 0)) {
            // insert at position
            var i:number = 0;
            this.toStart();
            while (i < pos) {
                this.toNext();
                i++;
            }
            this.insertBeforeCurrent(elem);
        }
        else {
            // insert before current
            this.insertBeforeCurrent(elem);
        }

        return this.setCurrentProps();
    }

    /**
     *
     * @returns {number}
     */
    public length():number {

        var i:number = 0;
        var current:ListElement = this.start;

        while (current) {
            i++;
            current = current.right;
        }

        return i;
    }

    /**
     *
     * @returns {ListElement}
     */
    public toStart():LinkedList {
        this.curr_elem = this.start;
        return this.setCurrentProps();
    }

    /**
     *
      * @returns {ListElement}
     */
    public toNext():LinkedList {
        this.curr_elem = (this.curr_elem.right) ? this.curr_elem.right : this.end;
        return this.setCurrentProps();
    }

    /**
     *
     * @returns {ListElement}
     */
    public toPrev():LinkedList {
        this.curr_elem = (this.curr_elem.left) ? this.curr_elem.left : this.start;
        return this.setCurrentProps();
    }

    /**
     *
     * @returns {ListElement}
     */
    public toEnd():LinkedList {
        this.curr_elem = this.end;
        return this.setCurrentProps();
    }

    public get():ListElement {
        var elem_to_return:ListElement = new ListElement(this.data);
        elem_to_return.left = this.left;
        elem_to_return.right = this.right;
        return elem_to_return;
    }

    /**
     *
     */
    public destroy():void {

        while (this.start !== null) {
            this.removeStart();
        }

        this.end = null;
        this.curr_elem = null;
        this.prev_elem = null;
        this.left = null;
        this.data = null;
        this.right = null;
    }

    /**
     * Is passed elem the first of the list?
     *
     * @param elem
     * @returns {boolean}
     */
    public isStart(elem:ListElement = null):boolean {
        var elem_to_test:ListElement = (elem) ? elem : this.curr_elem;
        return elem_to_test === this.start;
    }

    /**
     * Is passed elem the last of the list?
     *
     * @param elem
     * @returns {boolean}
     */
    public isEnd(elem:ListElement = null):boolean {
        var elem_to_test:ListElement = (elem) ? elem : this.curr_elem;
        return elem_to_test === this.end;
    }

    /**
     *
     * @param elem
     */
    private insertBeforeCurrent(elem:ListElement) {
        var before_elem:ListElement = this.curr_elem.left;
        var after_elem:ListElement = this.curr_elem;

        elem.left = before_elem;
        elem.right = after_elem;
        before_elem.right = elem;
        after_elem.left = elem;

        this.curr_elem = elem;
    }

    /**
     *
     * @returns {LinkedList}
     */
    private setCurrentProps():LinkedList {
        this.left = this.curr_elem.left;
        this.data = this.curr_elem.data;
        this.right = this.curr_elem.right;
        return this;
    }

    /**
     *
     */
    private removeStart():void {
        this.start = this.start.right;
        if (this.start) {
            this.start.left = null;
        }
    }

    /**
     *
     */
    private removeEnd():void {
        this.end = this.end.left;
        if (this.end) {
            this.end.right = null;
        }
    }

    /**
     * There's an empty list?
     *
     * @param new_elem
     * @returns {boolean}
     */
    private isFirstElem(new_elem:ListElement):boolean {
        if (this.start === null) {
            this.startList(new_elem);
            return true;
        }
        return false;
    }

    /**
     * Put the first elem in the list
     *
     * @param new_elem
     */
    private startList(new_elem:ListElement):void {
        this.start = new_elem;
        this.end = this.start;
    }

} export {LinkedList};