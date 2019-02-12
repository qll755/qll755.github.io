// 视图层的渲染
// 后台登陆界面的引入
var back_login = require('./back_login');
// 管理员页面的渲染
var admin = require('./admin');
// 楼层设置页面的渲染
var floor = require('./floor');
// 房间类型的设置的引入
var type = require('./type');
// 房间的引入
var room = require('./room');
// 订单的引入
var hotel_order = require('./hote_order');
// 用户的增删该查
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