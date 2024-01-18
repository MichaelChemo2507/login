 const express = require('express');
 const router = express.Router();
 module.exports = router;

 router.get('/login',(req,res)=> {
     res.render("loginPage",{pageTitle:"login"});
 });router.get('/register',(req,res)=> {
     res.render("register",{pageTitle:"register"});
 });

