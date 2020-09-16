const cheerio = require('cheerio');
const request = require('request-promise');

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
	const carrerasfce = $('nav span.menu-text').each((indice,elemento) => {
		console.log(indice,$(elemento).text());
	})
	//console.log(carrerasfce.text().trim());

	const saludo= $('.wpb_content_element')
	console.log(saludo.text().trim());
}

fce();
