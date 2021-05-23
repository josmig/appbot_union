//Facultad de ciencias humanas y educacion

const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');


async function facihed(){
	const $ = await request.get({
		uri:'https://www.upeu.edu.pe/facihed/',
		uri:'https://www.upeu.edu.pe/facihed/vision/',
		transform: body => cheerio.load(body)
	});



	//Mision y vision
	console.log('***MISION Y VISION');
	$('.content').each((i,el)=>{
			const titulos = $(el).find('h3').text();
			const parrafo = $(el).find('span').text();
			console.log(i,titulos);
			console.log(parrafo);

	})


	//carreras FCE
	console.log('*****carreras FACIHED******\n');
		//writeStream.write('Carreras')
		$('.main-nav').each((i,el)=>{
			let carreras = [];
			const items1 = $(el).find('li .menu-item-962').text();
			const items2 = $(el).find('li .menu-item-1058').text();

			//carreras.push(items1,items2,items3)
			carreras.push(items1,items2);

			//console.log(carreras);
			//writeStream.write(`${carreras}\n`);
			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');

			});
		})
}
facihed();

