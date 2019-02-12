var router = require('express').Router();
var Severhotel_orderSet = require('./../server/hotel_order');
router.post('/add', function (req, res) {
    Severhotel_orderSet['add'](req, res)
});
router.post('/tmp_add', function (req, res) {
    Severhotel_orderSet['tmp_add'](req, res);
});
router.get('/list', function (req, res) {
    Severhotel_orderSet['list'](req, res);
});
router.post('/list_u', function (req, res) {
    Severhotel_orderSet['list_u'](req, res)
});
router.get('/updata', function (req, res) {
    Severhotel_orderSet['updata'](req, res);
})
module.exports = router;