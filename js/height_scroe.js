//个人  和游戏最高分在的渲染
function oneures() {
    var num;
    ctx.beginPath();
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, maxw, maxh);
    ctx.closePath();
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText('个人成绩前十', 20, 20);
    ctx.closePath()
    var gp = CreatrImg('关闭');
    gp.paint(ctx);
    var sarr = scroearr.concat();
    // debugger
    for (var i = 0; i < sarr.length; i++) {
        for (var j = i; j < sarr.length - 1; j++) {
            if (sarr[i] < sarr[j + 1]) {
                var tmp = sarr[i];
                sarr[i] = sarr[j + 1];
                sarr[j + 1] = tmp;
            }
        }
    }
    if (sarr.length <= 10) {
        num = sarr.length
    } else {
        num = 10;
    }
    for (var i = 0; i < num; i++) {
        // debugger
        var scroe = sarr[i];
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText("第" + (i + 1) + ':    ' + scroe, 20, 40 + 30 * i);
        ctx.closePath()
    }
}
// 所有用户
function allures() {
    var num;
    ctx.beginPath();
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, maxw, maxh);
    ctx.closePath();
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText('用户成绩前十', 20, 20);
    ctx.closePath()
    var gp = CreatrImg('关闭');
    gp.paint(ctx);
    //所有的用户和最高分的数组
    var allures = [];
    for (var i = 0; i < localStorage.length; i++) {
        // debugger
        //用户和最高分数组;
        var scarr = [];
        var uresnum = Math.max.apply(Math, JSON.parse(localStorage.getItem(localStorage.key(i))));
        scarr.push(localStorage.key(i), uresnum);
        allures.push(scarr);
    }
    for (var i = 0; i < allures.length; i++) {
        for (var j = i; j < allures.length - 1; j++) {
            if (allures[i][1] < allures[j + 1][1]) { 
                var tmpures = allures[i];
                allures[i] = allures[j + 1];
                allures[j + 1] = tmpures;

            }
        }
    }
    if (allures.length <= 10) {
        num = allures.length
    } else {
        num = 10;
    }
    for (var i = 0; i < num; i++) {
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = 'white';
        ctx.fillText("第" + (i + 1) + '名: ' + allures[i][0] + ' 成绩' + allures[i][1], 20, 40 + 30 * i);
        ctx.closePath()
    }
}