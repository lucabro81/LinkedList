import {ListElement} from "../../../src/core/ListElement";
import {LinkedList} from "../../../src/core/LinkedList";

class DummyData {

    ////////////////
    // DUMMY DATA //
    ////////////////

    public static list:LinkedList<ListElement> = new LinkedList<ListElement>();

    // TODO: for now only with int data, wait for the func param i
    public static initDummyLinkedList():void {
        DummyData.list.init(ListElement, []);
    }

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

} export{DummyData as DD};
