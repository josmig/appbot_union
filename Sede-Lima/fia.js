const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');

async function fia(){
	const $ = await request.get({
		uri:'https://www.upeu.edu.pe/fia/',
		transform: body => cheerio.load(body)
	});



	console.log('********Bienvenida*******');
	const parrafo = $('.uvc-heading').text();
	console.log(parrafo.trim());

	//Información nosotros
	console.log('***********NOSOTROS*************');
	$('nav').each((i,el) => {
		let nosotros = [];
		const item1 = $(el).find('li .menu-item-2713').text()
		const item2 = $(el).find('li .menu-item-2712').text()
		const item3 = $(el).find('li .menu-item-2719').text()

		nosotros.push(item1,item2,item3)
		nosotros.forEach((e,i) => {
		  // Todo...
		  console.log(e + '\n');
		})
	})


	//informacion sobre carreras FCE
	console.log('*****CARRERAS******\n');
		//writeStream.write('Carreras')
		$('nav').each((i,el)=>{
			let carreras = [];
			const items1 = $(el).find('li .menu-item-2714').text();
			const items2 = $(el).find('li .menu-item-2717').text();
			const items3 = $(el).find('li .menu-item-2716').text();
			const items4 = $(el).find('li .menu-item-3539').text();
			const items5 = $(el).find('li .menu-item-2715').text();


			//carreras.push(items1,items2,items3)
			carreras.push(items1,items2,items3,items4,items5);

			//console.log(carreras);
			//writeStream.write(`${carreras}\n`);
			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');				

			});
		})


}

fia();