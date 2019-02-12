var router = require('express').Router();
router.get('/set', function (req, res) {
    res.render('back/admin_set', {});
})
module.exports = router;