import {JasmineTestBuilder} from "jasmine-test-builder/package/JasmineTestBuilder";
import {DD} from "./assets/DummyData.asset";
import {LinkedList} from "../app/core/LinkedList";
import {ListElement} from "../app/core/ListElement";

var tb:JasmineTestBuilder<LinkedList<ListElement>> = new JasmineTestBuilder<LinkedList<ListElement>>();

tb.init("LinkedList - Add and Remove - SUITE", LinkedList, [ListElement, ["data2","data3","data4","data5"]]);

    tb.test("Add element")
        .withMethod("addElem", ["data6"])
        .andProp("start")
        .result(DD.listFromArrayData(["data2","data3","data4","data5","data6"]).start);

    tb.test("Add element to right")
        .withMethod("addElemRight", ["data7"])
        .andProp("start")
        .result(DD.listFromArrayData(["data2","data3","data4","data5","data6","data7"]).start);

    tb.test("Add element to left")
        .withMethod("addElemLeft", ["data1"])
        .andProp("start")
        .result(DD.listFromArrayData(["data1","data2","data3","data4","data5","data6","data7"]).start);

    tb.test("Remove element")
        .withMethod("toStart")
        .andMethod("toNext")
        .andMethod("removeElem")
        .andMethod("toStart")
        .andMethod("toNext")
        .andMethod("toNext")
        .andMethod("removeElem")
        .andProp("start")
        .result(DD.listFromArrayData(["data1","data3","data5","data6","data7"]).start);

    tb.test("Remove element by position")
        .withMethod("removeElemByPos", [1])
        .andProp("start")
        .result(DD.listFromArrayData(["data1","data5","data6","data7"]).start);

    tb.test("Remove element by data")
        .withMethod("removeElemByData", ["data6"])
        .andProp("start")
        .result(DD.listFromArrayData(["data1","data5","data7"]).start);

    tb.test("Remove all elements by data")
        .withMethod("removeElemByData", ["data5"])
        .withMethod("removeElemByData", ["data1"])
        .withMethod("removeElemByData", ["data7"])
        .andProp("start")
        .result(DD.listFromArrayData([]).start);

    tb.test("Insert element in an empty list")
        .withMethod("insertElem", ["data1"])
        .andMethod("insertElem", ["data2"])
        .andMethod("insertElem", ["data4"])
        .andMethod("insertElem", ["data5"])
        .andMethod("insertElem", ["data6"])
        .andProp("start")
        .result(DD.listFromArrayData(["data6","data5","data4","data2","data1"]).start);

    tb.test("Insert element in the middle without pass a position")
        .withMethod("toStart")
        .andMethod("toNext")
        .andMethod("toNext")
        .andMethod("toNext")
        .andMethod("insertElem", ["data3"])
        .andProp("start")
        .result(DD.listFromArrayData(["data6","data5","data4","data3","data2","data1"]).start);

    tb.test("Insert element passing a middle position")
        .withMethod("insertElem", ["data7", 4])
        .andProp("start")
        .result(DD.listFromArrayData(["data6","data5","data4","data3","data7","data2","data1"]).start);

    tb.test("Shift list to left")
        .withMethod("shiftLeft")
        .andProp("start")
        .result(DD.listFromArrayData(["data5","data4","data3","data7","data2","data1","data6"]).start);

    tb.test("Shift list to right")
        .withMethod("shiftRight")
        .andProp("start")
        .result(DD.listFromArrayData(["data6","data5","data4","data3","data7","data2","data1"]).start);

    tb.test("Ouroboros on")
        .withMethod("doOuroboros")
        .andProp("end")
        .andProp("next")
        .andProp("data")
        .result("data6");

    tb.test("Ouroboros off")
        .withMethod("undoOuroboros")
        .andProp("end")
        .andProp("next")
        .result(null);

    tb.test("Shift list to left after do doOuroboros")
        .withMethod("doOuroboros")
        .andMethod("shiftLeft")
        .andProp("end")
        .andProp("next")
        .andProp("data")
        .result("data5");

    tb.test("Shift list to left after do doOuroboros")
        .withMethod("doOuroboros")
        .andMethod("shiftRight")
        .andProp("end")
        .andProp("next")
        .andProp("data")
        .result("data6");

    // NB: Ouroboros is now on

    tb.test("Modify data with map() function")
        .withMethod("undoOuroboros")
        .andMethod("map", [(current:any, index:number, list:LinkedList<ListElement>) => {
            return current.data + "_mod";
        }, false])
        .andProp("start")
        .result(DD.listFromArrayData(["data6_mod","data5_mod","data4_mod","data3_mod","data7_mod","data2_mod","data1_mod"]).start);

    // NB: Ouroboros is now off

    tb.test("Do some with forEach() function - not recoursive")
        .withCustomTestFunc((ll:LinkedList<ListElement>) => {
            let arr:Array<any> = [];
            ll.forEach((current:any, index:number, list:LinkedList<ListElement>) => {
                arr.push(current.data.toString().replace("_mod", ""));
            }, false);
            return arr;
        })
        .result([ 'data6', 'data5', 'data4', 'data3', 'data7', 'data2', 'data1' ]);

    tb.test("Do some with forEach() function - recoursive")
        .withCustomTestFunc((ll:LinkedList<ListElement>) => {

            let new_ll:LinkedList<any> = ll.clone(true);
            new_ll.insertElem(ll);

            let arr:Array<any> = [];
            new_ll.forEach((current:any, index:number, list:LinkedList<ListElement>) => {
                arr.push(current.data.toString().replace("_mod", ""));
            }, true);
            return arr;
        })
        .result([ 'data6', 'data5', 'data4', 'data3', 'data7', 'data2', 'data6', 'data5', 'data4', 'data3', 'data7', 'data2', 'data1', 'data1' ]);

tb.run();
