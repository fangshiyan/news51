const m_user = require('../models/m_user');
// 渲染登录页面
const showSignin = (req, res) => {
    res.render('signin.html');
};
// 处理登录的请求
const handleSignin = (req, res) => {
    // 1. 获取表单数据
    const body = req.body
    console.log(body);
};
// 处理登录的请求
const handleSignin = (req, res) => {
    // 1. 获取表单数据
    const body = req.body;
    console.log(body);
    m_user.checkEmail(body.email, (err, data) => {
        if(err) {
            return res.send({
                code:500,
                message:'服务器错误'
            })
        }
        if(!data[0]) {
            console.log('邮箱不存在');
            return res.send({
                code:1,
                message:'邮箱不存在'
            })
        }
        if(body.password != data[0].password) {
            return res.send({
                code:2,
                message:'密码错误'
            })
        }
        res.send({
            code:200,
            message:'可以跳转了'
        })
    });
};
exports.showSignin = showSignin;
exports.handleSignin = handleSignin;