const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');


async function fia() {
	
	const $ = await request.get({
		uri:'https://juliaca.upeu.edu.pe/fia/',			
		transform: body => cheerio.load(body)
	});
	//Carreras 
	console.log('********Carreras********');
	const titulos = $('.uvc-main-heading').each((i,el)=>{
		const carreras = $(el).find('h2').text()
		console.log(carreras,i);
	})
	
	
}

fia();