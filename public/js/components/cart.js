"use strict";
const items = {
    template:`
    <section class="container" ng-repeat="product in $ctrl.items">
        <div class="div_cont">
        <input class="product" ng-blur="$ctrl.updateItem(product);" ng-model="product.product">  
        <input class="price" ng-blur="$ctrl.updateItem(product);" ng-model="product.price">
        <input class="quantity" ng-blur="$ctrl.updateItem(product);" ng-model="product.quantity"><button ng-click="$ctrl.incrementup(product)">+</button><button ng-click="$ctrl.incrementdown(product)">-</button>
        <a href="" ng-click="$ctrl.deleteItem(product.id);">Delete</a>
    </section>
    
    
    <form class="form" ng-submit="$ctrl.addItem($ctrl.newItem);">
        <input class="product2" type="text" placeholder="Product" ng-model="$ctrl.newItem.product">
        <input class="price2" type="text" placeholder="Price" ng-model="$ctrl.newItem.Price">
        <input class="quantity2" type="text" placeholder="Quantity" ng-model="$ctrl.newItem.quantity">
        <button type="submit">Add Item</button>
    </form>
    `,


    controller: ["CartService", function(CartService) {
        const vm = this;
        // TODO: Call the StudentService to retrieve the list of the students
        CartService.getAllItems().then((response) => {
          console.log(response);
          vm.items = response.data;
        });

        vm.incrementup = (product) => {
          product.quantity++;

          CartService.updateItem(product).then((response) => {
            vm.items = response.data;
          });
        }

        vm.incrementdown = (product) => {
          product.quantity--;

          CartService.updateItem(product).then((response) => {
            vm.items = response.data;
          })
        }

        vm.addItem = (newCourse) => {
          console.log(newCourse);
          CartService.addItem(newCourse).then((response) => {
            vm.items = response.data;
          });
          vm.newItem = {};
        };
        vm.deleteItem = (id) => {
          console.log(id);
          console.log(typeof id);
          CartService.deleteItem(id).then((response) => {
            vm.items = response.data;
          });
        }
        vm.updateItem = (course) => {
          CartService.updateItem(course).then((response) => {
            vm.items = response.data;
          });
        };
      }]
    };
    

angular
    .module("EXApp")
    .component("items", items);