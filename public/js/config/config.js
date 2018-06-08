"use srict";

angular
    .module("EXApp")
    .config(($routeProvider) => {
        $routeProvider
        .when("/cart", { //What is 
            template: `
            <items></items>`
        });
    }); 