class JasmineTestBuilder<T> {

    private describe_name:string;
    private test_class_instance_arr:Array<T>;

    private destroy_method:string;
    private init_method:string;
    private generic_class:{new():T;};
    private init_params:Array<any>;

    private test_index:number;
    private it_method_arr:Array<any>;
    private test_func_arr:Array<any>;
    private before_func_arr:Array<any>;
    private spec_name_arr:Array<string>;
    private params_arr:Array<Array<any>>;

    /**
     *
     */
    public constructor() {}

    /**
     *
     * @param describe_name
     * @param c
     * @param init_params
     */
    public init(describe_name:string,
                c: {new(): T; },
                init_params:Array<any> = []):void {
        this.describe_name = describe_name;
        this.generic_class = c;

        this.init_params = init_params;

        this.destroy_method = "destroy";
        this.init_method = "init";
        this.test_class_instance_arr = [];
        this.it_method_arr = [];
        this.test_func_arr = [];
        this.before_func_arr = [];
        this.spec_name_arr = [];
        this.params_arr = [];
        this.test_index = 0;
    }

    /**
     *
     * @param destroy_method
     */
    public setDestroyMethod(destroy_method:string):void {
        this.destroy_method = destroy_method;
    }

    /**
     *
     * @param init_method
     */
    public setInitMethod(init_method:string):void {
        this.init_method = init_method;
    }

    /**
     * Specify a test name
     *
     * @param method_name
     * @returns {JasmineTestBuilder}
     */
    public test(test_name:string):JasmineTestBuilder<T> {
        this.spec_name_arr[this.test_index] = test_name + " TEST";
        return this;
    }

    /**
     * Params array for the testing method if needed
     *
     * @param params
     * @returns {JasmineTestBuilder}
     */
    public withInput(params:Array<any>):JasmineTestBuilder<T> {
        this.params_arr[this.test_index] = params;
        return this;
    }

    /**
     *
     * @param method_name
     * @returns {JasmineTestBuilder}
     */
    public method(method_name:string):JasmineTestBuilder<T> {

        this.createObject();

        var last_index:number = this.test_class_instance_arr.length - 1;

        if (this.test_class_instance_arr[last_index]) {
            this.spec_name_arr[this.test_index] = method_name + " TEST";
            this.test_func_arr[this.test_index] = {
                type: "method",
                func: this.test_class_instance_arr[last_index][method_name]
            };
        }
        else {
            //TODO: write method not found exception
        }

        return this;
    }

    /**
     * Custom function to test, need a test name
     *
     * @param func
     * @returns {JasmineTestBuilder}
     */
    public withCustomTestFunc(func:Function):JasmineTestBuilder<T> {

        this.createObject();

        this.test_func_arr[this.test_index] = {
            type: "custom",
            func: func
        };

        return this;
    }

    /**
     * TODO: mejo se je dai 'n occhio che non funziona una fava con il sort....
     *
     * @returns {JasmineTestBuilder}
     */
    public withMethod(method_name:string, params:Array<any>):JasmineTestBuilder<T> {

        this.createObject();

        var last_index:number = this.test_class_instance_arr.length - 1;

        if (this.test_class_instance_arr[last_index][method_name]) {
            this.params_arr[this.test_index] = params;
            this.test_func_arr[this.test_index] = {
                type: "method",
                func: this.test_class_instance_arr[last_index][method_name]
            };
        }
        else {
            //TODO: write method not found exception
        }

        return this;
    }

    /**
     *
     * @returns {JasmineTestBuilder}
     */
    public after(func:Function):JasmineTestBuilder<T> {

        var last_index:number = this.test_class_instance_arr.length - 1;

        // this.before_func_arr.push({
        this.before_func_arr[this.test_index] = {
            func: func,
            instance_index: last_index
        };

        return this;
    }

    /**
     *
     * @param expected_value
     * @returns {JasmineTestBuilder}
     */
    public result(expected_value:any):JasmineTestBuilder<T> {
        this.push_it_method("toEqual", expected_value);
        this.test_index++;
        return this;
    }

    /**
     *
     * @returns {JasmineTestBuilder}
     */
    public resultFalse():JasmineTestBuilder<T> {
        this.push_it_method("toBe", false);
        this.test_index++;
        return this;
    }

    /**
     *
     * @returns {JasmineTestBuilder}
     */
    public resultTrue():JasmineTestBuilder<T> {
        this.push_it_method("toBe", true);
        this.test_index++;
        return this;
    }

    /**
     *
     * @returns {JasmineTestBuilder}
     */
    public resultUndefined():JasmineTestBuilder<T> {
        this.push_it_method("toBeUndefined", null);
        this.test_index++;
        return this;
    }

    /**
     *
     * @returns {JasmineTestBuilder}
     */
    public resultNull():JasmineTestBuilder<T> {
        this.push_it_method("toBeNull", null);
        this.test_index++;
        return this;
    }

    /**
     *
     * @returns {JasmineTestBuilder}
     */
    public resultNan():JasmineTestBuilder<T> {
        this.push_it_method("toBeNaN", null);
        this.test_index++;
        return this;
    }

    /**
     *
     */
    public run():void {
        describe(this.describe_name, () => {
            this.startTests(0);
        });
    }

    /**
     *
     */
    public destroy():void {

        this.destroyArray(this.it_method_arr);
        this.it_method_arr = null;

        this.destroyArray(this.test_func_arr);
        this.test_func_arr = null;

        this.destroyArray(this.spec_name_arr);
        this.spec_name_arr = null;

        this.destroyArray(this.params_arr);
        this.params_arr = null;

        this.destroyArray(this.before_func_arr);
        this.before_func_arr = null;

        this.destroyObject();

        this.destroyArray(this.test_class_instance_arr);
        this.test_class_instance_arr = null;

        this.describe_name = null;
        this.destroy_method = null;
        this.init_method = null;
    }

    /**
     *
     * @param index
     */
    private startTests(index:number):void {
        this.it_method_arr[index](index);
        index++;
        this.nextTest(index);
    }

    /**
     *
     * @param index
     */
    private nextTest(index:number):void {
        if (this.it_method_arr[index]) {
            this.it_method_arr[index](index);
            index++;
            this.nextTest(index);
        }
    }

    /**
     *
     * @param expect_name
     * @param expected_value
     */
    private push_it_method(expect_name:string, expected_value:any) {
        this.it_method_arr.push(
            (index:number):void => {

                var spec_name:string = this.spec_name_arr[index];

                it(spec_name, () => {

                    var test_func:any = this.test_func_arr[index].func;
                    var test_type:any = this.test_func_arr[index].type;
                    var test_instance:T = this.test_class_instance_arr[index];
                    var params:Array<any> = this.params_arr[index];
                    var expect_func:jasmine.Matchers = null;

                    // before execution
                    if (this.before_func_arr[index]) {
                        var before:any = this.before_func_arr[index];
                        var before_func:Function = before.func;
                        var instance_index:number = before.instance_index;
                        before_func(this.test_class_instance_arr[instance_index]);
                    }

                    // TODO: "custom" and "method" better like string consts
                    // expect execution
                    if (test_type === "custom") {
                        expect_func = expect(test_func(test_instance));
                    }
                    else {
                        expect_func = expect(test_func.apply(test_instance, params));
                    }

                    //TODO: expected value and second params
                    expect_func[expect_name](expected_value);
                });
            }
        );
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
     */
    private createObject() {

        var test_class_instance = new this.generic_class();

        this.test_class_instance_arr.push(test_class_instance);

        var last_position = this.test_class_instance_arr.length - 1;
        var last_instance:T = this.test_class_instance_arr[last_position];

        // execution of init method if specified
        if (this.init_method == null) {
            return;
        }
        else if (last_instance[this.init_method]) {
            last_instance[this.init_method].apply(last_instance, this.init_params);
        }
        else {
            throw new Error("Fatal Error: " + this.init_method +
                " doesn't exists, use setInitMethod to set an initializer. " +
                "If not needed use setInitMethod(null)");
        }
    }

    /**
     *
     */
    private destroyObject() {

        var l:number = this.test_class_instance_arr.length;
        for(var i = 0; i < l; i++) {

            var instance:T = this.test_class_instance_arr[i];

            if (instance[this.destroy_method]) {
                instance[this.destroy_method]();
            }
            else {
                throw new Error("“Fatal Error: " + this.destroy_method + " doesn't exists, use setDestroyMethod " +
                    "to set a destroyer”")
            }

            instance = null;
        }

    }

} export {JasmineTestBuilder};