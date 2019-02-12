var router = require('express').Router();
router.get('/set', function (req, res) {
    res.render('back/hotel_order', {});
})
module.exports = router;