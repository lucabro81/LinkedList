/// <reference path="../../typings/index.d.ts" />

require.config({
    baseUrl: '.',
    deps: ['js/app'],
    callback: () => {
        require(["app/app"]);
    }
});