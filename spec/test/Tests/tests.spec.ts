import {JasmineTestBuilder} from "../JasmineTestBuilder/JasmineTestBuilder";
import {LinkedList} from "../../../src/core/LinkedList";
import {DD} from "../TestAssets/DummyData.asset";
import {CF} from "../TestAssets/CustomFunction.asset";

var tb:JasmineTestBuilder<LinkedList> = new JasmineTestBuilder<LinkedList>();

///////////
// TESTS //
///////////

/*
describe("LinkedList SUITE", () => {
    it("Add element TEST", () => {
        var ll1:LinkedList = new LinkedList();
        ll1.init();
        expect(addElemTestFunc(ll1)).toEqual(A);
    });
    it("Add element to right TEST", () => {
        var ll2:LinkedList = new LinkedList();
        ll2.init();
        expect(addElemRightTestFunc(ll2)).toEqual(A);
    });
    it("Add element to left TEST", () => {
        var ll3:LinkedList = new LinkedList();
        ll3.init();
        expect(addElemLeftTestFunc(ll3)).toEqual(A);
    });
    it("Remove element TEST", () => {
        var ll4:LinkedList = new LinkedList();
        ll4.init();
        expect(removeElemTestFunc(ll4)).toEqual(A1);
    })
});
*/

DD.initFirstList();
DD.initSecondList();

tb.init("LinkedList SUITE", LinkedList);

    tb.test("Add element")
        .withCustomTestFunc(CF.addElemTestFunc)
        .result(DD.A);

    tb.test("Add element to right")
        .withCustomTestFunc(CF.addElemRightTestFunc)
        .result(DD.A);

    tb.test("Add element to left")
        .withCustomTestFunc(CF.addElemLeftTestFunc)
        .result(DD.A);

    tb.test("Get first element")
        .withCustomTestFunc(CF.getStart)
        .result(DD.A);

    tb.test("Get last element")
        .withCustomTestFunc(CF.getEnd)
        .result(DD.E);

    tb.test("Remove element")
        .withCustomTestFunc(CF.removeElemTestFunc)
        .result(DD.A1);

    tb.test("Remove element by position")
        .withCustomTestFunc(CF.removeElemByPosTestFunc)
        .result(DD.A1);

    tb.test("Remove element by data")
        .withCustomTestFunc(CF.removeElemByDataTestFunc)
        .result(DD.A1);

    tb.test("Try next")
        .withCustomTestFunc(CF.nextTest)
        .result({"second":DD.B, "third":DD.C, "fifth":DD.E});

    tb.test("Try prev")
        .withCustomTestFunc(CF.prevTest)
        .result({"fifth":DD.D, "fourth":DD.C, "first":DD.A});

    tb.test("Try list from start to end")
        .withCustomTestFunc(CF.fromStartToEnd)
        .result(DD.E);

    tb.test("Try list from end to start")
        .withCustomTestFunc(CF.fromEndToStart)
        .result(DD.A);

    tb.test("Insert element in the middle without pass a position")
        .withCustomTestFunc(CF.insertElement)
        .result(DD.A);

    tb.test("Insert element passing a middle position")
        .withCustomTestFunc(CF.insertElementByPos)
        .result(DD.A);

    tb.test("Verify current after simple insertion")
        .withCustomTestFunc(CF.getCurrent)
        .after(CF.insertElement)
        .result(DD.C);

    tb.test("Verify current after insertion with position")
        .withCustomTestFunc(CF.getCurrent)
        .after(CF.insertElementByPos)
        .result(DD.C);

tb.run();
