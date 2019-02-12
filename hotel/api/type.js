var router = require('express').Router();
var SevertypeSet = require('./../server/type_set');
router.post('/add', function (req, res) {
    SevertypeSet['add'](req, res);
})
router.get('/list', function (req, res) {
    SevertypeSet['list'](req, res);
})
router.post('/updata', function (req, res) {
    SevertypeSet['updata'](req, res);
})
router.get('/delete', function (req, res) {
    SevertypeSet['delete'](req, res);
})
module.exports = router;