"use strict";
const express = require("express");
const addItem = express.Router();

const items = [
    {
        product: "shoe",
        price: 12,
        quantity: 3,
        id: 0
    },
    {
        product: "hat",
        price: 10,
        quantity: 3,
        id:  1
    },
    {
        product: "shirt",
        price: 5,
        quantity: 3,
        id: 2
    },
    {
        product: "socks",
        price: 3,
        quantity: 3,
        id: 3
    },

];

let idCount = 4;

addItem.get("/items", (req, res) => {
    res.send(items);
});

addItem.post("/items", (req, res) => {
    items.push({
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        id: idCount++
    });
    res.send(items);
});

addItem.delete("/items/:id", (req, res) => {
    console.log(req.params.id);
    console.log(typeof req.params.id);
    for (let item of items) { //'for loop' through the array
    if (item.id == req.params.id) {
      items.splice(items.indexOf(item), 1);
    }
  }
  res.send(items);
});

addItem.put("/items/:id", (req, res) => {
    for (let item of items) { //'for loop' through the array
    if (item.id == req.params.id) {
      items.splice(items.indexOf(item), 1, {
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        id: item.id
      });
    }
  }
    res.send(items);
});
module.exports = addItem;