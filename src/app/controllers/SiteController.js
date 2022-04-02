class SiteController{
    index(req, res, next){
        res.render('home')
    }
    search(req, res, next){
        res.send('Search')
    }
}
module.exports = new SiteController