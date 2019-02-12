var con = require('./db_con');
var db = require('mysql');
var pool = db.createPool(con);
query = (sql, callback) => {
    pool.getConnection(function (err, link) {
        if (err) {
            console.log('连接池找不到连接对象！' + err)
        } else {
            link.query(sql, function (err, result) {
                if (err) {
                    console.log('sql 语句错误')
                } else {
                    callback(result);
                }
            })
        }
    })
}
// 判断语句
w = (data) => {
    let where_ = 'where ';
    for (var i in data) {
        where_ += `${i} = '${data[i]}' and `;
    }
    where_ += ' 1';
    return where_
}
// 修改语句的处理
updata = (data) => {
    let up = '';
    let where = w(data['where']);
    delete data['where'];
    for (var i in data) {
        up += `${i}='${data[i]}',`
    }
    up = up.substring(0, up.length - 1);
    up += ` ${where}`;
    return up;
}
// 添加语句的处理方法
inster = (data) => {
    let [k, v] = ['', ''];
    for (var i in data) {
        k += ` ${i} ,`;
        v += `'${data[i]}',`
    }
    k = k.substring(0, k.length - 1);
    v = v.substring(0, v.length - 1);
    return { k, v };
}
// 返回数据格式的方法   对象
for_mata = (code, msg, data = [], count = 0) => {
    let obj = { code, msg, data, count };
    return (obj);
}
// 执行sql语句的方法
gosql = (sql, callback) => {
    query(sql, function (e) {
        let data = '';
        if (e) {
            data = for_mata(1, '操作成功！', e);
        } else {
            data = for_mata(0, '操作失败！')
        }
        callback(data);
    })
}
C = (tablename, data, callback) => {
    let data0bj = inster(data);
    let sql = `insert into \`${tablename}\` (${data0bj['k']}) values (${data0bj['v']})`;
    console.log(sql)
    gosql(sql, function (e) {
        callback(JSON.stringify(e));
    });
};
U = (tablename, data, callback) => {
    let up = updata(data);
    let sql = `update \`${tablename}\`set ${up}`;
    console.log(sql);
    gosql(sql, function (e) {
        callback(JSON.stringify(e));
    });
}
R = (tablename, callback, data = 1) => {
    let where = w(data);
    let sql = `select * from \`${tablename}\` ${where}`;
    // 没有数量的信息; 
    gosql(sql, function (e) {
        var data = e;
        let sql = `SELECT COUNT(*) FROM \`${tablename}\`  ${where}`;
        gosql(sql, function (e) {
            data.count = e.data[0]["COUNT(*)"];
            callback(JSON.stringify(data));
        })
    });
}
D = (tablename, data, callback) => {
    let wher_ = w(data);
    console.log(wher_);
    let sql = `DELETE FROM \`${tablename}\` ${wher_}`;
    gosql(sql, function (e) {
        callback(JSON.stringify(e));
    });
};
module.exports = { C, U, R, D, gosql };