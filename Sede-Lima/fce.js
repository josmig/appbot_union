const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');


//informacion de toda FCE
async function fce(){
	const $ = await request.get({
		uri:'https://www.upeu.edu.pe/fce/',
		uri:'https://www.upeu.edu.pe/fce/mision-vision/',
		transform: body => cheerio.load(body)
	});

	//Info de la facultad
	$('.uvc-heading').each((i,el)=>{
		const titulo_1 = $(el).find('.uvc-main-heading').text();
		const parrafo = $(el).find('p').text();
		if( i === 0){
			console.log('**** MOtivación ****');
			console.log(titulo_1);
			console.log(parrafo);
		}else if(i === 1){
			console.log('******Palabras decana****');
			console.log(titulo_1);
			$('.vc_column-inner').each((i,el)=>{
				const parrafo = $(el).find('p').text()
				if(i=== 1){
					console.log(parrafo);
				}
			})
		}
	})

	//Información nosotros
	console.log('***********NOSOTROS*************');
	$('nav').each((i,el) => {
		let nosotros = [];
		const item1 = $(el).find('li .menu-item-847').text()
		const item2 = $(el).find('li .menu-item-848').text()
		const item3 = $(el).find('li .menu-item-855').text()
		const item4 = $(el).find('li .menu-item-856').text()

		nosotros.push(item1,item2,item3,item4)
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
			const items1 = $(el).find('li .menu-item-845').text();
			const items2 = $(el).find('li .menu-item-1012').text();
			const items3 = $(el).find('li .menu-item-1013').text();
			const items4 = $(el).find('li .menu-item-846').text();

			//carreras.push(items1,items2,items3)
			carreras.push(items1,items2,items3,items4);

			//console.log(carreras);
			//writeStream.write(`${carreras}\n`);
			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');				

			});
		})

//Areas y servicios

	console.log('*********AREAS Y SERVICIOS **************');

	$('nav').each((i,el) => {
		let areas_services = []
		const item1 = $(el).find('li .menu-item-852').text()
		const item2 = $(el).find('li .menu-item-854').text()	
		const item3 = $(el).find('li .menu-item-851').text()

		areas_services.push(item1,item2,item3);

		areas_services.forEach((e,i) => {
		  // Todo...
		  console.log(e + '\n');
		});	
	})

	//Misión y Visión
	console.log('*******mision-vision********');
	$('.wf-container-main').each((i,el)=>{
		let content1 = $('.wpb_content_element').text().trim()		
		console.log(content1,i);
	});
}
fce();


