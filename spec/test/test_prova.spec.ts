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

class LinkedListSpec {

    public static ADD_ELEM_TEST:string = "addElemTest";
    public linked_list:LinkedList;
    public table:any;

    public constructor() {
        this.linked_list = new LinkedList();
        this.table = [];
        this.table[LinkedListSpec.ADD_ELEM_TEST] = this.addElemTest;
    }

    public addElemTest() {
        it("uaddafac", () => {
            let linked_list:LinkedList = new LinkedList();
            linked_list.initList();
            let result = linked_list.start;
            expect(result).toEqual(null);
        });
    }

    public runTest(test) {
        describe("test_prova", this.table[test]);
    }
}

var stica:LinkedListSpec = new LinkedListSpec();
stica.runTest(LinkedListSpec.ADD_ELEM_TEST);