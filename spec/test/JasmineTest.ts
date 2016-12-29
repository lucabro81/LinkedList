/// <reference path="../../typings/index.d.ts" />

// TODO: inferface for class to test, in this way we'll have a safer class initialization

class JasmineTest<T> {

    public describe_name:string;
    public test_class_instance:T;

    private custom_func:any;
    private test_func:Function;
    private spec_name:string;

    public constructor() {}

    /**
     *
     * @param describe_name
     * @param c
     */
    public init(describe_name:string, c: {new(): T; }) {
        this.describe_name = describe_name;
        this.test_class_instance = this.createObject(c);
        this.test_class_instance['init']();
    }

    /**
     *
     * @param method_name
     * @returns {JasmineTest}
     */
    public doesTest(method_name:string):JasmineTest<T> {
        this.spec_name = method_name + " Test";
        return this;
    }

    /**
     *
     * @param method
     * @returns {JasmineTest}
     */
    public doesMethod(method:Function):JasmineTest<T> {
        this.custom_func = method;
        return this;
    }

    /**
     *
     * @param spec_name
     * @returns {JasmineTest<T>}
     */
    public withSpecName(spec_name:string):JasmineTest<T> {
        return this.doesTest(spec_name);
    }

    /**
     *
     * @param params
     * @returns {JasmineTest}
     */
    public withInput(params:Array<any>):JasmineTest<T> {
        return this;
    }

    /**
     *
     * @param func
     * @returns {JasmineTest}
     */
    public withcustomTestFunc(func:Function):JasmineTest<T> {
        this.custom_func = func;
        return this;
    }

    /**
     *
     * @param expected_value
     * @returns {JasmineTest}
     */
    public result(expected_value:any):JasmineTest<T> {
        this.test_func = this.testFunc(this.spec_name, () => {
            var result = this.custom_func(this.test_class_instance);
            expect(result).toEqual(expected_value);
            this.test_class_instance["destroy"]();
        });
        return this;
    }

    /**
     *
     */
    public run():void {
        this.runTest(this.test_func);
    }

    /**
     *
     * @param method_name
     * @param func
     * @returns {function(): void}
     */
    public testFunc(method_name:string, func:any):Function {
        return ():void => {
            it(method_name, func);
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