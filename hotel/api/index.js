// 数据处理的接口
// 后台登陆的接口
var back_login = require('./back_login');
// 管理员的curd
var admin = require('./admin_set');
// 楼层信息的设置
var floor = require('./floor');
// 房间类别的设置
var type = require('./type')
// 房间的设置
var room = require('./room');
// 订单的设置
var hotel_order = require('./hotel_order');
// 用户的增删改查
var user = require('./user');
module.exports = {
    '/back': back_login,
    '/admin': admin,
    '/floor': floor,
    '/type': type,
    '/room': room,
    '/hotel_order': hotel_order,
    '/user': user
}