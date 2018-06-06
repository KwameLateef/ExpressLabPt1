"use strict";
const cart = {
    template:`
    <section class="" ng-repeat="product in $ctrl.item">
    <input ng-blur="$ctrl.updateItem(product);" ng-model="product.product">  <input ng-blur="$ctrl.updateItem(product);" ng-model="product.price">
    <input ng-blur="$ctrl.updateItem(product);" ng-model="product.quantity">
    <a href="" ng-click="$ctrl.deleteItem(product.id);">Delete</a>
    </section>
    
    
    <form ng-submit="$ctrl.addItem($ctrl.newItem);">
    <input type="text" placeholder="Product" ng-model="$ctrl.newItem.product">
    <input type="text" placeholder="Price" ng-model="$ctrl.newItem.Price">
    <input type="text" placeholder="Quantity" ng-model="$ctrl.newItem.quantity>
    <button>Add Item</button>
    </form>
    `,

    controller: ["CartService", function(CartService) {
        const vm = this;
        // TODO: Call the StudentService to retrieve the list of the students
        CartService.getAllItems().then((response) => {
          console.log(response);
          vm.item = response.data;
        });
        vm.addItem = (newCourse) => {
          console.log(newCourse);
          CartService.addItem(newCourse).then((response) => {
            vm.item = response.data;
          });
          vm.newItem = {};
        };
        vm.deleteItem = (id) => {
          console.log(id);
          console.log(typeof id);
          CartService.deleteItem(id).then((response) => {
            vm.item = response.data;
          });
        }
        vm.updateItem = (course) => {
          CartService.updateItem(course).then((response) => {
            vm.item = response.data;
          });
        };
      }]
    };
    

angular
    .module("EXApp")
    .component("cart", cart);