let usr_mid = require('../middleware/usr_mid');
const express =require('express');
const sec_mid = require("../middleware/seq_mid");
const router = express.Router();
module.exports = router;

 router.post('/ADD',[usr_mid.addUser],function (req,res) {
 if (res.lastId>0){
  res.redirect('login/login');
 }else{
  return res.status(500).json({message: res.err});
 }
 });
 router.delete('/DELETE',[usr_mid.deleteUser],function (req,res) {
 });
 router.patch('/UPDATE',[usr_mid.updateUser],function (req,res) {
     res.render('page1');
 });
 router.get('/READ',[usr_mid.readUser],function (req,res) {
     res.json(res.row);
 });

