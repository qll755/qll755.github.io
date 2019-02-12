var v = $('input')
var btn = $('button')
btn.eq(0).on('click', function () {
    var data = {
        un: v.eq(0).val(),
        pw: v.eq(2).val(),
        id_card: v.eq(3).val(),
        phone: v.eq(4).val(),
        sex: v.eq(1).val()
    }
    user_add(data)
})
user_add = (data) => {
    $.ajax({
        url: '/api/user/add',
        type: 'post',
        data: data,
        success(e) {
            debugger
        }
    })
}