const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs =  require('express-handlebars');
const app = express();

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.get('/', (req, res) => {
    res.render('home')
});

const route = require('./routes/index')
route(app)
// app.get('/search', (req, res) => {
//     res.render('search')
// });
// app.post('/search', (req, res) => {
//     console.log(req.body)
//     res.render('search')
// });





app.listen(port, () => {
    console.log(`Server is running ${port}...`)
})