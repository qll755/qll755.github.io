var DB = require('./../DB/DB');
module.exports = {
    add(req, res) {
        DB['C']('room', {
            num: req.body['num'],
            type_id: req.body['type_id'],
            isno: req.body['isno'],
            img: req.body['img'],
        }, function (e) {
            res.send(e);
        })
    },
    getone(req, res) {
        var sql = 'SELECT a.id,a.num,a.type_id,a.isno,a.img ,b.type_name,b.bed_num,b.bed_size,b.TV,b.food,b.bathroom,b.inter,b.hour,b.day,b.month,b.room_area,b.window FROM `room` AS a JOIN `type` AS b ON a.type_id=b.id WHERE a.id=' + req.query['id'];
        console.log(sql);
        DB['gosql'](sql, function (e) {
            res.send(e);
        })
    },
    delete(req, res) {
        DB['D']('room', { id: req.query['id'] }, function (e) {
            res.send(e);
        })
    },
    updata(req, res) {
        DB['U']('room', {
            where: {
                id: req.body['id']
            },
            num: req.body['num'],
            type_id: req.body['type_id'],
            isno: req.body['isno'],
            img: req.body['img'],
        }, function (e) {
            res.send(e);
        })
    }
}