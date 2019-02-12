var DB = require('./../DB/DB');
module.exports = {
    add(req, res) {
        DB['C']('floor', { floor: req.query['floor'], room_num: req.query['room_num'] }, function (e) {
            res.send(e);
        })
    },
    list(req, res) {
        DB['R']('floor', function (e) {
            res.send(e);
        })
    },
    updata(req, res) {
        DB['U']('floor', {
            floor: req.body['floor'],
            room_num: req.body['room_num'],
            where: {
                id: req.body['id']
            }
        }, function (e) {
            res.send(e)
        })
    },
    delete(req, res) {
        DB['D']('floor', { id: req.query['id'] }, function (e) {
            res.send(e);
        })
    }
}