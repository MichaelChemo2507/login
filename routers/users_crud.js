let usr_mid = require('../middleware/usr_mid');
const express =require('express');
const sec_mid = require("../middleware/seq_mid");
const router = express.Router();
module.exports = router;


 router.post('/ADD',[usr_mid.addUser],function (req,res) {
 res.render('loginPage');
 });
 router.delete('/DELETE',[usr_mid.deleteUser],function (req,res) {
     res.render('page1');
 });
 router.patch('/UPDATE',[usr_mid.updateUser],function (req,res) {
     res.render('page1');
 });

