/// <reference path="../../typings/index.d.ts" />

import {LinkedList} from "../../src/core/LinkedList";

describe("test_prova", () => {

    it("uaddafac", () => {
        let linked_list:LinkedList = new LinkedList();
        linked_list.initList();
        let result = linked_list.start;
        expect(result).toEqual(null);
    });

});