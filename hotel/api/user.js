var router = require('express').Router();
var SeveruserSet = require('./../server/user_set');
router.post('/add', function (req, res) {
    SeveruserSet['add'](req, res);
})
router.get('/list', function (req, res) {
    SeveruserSet['list'](req, res)
})
router.get('/one', function (req, res) {
    SeveruserSet['one'](req, res)
})
router.post('/updata_back', function (req, res) {
    SeveruserSet['updata_back'](req, res);
})
router.post('/updata', function (req, res) {
    SeveruserSet['updata'](req, res);
})
module.exports = router;