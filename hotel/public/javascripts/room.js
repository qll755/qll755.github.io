$('button').eq(0).on('click', function () {
    // 添加
    var v = $('input');
    var data = {
        num: v.eq(0).val(),
        type_id: v.eq(1).val(),
        isno: v.eq(2).val(),
        img: v.eq(3).val(),
    }
    room_add(data);
})
$('button').eq(1).on('click', function () {
    // 修改
    var v = $('input');
    var data = {
        id: 1,
        num: v.eq(0).val(),
        type_id: v.eq(1).val(),
        isno: v.eq(2).val(),
        img: v.eq(3).val(),
    }
    room_updata(data)
})
$('button').eq(2).on('click', function () {
    // 查看
    room_getone(1);
})
$('button').eq(3).on('click', function () {
    // 删除
    room_delete(2);
})
room_add = (data) => {
    $.ajax({
        url: '/api/room/add',
        type: 'post',
        data: data,
        success(e) {
            debugger
        }
    })
}
room_getone = (id) => {
    $.ajax({
        url: '/api/room/getone',
        type: 'get',
        data: {
            id: id
        }, success(e) {
            debugger
        }
    })
}
room_delete = (id) => {
    $.ajax({
        url: '/api/room/delete',
        type: 'get',
        data: {
            id: id
        }, success(e) {
            debugger
        }
    })
}
room_updata=(data)=>{
    $.ajax({
        url:'/api/room/updata',
        type:'post',
        data:data,
        success(e){
            debugger
        }
    })
}