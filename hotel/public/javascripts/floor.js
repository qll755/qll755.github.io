$('button').eq(0).on('click', function (e) {
    // 楼层的添加
    floor_add(20, 10);
})
$('button').eq(1).on('click', function (e) {
    // 楼层信息的查看
    List('/api/floor/list', function (e) {
        debugger
    })
})
$('button').eq(2).on('click', function (e) {
    // 楼层信息的修改
    floor_updata(1, '测试楼层', '测试房间数');
})
$('button').eq(3).on('click', function () {
    // 楼层信息的删除
    floor_delete(2)
})
floor_add = (floor, room_num) => {
    $.ajax({
        url: '/api/floor/add',
        type: 'get',
        data: {
            floor: floor,
            room_num: room_num
        }, success(e) {
            debugger
        }
    })
}
floor_updata = (id, floor, room_num) => {
    $.ajax({
        url: '/api/floor/updata',
        type: 'post',
        data: {
            id: id,
            floor: floor,
            room_num: room_num
        }, success(e) {
            debugger
        }
    })
}
floor_delete = (id) => {
    $.ajax({
        url: '/api/floor/delete',
        type: 'get',
        data: {
            id: id
        },success(e){
            debugger
        }
    })
}