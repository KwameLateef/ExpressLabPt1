"use strict"; 

const pg = require("pg");

const pool = new pg.Pool ({
    user: "postgres",
    password: "hampton",
    host: "localhost",
    port: 8204,
    database: "ExpressShopDB",
    ssl: false
});


module.exports = pool;