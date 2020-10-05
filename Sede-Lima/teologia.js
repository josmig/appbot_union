const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');

async function teologia(){
	const $ = await request.get({
		uri:'https://www.upeu.edu.pe/teologia/',
		transform: body => cheerio.load(body)
	});

	//Bienvenida
	console.log('****Bienvenida****');
	const parrafo = $('.uvc-sub-heading p').text();
	console.log(parrafo);

}

teologia();