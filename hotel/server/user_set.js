var DB = require('./../DB/DB');
module.exports = {
    add(req, res) {
        DB['C']('user', req.body, function (e) {
            res.send(e);
        })
    },
    list(req, res) {
        DB['R']('user', function (e) {
            res.send(e);
        })
    },
    one(req, res) {
        DB['R']('user', function (e) {
            res.send(e)
        }, req.query)
    },
    updata_back(req, res) {
        DB['U']('user', {
            where: {
                id: req.body['id']
            },
            black: req.body['black']
        }, function (e) {
            res.send(e)
        })
    },
    updata(req, res) {
        DB['U']('user', {
            where: {
                id: req.body['id']
            },
            un: req.body['un'],
            pw: req.body['pw'],
            id_card: req.body['id_card'],
            phone: req.body['phone'],
            sex:req.body['sex']
        }, function (e) {
            res.send(e)
        })
    }
}