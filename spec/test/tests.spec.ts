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

var ll:LinkedList = new LinkedList();

function addElemTestFunc():ListElement {
    ll.init();
    ll.addElem('data1');
    ll.addElem('data2');
    ll.addElem('data3');
    return ll.start;
}

function addElemLeftTestFunc():ListElement {
    ll.init();
    ll.addElemRight('data1');
    ll.addElemRight('data2');
    ll.addElemRight('data3');
    return ll.start;
}

//////////////////
// INIT JASMINE //
//////////////////

var jasmine_test:JasmineTest<LinkedList> = new JasmineTest<LinkedList>();
jasmine_test.init("LinkedList TESTS", LinkedList);

///////////
// TESTS //
///////////

jasmine_test
    .doesTest("addElem")
    .withcustomTestFunc(addElemTestFunc)
    .isEqualTo(A)
    .run();

jasmine_test
    .doesTest("addElemLeft")
    .withcustomTestFunc(addElemLeftTestFunc)
    .isEqualTo(A)
    .run();