const express = require("express");
const usr_mid = require("../middleware/usr_mid");
const router = express.Router();
module.exports = router;

router.get('/register',function (req,res) {
   res.render('register');
});
