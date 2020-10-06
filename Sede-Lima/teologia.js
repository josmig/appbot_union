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


	//Nostros
	console.log('******Nosotros******');
	$('nav').each((i,el) => {
		//const span = $(el).find('span').text();
		let nosotros = [];					
		const item1 = $(el).find('li .menu-item-3488').text()
		const item2 = $(el).find('li .menu-item-3487').text()
		const item3 = $(el).find('li .menu-item-3495').text()
		const item4 = $(el).find('li .menu-item-3489').text()

		nosotros.push(item1,item2,item3,item4)
		nosotros.forEach((e,i) => {		  
		  	console.log(e + '\n');
		})
	})

	//Programas
	console.log('********Programas*********');
	$('nav').each((i,el) => {
		let programas = []
		const item1 = $(el).find('li .menu-item-3475').text()
		const item2 = $(el).find('li .menu-item-3476').text()

		programas.push(item1,item2)
		programas.forEach((e,i) => {
		  // Todo...
		  console.log(e + '\n');
		})
	})	

	//Admision
	/*console.log('******Admision********');
	const perfil = $('li .menu-item-3482').text()
	console.log(perfil + '\n');	*/
	

	
}

teologia();