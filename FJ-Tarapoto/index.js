const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');


async function inicio() {
	
	const $ = await request.get({
		uri:'https://tarapoto.upeu.edu.pe/',			
		transform: body => cheerio.load(body)
	});


	// extraccion de items de menu			
	//Nosotros	
	console.log('*****Nosotros******\n');
		//writeStream.write('Carreras')
		$('.main-nav').each((i,el)=>{			
			let carreras = [];
			const u1 = $(el).find('li .menu-item-1967').text()
			const u2 = $(el).find('li .menu-item-1972').text()
			const u3 = $(el).find('li .menu-item-1968').text()
			const u4 = $(el).find('li .menu-item-1970').text()
			const u5 = $(el).find('li .menu-item-1969').text()
			const u6 = $(el).find('li .menu-item-2188').text()
			const u7 = $(el).find('li .menu-item-1961').text()
			const u8 = $(el).find('li .menu-item-1976').text()
			const u9 = $(el).find('li .menu-item-1942').text()
			const u10 = $(el).find('li .menu-item-2618').text()
			const u11 = $(el).find('li .menu-item-4420').text()

			
			carreras.push(u1,u2,u3,u4,u5,u6,u7,u8,u9,u10,u11)

			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');

			});
		})
	//Facultadades Tarapoto
	console.log('*****Facultad Tarapoto******\n');
		//writeStream.write('Carreras')
		$('.main-nav').each((i,el)=>{
			let carreras = [];
			const items1 = $(el).find('li .menu-item-3720').text();
			const items2 = $(el).find('li .menu-item-3724').text();
			const items3 = $(el).find('li .menu-item-3753').text();			

			
			carreras.push(items1,items2,items3);

			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');

			});
		})

	//Bienestar Universitario
	console.log('*******Bienestar*******');
	const buniversitario = $('.main-nav').find('li .menu-item-3073').text()
	console.log(buniversitario);
}

inicio();