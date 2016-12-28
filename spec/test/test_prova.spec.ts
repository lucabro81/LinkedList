import {JasmineTest} from "./JasmineTest";
import {LinkedList} from "../../src/core/LinkedList";

//describe("test_prova", () => {
//
//    it("uaddafac", () => {
//
//        let linked_list:LinkedList = new LinkedList();
//        linked_list.initList();
//        let result = linked_list.start;
//        expect(result).toEqual(null);
//    });
//
//});

var stica:JasmineTest<LinkedList> = new JasmineTest<LinkedList>();

stica.init("describe_name", LinkedList);

stica.runEqualTest("addElem", null); // http://stackoverflow.com/a/359910
stica.runStatusChangedTest("methodName", {'param1': 'val1', 'param2': 'val2'});