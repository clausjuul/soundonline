/**
 * Routes til brand adminpanel
 * Heinz K - Marts 2019
 */

const modulename = 'Brands';

module.exports = (app) => {
    //GET: Henter liste med brands
    app.get('/admin/brand/list', (req, res) => {
        res.render('pages/admin/brand/index', {
            modulename: modulename,
            modulemode: 'Oversigt'
        }) 
    })

    //GET: Henter enkelt brand ud fra id
    app.get('/admin/brand/details/:id', (req, res) => {
        res.render('pages/admin/brand/details', {
            modulename: modulename,
            modulemode: 'Detaljer',
            id: req.params.id
        }) 
    })
}