/// <reference path="../../typings/index.d.ts" />

// TODO: inferface for class to test, in this way we'll have a safer class initialization

class JasmineTest<T> {

    public describe_name:string;
    public test_class_instance:T;

    public constructor() {}

    /**
     *
     * @param describe_name
     * @param c
     */
    public init(describe_name:string, c: {new(): T; }) {
        this.describe_name = describe_name;
        this.test_class_instance = this.createObject(c);
    }

    /**
     *
     * @param method_name
     * @param expected_value
     */
    public runEqualTest(method_name:string, expected_value:string = 'no_value'):void {
        var func = this.testFunc(method_name,
            () => {
                var result = this.test_class_instance[method_name]();
                expect(result).toEqual(expected_value);
            });
        this.runTest(func);
    }

    /**
     *
     * @param method_name
     * @param func
     * @returns {function(): void}
     */
    public testFunc(method_name:string, func:any):any {
        return ():void => {
            it(method_name + "test", func);
        }
    }

    /**
     *
     * @param method_name
     * @param expected_statud
     */
    public runStatusChangedTest(method_name:string, expected_statud:any):void {

    }

    /**
     *
     * @param c
     * @returns {T}
     */
    private createObject<T>(c: {new(): T; }): T {
        return new c();
    }

    /**
     *
     * @param func
     */
    private runTest(func:any) {
        describe(this.describe_name, func);
    }

} export {JasmineTest};