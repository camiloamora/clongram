var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next){
	title('Clonzigram');
	var main = document.getElementById('main-container');

	var pictures = [
		{
			user: {
				username: 'kalufau',
				avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIIs-WwA362C7gN83p8ciK1rgwuvguFqxJ6vN_tbph8AVYY8gh'
			},
			url: 'office.jpg',
			likes: 10,
			liked: false
		},
		{
			user: {
				username: 'kalufau',
				avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQIIs-WwA362C7gN83p8ciK1rgwuvguFqxJ6vN_tbph8AVYY8gh'
			},
			url: 'office.jpg',
			likes: 2,
			liked: true
		}
	];
	
	empty(main).appendChild(template(pictures));
}) 