//这是一个在画布上绘制的js
function Draw(interval) {
    this.interval = interval || 100;
}
Draw.prototype = {
    paint: function (sprite, ctx) {
        switch (sprite.type) {
            case '格子':
                ctx.beginPath();
                ctx.save();
                ctx.fillStyle = sprite.color;
                if (!sprite.condition) {
                    ctx.fillRect(sprite.x, sprite.y, sprite.width, sprite.width);
                } else {
                    // debugger
                    ctx.translate(sprite.x + sprite.width / 2, sprite.y + sprite.width / 2);
                    ctx.rotate(sprite.edg * Math.PI / 180);
                    ctx.fillRect(-sprite.width / 2, -sprite.width / 2, sprite.width, sprite.width)
                }
                ctx.restore();
                ctx.closePath();
                break;
            case '五角星':
                ctx.beginPath();
                for (var i = 0; i < 5; i++) {
                    ctx.lineTo(Math.cos((18 + 72 * i - sprite.rot) / 180 * Math.PI) * sprite.width + sprite.x, -Math.sin((18 + 72 * i - sprite.rot) / 180 *
                        Math.PI) * sprite.width + sprite.y);
                    ctx.lineTo(Math.cos((54 + 72 * i - sprite.rot) / 180 * Math.PI) * sprite.r + sprite.x, -Math.sin((54 + 72 * i - sprite.rot) / 180 *
                        Math.PI) * sprite.r + sprite.y);
                }
                ctx.closePath();
                ctx.fillStyle = sprite.color;
                ctx.fill();
                ctx.stroke();
                break;
        }
    },
    excute: function (sprite, time) {
        if (!sprite.condition) {
            if (time % 1 == 0) {
                sprite.y += sprite.speedy;
                sprite.rot += 1;
            }
        } else {
            sprite.edg += 3;
            sprite.rot += 1;
            switch (sprite.condition) {
                case 'left':
                    // debugger
                    sprite.y++;
                    sprite.x++;
                    break;
                case 'right':
                    sprite.y++;
                    sprite.x--;
                    break;
            }

        }

        if (sprite.y >= maxh) {
            sprite.visible = false
        }
    },
};

function CreaDraw(type, speed) {
    var draw = new Draw(type)
    var graph = new Sprite(type, draw);
    graph.speedy = getRadom(speed, speed - 5);
    graph.width = getRadom(50, 10);
    graph.x = getRadom(maxw - graph.width, 0);
    graph.y = -graph.width;
    graph.r = getRadom(graph.width, graph.width - 10)
    graph.color = getRadomColor();
    graph.name = type;
    return graph;
}
//随机数
function getRadom(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}
//随机颜色
function getRadomColor() {
    return 'rgb(' + getRadom(255, 0) + ',' + getRadom(255, 0) + ',' + getRadom(255, 0) + ')'
}