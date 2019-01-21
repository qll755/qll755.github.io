//登录页面的渲染
function loading() {
    ctx.beginPath();
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, maxw, maxh);
    ctx.closePath();
    var playgo = CreatrImg('开始');
    playgo.paint(ctx);
    var gp = CreatrImg('三角');
    gp.paint(ctx);
    var ballon = CreatrImg('气球');
    ballon.paint(ctx);
    var more = CreatrImg('手柄');
    more.paint(ctx);
    var clouds = CreatrImg('背景');
    clouds.paint(ctx);
    if (scroearr.length == 0 ) {
        ctx.font = "bold 70px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText("R I S E", 135, 100);
        ctx.closePath()
        ctx.font = "bold 40px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText("UP", 220, 140);
        ctx.closePath()
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText("BALLOM", 203, 170);
    } else {
        best = Math.max.apply(Math, scroearr);
        last = scroearr[scroearr.length - 1];
        ctx.font = "bold 35px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText("best scroe :   " + best, 120, 100);
        ctx.font = "bold 35px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText("last scroe : " + last, 120, 140);
        ctx.closePath();
    }
};

function tut() {
    ctx.clearRect(0, 0, maxw, maxh);
    ctx.beginPath();
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, maxw, maxh);
    var close = CreatrImg('关闭');
    close.paint(ctx)
    var tut = CreatrImg('教程');
    tut.paint(ctx);
    ctx.closePath();
}