var DB = require('./../DB/DB');
module.exports = {
    add(req, res) {
        DB['C']('type', {
            type_name: req.body['type_name'],
            bed_num: req.body['bed_num'],
            bed_size: req.body['bed_size'],
            TV: req.body['TV'],
            food: req.body['food'],
            bathroom: req.body['bathroom'],
            inter: req.body['inter'],
            hour: req.body['hour'],
            day: req.body['day'],
            month: req.body['month'],
            room_area: req.body['room_area'],
            window: req.body['window'],
        }, function (e) {
            res.send(e);
        })
    },
    list(req, res) {
        DB['R']('type', function (e) {
            res.send(e)
        })
    },
    updata(req, res) {
        DB['U']('type', {
            type_name: req.body['type_name'],
            where: {
                id: req.body['id']
            }
        }, function (e) {
            res.send(e);
        })
    },
    delete(req, res) {
        DB['D']('type', { id: req.query['id'] }, function (e) {
            res.send(e);
        })
    }
}