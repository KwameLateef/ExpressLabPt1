"use strict";
function CartService($http) {
    const getAllItems = () => {
        return $http({
            method:"GET",
            url: "/portal/items"
        });
    }
    const addItem = (newItem) => {
        return $http({
            method:"POST",
            url: "/portal/items",
            data: newItem
        });
    }
    const deleteItem = (id) => {
        return $http({
            method:"DELETE",
            url: "/portal/items/" + id
        });
    }
    const updateItem = (item) => {
        return $http({
            method:"PUT",
            url: "/portal/items/" + item.id,
            data: item
        });
    }
    return {
        getAllItems,
        deleteItem,
        updateItem,
        addItem
    };
};


angular
    .module("EXApp")
    .factory("CartService", CartService);