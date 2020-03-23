const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');



app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'rolo meo',
        anio: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {

    res.render('about', {
        nombre: 'Rolo',
        anio: new Date().getFullYear()
    });
});

app.get('/data', function(req, res) {
    res.send('HOla data')

});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});