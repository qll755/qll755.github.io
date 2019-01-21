//精灵对象
//name   绘制类型
//pinter  根据不同类型绘制不同
//aniarr   更改坐标的方法
//type 类型 是图片，还是盒子；
function Sprite(type, pinter) {
    this.pinter = pinter;
    this.type = type;
    this.visible = true; //生命周期
    this.speedx = 0;
    this.speedy = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0; //图片
    this.edg = 0; //旋转角度
    this.r = 0; //绘制圆形需要的半径
    this.condition = false; //是否被碰撞;
    this.color = 'white';
    this.rot = 0;
    this.name = '默认';
    this.hp = 1;
}
//paint   负责绘制
//updata    负责更新对象的坐标
Sprite.prototype = {
    paint: function (ctx) {
        this.pinter.paint(this, ctx);
    },
    updata: function (time) {
        this.pinter.excute(this, time);
    }
}
//绘制图片的类
function ImangeSprite(url, cell = {}) {
    this.img = new Image();
    this.img.src = url;
    this.cell = cell;
}
ImangeSprite.prototype = {
    paint: function (Sprite, ctx) {
        var this_ = this
        this.img.onload = function () {
            ctx.drawImage(this_.img, this_.cell.x, this_.cell.y, this_.cell.w, this_.cell.h, Sprite.x, Sprite.y, Sprite.width, Sprite.height);
        }
    },
    excute: function (Sprite, time) {
        Sprite.y -= Sprite.speedy;
    }
}