import {JasmineTestBuilder} from "../JasmineTestBuilder/JasmineTestBuilder";
import {LinkedList} from "../../../src/core/LinkedList";
import {ListElement} from "../../../src/core/ListElement";
import {DD} from "../TestAssets/DummyData.asset";


var tb_int:JasmineTestBuilder<LinkedList<ListElement>> = new JasmineTestBuilder<LinkedList<ListElement>>();

tb_int.init("LinkedList - Sort integer - SUITE", LinkedList, [ListElement, [4,6,2,5,1,8]]);

    tb_int.test("Verify recursive sorted list of int without merge function")
            .withMethod("rSort")
            .andProp("start")
            .result(DD.listFromArrayData([1,2,4,5,6,8]).start);

    tb_int.test("Verify recursive sorted list of int with merge function")
            .withMethod("rSort", [(a:any, b:any):boolean => {
                return (!(a<=b));
            }])
            .andProp("start")
            .result(DD.listFromArrayData([8,6,5,4,2,1]).start);

tb_int.run();


var tb_str:JasmineTestBuilder<LinkedList<ListElement>> = new JasmineTestBuilder<LinkedList<ListElement>>();

tb_str.init("LinkedList - Sort string - SUITE", LinkedList, [ListElement, ['b', 'e', 'c', 'a', 'd']]);

    tb_str.test("Verify recursive sorted list of string without merge function")
            .withMethod("rSort")
            .andProp("start")
            .result(DD.listFromArrayData(['a', 'b', 'c', 'd', 'e']).start);

    tb_str.test("Verify recursive sorted list of string with merge function")
            .withMethod("rSort", [(a:any, b:any):boolean => {
                return (!(a<=b));
            }])
            .andProp("start")
            .result(DD.listFromArrayData(['e', 'd', 'c', 'b', 'a']).start);

tb_str.run();


var tb_obj:JasmineTestBuilder<LinkedList<ListElement>> = new JasmineTestBuilder<LinkedList<ListElement>>();

tb_obj.init("LinkedList - Sort obj - SUITE",
            LinkedList,
            [
                ListElement,
                [
                    { something:'d', value: 8},
                    { something:'b', value: 6},
                    { something:'c', value: 7},
                    { something:'a', value: 4},
                    { something:'e', value: 9},
                ]
            ]
);


    tb_obj.test("Verify recursive sorted list of objects with merge function")
        .withMethod("rSort", [(a:any, b:any):boolean => {
            return (a.value<=b.value);
        }])
        .andProp("start")
        .result(DD.listFromArrayData([
            { something:'a', value: 4},
            { something:'b', value: 6},
            { something:'c', value: 7},
            { something:'d', value: 8},
            { something:'e', value: 9},
        ]).start);

tb_obj.run();

var tb_merge_concat:JasmineTestBuilder<LinkedList<ListElement>> = new JasmineTestBuilder<LinkedList<ListElement>>();

tb_merge_concat.init("LinkedList - Concat, clone and merge - SUITE", LinkedList, [ListElement, [4,6,2,5,1,8]]);

    tb_merge_concat.test("Verify concat integer list not recursive")
        .withMethod("concat", [DD.listFromArrayData([12, 3, 90])])
        .andProp("start")
        .result(DD.listFromArrayData([4,6,2,5,1,8,12,3,90]).start);

    tb_merge_concat.test("Verify merge integer list not recursive")
        .withMethod("rMerge", [DD.listFromArrayData([7, 10, 99])])
        .andProp("start")
        .result(DD.listFromArrayData([1,2,3,4,5,6,7,8,10,12,90,99]).start);

    tb_merge_concat.test("Verify clone integer list")
        .withMethod("clone")
        .andProp("cloned_list")
        .andProp("start")
        .result(DD.listFromArrayData([1,2,3,4,5,6,7,8,10,12,90,99]).start);

tb_merge_concat.run();