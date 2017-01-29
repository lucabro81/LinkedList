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
    /*public static initDummyShuffledLinkedListInt():LinkedList<ListElement> {
        var list:LinkedList<ListElement> = new LinkedList<ListElement>();
        list.init(ListElement, [4, 6, 2, 5, 1, 8]);
        return list;
    }*/
    
    //public static ShuffledList:LinkedList<ListElement> = DummyData.initDummyShuffledLinkedListInt();
    
    public static A2:ListElement = new ListElement(1);
    public static B2:ListElement = new ListElement(2);
    public static C2:ListElement = new ListElement(4);
    public static D2:ListElement = new ListElement(5);
    public static E2:ListElement = new ListElement(6);
    public static F2:ListElement = new ListElement(8);

    public static initDummyOrderedLinkedListInt():void {
        DummyData.A2.prev = null; DummyData.A2.next = DummyData.B2;
        DummyData.B2.prev = DummyData.A2; DummyData.B2.next = DummyData.C2;
        DummyData.C2.prev = DummyData.B2; DummyData.C2.next = DummyData.D2;
        DummyData.D2.prev = DummyData.C2; DummyData.D2.next = DummyData.E2;
        DummyData.E2.prev = DummyData.D2; DummyData.E2.next = DummyData.F2;
        DummyData.F2.prev = DummyData.E2; DummyData.F2.next = null;
    }

} export{DummyData as DD};
