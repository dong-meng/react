//跨域  后期删
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); //为了跨域保持session，所以指定地址，不能用*
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
//session
var session = require('express-session');
app.use(session({
    secret: 'classweb531234', //设置 session 签名
    name: 'classweb',
    cookie: { maxAge: 60 * 1000 * 60 * 24 }, // 储存的时间 24小时
    resave: false, // 每次请求都重新设置session
    saveUninitialized: true
}));