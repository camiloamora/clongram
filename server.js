//--save para declarar que tome la libreria como dependencia
var express = require('express');

var app = express();

//inclusión de vistas
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res){
	res.render('index', { title: 'Clongram' });
})

app.get('/signup', function (req, res){
	res.render('index', { title: 'Clongram - Signup'})
})

app.get('/signin', function (req, res){
	res.render('index', { title: 'Clongram - Signin' } )
})

app.listen(3000, function (err){
	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('Clongram escuchando en el puerto 3000');
})