/// <reference path="../../typings/index.d.ts" />

class JasmineTest<T> {

    private describe_name:string;
    private test_class_instance:T;
    private custom_func:Function;
    private method_func:Function;
    private test_func:Function;
    private spec_name:string;
    private destroy_method:string;
    private init_method:string;
    private params:Array<any>;

    public constructor() {
        this.destroy_method = "destroy";
        this.init_method = "init";
        this.params = [];
        this.custom_func = null;
        this.method_func = null;
    }

    /**
     *
     * @param describe_name
     * @param c
     */
    public init(describe_name:string, c: {new(): T; }):void {
        this.describe_name = describe_name;
        this.test_class_instance = this.createObject(c);

        // execution of init method if specified
        if (this.init_method == null) {
            return;
        }
        else if (this.test_class_instance[this.init_method]) {
            this.test_class_instance[this.init_method]();
        }
        else {
            throw new Error("Fatal Error: " + this.init_method + " doesn't exists, use setInitMethod " +
                "to set an initializer. If not needed use setInitMethod(null)");
        }
    }

    /**
     *
     * @param destroy_method
     */
    public setDestroyMethod(destroy_method:string) {
        this.destroy_method = destroy_method;
    }

    /**
     *
     * @param init_method
     */
    public setInitMethod(init_method:string) {
        this.init_method = init_method;
    }

    /**
     * Specify a test name
     *
     * @param method_name
     * @returns {JasmineTest}
     */
    public test(method_name:string):JasmineTest<T> {
        this.spec_name = method_name + " Test";
        return this;
    }

    /**
     * Specify the method that need to be tested, the test name is the method name
     *
     * @param method_name
     * @returns {JasmineTest}
     */
    public method(method_name:string):JasmineTest<T> {
        this.spec_name = method_name;

        if (this.test_class_instance[method_name]) {
            throw new Error("Fatal Error: " + this.init_method + " doesn't exists in " +
                "testing class");
        }

        this.method_func = this.test_class_instance[method_name];
        this.custom_func = null;
        return this;
    }

    /**
     * Params array for the testing method if needed
     *
     * @param params
     * @returns {JasmineTest}
     */
    public withInput(params:Array<any>):JasmineTest<T> {
        this.params = params;
        return this;
    }

    /**
     * Custom function to test, need a test name
     *
     * @param func
     * @returns {JasmineTest}
     */
    public withCustomTestFunc(func:Function):JasmineTest<T> {
        if (this.spec_name !== "") {
            this.custom_func = func;
            this.method_func = null;
        }
        else {
            throw new Error("Fatal Error: Test name needed, use test() before");
        }
        return this;
    }

    /**
     *
     * @param expected_value
     * @returns {JasmineTest}
     */
    public result(expected_value:any):JasmineTest<T> {
        this.test_func = this.expect_method("toEqual", [expected_value]);
        return this;
    }

    /**
     *
     * @returns {JasmineTest}
     */
    public resultFalse():JasmineTest<T> {
        this.test_func = this.expect_method("toBe", [false]);
        return this;
    }

    /**
     *
     * @returns {JasmineTest}
     */
    public resultTrue():JasmineTest<T> {
        this.test_func = this.expect_method("toBe", [true]);
        return this;
    }

    /**
     *
     * @returns {JasmineTest}
     */
    public resultUndefined():JasmineTest<T> {
        this.test_func = this.expect_method("toBeUndefined");
        return this;
    }

    /**
     *
     * @returns {JasmineTest}
     */
    public resultNull():JasmineTest<T> {
        this.test_func = this.expect_method("toBeNull");
        return this;
    }

    /**
     *
     * @returns {JasmineTest}
     */
    public resultNan():JasmineTest<T> {
        this.test_func = this.expect_method("toBeNaN");
        return this;
    }

    /**
     *
     * @param expect_name
     * @param params
     * @returns {Function}
     */
    private expect_method(expect_name:string, params:Array<any> = []):Function {
        return this.testFunc(this.spec_name, () => {

            var result:Function = null;

            if (this.custom_func !== null) {
                result = this.custom_func(this.test_class_instance);
            }

            if (this.method_func !== null) {
                result = this.method_func.apply(this.test_class_instance, this.params);
            }

            var expect_scope:jasmine.Matchers = expect(result);
            expect_scope[expect_name].apply(expect_scope, params);
            this.destroyObject();
        });
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
     */
    public destroy() {
        this.destroyArray(this.params);
        this.describe_name = null;
        this.test_class_instance[this.describe_name]();
        this.custom_func = null;
        this.method_func = null;
        this.test_func = null;
        this.spec_name = null;
        this.destroy_method = null;
        this.init_method = null;
    }

    /**
     *
     * @param arr
     */
    private destroyArray(arr:Array<any>) {
        var l:number = arr.length;
        for (var i = l - 1; i >= 0; i++) {
            arr.pop();
        }
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
     */
    private destroyObject() {
        if (this.test_class_instance[this.destroy_method]) {
            this.test_class_instance[this.destroy_method]();
        }
        else {
            throw new Error("“Fatal Error: " + this.destroy_method + " doesn't exists, use setDestroyMethod to set a destroyer”")
        }
    }

    /**
     *
     * @param func
     */
    private runTest(func:any) {
        describe(this.describe_name, func);
    }

} export {JasmineTest};