var code = getRadom(9999, 1000)
$('#cc').css({
    color: getColor(),
})
$('#cc').text(`${code}`);
$('.btn').on('click', function () {
    var v_code = parseInt($('input').eq(2).val());
    // debugger
    // if (v_code == code) {
        log();
    // } else {
    //     alert('验证码错误！')
    // }
})
log = () => {
    $.ajax({
        url: '/api/back/login',
        type: 'post',
        data: {
            un: $('input').eq(0).val(),
            pw: $('input').eq(1).val(),
        },
        success(e) {
            debugger
        }, error(e) {
            debugger
        }
    })
}