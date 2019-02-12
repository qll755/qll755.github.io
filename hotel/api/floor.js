var router = require('express').Router();
var SeverfloorSet = require('./../server/floor_set');
router.get('/add', function (req, res) {
    SeverfloorSet['add'](req, res);
})
router.get('/list', function (req, res) {
    SeverfloorSet['list'](req, res);
})
router.post('/updata', function (req, res) {
    SeverfloorSet['updata'](req, res);
})
router.get('/delete', function (req, res) {
    SeverfloorSet['delete'](req, res);
})
module.exports = router;