const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');

const writeStream = fs.createWriteStream('empresariales.csv');

//Informacion Facultad
async function init(){
	//$ -> Simboliza un objeto
	const $ = await request({
		//uri:'https://postulantes.upeu.edu.pe',
		//uri:'https://www.upeu.edu.pe',
		uri:'https://www.upeu.edu.pe/',
		//cheerio me da metodos para poder analizarlo
		transform: body => cheerio.load(body)
	});
	//console.log($)
		
	//Extrayendo el titulo
	
	console.log('******Facultades Y Descripcion Campus******\n');
	const campus_description= $('.aio-icon-description');
	const facultades_central = $('h3.aio-icon-title').each((i,e)=>{

		//const facu = facultades_central.text();	
		const facu = $(e).text();
		const fac = facu.replace(""," ");
		console.log(fac.trim())	
	});
		
	//	con .find('a') --> buscamos los enlaces
	//	const campus= $('.ult-new-ib-title').find('a');	
	//	Para ver las etiquetas padres --> parent()  Para recorrer --> next() Para ver las etiquetas hijas --> children
	
	//console.log(campus.html());
	console.log(campus_description.text());
	//console.log(carreras.text());
	
}	
init();


//informacion de toda FCE
async function fce(){
	const $ = await request.get({
		uri:'https://www.upeu.edu.pe/fce/',
		uri:'https://www.upeu.edu.pe/fce/bienvenida/',
		transform: body => cheerio.load(body)
	});
		//const carrerasfce = $('.menu-item-text .menu-text').text('Carreras');
	//const carrerasfce= $('nav');
	// const carrerasfce = $('nav span.menu-text').each((indice,elemento) => {
	// 	console.log(indice,$(elemento).text());

	// })	
	// console.log(carrerasfce.text().eq(7).trim());
	
	//carreras
	console.log('*****carreras******\n');
		writeStream.write('Carreras')
		$('nav').each((i,el)=>{
			let carreras = [];
			const items1 = $(el).find('li .menu-item-845').text();
			const items2 = $(el).find('li .menu-item-1012').text();
			const items3 = $(el).find('li .menu-item-1013').text();
			const items4 = $(el).find('li .menu-item-846').text();
	
			
			//carreras.push(items1,items2,items3)
			carreras.push(items1,items2,items3,items4);
	
			//console.log(carreras);
			writeStream.write(`${carreras}\n`);
			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');
			
			});	
		})
	
		
	console.log('**************bienvenida**************\n');
	const saludo= $('.wpb_content_element')
	const img= $('.vc_figure').find('.vc_single_image-wrapper').find('img').attr('src')	
	console.log(saludo.text().trim());		
	console.log(img);
}

fce();
