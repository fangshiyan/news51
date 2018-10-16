// 路由模块 
// 目的:监听请求并且找到每个请求的方法名
// 1. 导包
// 2. express.Router()获取对象router
// 3. router.get()
// 4.导出对象router
const express = require('express');
// 导入控制器文件
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');
const router = express.Router();
// 渲染登录页的请求
router.get('/signin', c_user.showSignin);
router.post('/signin', c_user.handleSignin),
    router.get('/', c_topic.showTopic);
module.exports = router;