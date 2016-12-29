/// <reference path="../../typings/index.d.ts" />

// TODO: inferface for class to test, in this way we'll have a safer class initialization

class JasmineTest<T> {

    private describe_name:string;
    private test_class_instance:T;
    private custom_func:any;
    private test_func:Function;
    private spec_name:string;
    private destroy_method:string;
    private init_method:string;

    public constructor() {
        this.destroy_method = "destroy";
        this.init_method = "init";
    }

    /**
     *
     * @param describe_name
     * @param c
     */
    public init(describe_name:string, c: {new(): T; }):void {
        this.describe_name = describe_name;
        this.test_class_instance = this.createObject(c);

        if (this.init_method == null) {
            return;
        }
        else if (this.test_class_instance[this.init_method]) {
            this.test_class_instance[this.init_method]();
        }
        else {
            throw new Error("Fatal Error: " + this.init_method + " doesn't exists, use setInitMethod to set an initializer. " +
            "If not needed use setInitMethod(null)");
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
     *
     * @param method_name
     * @returns {JasmineTest}
     */
    public test(method_name:string):JasmineTest<T> {
        this.spec_name = method_name + " Test";
        return this;
    }

    /**
     *
     * @param method_name
     * @returns {JasmineTest}
     */
    public method(method_name:string):JasmineTest<T> {
        this.spec_name = method_name;
        this.custom_func = this.test_class_instance[method_name];
        return this;
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
            this.destroyObject();
        });
        return this;
    }

    /**
     *
     * @returns {JasmineTest}
     */
    public resultFalse():JasmineTest<T> {
        this.test_func = this.testFunc(this.spec_name, () => {
            var result = this.custom_func(this.test_class_instance);
            expect(result).toBe(false);
            this.destroyObject();
        });
        return this;
    }

    /**
     *
     * @returns {JasmineTest}
     */
    public resultTrue():JasmineTest<T> {
        this.test_func = this.testFunc(this.spec_name, () => {
            var result = this.custom_func(this.test_class_instance);
            expect(result).toBe(true);
            this.destroyObject();
        });
        return this;
    }

    /**
     *
     * @returns {JasmineTest}
     */
    public resultUndefined():JasmineTest<T> {
        this.test_func = this.testFunc(this.spec_name, () => {
            var result = this.custom_func(this.test_class_instance);
            expect(result).toBeUndefined();
            this.destroyObject();
        });
        return this;
    }

    /**
     *
     * @returns {JasmineTest}
     */
    public resultNull():JasmineTest<T> {
        this.test_func = this.testFunc(this.spec_name, () => {
            var result = this.custom_func(this.test_class_instance);
            expect(result).toBeNull();
            this.destroyObject();
        });
        return this;
    }

    /**
     *
     * @returns {JasmineTest}
     */
    public resultNan():JasmineTest<T> {
        var result = this.custom_func(this.test_class_instance);
        this.test_func = this.expect_method(expect(result).toBeNaN);
        return this;
    }

    private expect_method(expect:Function):Function {
        return this.testFunc(this.spec_name, () => {
            expect();
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