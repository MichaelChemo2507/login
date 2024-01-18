const  params = require("../gen_params");
const md5 = require('md5');
function securePass(pass){
    return md5(params.salt+pass);
}

module.exports = {
securePass:securePass
}