/*var numero = [ 400, 200, 1, -23 ];

//sin ecmascript
//var numerosMas1 = numero.map(function (numero){
//	return numero + 1;
//})

var numerosMas1 = numero.map(n => n + 1)

console.log(numerosMas1);*/

var page = require('page');

var main = document.getElementById('main-container')

page('/', function (ctx, next){
	main.innerHTML = 'Home <a href="/signup">Signup</a>';
})

page('/signup', function (ctx, next){
	main.innerHTML = 'Signup <a href="/">Home</a>';
}) 

page();