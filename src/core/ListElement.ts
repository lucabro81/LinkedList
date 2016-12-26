import {IListElement} from "./interface/IListElement";

class ListElement implements IListElement {

    public left:any;
    public right:any;
    public data:any;

    public constructor(data:any) {
        this.left = null;
        this.right = null;
        this.data = data;
    }

} export {ListElement}