import {ListElement} from "../../../src/core/ListElement";

class DummyData {

    ////////////////
    // DUMMY DATA //
    ////////////////

    public static A:ListElement = new ListElement("data1");
    public static B:ListElement = new ListElement("data2");
    public static C:ListElement = new ListElement("data3");
    public static D:ListElement = new ListElement("data4");
    public static E:ListElement = new ListElement("data5");

    public static initFirstList() {
        DummyData.A.left = null; DummyData.A.right = DummyData.B;
        DummyData.B.left = DummyData.A; DummyData.B.right = DummyData.C;
        DummyData.C.left = DummyData.B; DummyData.C.right = DummyData.D;
        DummyData.D.left = DummyData.C; DummyData.D.right = DummyData.E;
        DummyData.E.left = DummyData.D; DummyData.E.right = null;
    }

    ////////////////

    public static A1:ListElement = new ListElement("data1");
    public static B1:ListElement = new ListElement("data2");
    public static C1:ListElement = new ListElement("data3");
    public static D1:ListElement = new ListElement("data4");
    public static E1:ListElement = new ListElement("data5");

    public static initSecondList() {
        DummyData.A1.left = null; DummyData.A1.right = DummyData.C1;
        DummyData.C1.left = DummyData.A1; DummyData.C1.right = DummyData.E1;
        DummyData.E1.left = DummyData.C1; DummyData.E1.right = null;
    }

} export{DummyData as DD};
