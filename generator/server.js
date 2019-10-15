const koa=require('koa');
const mysql = require('koa-mysql');

let db = mysql.createPool({host:'localhost',user:'root',password:''})
let server=new koa();
server.use(function *() {
    let data = yield  db.query(`SELECT*FROM user_table`)
});

server.listen(8888)
