const express = require('express')
const exphbs = require('express-handlebars');
const path = require('path');

const app = express()
app.use('/public', express.static(__dirname + '/public'))

app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('Server online')
  })