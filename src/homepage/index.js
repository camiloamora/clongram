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
			likes: 0,
			liked: false,
			createdAt: new Date()
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
	
	empty(main).appendChild(template(pictures));
}) 