/*var numero = [ 400, 200, 1, -23 ];

//sin ecmascript
//var numerosMas1 = numero.map(function (numero){
//	return numero + 1;
//})

var numerosMas1 = numero.map(n => n + 1)

console.log(numerosMas1);*/

var page = require('page');
var moment = require('moment');
require('moment/locale/es');

moment.locale('es');

require('./homepage');
require('./signup');
require('./signin');

page();