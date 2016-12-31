import {JasmineTest} from "./JasmineTest";
import {LinkedList} from "../../src/core/LinkedList";
import {ListElement} from "../../src/core/ListElement";

////////////////
// DUMMY DATA //
////////////////

var A:ListElement = new ListElement("data1");
var B:ListElement = new ListElement("data2");
var C:ListElement = new ListElement("data3");

A.left = null;
A.right = B;

B.left = A;
B.right = null;
B.right = C;

C.left = B;
C.right = null;

//////////////////////////
// CUSTOM TEST FUNCTION //
//////////////////////////

function addElemTestFunc(ll:LinkedList):ListElement {
    ll.addElem('data1')
        .addElem('data2')
        .addElem('data3');
    return ll.start;
}

function addElemLeftTestFunc(ll:LinkedList):ListElement {
    ll.addElemRight('data1')
        .addElemRight('data2')
        .addElemRight('data3');
    return ll.start;
}

//////////////////
// INIT JASMINE //
//////////////////

var jasmine_test:JasmineTest<LinkedList> = new JasmineTest<LinkedList>();
jasmine_test.init("LinkedList SUITE", LinkedList);

///////////
// TESTS //
///////////

jasmine_test
    .test("addElem")
    .withCustomTestFunc(addElemTestFunc)
    .result(A)
    .run();

jasmine_test
    .test("addElemLeft")
    .withCustomTestFunc(addElemLeftTestFunc)
    .result(A)
    .run();