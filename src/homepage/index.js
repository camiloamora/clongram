var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');

page('/', header, asyncLoad , function (ctx, next){
	title('Clonzigram');
	var main = document.getElementById('main-container');
	empty(main).appendChild(template(ctx.pictures));
}) 

function loadPictures(ctx, next){
	request
		.get('/api/pictures')
		.end(function (err,res){
			if(err) return console.log(err);
			
			ctx.pictures = res.body;
			next();
		})
}

async function asyncLoad(ctx, next){
	try{
		ctx.pictures = await fetch('/api/pictures').then( res => res.json())
		next();
	}
	catch(err){
		return console.log(err);
	}
}