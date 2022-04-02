const news = require('./news')
const site = require('./site')
function route(app){
    // get, post, push, patch, delete
    app.use('/news', news)
    app.use('/', site )
}
module.exports = route