var router = require('express').Router();
router.get('/set', function (req, res) {
    res.render('back/room', {})
})
module.exports = router;