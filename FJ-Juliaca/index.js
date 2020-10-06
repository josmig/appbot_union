const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');


async function inicio() {
	
	const $ = await request.get({
		uri:'https://juliaca.upeu.edu.pe/',			
		transform: body => cheerio.load(body)
	});


	// extraccion de items de menu			
	//Nosotros	
	console.log('*****Nosotros******\n');
		//writeStream.write('Carreras')
		$('.main-nav').each((i,el)=>{			
			let carreras = [];
			const u1 = $(el).find('li .menu-item-1767').text()
			const u2 = $(el).find('li .menu-item-1772').text()
			const u3 = $(el).find('li .menu-item-1768').text()
			const u4 = $(el).find('li .menu-item-1770').text()
			const u5 = $(el).find('li .menu-item-1748').text()
			const u6 = $(el).find('li .menu-item-1775').text()
			const u7 = $(el).find('li .menu-item-1769').text()
			const u8 = $(el).find('li .menu-item-1774').text()
			const u9 = $(el).find('li .menu-item-2101').text()
			const u10 = $(el).find('li .menu-item-3115').text()

			
			carreras.push(u1,u2,u3,u4,u5,u6,u7,u8,u9,u10)

			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');

			});
		})
	//Facultadades Juliaca
	console.log('*****Facultad Juliaca******\n');
		//writeStream.write('Carreras')
		$('.main-nav').each((i,el)=>{
			let carreras = [];
			const items1 = $(el).find('li .menu-item-1751').text();
			const items2 = $(el).find('li .menu-item-1753').text();
			const items3 = $(el).find('li .menu-item-1752').text();
			const items4 = $(el).find('li .menu-item-1754').text();

			
			carreras.push(items1,items2,items3,items4);

			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');

			});
		})

	//Postgrado
	console.log('******Postgrado******');		
		$('.main-nav').each((i,el)=>{
			let carreras = [];
			const items1 = $(el).find('li .menu-item-1755').text();
			const items2 = $(el).find('li .menu-item-1756').text();
			const items3 = $(el).find('li .menu-item-1757').text();
			const items4 = $(el).find('li .menu-item-1758').text();

			
			carreras.push(items1,items2,items3,items4);

			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');

			});
		})
	
	//Proesdad
	console.log('******Proesdad******');
		$('.main-nav').each((i,el)=>{
			let carreras = [];
			const items1 = $(el).find('li .menu-item-1759').text();
			const items2 = $(el).find('li .menu-item-1760').text();			

			carreras.push(items1,items2);

			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');

			});
		})

	//Bienestar Universitario
	console.log('*******Bienestar*******');
	const buniversitario = $('.main-nav').find('li .menu-item-1773').text()
	console.log(buniversitario);
}

inicio();