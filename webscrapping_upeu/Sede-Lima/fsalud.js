const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');

async function fsalud(){
	const $ = await request.get({
		uri:'https://www.upeu.edu.pe/fsalud/',
		transform: body => cheerio.load(body)
	});



	//informacion sobre carreras FCE
	console.log('*****CARRERAS******\n');
		//writeStream.write('Carreras')
		$('nav').each((i,el)=>{
			let carreras = [];
			const items1 = $(el).find('li .menu-item-1676').text();
			const items2 = $(el).find('li .menu-item-1678').text();
			const items3 = $(el).find('li .menu-item-1677').text();
			const items4 = $(el).find('li .menu-item-1673').text();			


			//carreras.push(items1,items2,items3)
			carreras.push(items1,items2,items3,items4);

			//console.log(carreras);
			//writeStream.write(`${carreras}\n`);
			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');				

			});
		})
	

}
fsalud();