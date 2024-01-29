const express = require('express');
const port =2506;
const app  = express();
app.use(express.json());

let db_M = require('./database');
global.db_pool = db_M.pool;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');
const {json} = require("express");

global.loginUrl = 'http://localhost:2506/login/login';

const users_rtr = require('./routers/users_crud');
app.use('/users',users_rtr);
const _rtr = require('./routers/login');
app.use('/login',users_rtr);



app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));
app.set("view engine","ejs");

app.listen(port,()=>{
    console.log(`now listening on port ${port} http://localhost:2506/front/register`);
})
