/**
* Routes til brand adminpanel
* Heinz K - Marts 2019
*/
const root_url = 'product';

const modulename = 'Product';

module.exports = (app) => {
    //GET: Henter liste med brands
    app.get('/admin/'+root_url+'/', (req, res) => {
        res.render('pages/admin/'+root_url+'/index', {
            modulename: modulename,
            modulemode: 'Oversigt'
        }) 
    })

    //GET: Henter enkelt brand ud fra id
    app.get('/admin/'+root_url+'/details/:id', (req, res) => {
        res.render('pages/admin/'+root_url+'/details', {
            modulename: modulename,
            modulemode: 'Detaljer',
            id: req.params.id
        }) 
    })

    //Opret nyt brand
    // app.get('/admin/brand/create', (req, res) => {
    app.get('/admin/'+root_url+'/create', (req, res) => {
        // res.redirect('/test');
        res.render('pages/admin/'+root_url+'/create', {
            modulename: modulename,
            modulemode: 'Opret ny'
        })
    });

    //Redigere brand
    app.get('/admin/'+root_url+'/update/:id', (req, res) => {
        res.render('pages/admin/'+root_url+'/update', {
            modulename: modulename,
            modulemode: 'Rediger',
            id: req.params.id
        }) 
    });    

    //Delete brand
    app.get('/admin/'+root_url+'/delete/:id', (req, res) => {
        res.render('pages/admin/'+root_url+'/delete', {
            modulename: modulename,
            modulemode: 'Slet mærke',
            id: req.params.id
        }) 
    });     
}