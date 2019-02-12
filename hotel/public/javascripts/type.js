$('button').eq(0).on('click', function () {
    var v = $('input')
    debugger
    var data = {
        type_name: v.eq(0).val(),
        bed_num: v.eq(1).val(),
        bed_size: v.eq(2).val(),
        TV: v.eq(3).val(),
        food: v.eq(4).val(),
        bathroom: v.eq(5).val(),
        inter: v.eq(6).val(),
        hour: v.eq(7).val(),
        day: v.eq(8).val(),
        month: v.eq(9).val(),
        room_area: v.eq(10).val(),
        window: v.eq(11).val(),
    }
    type_add(data);
})
$('button').eq(1).on('click', function () {
    List('/api/type/list', function (e) {
        debugger
    })
})
$('button').eq(2).on('click', function () {
    var data = {
        id: 2,
        type_name: '修改测试类别名',
    }
    type_updata(data);
})
$('button').eq(3).on('click', function () {
    type_delete({
        id: 2
    })
})
type_add = (data) => {
    $.ajax({
        url: '/api/type/add',
        type: 'post',
        data: data,
        success(e) {
            debugger
        }
    })
}
type_updata = (data) => {
    $.ajax({
        url: '/api/type/updata',
        type: 'post',
        data: data,
        success(e) {
            debugger
        }
    })
}
type_delete = (id) => {
    $.ajax({
        url: '/api/type/delete',
        type: 'get',
        data: id,
        success(e) {
            debugger
        }
    })
}