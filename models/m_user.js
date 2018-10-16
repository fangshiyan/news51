// 导入数据库配置的模块
const db = require('../tools/db_config');
// 验证邮箱
const checkEmail = function(email, callback) {
    const sqlstr = 'SELECT * FROM `users` WHERE email=?';
    db.query(sqlstr, email, (err, data) => {
        if(err) {
            return callback(err);
        }
        callback(null, data);
    });
};
exports.checkEmail = checkEmail;