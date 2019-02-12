var DB = require('./../DB/DB');
module.exports = {
    add(req, res) {
        DB['C']('hotel_order', {
            room_id: req.body['room_id'],
            u_id: req.body['u_id'],
            in_time: req.body['in_time'],
            leave_time: req.body['leave_time'],
        }, function (e) {
            res.send(e);
        })
    },
    tmp_add(req, res) {
        DB['C']('hotel_order', {
            room_id: req.body['room_id'],
            in_time: req.body['in_time'],
            leave_time: req.body['leave_time'],
            id_card: req.body['id_card'],
            phone: req.body['phone'],
            contact: req.body['contact'],
            note: req.body['note']
        }, function (e) {
            res.send(e);
        })
    },
    list(req, res) {
        DB['R']('hotel_order', function (e) {
            res.send(e);
        })
    },
    list_u(req, res) {
        DB['R']('hotel_order', function (e) {
            res.send(e);
        }, {
                u_id: req.body['u_id'],
                contact: req.body['contact'],
            })
    },
    updata(req, res) {
        DB['U']('hotel_order', {
            isno: req.query['isno'],
            note: req.query['note'],
            where: {
                id: req.query['id']
            }
        }, function (e) {
            res.send(e);
        })
    }

}
// 插入一条订单时先选取当前数据的入住时间的时间戳  然后在当前订单数组中查找当前时间戳以后的 离店时间戳  入店》离店才可以插入一条数据