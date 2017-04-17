import {LinkedList} from "../core/LinkedList";
import {ListElement} from "../core/ListElement";

class InfiniteScroll {

    public count:number;
    public cont:HTMLElement;
    public padding_top:number = 21;

    constructor() {}

    public init(cont:HTMLElement) {
        this.count = 0;
        this.cont = cont;
    }

    public howManyElems():number {
        return this.count;
    }

    public destroy():void {

    }

    public createElem(data:any, remove_padding:boolean = true):HTMLElement {

        var cont_elem:HTMLElement = document.createElement("DIV");
        var t = document.createTextNode(data);
        cont_elem.appendChild(t);

        cont_elem.style.width = '100%';
        cont_elem.style.borderBottom = "solid 1px red";
        cont_elem.style.padding = '10px 0';

        if (remove_padding) {
            this.cont.insertBefore(cont_elem, this.cont.childNodes[0]);
            //console.log("cont_elem.offsetHeight", cont_elem.offsetHeight);
            this.padding_top -= cont_elem.offsetHeight;
            //console.log("this.padding_top:", this.padding_top, " - cont_elem.offsetHeight:", cont_elem.offsetHeight);
            this.cont.style.paddingTop = this.padding_top + "px";
        }
        else {
            this.cont.appendChild(cont_elem);
        }

        return cont_elem;
    }

    public removeElem(cont_elem:HTMLElement, add_padding:boolean = true) {
        let offset_height:number = cont_elem.offsetHeight;
        //console.log("offset_height", offset_height);
        this.cont.removeChild(cont_elem);
        if (add_padding) {
            this.padding_top += offset_height;
            //console.log("this.padding_top", this.padding_top);
            this.cont.style.paddingTop = this.padding_top + "px";
        }
    }
}

// APP

function craeteString(l:number) {
    let str:string = '';
    while (l>0) {
        str += 'ziocan ';
        l--;
    }
    return str;
}

let app:InfiniteScroll = new InfiniteScroll();
let infinity_scroll_cont:HTMLElement = document.getElementById("infinite-scroll-cont");
let inner_infinity_scroll_cont:HTMLElement = document.getElementById("inner-infinite-scroll-cont");
app.init(inner_infinity_scroll_cont);

// Create data source
let data_source:Array<string> = [];
for (let i = 0; i < 50000; i++) {
    let l:number = (Math.random() * 100) + 1;
    data_source.push((i+1) + ' - ' + craeteString(l));
}

// Create list
let ll = new LinkedList<ListElement>();
let current_elem_height:number = 0;
ll.init(ListElement);
for (let i = 0; i < 30; i++) {
    ll.addElem(app.createElem(data_source[i], false));
}

current_elem_height = inner_infinity_scroll_cont.offsetHeight;

// EVT
let is_scroll_avaible:boolean = true;
let pag:number = 1;

let previous_scroll_value:number = 0;

infinity_scroll_cont.addEventListener("scroll", (evt:any) => {

    if (infinity_scroll_cont.scrollTop > previous_scroll_value) {
        previous_scroll_value = infinity_scroll_cont.scrollTop;

        if (((infinity_scroll_cont.scrollTop) > current_elem_height - 600) && (is_scroll_avaible)) {

            is_scroll_avaible = false;
            console.log("pag",pag);
            for (let i = 30*pag; i < 30*(pag+1); i++) {

                let new_elem:HTMLElement = app.createElem(data_source[i], false);

                if (pag > 2) {
                    app.removeElem(ll.start.data);
                    ll.shiftLeft().end.data = new_elem;
                }
                else {
                    ll.addElem(new_elem);
                }
            }
            pag++;

            current_elem_height = inner_infinity_scroll_cont.offsetHeight;

            is_scroll_avaible = true;

        }

    }
    else if (infinity_scroll_cont.scrollTop < previous_scroll_value) {
        previous_scroll_value = infinity_scroll_cont.scrollTop;

        if (((infinity_scroll_cont.scrollTop) < (app.padding_top + 600)) && (is_scroll_avaible)) {

            if (pag-3 > 0) {
                is_scroll_avaible = false;
                console.log("fd pag",pag-3, 30*((pag-4)+1), 30*(pag-4));
                for (let i = 30*((pag-4)+1); i >= 30*(pag-4); i--) {

                    //console.log("i", i);

                    let new_elem:HTMLElement = app.createElem(data_source[i]);

                    //if (pag > 2) {
                    app.removeElem(ll.end.data, false);
                    ll.shiftRight().start.data = new_elem;
                    //}
                    //else {
                    //    ll.addElem(new_elem);
                    //}
                    //ll.end.data.innerHTML = data_source[i];
                }
                pag--;

                current_elem_height = inner_infinity_scroll_cont.offsetHeight;

                is_scroll_avaible = true;/**/
            }

        }

    }
});


window['ll'] = ll;
