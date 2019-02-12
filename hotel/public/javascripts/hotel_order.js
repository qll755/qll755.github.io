var v = $('input')
$('button').eq(0).on('click', function () {
    // 提交
    // var data = {
    //     room_id:v.eq(0).val(),
    //     u_id:v.eq(1).val(),
    //     in_time:v.eq(2).val(),
    //     leave_time:v.eq(3).val(),
    // };
    // hotel_add(data)
    var data = {
        room_id: v.eq(0).val(),
        in_time: v.eq(2).val(),
        leave_time: v.eq(3).val(),
        id_card: v.eq(4).val(),
        phone: v.eq(5).val(),
        contact: v.eq(6).val(),
        note: v.eq(8).val()
    }
    hotel_tmp_add(data)
});
$('button').eq(1).on('click', function () {
    // 修改
    var data = {
        id: 1,
        isno: v.eq(7).val(),
        note: v.eq(8).val()
    }
    hotel_updata(data)
});
$('button').eq(2).on('click', function () {
    // 删除
});
$('button').eq(3).on('click', function () {
    // 查看
    // List('/api/hotel_order/list',function(e){
    //     debugger
    // })
    var data = {
        u_id: v.eq(1).val(),
        contact: v.eq(6).val(),
    }
    hotel_order_list_u(data)
});
hotel_add = (data) => {
    $.ajax({
        url: '/api/hotel_order/add',
        type: 'post',
        data: data,
        success(e) {
            debugger
        }
    })
}
hotel_tmp_add = (data) => {
    $.ajax({
        url: '/api/hotel_order/tmp_add',
        type: 'post',
        data: data,
        success(e) {
            debugger
        }
    })
}
hotel_order_list_u = (data) => {
    $.ajax({
        url: '/api/hotel_order/list_u',
        type: 'post',
        data: data,
        success(e) {
            debugger
        }
    })
}
hotel_updata = (data) => {
    $.ajax({
        url: '/api/hotel_order/updata',
        type: 'get',
        data: data,
        success(e) {
            debugger
        }
    })
}