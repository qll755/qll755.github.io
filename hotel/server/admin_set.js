// 基础类的引入
var DB = require('./../DB/DB');
module.exports = {
    list(req, res) {
        DB['R']('admin', function (e) {
            res.send(e);
        })
    },
    delete(req, res) {
        DB['D']('admin', { id: req.query['id'] }, function (e) {
            res.send(e);
        })
    },
    add(req, res) {
        DB['C']('admin', {
            un: req.body['un'], pw: req.body['pw']
        }, function (e) {
            res.send(e);
        }
        )
    },
    updata(req, res) {
        DB['U']('admin', {
            pw: req.body['pw'], un: req.body['un'], where: {
                id: req.body['id']
            }
        }, function (e) {
            res.send(e);
        })
    }
}