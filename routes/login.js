const mysql = require('../config/mysql')();
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Get all 
    app.get('/api/login', (req, res) => {
        let username = (req.body.username) ? req.body.username : '';
        let password = (req.body.password) ? req.body.password : '';

        let sql = `SELECT id FROM user WHERE email = ? AND password = ?`;        
        mysql.query(sql, [username, password], (err, rows, fields) => {
            if(err) {
                console.error(err);
            } else {
                return res.json(rows);
            }
        })
    });
}