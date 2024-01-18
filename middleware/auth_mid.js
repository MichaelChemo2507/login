const sec_mid = require("../middleware/seq_mid");

async function loginCheck(req,res,next){
    let userName = req.body.userName;
    let pass = sec_mid.securePass(req.body.pass);

    let poolPromise = db_pool.promise();
    let rows = [];
    let q =`SELECT * FROM users WERE `;
     q +=`userName = ${userName} AND pass = ${pass}`;
    try {
        [rows] = await poolPromise.query(q);
    }catch (err){
        res.status(500).json({message:err});
    }
    res.user = {};
    res.logedIn = false;
if (rows.length > 0){
    res.logedIn = true;
    res.user = rows[0];
}


}