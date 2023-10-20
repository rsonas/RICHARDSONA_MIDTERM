/*
    Aislinn Richardson
    301146892
    server.js
    10/18/23
*/

//required
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('App started at http://localhost:3000/');
});