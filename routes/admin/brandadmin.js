/**
 * Routes til brand adminpanel
 * Heinz K - Marts 2019
 */

const modulename = 'Brand';

module.exports = (app) => {
    //GET: Henter liste med brands
    app.get('/admin/brand/', (req, res) => {
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

    //Opret nyt brand
    // app.get('/admin/brand/create', (req, res) => {
    app.get('/admin/brand/create', (req, res) => {
        // res.redirect('/test');
        res.render('pages/admin/brand/create', {
            modulename: modulename,
            modulemode: 'Opret ny'
        })
    });

    //Redigere brand
    app.get('/admin/brand/update/:id', (req, res) => {
        res.render('pages/admin/brand/update', {
            modulename: modulename,
            modulemode: 'Rediger',
            id: req.params.id
        }) 
    });    

    //Delete brand
    app.get('/admin/brand/delete/:id', (req, res) => {
        res.render('pages/admin/brand/delete', {
            modulename: modulename,
            modulemode: 'Slet mærke',
            id: req.params.id
        }) 
    });     
}