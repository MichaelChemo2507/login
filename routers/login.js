let authMid = require('../middleware/auth_mid');
const express =require('express');
const {render} = require("ejs");
const router = express.Router();
module.exports = router;


router.get('/login',(req,res)=>{
        render('loginPage',{loginUrlPage:loginUrl});
})
router.post('/login',[authMid.loginCheck],(req,res)=>{
    if(res.logedIn){
        render('page1');
    }else {
        res.redirect(loginUrl);
    }
})

