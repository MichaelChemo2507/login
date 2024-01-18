let authMid = require('../middleware/auth_mid');
const express =require('express');
const {render} = require("ejs");
const router = express.Router();
module.exports = router;

let loginUrl = '/login';
let loginUrlErr = '/login2';
router.get('/login',(req,res)=>{
        render('loginPage',{loginUrlPage:loginUrl});
})
router.get('/login2',(req,res)=>{
    render('loginPage',{loginUrlPage:loginUrl});
})
router.post('/login',(req,res)=>{
    if(res.logedIn){
        render('page1');
    }else {
        res.redirect(loginUrlErr);
    }
})

