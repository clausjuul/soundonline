const mysql = require('../../config/mysql')();
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //Get all 
    app.get('/api/product', function(req, res) {
        let sql = "SELECT * FROM product";
        mysql.query(sql, (err, rows, fields) => {
            if(err) {
                console.error(err);
            } else {
                return res.json(rows);
            }
        })
    });

    //Get single item
    app.get('/api/product/:id', (req, res) => {
        if(isNaN(req.params.id)) {
            res.sendStatus(400);
        } else {
            const sql = `SELECT *  
                            FROM product 
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
    app.post('/api/product/', (req, res) => {
        let item_number = (req.body.item_number === undefined) ? '' : req.body.item_number;
        let title = (req.body.title === undefined) ? '' : req.body.title;
        let description_short = (req.body.description_short === undefined) ? '' : req.body.description_short;
        let description_long = (req.body.description_long === undefined) ? '' : req.body.description_long;
        let image = (req.body.image === undefined) ? '' : req.body.image;
        let price = (req.body.price === undefined) ? '' : req.body.price;
        let stock = (req.body.stock === undefined) ? '' : req.body.stock;
        let brand_id = (req.body.brand_id === undefined) ? '' : req.body.brand_id;
        let active = (req.body.active === undefined) ? '' : req.body.active;

        if(title === '' || description_short === '') {
            res.sendStatus(418);
        } else {
            const sql = `INSERT INTO product(item_number, title, description_short, description_long, image, price, stock, brand_id, active) 
                            VALUES(?,?,?,?,?,?,?,?,?)`;
            mysql.query(sql, [item_number, title, description_short, description_long, image, price, stock, brand_id, active], (err, result) => {
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
    app.put('/api/product/:id', (req, res) => {
        if(isNaN(req.params.id)) {
            res.sendStatus(400);
        } else {
            let item_number = (req.body.item_number === undefined) ? '' : req.body.item_number;
            let title = (req.body.title === undefined) ? '' : req.body.title;
            let description_short = (req.body.description_short === undefined) ? '' : req.body.description_short;
            let description_long = (req.body.description_long === undefined) ? '' : req.body.description_long;
            let image = (req.body.image === undefined) ? '' : req.body.image;
            let price = (req.body.price === undefined) ? '' : req.body.price;
            let stock = (req.body.stock === undefined) ? '' : req.body.stock;
            let brand_id = (req.body.brand_id === undefined) ? '' : req.body.brand_id;
            let active = (req.body.active === undefined) ? '' : req.body.active;
    
            if(title === '' || description === '') {
                res.sendStatus(418);
            } else {
                const sql = `UPDATE product SET 
                                item_number = ?,
                                title = ?, 
                                description_short = ?, 
                                description_long = ?, 
                                image = ?, 
                                price = ?, 
                                stock = ?, 
                                brand_id = ?, 
                                active = ?
                                WHERE id = ?`;
                mysql.query(sql, [item_number, title, description_short, description_long, image, price, stock, brand_id, active, req.params.id], (err, result) => {
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
    app.delete('/api/product/:id', (req, res) => {
        if(isNaN(req.params.id)) {
            res.sendStatus(400);
        } else {
            const sql = `DELETE FROM product WHERE id = ?`;
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