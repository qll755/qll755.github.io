var router = require('express').Router();
var loginSever = require('./../server/back_login');
router.post('/login', function (req, res) {
    loginSever.select(req, res);
})
module.exports=router;