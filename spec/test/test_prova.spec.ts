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

    public linked_list:LinkedList;

    public constructor() {
        this.linked_list = new LinkedList();
        this.init(this.addElemTest);
    }

    public init(func):void {
        describe("test_prova", func);
    }

    public addElemTest() {
        it("uaddafac", () => {
            let linked_list:LinkedList = new LinkedList();
            linked_list.initList();
            let result = linked_list.start;
            expect(result).toEqual(null);
        });
    }
}

var stica:LinkedListSpec = new LinkedListSpec();