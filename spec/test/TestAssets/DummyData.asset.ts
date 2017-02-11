import {ListElement} from "../../../src/core/ListElement";
import {LinkedList} from "../../../src/core/LinkedList";

class DummyData {

    ////////////////
    // DUMMY DATA //
    ////////////////

    public static A:ListElement = new ListElement("data1");
    public static B:ListElement = new ListElement("data2");
    public static C:ListElement = new ListElement("data3");
    public static D:ListElement = new ListElement("data4");
    public static E:ListElement = new ListElement("data5");

    public static initFirstList():void {
        DummyData.A.prev = null; DummyData.A.next = DummyData.B;
        DummyData.B.prev = DummyData.A; DummyData.B.next = DummyData.C;
        DummyData.C.prev = DummyData.B; DummyData.C.next = DummyData.D;
        DummyData.D.prev = DummyData.C; DummyData.D.next = DummyData.E;
        DummyData.E.prev = DummyData.D; DummyData.E.next = null;
    }

    ////////////////

    public static A1:ListElement = new ListElement("data1");
    public static B1:ListElement = new ListElement("data2");
    public static C1:ListElement = new ListElement("data3");
    public static D1:ListElement = new ListElement("data4");
    public static E1:ListElement = new ListElement("data5");

    public static initSecondList():void {
        DummyData.A1.prev = null; DummyData.A1.next = DummyData.C1;
        DummyData.C1.prev = DummyData.A1; DummyData.C1.next = DummyData.E1;
        DummyData.E1.prev = DummyData.C1; DummyData.E1.next = null;
    }

    ////////////////
    
    // TODO: for now only with int data, wait for the func param i
    public static initDummyShuffledLinkedListInt():LinkedList<ListElement> {
        var l1:LinkedList<ListElement> = new LinkedList<ListElement>();
        l1.init(ListElement, [4, 6, 2, 5, 1, 8]);
        return l1;
    }
    public static initDummyOrderedLinkedListInt():LinkedList<ListElement> {
        var l2:LinkedList<ListElement> = new LinkedList<ListElement>();
        l2.init(ListElement, [1, 2, 4, 5, 6, 8]);
        return l2;
    }
    public static list2DataElemsLeft(take_instance:boolean = false):LinkedList<ListElement> {
        if (take_instance) {
            return DummyData.list2DataElemsLeft_instance;
        }
        var l3:LinkedList<ListElement> = new LinkedList<ListElement>();
        l3.init(ListElement, ["data2", "data3"]);
        return l3;
    }
    public static list3DataElemsRight(take_instance:boolean = false):LinkedList<ListElement> {
        if (take_instance) {
            return DummyData.list2DataElemsLeft_instance;
        }
        var l3:LinkedList<ListElement> = new LinkedList<ListElement>();
        l3.init(ListElement, ["data1", "data2", "data3"]);
        return l3;
    }
    public static list4DataElemsRight():LinkedList<ListElement> {
        var l4:LinkedList<ListElement> = new LinkedList<ListElement>();
        l4.init(ListElement, ["data1", "data2", "data3", "data4"]);
        return l4;
    }
    public static listFromArrayData(data_arr:Array<any>, take_instance:boolean = false):LinkedList<ListElement> {
        var ll:LinkedList<ListElement> = new LinkedList<ListElement>();
        if (take_instance) {
            return DummyData.list2DataElemsLeft_instance;
        }
        ll.init(ListElement, data_arr);
        DummyData.listFromArrayData_instance = ll;
        return ll;
    }
    //
    public static shuffledList:LinkedList<ListElement> = DummyData.initDummyShuffledLinkedListInt();
    public static orderedList:LinkedList<ListElement> = DummyData.initDummyOrderedLinkedListInt();
    private static list2DataElemsLeft_instance:LinkedList<ListElement> = DummyData.list2DataElemsLeft();
    private static list3DataElemsRight_instance:LinkedList<ListElement> = DummyData.list3DataElemsRight();
    private static listFromArrayData_instance:LinkedList<ListElement>;
    // public static list3DataElems:LinkedList<ListElement> = DummyData.list3DataElems();
    // public static list4DataElems:LinkedList<ListElement> = DummyData.init4DataElemsLinkedList();

    public static A2:ListElement = new ListElement(1);
    public static B2:ListElement = new ListElement(2);
    public static C2:ListElement = new ListElement(4);
    public static D2:ListElement = new ListElement(5);
    public static E2:ListElement = new ListElement(6);
    public static F2:ListElement = new ListElement(8);

    /*public static initDummyOrderedLinkedListInt():void {
        DummyData.A2.prev = null; DummyData.A2.next = DummyData.B2;
        DummyData.B2.prev = DummyData.A2; DummyData.B2.next = DummyData.C2;
        DummyData.C2.prev = DummyData.B2; DummyData.C2.next = DummyData.D2;
        DummyData.D2.prev = DummyData.C2; DummyData.D2.next = DummyData.E2;
        DummyData.E2.prev = DummyData.D2; DummyData.E2.next = DummyData.F2;
        DummyData.F2.prev = DummyData.E2; DummyData.F2.next = null;
    }*/

} export{DummyData as DD};
