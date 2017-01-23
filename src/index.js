/*var numero = [ 400, 200, 1, -23 ];

//sin ecmascript
//var numerosMas1 = numero.map(function (numero){
//	return numero + 1;
//})

var numerosMas1 = numero.map(n => n + 1)

console.log(numerosMas1);*/

var page = require('page');

require('./homepage');
require('./signup');
require('./signin');
require('./footer');

page();