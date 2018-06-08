"use strict"; //These three stay consistent
const express = require("express");
const pg = require("pg");
const pool = require("../pg-connection-pool"); //Does not make sense to me, why dot(s)

const cartRouter = express.Router();

cartRouter.get("/items", (req, res) => {
    // referencing the table that was created
    pool.query("SELECT * FROM shoppingcart ORDER BY id").then((result) => {
        res.send(result.rows);
    });
})

cartRouter.post("/items", (req, res) => {
    // referencing the table that was created
    pool.query("INSERT INTO shoppingCart (product, price, quantity) values($1::text, $2::int, $3::int)", [req.body.product, req.body.price, req.body.quantity]).then(() => {
    pool.query("SELECT * FROM shoppingCart ORDER BY id").then((result) => {

    // items.push({
    //     product: req.body.product,
    //     price: req.body.price,
    //     quantity: req.body.quantity,
    //     id: idCount++
    // });
        res.send(result.rows);
        })
    })
});

cartRouter.delete("/items/:id", (req, res) => {
//     console.log(req.params.id);
//     console.log(typeof req.params.id);
//     for (let item of items) { //'for loop' through the array
//     if (item.id == req.params.id) {
//       items.splice(items.indexOf(item), 1);
//     }
//   }

    pool.query("DELETE FROM shoppingCart WHERE id=$1::int", [req.params.id])
    .then(() => {
        pool.query("SELECT * FROM shoppingCart ORDER BY id").then((result) => {
            res.send(result.rows);
        });
    })
})

cartRouter.put("/items/:id", (req, res) => { //place holders beneath @ pool.query $1$2$3 is     reference to the ARRAY next to it
    pool.query("UPDATE shoppingCart SET product=$1::text, price=$2::int, quantity=$3::int WHERE id=$4::int", [req.body.product, req.body.price, req.body.quantity, req.params.id]).then(() => { //"id" is referencing to 
        pool.query("SELECT * FROM shoppingCart ORDER BY id").then((result) => {
         res.send(result.rows);
      })
    })
  });

module.exports = cartRouter;

// Don't need this anymore but Saved
// const items = [
//     {
//         product: "shoe",
//         price: 12,
//         quantity: 3,
//         id: 0
//     },
//     {
//         product: "hat",
//         price: 10,
//         quantity: 3,
//         id:  1
//     },
//     {
//         product: "shirt",
//         price: 5,
//         quantity: 3,
//         id: 2
//     },
//     {
//         product: "socks",
//         price: 3,
//         quantity: 3,
//         id: 3
//     },

// ];

// let idCount = 4;