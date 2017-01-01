require.config({
    baseUrl: '.',
    deps: ['js/app'],
    callback: () => {
        require(["app/app"]);
    }
});