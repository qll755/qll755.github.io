var router = require('express').Router();
// 服务层的引入；
var SeveradminsSet = require('./../server/admin_set');
router.get('/list', function (req, res) {
    SeveradminsSet['list'](req, res);
})
router.get('/delete', function (req, res) {
    SeveradminsSet['delete'](req, res);
})
router.post('/add', function (req, res) {
    SeveradminsSet['add'](req, res);
})
router.post('/updata', function (req, res) {
    SeveradminsSet['updata'](req, res);
})
module.exports = router;