import {ListElement} from "./ListElement";

class LinkedList {

    private prev_elem:ListElement;

    public start:ListElement;
    public end:ListElement;

    /**
     *
     */
    public constructor() {

    }

    public initList() {
        this.start = null;
        this.end = null;
    }

    /**
     *
     * @param data
     */
    public addElem(data:any) {
        this.addElemRight(data);
    }

    /**
     *
     * @param data
     */
    public addElemRight(data:any) {

        var new_elem:ListElement = new ListElement(data);

        if (!this.isFirstElem(new_elem)) {
            new_elem.left = this.prev_elem;
            this.end.right = new_elem;
            this.end = this.end.right;
        }

        this.prev_elem = this.end;
    }

    /**
     *
     * @param data
     */
    public addElemLeft(data:any) {

        var new_elem:ListElement = new ListElement(data);

        if (!this.isFirstElem(new_elem)) {
            new_elem.right = this.prev_elem;
            this.start.left = new_elem;
            this.start = this.start.left;
        }

        this.prev_elem = this.start;
    }

    /**
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
     *
     * @param new_elem
     */
    private startList(new_elem:ListElement) {
        this.start = new_elem;
        this.end = this.start;
    }

} export {LinkedList};