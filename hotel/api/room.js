var router = require('express').Router();
var SeverroomSet = require('./../server/room_set');
router.post('/add', function (req, res) {
    SeverroomSet['add'](req, res);
})
router.get('/getone', function (req, res) {
    SeverroomSet['getone'](req, res);
})
router.get('/delete', function (req, res) {
    SeverroomSet['delete'](req, res);
})
router.post('/updata', function (req, res) {
    SeverroomSet['updata'](req, res);
})
module.exports = router;