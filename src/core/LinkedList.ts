import {ListElement} from "./ListElement";

class LinkedList {

    private prev_elem:ListElement;
    private curr_elem:ListElement;

    public start:ListElement;
    public end:ListElement;

    /**
     *
     */
    public constructor() {

    }

    public init():void {
        this.start = null;
        this.end = null;
    }

    /**
     *
     * @param data
     */
    public addElem(data:any):void {
        this.addElemRight(data);
    }

    /**
     *
     * @param data
     */
    public addElemRight(data:any):void {

        var new_elem:ListElement = new ListElement(data);

        if (!this.isFirstElem(new_elem)) {
            new_elem.left = this.prev_elem;
            this.end.right = new_elem;
            this.end = this.end.right;
        }

        this.curr_elem = this.end;
        this.prev_elem = this.end;
    }

    /**
     *
     * @param data
     */
    public addElemLeft(data:any):void {

        var new_elem:ListElement = new ListElement(data);

        if (!this.isFirstElem(new_elem)) {
            new_elem.right = this.prev_elem;
            this.start.left = new_elem;
            this.start = this.start.left;
        }

        this.curr_elem = this.start;
        this.prev_elem = this.start;
    }

    /**
     *
     * @param elem
     */
    public removeElem(elem:ListElement):void {

        if (this.isStart(elem)) {
            this.removeStart();
        }
        else if (this.isEnd(elem)) {
            this.removeEnd();
        }
        else {
            var left_elem:ListElement = elem.left;
            var right_elem:ListElement = elem.right;

            left_elem.right = right_elem;
            right_elem.left = left_elem;
        }

        elem = null;
    }

    /**
     *
     * @param pos
     */
    public removeElemByPos(pos:number):void {
        if (pos === 0) {
            this.removeStart();
            return;
        }

        var i:number = 0;
        var current:ListElement = this.start;

        while (current !== null) {
            if (i === pos) {
                this.removeElem(current);
                return;
            }
            current = current.right;
        }
    }

    /**
     *
     * @param data
     */
    public removeElemByData(data:any):void {
        var current:ListElement = this.start;

        while (current !== null) {
            if (current.data === data) {
                this.removeElem(current);
                return;
            }
            current = current.right;
        }
    }

    /**
     *
     * @returns {ListElement}
     */
    public getStart():ListElement {
        this.curr_elem = this.start;
        return this.curr_elem;
    }

    /**
     *
      * @returns {ListElement}
     */
    public getNext():ListElement {
        this.curr_elem = (this.curr_elem.right) ? this.curr_elem.right : this.end;
        return this.curr_elem;
    }

    /**
     *
     * @returns {ListElement}
     */
    public getPrev():ListElement {
        this.curr_elem = (this.curr_elem.left) ? this.curr_elem.left : this.start;
        return this.curr_elem;
    }

    /**
     *
     * @returns {ListElement}
     */
    public getEnd():ListElement {
        this.curr_elem = this.end;
        return this.curr_elem;
    }

    public destroy():void {

        while (this.start !== null) {
            this.removeStart();
        }

        this.start = null;
        this.end = null;
        this.curr_elem = null;
        this.prev_elem = null;
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