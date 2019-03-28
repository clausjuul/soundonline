const mysql = require('../../config/mysql')();
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Get all 
    app.get('/api/productgroup', function(req, res) {
        let sql = "SELECT * FROM productgroup";
        mysql.query(sql, (err, rows, fields) => {
            if(err) {
                console.error(err);
            } else {
                return res.json(rows);
            }
        })
    });

    //Get single item
    app.get('/api/productgroup/:id', (req, res) => {
        if(isNaN(req.params.id)) {
            res.sendStatus(400);
        } else {
            const sql = `SELECT *  
                            FROM productgroup 
                            WHERE id = ?`;
            mysql.query(sql, [req.params.id], (err, result) => {
                if(err) {
                    console.error(err);
                } else {
                    return res.json(result);
                }
            });
        }
    })
    
    //Add new item
    app.post('/api/productgroup/', (req, res) => {
        let parent_id = (req.body.parent_id === undefined) ? '' : req.body.parent_id;
        let title = (req.body.title === undefined) ? '' : req.body.title;
        let description = (req.body.description === undefined) ? '' : req.body.description;
        let sortnumber = (req.body.sortnumber === undefined) ? '' : req.body.sortnumber;
        let active = (req.body.active === undefined) ? '' : req.body.active;

        if(title === '' || description === '') {
            res.sendStatus(418);
        } else {
            const sql = `INSERT INTO productgroup(parent_id, title, description, sortnumber, active) 
                            VALUES(?,?,?,?,?,?,?,?,?)`;
            mysql.query(sql, [parent_id, title, description, sortnumber, active], (err, result) => {
                if(err) {
                    console.error(err);
                } else {
                    console.log(result.insertId);
                    res.sendStatus(200);
                }
            })

        }
    })
    
    //Update item
    app.put('/api/productgroup/:id', (req, res) => {
        if(isNaN(req.params.id)) {
            res.sendStatus(400);
        } else {
            let parent_id = (req.body.parent_id === undefined) ? '' : req.body.parent_id;
            let title = (req.body.title === undefined) ? '' : req.body.title;
            let description = (req.body.description === undefined) ? '' : req.body.description;
            let sortnumber = (req.body.sortnumber === undefined) ? '' : req.body.sortnumber;
            let active = (req.body.active === undefined) ? '' : req.body.active;
    
            if(title === '' || description === '') {
                res.sendStatus(418);
            } else {
                const sql = `UPDATE productgroup SET 
                                parent_id = ?,
                                title = ?, 
                                description = ?, 
                                sortnumber = ?, 
                                active = ?
                                WHERE id = ?`;
                mysql.query(sql, [parent_id, title, description, sortnumber, active, req.params.id], (err, result) => {
                    if(err) {
                        console.error(err);
                    } else {
                        console.log(result);
                    }
                })    
            }
        }        
        res.sendStatus(200);
    })
    
    //Delete item
    app.delete('/api/productgroup/:id', (req, res) => {
        if(isNaN(req.params.id)) {
            res.sendStatus(400);
        } else {
            const sql = `DELETE FROM productgroup WHERE id = ?`;
            mysql.query(sql, [req.params.id], (err, result) => {
                if(err) {
                    console.error(err);
                } else {
                    res.sendStatus(200);
                }
            })    

        }
    })
}