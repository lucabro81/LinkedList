import {JasmineTestBuilder} from "./JasmineTestBuilder";
import {LinkedList} from "../../src/core/LinkedList";
import {ListElement} from "../../src/core/ListElement";

////////////////
// DUMMY DATA //
////////////////

var A:ListElement = new ListElement("data1");
var B:ListElement = new ListElement("data2");
var C:ListElement = new ListElement("data3");
var D:ListElement = new ListElement("data4");
var E:ListElement = new ListElement("data5");

A.left = null; A.right = B;
B.left = A; B.right = C;
C.left = B; C.right = D;
D.left = C; D.right = E;
E.left = D; E.right = null;

////////////////

var A1:ListElement = new ListElement("data1");
var B1:ListElement = new ListElement("data2");
var C1:ListElement = new ListElement("data3");
var D1:ListElement = new ListElement("data4");
var E1:ListElement = new ListElement("data5");

A1.left = null; A1.right = C1;
C1.left = A1; C1.right = E1;
E1.left = C1; E1.right = null;

//////////////////////////
// CUSTOM TEST FUNCTION //
//////////////////////////

function createList(ll:LinkedList):LinkedList {
    ll.addElem('data1')
        .addElem('data2')
        .addElem('data3')
        .addElem('data4')
        .addElem('data5');
    return ll;
}

/*function beforeTest(ll:LinkedList) {
    ll.addElem('data1')
        .addElem('data2')
        .addElem('data4');
}*/

function addElemTestFunc(ll:LinkedList):ListElement {
    ll.addElem('data1')
        .addElem('data2')
        .addElem('data3')
        .addElem('data4')
        .addElem('data5');
    return ll.start;
}

function addElemRightTestFunc(ll:LinkedList):ListElement {
    ll.addElemRight('data1')
        .addElemRight('data2')
        .addElemRight('data3')
        .addElemRight('data4')
        .addElemRight('data5');
    return ll.start;
}

function addElemLeftTestFunc(ll:LinkedList):ListElement {
    ll.addElemLeft('data5')
        .addElemLeft('data4')
        .addElemLeft('data3')
        .addElemLeft('data2')
        .addElemLeft('data1');
    return ll.start;
}

function removeElemTestFunc(ll:LinkedList):ListElement {
    var list:LinkedList = createList(ll);

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

function removeElemByPosTestFunc(ll:LinkedList):ListElement {
    var list:LinkedList = createList(ll);

    list.removeElemByPos(1);
    list.removeElemByPos(2);

    return list.start;
}

function removeElemByDataTestFunc(ll:LinkedList):ListElement {
    var list:LinkedList = createList(ll);

    list.removeElemByData("data2");
    list.removeElemByData("data4");

    return list.start;
}

function getStart(ll:LinkedList):ListElement {
    var list:LinkedList = createList(ll);
    return list.toStart().get();
}

function getEnd(ll:LinkedList):ListElement {
    var list:LinkedList = createList(ll);
    return list.toEnd().get();
}

function nextTest(ll:LinkedList):any {
    var list:LinkedList = createList(ll);
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

function prevTest(ll:LinkedList):any {
    var list:LinkedList = createList(ll);
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

function fromStartToEnd(ll:LinkedList):ListElement {

    var list:LinkedList = createList(ll);

    list.toStart();

    while (!list.isEnd()) {
        list.toNext();
    }

    return list.get();
}

function fromEndToStart(ll:LinkedList):ListElement {

    var list:LinkedList = createList(ll);

    list.toEnd();

    while (!list.isStart()) {
        list.toPrev();
    }

    return list.get();
}

function insertElement(ll:LinkedList):LinkedList {
    ll.addElem('data1')
        .addElem('data2')
        .addElem('data4')
        .addElem('data5');

    ll.toStart().toNext().toNext().insertElem('data3');

    return ll;
}

function insertElementByPos(ll:LinkedList):LinkedList {
    ll.addElem('data1')
        .addElem('data2')
        .addElem('data4')
        .addElem('data5');

    ll.toStart().insertElem('data3');

    return ll;
}

//////////////////
// INIT JASMINE //
//////////////////

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

tb.init("LinkedList SUITE", LinkedList);

    tb.test("Add element")
        .withCustomTestFunc(addElemTestFunc)
        .result(A);

    tb.test("Add element to right")
        .withCustomTestFunc(addElemRightTestFunc)
        .result(A);

    tb.test("Add element to left")
        .withCustomTestFunc(addElemLeftTestFunc)
        .result(A);

    tb.test("Get first element")
        .withCustomTestFunc(getStart)
        .result(A);

    tb.test("Get last element")
        .withCustomTestFunc(getEnd)
        .result(E);

    tb.test("Remove element")
        .withCustomTestFunc(removeElemTestFunc)
        .result(A1);

    tb.test("Remove element by position")
        .withCustomTestFunc(removeElemByPosTestFunc)
        .result(A1);

    tb.test("Remove element by data")
        .withCustomTestFunc(removeElemByDataTestFunc)
        .result(A1);

    tb.test("Try next")
        .withCustomTestFunc(nextTest)
        .result({"second":B, "third":C, "fifth":E});

    tb.test("Try prev")
        .withCustomTestFunc(prevTest)
        .result({"fifth":D, "fourth":C, "first":A});

    tb.test("Try list from start to end")
        .withCustomTestFunc(fromStartToEnd)
        .result(E);

    tb.test("Try list from end to start")
        .withCustomTestFunc(fromEndToStart)
        .result(A);

tb.run();
