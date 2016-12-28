/// <reference path="../../typings/index.d.ts" />

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

class LinkedListSpec<T> {

    public describe_name:string;
    public test_class_instance:T;

    public constructor() {}

    public init(describe_name:string) {
        this.describe_name = describe_name;
        this.test_class_instance = new T();
    }

    public runEqualTest(method_name:string, expected_value:string = 'no_value'):void {
        var func = this.testFunc(method_name,
            () => {
                var result = this.test_class_instance[method_name]();
                expect(result).toEqual(expected_value);
            });
        this.runTest(func);
    }

    public testFunc(method_name:string, func:any):any {
        return () => {
            it(method_name + "test", func);
        }
    }

    public runStatusChangedTest(method_name:string, expected_statud:any):void {

    }

    private runTest(func:any) {
        describe(this.describe_name, func);
    }
}

var stica:LinkedListSpec = new LinkedListSpec<LinkedList>();

stica.init("describe_name");
stica.runEqualTest("addElem", null); // http://stackoverflow.com/a/359910
stica.runStatusChangedTest("methodName", {'param1': 'val1', 'param2': 'val2'});