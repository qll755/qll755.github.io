var db = require('./../DB/DB');
module.exports = {
    select(req, res) {
        db['R']('admin', function (e) {
            if (e.data.length == 0) {
                e.msg = '密码错误或账号不存在！';
                e.code = 1
            }
            delete e['data'];
            delete e['count'];
            res.send(e);
        }, { pw: req.body['pw'], un: req.body['un'] })
    }
}