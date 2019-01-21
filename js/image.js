//绘制所有图片的工厂
function CreatrImg(type) {
    //图片地址
    var url = '';
    //截取图片的大小
    var cell = {};
    //最后图片在canva上绘制的信息
    var ingo = {};
    switch (type) {
        case '关闭':
            url = 'img/btn_close.png';
            cell = {
                x: 0,
                y: 0,
                h: 90,
                w: 90,
            };
            ingo = {
                x: can.width - 90,
                y: 0,
                w: 90,
                h: 90,
            };
            break;
        case '开始':
            url = 'img/btn_play.png';
            cell = {
                x: 0,
                y: 0,
                h: 122,
                w: 122,
            };
            ingo = {
                x: can.width / 2 - 122 / 2,
                y: can.height / 2 - 100,
                w: 122,
                h: 122,
            };
            break;
        case '三角':
            url = 'img/btn_gp.png';
            cell = {
                x: 0,
                y: 0,
                h: 90,
                w: 90,
            };
            ingo = {
                x: can.width / 2 - 2 * 90,
                y: can.height / 2 + 90,
                w: 90,
                h: 90,
            };
            break;
        case '气球':
            url = 'img/balloon.png';
            cell = {
                x: 0,
                y: 0,
                h: 120,
                w: 60,
            };
            ingo = {
                x: can.width / 2 - 60 / 2,
                y: can.height / 2 + 90,
                w: 60,
                h: 120,
            };
            break;
        case '手柄':
            url = 'img/btn_more.png';
            cell = {
                x: 0,
                y: 0,
                h: 90,
                w: 90,
            };
            ingo = {
                x: can.width / 2 + 90,
                y: can.height / 2 + 90,
                w: 90,
                h: 90,
            };
            break;
        case '背景':
            url = 'img/clouds.png';
            cell = {
                x: 0,
                y: 0,
                h: 105,
                w: 480,
            };
            ingo = {
                x: 0,
                y: can.height - 105,
                w: can.width,
                h: 105,
            };
            break;
        case '教程':
            url = 'img/tut.png';
            cell = {
                x: 0,
                y: 0,
                h: 453,
                w: 200,
            };
            ingo = {
                x: can.width/2-120,
                y: 60,
                w: 200*1.2,
                h: 453*1.2,
            };
            break;
    }
    var imangeSprite = new ImangeSprite(url, cell);
    var imgobj = new Sprite(type, imangeSprite);
    imgobj.x = ingo.x;
    imgobj.y = ingo.y;
    imgobj.width = ingo.w;
    imgobj.height = ingo.h;
    return imgobj;
}