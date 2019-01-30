var router = require('express').Router();
router.get('/login', function (req, res) {
    res.render('back/index', {});
})
module.exports = router;