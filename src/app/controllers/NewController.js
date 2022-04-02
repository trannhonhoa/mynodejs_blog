class NewController{
    index(req, res, next){
        res.render('new')
    }
    show(req, res, next){
        res.send('New detail')
    }
}
module.exports = new NewController