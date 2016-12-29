import {ListElement} from "./ListElement";

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
    public constructor() {

    }

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
            new_elem.left = this.prev_elem;
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
            new_elem.right = this.prev_elem;
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
     * @returns {ListElement}
     */
    public getStart():LinkedList {
        this.curr_elem = this.start;
        return this.setCurrentProps();
    }

    /**
     *
      * @returns {ListElement}
     */
    public getNext():LinkedList {
        this.curr_elem = (this.curr_elem.right) ? this.curr_elem.right : this.end;
        return this.setCurrentProps();
    }

    /**
     *
     * @returns {ListElement}
     */
    public getPrev():LinkedList {
        this.curr_elem = (this.curr_elem.left) ? this.curr_elem.left : this.start;
        return this.setCurrentProps();
    }

    /**
     *
     * @returns {ListElement}
     */
    public getEnd():LinkedList {
        this.curr_elem = this.end;
        return this.setCurrentProps();
    }

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

    private setCurrentProps():LinkedList {
        this.left = this.curr_elem.left;
        this.data = this.curr_elem.data;
        this.right = this.curr_elem.right;
        return this;
    }

    /**
     * Is passed elem the first of the list?
     *
     * @param elem
     * @returns {boolean}
     */
    private isStart(elem:ListElement):boolean {
        return elem === this.start;
    }

    /**
     * Is passed elem the last of the list?
     *
     * @param elem
     * @returns {boolean}
     */
    private isEnd(elem:ListElement):boolean {
        return elem === this.start;
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