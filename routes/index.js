const mysql = require('../config/mysql')();
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Get all 
    app.get('/api/', function(req, res) {
        let sql = "SELECT * FROM brand";
        mysql.query(sql, (err, rows, fields) => {
            if(err) {
                console.error(err);
            } else {
                return res.json(rows);
            }
        })
    });

    //Get single product
    app.get('/api/:id', (req, res) => {
        res.sendStatus(200);
    })
    
    //Add new item
    app.post('/api/', (req, res) => {
        res.sendStatus(200);
    })
    
    //Update item
    app.put('/api/:id', (req, res) => {
        res.sendStatus(200);
    })
    
    //Delete item
    app.delete('/api/:id', (req, res) => {
        res.sendStatus(200);
    })
}