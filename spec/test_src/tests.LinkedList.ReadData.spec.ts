import {JasmineTestBuilder} from "jasmine-test-builder";
import {LinkedList} from "../app/core/LinkedList";
import {ListElement} from "../app/core/ListElement";

var tb:JasmineTestBuilder<LinkedList<ListElement>> = new JasmineTestBuilder<LinkedList<ListElement>>();

tb.init("LinkedList - Read Data - SUITE", LinkedList, [ListElement, ["data2","data3","data4","data5","data6","data7"]]);

    tb.test("Get first element")
        .withMethod("toStart")
        .andMethod("get")
        .andProp("data")
        .result("data2");

    tb.test("Get last element")
        .withMethod("toEnd")
        .andMethod("get")
        .andProp("data")
        .result("data7");

    tb.test("Try next 1")
        .withMethod("toStart")
        .andMethod("toNext")
        .andMethod("get")
        .andProp("data")
        .result("data3");

    tb.test("Try next 2")
        .withMethod("toStart")
        .andMethod("toNext")
        .andMethod("toNext")
        .andMethod("get")
        .andProp("data")
        .result("data4");

    tb.test("Try next 3")
        .withMethod("toStart")
        .andMethod("toNext")
        .andMethod("toNext")
        .andMethod("toNext")
        .andMethod("toNext")
        .andMethod("get")
        .andProp("data")
        .result("data6");

    tb.test("Try prev 1")
        .withMethod("toEnd")
        .andMethod("toPrev")
        .andMethod("get")
        .andProp("data")
        .result("data6");

    tb.test("Try prev 2")
        .withMethod("toEnd")
        .andMethod("toPrev")
        .andMethod("toPrev")
        .andMethod("get")
        .andProp("data")
        .result("data5");

    tb.test("Try prev 3")
        .withMethod("toEnd")
        .andMethod("toPrev")
        .andMethod("toPrev")
        .andMethod("toPrev")
        .andMethod("toPrev")
        .andMethod("get")
        .andProp("data")
        .result("data3");

    tb.test("Try list from start to end")
        .withMethod("toStart")
        .andCustomTestFunc((ll:LinkedList<ListElement>) => {
            while (!ll.isEnd()) {
                ll.toNext();
            }
            return ll;
        })
        .andMethod("get")
        .andProp("data")
        .result("data7");

    tb.test("Try list end start to start")
        .withMethod("toEnd")
        .andCustomTestFunc((ll:LinkedList<ListElement>) => {
            while (!ll.isStart()) {
                ll.toPrev();
            }
            return ll;
        })
        .andMethod("get")
        .andProp("data")
        .result("data2");

    tb.test("Is list's start?")
        .withMethod("toEnd")
        .andCustomTestFunc((ll:LinkedList<ListElement>) => {
            while (!ll.isStart()) {
                ll.toPrev();
            }
            return ll;
        })
        .andMethod("isStart")
        .resultTrue();

    tb.test("Is list's end?")
        .withMethod("toStart")
        .andCustomTestFunc((ll:LinkedList<ListElement>) => {
            while (!ll.isEnd()) {
                ll.toNext();
            }
            return ll;
        })
        .andMethod("isEnd")
        .resultTrue();

    tb.test("Verify current after simple insertion")
        .withMethod("insertElem", ["data8"])
        .andMethod("get")
        .andProp("data")
        .result("data8");

    tb.test("Verify current after insertion with position")
        .withMethod("insertElem", ["data9", 3])
        .andMethod("get")
        .andProp("data")
        .result("data9");

    tb.test("Verify current after insertion with position")
        .withMethod("length")
        .result(8);

tb.run();
