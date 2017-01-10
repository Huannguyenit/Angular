(function(){
    var app = angular.module("Main",[]);
    app.controller("MainController",function(){
        this.product = gems
    });
    var gems = [
        {
        soldOut: true,
        name: "Ruby",
        price: 3000000,
        description: ".....",
        canPurcharse: true
        },
        {
            soldOut: false,
            name: "Pearl",
            price: 3000000,
            description: "Not cheaper",
            canPurcharse: true
        }
    ]
})();