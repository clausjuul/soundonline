const mysql = require('../config/mysql')();

module.exports = (app) => {
    app.get('/loginform', (req, res) => {
        res.render('pages/admin/loginform', {
            modulename: 'Login',
            modulemode: '-'
        })
    })

    app.get('/login', (req, res) => {
        const email = (req.body.email != undefined) ? req.body.email : '';
        const password = (req.body.password != undefined) ? req.body.password : '';

        if(email === '' || password === '') {
            res.sendStatus(400);
        } else {
            const sql = "SELECT id FROM user WHERE email = ? AND password = ?";
            mysql.query(sql, [email, password], (err, result, fields) => {
                if(err) {
                    res.sendStatus(500);
                } else {
                    if(!result[0]) {
                        res.sendStatus(401);
                    } else {
                        res.sendStatus(200);
                    }
                }
            });
        }
    })
}