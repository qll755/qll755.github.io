$('button').eq(0).on('click', function (e) {
    // 管理员的修改
    admin_updata(3, 'test', 'test')
})
$('button').eq(1).on('click', function (e) {
    // 管理员的增加
    admin_add('测试', '测试');
})
$('button').eq(2).on('click', function (e) {
    // 管理员的删除
    admin_d(2);
})
$('button').eq(3).on('click', function (e) {
    // 查看所有的管理员
    List('/api/admin/list', function (e) {
        debugger
    })
})
admin_d = (id) => {
    $.ajax({
        url: '/api/admin/delete',
        type: 'get',
        data: {
            id: id
        }, success(e) {
            debugger
        }
    })
}
admin_add = (un, pw) => {
    $.ajax({
        url: '/api/admin/add',
        type: 'post',
        data: {
            un: un,
            pw: pw
        }, success(e) {
            debugger
        }
    })
}
admin_updata = (id, un, pw) => {
    $.ajax({
        url: '/api/admin/updata',
        type: 'post',
        data: {
            id: id,
            un: un,
            pw: pw
        }, success(e) {
            debugger
        }
    })
}