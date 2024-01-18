const sec_mid = require('./seq_mid');

async function addUser(req,res,next){
    let fullName = req.body.fullName;
    let userName = req.body.userName;
    let password = sec_mid.securePass(req.body.pass);
    let email = req.body.email;
    let q = "INSERT INTO users ";
    q+="(fullName,userName,pass,email) ";
    q+=`VALUES('${fullName}','${userName}','${password}','${email}')`;
    let poolPromise = db_pool.promise();
       try{
            await poolPromise.query(q);
       }
       catch (err){
           res.status(500).json({message:err})
       }
    next();
}
async function deleteUser(req,res,next){
    let id = Number(req.params.id);
    let q = `DELETE FROM users WHERE id = ${id}`;
    let poolPromise = db_pool.promise();
    try{
      await poolPromise.query(q);
    }catch (err){
        res.status(500).json({message:err})
    }
     next();
}




module.exports = {
    addUser:addUser,
    deleteUser:deleteUser
}