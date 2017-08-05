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

app.get('/api/pictures', function (req, res){
	var pictures = [
		{
			user: {
				username: 'kalufau',
				avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIIs-WwA362C7gN83p8ciK1rgwuvguFqxJ6vN_tbph8AVYY8gh'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createdAt: +new Date()
		},
		{
			user: {
				username: 'kalufau',
				avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIIs-WwA362C7gN83p8ciK1rgwuvguFqxJ6vN_tbph8AVYY8gh'
			},
			url: 'office.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate()- 10)
		}
	];

	setTimeout(function (){
		res.send(pictures);
	}, 2000)
})

app.listen(3000, function (err){
	if (err) return console.log('Hubo un error'), process.exit(1);

	console.log('Clongram escuchando en el puerto 3000');
})