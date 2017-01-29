import {LinkedList} from "../../../src/core/LinkedList";
import {ListElement} from "../../../src/core/ListElement";

class CustomFunction {

    public static createList(ll:LinkedList<ListElement>):LinkedList<ListElement> {
        ll.addElem('data1')
            .addElem('data2')
            .addElem('data3')
            .addElem('data4')
            .addElem('data5');
        return ll;
    }
    
    /*public static beforeTest(ll:LinkedList<ListElement>) {
         ll.addElem('data1')
         .addElem('data2')
         .addElem('data4');
     }*/
    
    public static addElemTestFunc(ll:LinkedList<ListElement>):ListElement {
        ll.addElem('data1')
            .addElem('data2')
            .addElem('data3')
            .addElem('data4')
            .addElem('data5');
        return ll.start;
    }
    
    public static addElemRightTestFunc(ll:LinkedList<ListElement>):ListElement {
        ll.addElemRight('data1')
            .addElemRight('data2')
            .addElemRight('data3')
            .addElemRight('data4')
            .addElemRight('data5');
        return ll.start;
    }
    
    public static addElemLeftTestFunc(ll:LinkedList<ListElement>):ListElement {
        ll.addElemLeft('data5')
            .addElemLeft('data4')
            .addElemLeft('data3')
            .addElemLeft('data2')
            .addElemLeft('data1');
        return ll.start;
    }
    
    public static removeElemTestFunc(ll:LinkedList<ListElement>):ListElement {
        var list:LinkedList<ListElement> = CustomFunction.createList(ll);
    
        var elem1:ListElement = list.toStart()
            .toNext()
            .get(); // data2
    
        var elem2:ListElement = list.toStart()
            .toNext()
            .toNext()
            .toNext()
            .get(); // data4
    
        list.removeElem(elem1);
        list.removeElem(elem2);
    
        return list.start;
    }
    
    public static removeElemByPosTestFunc(ll:LinkedList<ListElement>):ListElement {
        var list:LinkedList<ListElement> = CustomFunction.createList(ll);
    
        list.removeElemByPos(1);
        list.removeElemByPos(2);
    
        return list.start;
    }
    
    public static removeElemByDataTestFunc(ll:LinkedList<ListElement>):ListElement {
        var list:LinkedList<ListElement> = CustomFunction.createList(ll);
    
        list.removeElemByData("data2");
        list.removeElemByData("data4");
    
        return list.start;
    }
    
    public static getStart(ll:LinkedList<ListElement>):ListElement {
        var list:LinkedList<ListElement> = CustomFunction.createList(ll);
        return list.toStart().get();
    }
    
    public static getEnd(ll:LinkedList<ListElement>):ListElement {
        var list:LinkedList<ListElement> = CustomFunction.createList(ll);
        return list.toEnd().get();
    }
    
    public static nextTest(ll:LinkedList<ListElement>):any {
        var list:LinkedList<ListElement> = CustomFunction.createList(ll);
        var elem1:ListElement = list.toStart()
            .toNext()
            .get();
        var elem2:ListElement = list.toStart()
            .toNext()
            .toNext()
            .get();
        var elem3:ListElement = list.toStart()
            .toNext()
            .toNext()
            .toNext()
            .toNext()
            .get();
    
        return {"second":elem1, "third":elem2, "fifth":elem3};
    }
    
    public static prevTest(ll:LinkedList<ListElement>):any {
        var list:LinkedList<ListElement> = CustomFunction.createList(ll);
        var elem1:ListElement = list.toEnd()
            .toPrev()
            .get();
        var elem2:ListElement = list.toEnd()
            .toPrev()
            .toPrev()
            .get();
        var elem3:ListElement = list.toEnd()
            .toPrev()
            .toPrev()
            .toPrev()
            .toPrev()
            .get();
    
        return {"fifth":elem1, "fourth":elem2, "first":elem3};
    }
    
    public static fromStartToEnd(ll:LinkedList<ListElement>):ListElement {
    
        var list:LinkedList<ListElement> = CustomFunction.createList(ll);
    
        list.toStart();
    
        while (!list.isEnd()) {
            list.toNext();
        }
    
        return list.get();
    }
    
    public static fromEndToStart(ll:LinkedList<ListElement>):ListElement {
    
        var list:LinkedList<ListElement> = CustomFunction.createList(ll);
    
        list.toEnd();
    
        while (!list.isStart()) {
            list.toPrev();
        }
    
        return list.get();
    }
    
    public static insertElement(ll:LinkedList<ListElement>):ListElement {
        ll.addElem('data1')
            .addElem('data2')
            .addElem('data4')
            .addElem('data5');
    
        ll.toStart().toNext().toNext().insertElem('data3');
    
        return ll.start;
    }
    
    public static insertElementByPos(ll:LinkedList<ListElement>):ListElement {
        ll.addElem('data1')
            .addElem('data2')
            .addElem('data4')
            .addElem('data5');
    
        ll.insertElem('data3', 2);
    
        return ll.start;
    }

    public static getCurrent(ll:LinkedList<ListElement>):ListElement {
        return ll.get();
    }

    public static getLength(ll:LinkedList<ListElement>):number {
        var list:LinkedList<ListElement> = CustomFunction.createList(ll);

        return list.length();
    }

    public static orderList(ll:LinkedList<ListElement>):ListElement {

        ll.addElem(4)
            .addElem(6)
            .addElem(2)
            .addElem(5)
            .addElem(1)
            .addElem(8);

        return ll.rSort(null).start;
    }

} export {CustomFunction as CF};