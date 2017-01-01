import {JasmineTest} from "./JasmineTest";
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
    ll.addElem('data1')
        .addElem('data2')
        .addElem('data3')
        .addElem('data4')
        .addElem('data5');

    ll.removeElem(B1);
    ll.removeElem(D1);

    return ll.start;
}

//////////////////
// INIT JASMINE //
//////////////////

var jasmine_test:JasmineTest<LinkedList> = new JasmineTest<LinkedList>();

///////////
// TESTS //
///////////

/*describe("LinkedList SUITE", () => {
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
});*/

jasmine_test.init("LinkedList SUITE", LinkedList);

    jasmine_test
        .test("Add element")
        .withCustomTestFunc(addElemTestFunc)
        .result(A);

    jasmine_test
        .test("Add element to right")
        .withCustomTestFunc(addElemRightTestFunc)
        .result(A);

    jasmine_test
        .test("Add element to left")
        .withCustomTestFunc(addElemLeftTestFunc)
        .result(A);

    jasmine_test
        .test("Remove element")
        .withCustomTestFunc(removeElemTestFunc)
        .result(A1);

jasmine_test.run();
